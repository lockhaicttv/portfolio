import { spawn } from "node:child_process";

const CHROME =
  "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PORT = 9223;
const url = process.argv[2] ?? "http://localhost:3002/";

const chrome = spawn(CHROME, [
  "--headless=new",
  "--enable-unsafe-swiftshader",
  `--remote-debugging-port=${PORT}`,
  "--window-size=1100,700",
  "--user-data-dir=" + process.cwd() + "/.tmp-chrome-profile",
  "about:blank",
]);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function targets() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const list = await res.json();
      const page = list.find((t) => t.type === "page");
      if (page) return page;
    } catch {
      /* not up yet */
    }
    await sleep(250);
  }
  throw new Error("no devtools target");
}

const page = await targets();
const ws = new WebSocket(page.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();
const logs = [];

ws.addEventListener("message", (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  } else if (msg.method === "Log.entryAdded") {
    logs.push(`[${msg.params.entry.level}] ${msg.params.entry.text}`);
  } else if (msg.method === "Runtime.exceptionThrown") {
    logs.push(`[exception] ${msg.params.exceptionDetails.text}`);
  } else if (msg.method === "Runtime.consoleAPICalled") {
    logs.push(
      `[console.${msg.params.type}] ` +
        msg.params.args.map((a) => a.value ?? a.description ?? "").join(" "),
    );
  }
});

const send = (method, params = {}) =>
  new Promise((resolve) => {
    const msgId = ++id;
    pending.set(msgId, resolve);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

await new Promise((r) => ws.addEventListener("open", r));
await send("Log.enable");
await send("Runtime.enable");
await send("Page.enable");
await send("Page.navigate", { url });
await sleep(4000);

const expression = `
new Promise((resolve) => {
  const canvas = document.querySelector('canvas');
  if (!canvas) return resolve({ error: 'no canvas' });
  const gl = canvas.getContext('webgl2');
  if (!gl) return resolve({ error: 'no webgl2' });
  const fmt = (o) => Math.round(o * 255).toString(16).padStart(2, '0');
  const read = () => {
    const w = gl.drawingBufferWidth, h = gl.drawingBufferHeight;
    const buf = new Uint8Array(4);
    let maxA = 0, lit = 0;
    for (let y = 1; y <= 6; y++) {
      for (let x = 1; x <= 6; x++) {
        gl.readPixels(Math.floor((w * x) / 7), Math.floor((h * y) / 7), 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, buf);
        if (buf[3] > maxA) maxA = buf[3];
        if (buf[3] > 8) lit++;
      }
    }
    return maxA + '/' + lit;
  };
  const out = [];
  const started = performance.now();
  const tick = () => {
    out.push(Math.round(performance.now() - started) + 'ms:' + read());
    if (performance.now() - started < 6000) requestAnimationFrame(tick);
    else resolve(out);
  };
  requestAnimationFrame(tick);
});
`;

const result = await send("Runtime.evaluate", {
  expression,
  awaitPromise: true,
  returnByValue: true,
});

console.log("RESULT:", JSON.stringify(result.result?.result?.value ?? result, null, 1).slice(0, 300));

await send("Emulation.setDeviceMetricsOverride", {
  width: 1100,
  height: 700,
  deviceScaleFactor: 1,
  mobile: false,
});
await sleep(2500);
const shot = await send("Page.captureScreenshot", { format: "png" });
if (shot.result?.data) {
  const { writeFileSync } = await import("node:fs");
  writeFileSync("shot-cdp.png", Buffer.from(shot.result.data, "base64"));
  console.log("screenshot written");
}
console.log("LOGS:", logs.length ? logs.slice(0, 10).join("\n") : "(none)");

ws.close();
chrome.kill();
process.exit(0);

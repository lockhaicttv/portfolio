/**
 * Shared config for directional page transitions (View Transition API).
 * "nav-forward": deepening navigation — new page slides in from the right.
 * "nav-back": going back up the hierarchy — new page slides in from the left.
 * CSS lives in globals.css ("View transitions" block).
 */
export const pageTransition = {
  enter: { "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" },
  exit: { "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" },
  default: "none",
} as const;

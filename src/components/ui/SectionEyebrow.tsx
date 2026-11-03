interface SectionEyebrowProps {
  number: string;
  children: string;
}

export default function SectionEyebrow({ number, children }: SectionEyebrowProps) {
  return (
    <p className="eyebrow">
      <span className="text-accent">{number}</span>
      <span aria-hidden className="h-px w-5 bg-border" />
      <span>{children}</span>
    </p>
  );
}

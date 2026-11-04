interface SectionEyebrowProps {
  number: string;
  children: string;
}

export default function SectionEyebrow({ number, children }: SectionEyebrowProps) {
  return (
    <p className="eyebrow">
      <span>{number}.</span>
      <span>{children}</span>
    </p>
  );
}

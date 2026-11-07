type Props = { label: string; heading: string };

export function SectionHeading({ label, heading }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <p className="m-0 font-mono text-[13px] tracking-[0.12em] text-accent">{label}</p>
      <h2 className="m-0 text-[32px] font-bold leading-[1.3] tracking-[-0.01em] sm:text-[40px]">{heading}</h2>
    </div>
  );
}

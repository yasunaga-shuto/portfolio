type Props = { className?: string; dotClassName?: string };

export function Logo({ className = "", dotClassName = "text-accent" }: Props) {
  return (
    <span className={`font-display font-bold tracking-[-0.01em] ${className}`}>
      s.yasunaga<span className={dotClassName}>.</span>
    </span>
  );
}

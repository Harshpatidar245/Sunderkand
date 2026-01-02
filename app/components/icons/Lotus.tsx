interface LotusProps {
  className?: string;
}

export function Lotus({ className = "w-16 h-16" }: LotusProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 10c-5 15-20 25-20 40s15 25 20 40c5-15 20-25 20-40s-15-25-20-40z" opacity="0.8"/>
      <path d="M10 50c15 5 25 20 40 20s25-15 40-20c-15-5-25-20-40-20s-25 15-40 20z" opacity="0.8"/>
      <circle cx="50" cy="50" r="8" fill="#FFD700"/>
    </svg>
  );
}

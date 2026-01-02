interface DividerProps {
  variant?: 'lotus' | 'decorative';
  className?: string;
}

export function Divider({ variant = 'decorative', className = '' }: DividerProps) {
  if (variant === 'lotus') {
    return (
      <div className={`lotus-divider my-4 ${className}`}>
        <span className="text-[#D4AF37] text-2xl">✦</span>
      </div>
    );
  }

  return (
    <div className={`decorative-border ${className}`} />
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'saffron' | 'maroon';
  size?: 'sm' | 'md';
  className?: string;
}

const variantStyles = {
  gold: 'bg-[#FFD700] text-[#800020]',
  saffron: 'bg-[#FF9933] text-white',
  maroon: 'bg-[#800020] text-white',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export function Badge({ 
  children, 
  variant = 'gold', 
  size = 'md',
  className = '' 
}: BadgeProps) {
  return (
    <span 
      className={`inline-flex items-center justify-center rounded-full font-bold ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}

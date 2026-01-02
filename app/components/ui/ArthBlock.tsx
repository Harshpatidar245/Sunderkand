interface ArthaBlockProps {
  arth: string;
  className?: string;
}

export function ArthBlock({ arth, className = '' }: ArthaBlockProps) {
  return (
    <div className={`border-l-4 border-[#D4AF37] pl-4 py-2 bg-white/50 rounded-r-lg ${className}`}>
      <p className="hindi-text text-sm md:text-base text-[#5D4037] leading-relaxed">
        <span className="text-[#C41E3A] font-semibold">अर्थ: </span>
        {arth}
      </p>
    </div>
  );
}

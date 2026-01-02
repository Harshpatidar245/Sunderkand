import type { QuickNavigationProps } from '@/app/types';

export function QuickNavigation({ data }: QuickNavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b-2 border-[#D4AF37]">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="hindi-text text-[#800020] font-semibold hidden md:block">
            श्री सुंदरकांड
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full md:w-auto justify-center md:justify-end">
            <span className="text-sm text-[#5D4037] mr-2 flex-shrink-0">दोहा:</span>
            {data.map((doha) => (
              <a
                key={doha.dohaNumber}
                href={`#doha-${doha.dohaNumber}`}
                className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFF8F0] border border-[#D4AF37] text-[#800020] flex items-center justify-center text-sm font-medium hover:bg-[#FF9933] hover:text-white hover:border-[#FF9933] transition-all"
              >
                {doha.dohaNumber}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

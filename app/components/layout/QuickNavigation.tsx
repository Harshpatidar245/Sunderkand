import type { QuickNavigationProps } from '@/app/types';

export function QuickNavigation({ data }: QuickNavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b-2 border-[#D4AF37]">
      <div className="max-w-6xl mx-auto px-3 md:px-4 py-2 md:py-3">
        {/* Mobile: Stack vertically, Desktop: Side by side */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          {/* Title - Always visible, takes half width on desktop */}
          <span className="hindi-text text-[#800020] font-semibold text-center md:text-left text-sm md:text-base md:w-1/2 flex-shrink-0">
            श्री सुंदरकांड
          </span>
          
          {/* Doha Navigation - Scrollable, max half width on desktop */}
          <div className="flex items-center gap-1.5 md:gap-2 md:w-1/2 md:justify-end">
            <span className="text-xs md:text-sm text-[#5D4037] flex-shrink-0">दोहा:</span>
            
            {/* Scrollable container for doha numbers with visible scrollbar */}
            <div className="flex items-center gap-1.5 md:gap-2 overflow-x-auto custom-scrollbar pb-2 max-w-[calc(100%-3rem)]">
              {data.map((doha) => (
                <a
                  key={doha.dohaNumber}
                  href={`#doha-${doha.dohaNumber}`}
                  className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#FFF8F0] border border-[#D4AF37] text-[#800020] flex items-center justify-center text-xs md:text-sm font-medium hover:bg-[#FF9933] hover:text-white hover:border-[#FF9933] transition-all active:scale-95"
                >
                  {doha.dohaNumber}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { ReactNode } from 'react';
import { ChevronDown } from '../icons';
import { cn } from '@/app/utils';

interface AccordionProps {
  isOpen: boolean;
  onToggle: () => void;
  header: ReactNode;
  children: ReactNode;
  headerClassName?: string;
  contentClassName?: string;
  maxHeight?: string;
  showChevron?: boolean;
  chevronClassName?: string;
}

export function Accordion({
  isOpen,
  onToggle,
  header,
  children,
  headerClassName = '',
  contentClassName = '',
  maxHeight = 'max-h-96',
  showChevron = true,
  chevronClassName = 'text-[#C41E3A]',
}: AccordionProps) {
  return (
    <div>
      {/* Header */}
      <div
        className={cn(
          'cursor-pointer transition-all',
          headerClassName
        )}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => e.key === 'Enter' && onToggle()}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1">{header}</div>
          {showChevron && (
            <span
              className={cn(
                'flex-shrink-0 transition-transform duration-300',
                chevronClassName,
                isOpen && 'rotate-180'
              )}
            >
              <ChevronDown className="w-5 h-5" />
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? `${maxHeight} opacity-100` : 'max-h-0 opacity-0',
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

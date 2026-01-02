"use client";

import { useState } from 'react';
import type { ChaupaiItemProps } from '@/app/types';
import { ChevronDown } from '../icons';

export function ChaupaiItem({ chaupai, dohaNumber }: ChaupaiItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div 
      className={`cursor-pointer transition-all duration-300 ${
        isOpen ? 'bg-[#FFFDD0]' : 'hover:bg-[#FFFDD0]/50'
      }`}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
    >
      <div className="p-6">
        <div className="flex gap-4">
          {/* Sequence Number Badge */}
          <div className="flex-shrink-0">
            <span 
              className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm transition-colors duration-300 ${
                isOpen ? 'bg-[#800020]' : 'bg-[#FF9933]'
              }`}
            >
              {chaupai.sequence}
            </span>
          </div>
          
          <div className="flex-1">
            {/* Chaupai Text with Toggle Icon */}
            <div className="flex items-start justify-between gap-2">
              <p className="chaupai-text text-lg md:text-xl text-[#2D1810] whitespace-pre-line">
                {chaupai.text}
              </p>
              <span 
                className={`flex-shrink-0 text-[#C41E3A] transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </span>
            </div>
            
            {/* Expandable Arth (Meaning) Section */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="border-l-4 border-[#D4AF37] pl-4 py-2 bg-white/50 rounded-r-lg">
                <p className="hindi-text text-sm md:text-base text-[#5D4037] leading-relaxed">
                  <span className="text-[#C41E3A] font-semibold">अर्थ: </span>
                  {chaupai.arth}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from 'react';
import type { DohaCardProps } from '@/app/types';
import { ChevronDown, Star } from '../icons';
import { ChaupaiItem } from './ChaupaiItem';

export function DohaCard({ data, index }: DohaCardProps) {
  const [isDohaOpen, setIsDohaOpen] = useState(false);
  const [isChaupaisOpen, setIsChaupaisOpen] = useState(false);

  const toggleDoha = () => setIsDohaOpen(!isDohaOpen);
  const toggleChaupais = () => setIsChaupaisOpen(!isChaupaisOpen);

  return (
    <article className="doha-card rounded-2xl shadow-lg overflow-hidden border border-[#D4AF37]/30 mb-8">
      {/* Doha Header - Clickable */}
      <div 
        className="bg-gradient-to-r from-[#800020] to-[#C41E3A] text-white px-6 py-4 cursor-pointer hover:from-[#900025] hover:to-[#D42E4A] transition-all"
        onClick={toggleDoha}
        role="button"
        tabIndex={0}
        aria-expanded={isDohaOpen}
        onKeyDown={(e) => e.key === 'Enter' && toggleDoha()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="hindi-text text-lg font-semibold">
              दोहा {data.dohaNumber}
            </span>
            <span className="text-xs opacity-70 hidden sm:inline">
              — अर्थ देखने के लिए क्लिक करें
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#FFD700] text-[#800020] px-3 py-1 rounded-full text-sm font-bold">
              Doha {data.dohaNumber}
            </span>
            <span className={`transition-transform duration-300 ${isDohaOpen ? 'rotate-180' : ''}`}>
              <ChevronDown className="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>

      {/* Doha Content - Always show text, collapsible arth */}
      <div className="p-6 bg-gradient-to-br from-[#FFFDD0] to-[#FFF8F0]">
        <div className="text-center">
          <p className="hindi-text text-xl md:text-2xl leading-loose text-[#800020] font-medium whitespace-pre-line">
            {data.doha.text}
          </p>
          
          {/* Collapsible Arth Section */}
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isDohaOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="lotus-divider my-4">
              <span className="text-[#D4AF37] text-2xl">✦</span>
            </div>
            <div className="border-l-4 border-[#D4AF37] pl-4 py-3 bg-white/50 rounded-r-lg text-left mx-auto max-w-2xl">
              <p className="hindi-text text-base md:text-lg text-[#5D4037] leading-relaxed">
                <span className="text-[#C41E3A] font-semibold">अर्थ: </span>
                {data.doha.arth}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chaupais Section - Collapsible */}
      {data.chaupais && data.chaupais.length > 0 && (
        <div className="border-t-2 border-[#D4AF37]/30">
          {/* Chaupais Header */}
          <div 
            className="bg-[#FFF8F0] px-6 py-3 border-b border-[#D4AF37]/20 cursor-pointer hover:bg-[#FFF0E0] transition-colors"
            onClick={toggleChaupais}
            role="button"
            tabIndex={0}
            aria-expanded={isChaupaisOpen}
            onKeyDown={(e) => e.key === 'Enter' && toggleChaupais()}
          >
            <h3 className="hindi-text text-lg font-semibold text-[#800020] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#D4AF37]" />
                <span>चौपाइयाँ (Chaupais)</span>
                <span className="bg-[#FF9933] text-white text-xs px-2 py-0.5 rounded-full ml-2">
                  {data.chaupais.length}
                </span>
              </div>
              <span className={`text-[#C41E3A] transition-transform duration-300 ${isChaupaisOpen ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-5 h-5" />
              </span>
            </h3>
          </div>
          
          {/* Collapsible Chaupais List */}
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isChaupaisOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="divide-y divide-[#D4AF37]/10">
              {data.chaupais.map((chaupai) => (
                <ChaupaiItem 
                  key={chaupai.sequence} 
                  chaupai={chaupai} 
                  dohaNumber={data.dohaNumber} 
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

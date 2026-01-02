"use client";

import { useState, useCallback } from 'react';

interface UseAccordionOptions {
  defaultOpen?: boolean;
}

export function useAccordion(options: UseAccordionOptions = {}) {
  const { defaultOpen = false } = options;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    toggle,
    open,
    close,
    setIsOpen
  };
}

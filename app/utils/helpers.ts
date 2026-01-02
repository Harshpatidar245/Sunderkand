// Utility function to conditionally join classNames
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Format doha number for display
export function formatDohaNumber(num: number): string {
  return `दोहा ${num}`;
}

// Generate anchor ID for doha
export function getDohaAnchorId(dohaNumber: number): string {
  return `doha-${dohaNumber}`;
}

// Generate href for doha navigation
export function getDohaHref(dohaNumber: number): string {
  return `#${getDohaAnchorId(dohaNumber)}`;
}

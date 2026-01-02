// Types for Sunderkand data structure

export interface Chaupai {
  sequence: number;
  text: string;
  arth: string;
}

export interface DohaContent {
  text: string;
  arth: string;
}

export interface Doha {
  dohaNumber: number;
  doha: DohaContent;
  chaupais: Chaupai[];
}

// Component Props Types
export interface ChaupaiItemProps {
  chaupai: Chaupai;
  dohaNumber: number;
}

export interface DohaCardProps {
  data: Doha;
  index: number;
}

export interface QuickNavigationProps {
  data: Doha[];
}

export interface IntroCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

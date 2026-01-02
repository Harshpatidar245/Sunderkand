// Site configuration
export const siteConfig = {
  name: 'श्री सुंदरकांड',
  nameEn: 'Shri Sunderkand',
  description: 'श्री रामचरितमानस के सुंदरकांड का पाठ - हनुमान जी की लंका यात्रा का पवित्र वर्णन',
  tagline: 'श्री रामचरितमानस का पंचम सोपान - हनुमान जी की लंका यात्रा का पवित्र वर्णन',
  footer: {
    blessing: '॥ जय श्री राम ॥',
    shloka: 'बुद्धिहीन तनु जानिके, सुमिरौं पवन कुमार।\nबल बुद्धि विद्या देहु मोहिं, हरहु कलेश विकार॥',
    credit: 'Made with devotion for श्री हनुमान जी',
  },
  navigation: {
    dohaLabel: 'दोहा:',
  },
} as const;

// Labels used throughout the app
export const labels = {
  doha: 'दोहा',
  chaupai: 'चौपाई',
  chaupais: 'चौपाइयाँ (Chaupais)',
  arth: 'अर्थ:',
  clickToSeeArth: 'अर्थ देखने के लिए क्लिक करें',
  importance: 'सुंदरकांड का महत्व',
} as const;

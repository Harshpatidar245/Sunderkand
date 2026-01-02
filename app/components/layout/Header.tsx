import { Lotus } from '../icons';

export function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#800020] via-[#C41E3A] to-[#FF9933] text-white py-12 px-4">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 mandala-bg opacity-20"></div>
      
      {/* Om symbol */}
      <div className="text-center mb-6">
        <span className="om-glow text-6xl md:text-8xl hindi-text">ॐ</span>
      </div>
      
      {/* Main title */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="hindi-text text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          श्री सुंदरकांड
        </h1>
        <p className="text-xl md:text-2xl font-light opacity-90 mb-2">
          Shri Sunderkand
        </p>
        <div className="decorative-border my-6 max-w-md mx-auto"></div>
        <p className="hindi-text text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
          श्री रामचरितमानस का पंचम सोपान - हनुमान जी की लंका यात्रा का पवित्र वर्णन
        </p>
      </div>
      
      {/* Decorative lotus */}
      <div className="flex justify-center mt-8 float-animation">
        <Lotus className="w-16 h-16 text-[#FFD700]" />
      </div>
    </header>
  );
}

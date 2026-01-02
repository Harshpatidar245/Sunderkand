export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#C41E3A] to-[#800020] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative Om */}
        <div className="mb-6">
          <span className="hindi-text text-4xl opacity-80">ॐ</span>
        </div>
        
        <div className="decorative-border mb-6 max-w-xs mx-auto"></div>
        
        <p className="hindi-text text-xl mb-4">
          ॥ जय श्री राम ॥
        </p>
        
        <div className="flex justify-center gap-4 mb-6">
          <span className="text-[#FFD700] text-2xl">🙏</span>
          <span className="text-[#FFD700] text-2xl">🙏</span>
          <span className="text-[#FFD700] text-2xl">🙏</span>
        </div>
        
        <p className="text-sm opacity-60">
          Made with devotion for श्री हनुमान जी
        </p>
      </div>
    </footer>
  );
}

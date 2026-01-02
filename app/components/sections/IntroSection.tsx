import type { IntroCardProps } from '@/app/types';

// Default intro cards data
export const introCardsData: IntroCardProps[] = [
  {
    icon: "🙏",
    title: "भक्ति का प्रतीक",
    description: "हनुमान जी की अटूट श्रीराम भक्ति का वर्णन",
    gradient: "from-[#FF9933] to-[#C41E3A]"
  },
  {
    icon: "💪",
    title: "शक्ति का स्रोत",
    description: "संकट मोचन हनुमान जी की दिव्य शक्तियाँ",
    gradient: "from-[#D4AF37] to-[#FF9933]"
  },
  {
    icon: "✨",
    title: "मंगलकारी",
    description: "पाठ करने से सभी कष्टों का निवारण",
    gradient: "from-[#C41E3A] to-[#800020]"
  }
];

function IntroCard({ icon, title, description, gradient }: IntroCardProps) {
  return (
    <div className="text-center p-4">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="hindi-text font-semibold text-[#800020] mb-2">{title}</h3>
      <p className="hindi-text text-sm text-[#5D4037]">{description}</p>
    </div>
  );
}

interface IntroSectionProps {
  cards?: IntroCardProps[];
}

export function IntroSection({ cards = introCardsData }: IntroSectionProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#D4AF37]/30">
        <div className="text-center mb-8">
          <h2 className="hindi-text text-2xl md:text-3xl font-bold text-[#800020] mb-4">
            🙏 सुंदरकांड का महत्व
          </h2>
          <div className="decorative-border max-w-xs mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <IntroCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

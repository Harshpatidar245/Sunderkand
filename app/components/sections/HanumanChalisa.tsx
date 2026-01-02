"use client";

import { useState } from 'react';
import { ChevronDown, Star } from '../icons';

export function HanumanChalisa() {
  const [isChaupaissOpen, setIsChaupaissOpen] = useState(true);

  const chaupais = [
    "जय हनुमान ज्ञान गुन सागर । जय कपीस तिहुँ लोक उजागर ॥",
    "राम दूत अतुलित बल धामा । अंजनि पुत्र पवनसुत नामा ॥",
    "महाबीर बिक्रम बजरंगी । कुमति निवार सुमति के संगी ॥",
    "कंचन बरन बिराज सुबेसा । कानन कुंडल कुँचित केसा ॥",
    "हाथ बज्र अरु ध्वजा बिराजे । काँधे मूँज जनेऊ साजे ॥",
    "शंकर सुवन केसरी नंदन । तेज प्रताप महा जगवंदन ॥",
    "विद्यावान गुनी अति चातुर । राम काज करिबे को आतुर ॥",
    "प्रभु चरित्र सुनिबे को रसिया । राम लखन सीता मनबसिया ॥",
    "सूक्ष्म रूप धरि सियहि दिखावा । विकट रूप धरि लंक जरावा ॥",
    "भीम रूप धरि असुर सँहारे । रामचंद्र के काज सवाँरे ॥",
    "लाय सजीवन लखन जियाए । श्री रघुबीर हरषि उर लाए ॥",
    "रघुपति कीन्ही बहुत बड़ाई । तुम मम प्रिय भरत-हि सम भाई ॥",
    "सहस बदन तुम्हरो जस गावै । अस कहि श्रीपति कंठ लगावै ॥",
    "सनकादिक ब्रह्मादि मुनीसा । नारद सारद सहित अहीसा ॥",
    "जम कुबेर दिगपाल जहाँ ते । कवि कोविद कहि सके कहाँ ते ॥",
    "तुम उपकार सुग्रीवहि कीन्हा । राम मिलाय राज पद दीन्हा ॥",
    "तुम्हरो मंत्र बिभीषण माना । लंकेश्वर भये सब जग जाना ॥",
    "जुग सहस्त्र जोजन पर भानू । लिल्यो ताहि मधुर फ़ल जानू ॥",
    "प्रभु मुद्रिका मेलि मुख माही । जलधि लाँघि गए अचरज नाही ॥",
    "दुर्गम काज जगत के जेते । सुगम अनुग्रह तुम्हरे तेते ॥",
    "राम दुआरे तुम रखवारे । होत ना आज्ञा बिनु पैसारे ॥",
    "सब सुख लहैं तुम्हारी सरना । तुम रक्षक काहु को डरना ॥",
    "आपन तेज सम्हारो आपै । तीनों लोक हाँक तै कापै ॥",
    "भूत पिशाच निकट नहि आवै । महावीर जब नाम सुनावै ॥",
    "नासै रोग हरे सब पीरा । जपत निरंतर हनुमत बीरा ॥",
    "संकट तै हनुमान छुडावै । मन क्रम वचन ध्यान जो लावै ॥",
    "सब पर राम तपस्वी राजा । तिनके काज सकल तुम साजा ॥",
    "और मनोरथ जो कोई लावै । सोई अमित जीवन फल पावै ॥",
    "चारों जुग परताप तुम्हारा । है परसिद्ध जगत उजियारा ॥",
    "साधु संत के तुम रखवारे । असुर निकंदन राम दुलारे ॥",
    "अष्ट सिद्धि नौ निधि के दाता । अस बर दीन जानकी माता ॥",
    "राम रसायन तुम्हरे पासा । सदा रहो रघुपति के दासा ॥",
    "तुम्हरे भजन राम को पावै । जनम जनम के दुख बिसरावै ॥",
    "अंतकाल रघुवरपुर जाई । जहाँ जन्म हरिभक्त कहाई ॥",
    "और देवता चित्त ना धरई । हनुमत सेई सर्व सुख करई ॥",
    "संकट कटै मिटै सब पीरा । जो सुमिरै हनुमत बलबीरा ॥",
    "जै जै जै हनुमान गुसाईँ । कृपा करहु गुरु देव की नाई ॥",
    "जो सत बार पाठ कर कोई । छूटहि बंदि महा सुख होई ॥",
    "जो यह पढ़े हनुमान चालीसा । होय सिद्ध साखी गौरीसा ॥",
    "तुलसीदास सदा हरि चेरा । कीजै नाथ हृदय मह डेरा ॥",
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 mb-8">
      <article className="doha-card rounded-2xl shadow-lg overflow-hidden border border-[#D4AF37]/30">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#800020] to-[#C41E3A] text-white px-6 py-4">
          <div className="flex items-center justify-center">
            <span className="hindi-text text-xl md:text-2xl font-bold">
              ॥ श्री हनुमान चालीसा ॥
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 bg-gradient-to-br from-[#FFFDD0] to-[#FFF8F0]">
          {/* Opening Doha */}
          <div className="mb-8">
            <h3 className="hindi-text text-lg font-semibold text-[#800020] mb-4 flex justify-center items-center gap-2">
              <span className="bg-[#FFD700] text-[#800020] px-3 py-1 rounded-full text-sm font-bold">दोहा</span>
            </h3>
            <div className="text-center space-y-4">
              <p className="hindi-text text-lg md:text-xl leading-loose text-[#800020] font-medium">
                श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि ।<br/>
                बरनउँ रघुबर बिमल जसु जो दायकु फल चारि ॥
              </p>
              <p className="hindi-text text-lg md:text-xl leading-loose text-[#800020] font-medium">
                बुद्धिहीन तनु जानिके, सुमिरौं पवन कुमार ।<br/>
                बल बुधि विद्या देहु मोहि, हरहु कलेश विकार ॥
              </p>
            </div>
          </div>

          {/* Chaupai Section - Collapsible */}
          <div className="border-t-2 border-[#D4AF37]/30 -mx-6 md:-mx-8">
            {/* Chaupais Header */}
            <div 
              className="bg-[#FFF8F0] px-6 py-3 border-b border-[#D4AF37]/20 cursor-pointer hover:bg-[#FFF0E0] transition-colors"
              onClick={() => setIsChaupaissOpen(!isChaupaissOpen)}
              role="button"
              tabIndex={0}
              aria-expanded={isChaupaissOpen}
              onKeyDown={(e) => e.key === 'Enter' && setIsChaupaissOpen(!isChaupaissOpen)}
            >
              <h3 className="hindi-text text-lg font-semibold text-[#800020] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#D4AF37]" />
                  <span>चौपाई</span>
                  <span className="bg-[#FF9933] text-white text-xs px-2 py-0.5 rounded-full ml-2">
                    40
                  </span>
                </div>
                <span className={`text-[#C41E3A] transition-transform duration-300 ${isChaupaissOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5" />
                </span>
              </h3>
            </div>
            
            {/* Collapsible Chaupais List */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isChaupaissOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 md:p-8 bg-[#FFFAF0] flex flex-col items-center gap-3">
                {chaupais.map((chaupai, index) => (
                  <div 
                    key={index}
                    className="flex flex-col rounded-lg  transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <p className="hindi-text text-base md:text-lg text-[#2D1810] leading-relaxed">
                        {chaupai}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing Doha */}
          <div className="flex flex-col justify-center items-center mt-8 mb-8">
            <h3 className="hindi-text text-lg font-semibold text-[#800020] mb-4 flex justify-center items-center gap-2">
              <span className=" bg-[#FFD700] text-[#800020] px-3 py-1 rounded-full text-sm font-bold">दोहा</span>
            </h3>
            <div className="text-center">
              <p className="hindi-text text-lg md:text-xl leading-loose text-[#800020] font-medium">
                पवन तनय संकट हरन, मंगल मूरति रूप ।<br/>
                राम लखन सीता सहित, हृदय बसहु सुर भूप ॥
              </p>
            </div>
          </div>

          {/* Jai Calls */}
          <div className="text-center space-y-2 bg-gradient-to-r from-[#800020] to-[#C41E3A] text-white py-6 px-4 rounded-xl">
            <p className="hindi-text text-lg md:text-xl font-semibold">॥ सियावर रामचन्द्र की जय ॥</p>
            <p className="hindi-text text-lg md:text-xl font-semibold">॥ पवनसुत हनुमान की जय ॥</p>
            <p className="hindi-text text-lg md:text-xl font-semibold">॥ उमापति महादेव की जय ॥</p>
            <p className="hindi-text text-lg md:text-xl font-semibold text-[#FFD700]">॥ बोलो रे भई सब सन्तन की जय ॥</p>
          </div>
        </div>
      </article>
    </section>
  );
}

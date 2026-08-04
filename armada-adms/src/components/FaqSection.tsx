import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles, MessageSquare, ShieldCheck, PhoneCall } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

interface FaqSectionProps {
  onOpenLeadModal: (service?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenLeadModal }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Open first by default
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Keamanan', 'Teknis', 'Harga & Garansi', 'Layanan'];

  const filteredFaqs = activeCategory === 'Semua'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((f) => f.category === activeCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-100 text-slate-800 relative font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header styled with Bento small-caps */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 text-slate-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <HelpCircle className="w-4 h-4 shrink-0 text-blue-600" />
            <span>TANYA JAWAB (FAQ)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Jawaban Lengkap Untuk Segala <br className="hidden sm:inline" />
            <span className="text-blue-900 font-extrabold">Pertanyaan &amp; Keraguan Anda</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Masih ada yang ingin ditanyakan seputar sistem kerja, keamanan nomor WhatsApp, atau garansi? Simak ulasan di bawah ini:
          </p>

          {/* Categories styled as Bento pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIdx(null);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-white shadow-sm scale-105'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-slate-300 shadow-md'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-2 rounded-full transition-transform duration-200 shrink-0 ${
                    isOpen ? 'bg-blue-900 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-7 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50 font-normal animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box styled as Bento Hero Card */}
        <div className="mt-14 bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl p-8 sm:p-10 text-white text-center shadow-md border-0">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Punya Pertanyaan Khusus Seputar Bisnis Anda?
          </h3>
          <p className="text-white/90 text-sm sm:text-base mb-6 max-w-xl mx-auto font-normal">
            Jangan sungkan! Account Manager kami siap membantu menganalisis potensi pasar dan merekomendasikan strategi terbaik secara gratis.
          </p>
          <button
            onClick={() => onOpenLeadModal('Tanya Jawab Khusus (Dari FAQ)')}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer text-sm sm:text-base"
          >
            <PhoneCall className="w-5 h-5 animate-pulse" />
            <span>Chat Langsung Dengan Account Manager</span>
          </button>
        </div>

      </div>
    </section>
  );
};

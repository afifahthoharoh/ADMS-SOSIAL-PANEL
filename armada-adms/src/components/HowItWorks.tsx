import React from 'react';
import { MessageSquare, Edit3, Rocket, CheckSquare, ArrowRight, Sparkles } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

interface HowItWorksProps {
  onOpenLeadModal: (service?: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenLeadModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-7 h-7 text-blue-600" />;
      case 'Edit3': return <Edit3 className="w-7 h-7 text-amber-500" />;
      case 'Rocket': return <Rocket className="w-7 h-7 text-orange-500" />;
      case 'CheckSquare': default: return <CheckSquare className="w-7 h-7 text-emerald-500" />;
    }
  };

  return (
    <section id="cara-kerja" className="py-16 md:py-24 bg-slate-100 text-slate-800 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header styled with Bento small-caps */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 text-slate-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 shrink-0 text-blue-600" />
            <span>ALUR KERJA SUPER CEPAT &amp; MUDAH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Cuma Butuh 4 Langkah Mudah Untuk <br className="hidden sm:inline" />
            <span className="text-blue-900 font-extrabold">Banjiri WhatsApp Anda Dengan Prospek</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Anda tidak perlu repot dengan hal teknis yang rumit. Biarkan tim spesialis kami yang mengurus semuanya dari A sampai Z sementara Anda fokus melayani pembeli.
          </p>
        </div>

        {/* 4 Steps Grid styled as Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 hover:shadow-md transition-all duration-300 shadow-sm flex flex-col justify-between relative group"
            >
              {/* Step Number Background Watermark */}
              <span className="absolute top-4 right-6 text-5xl font-black font-mono text-slate-200 group-hover:text-blue-200 transition-colors pointer-events-none">
                {step.step}
              </span>

              <div>
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  {getIcon(step.icon)}
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 text-center">
          <p className="text-slate-600 text-sm sm:text-base font-normal mb-6">
            ⚡ <strong className="text-slate-900 font-bold">Proses Kilat:</strong> Kampanye iklan &amp; WA blast Anda bisa langsung aktif dalam waktu kurang dari 3 jam hari ini juga!
          </p>
          <button
            onClick={() => onOpenLeadModal('Mulai Langkah 1 - Konsultasi Sekarang')}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer text-base"
          >
            <span>Mulai Langkah 1: Konsultasi Sekarang</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { TrendingUp, Globe, Award, Clock, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { BENEFITS_RESULTS } from '../data/content';

interface BenefitsSectionProps {
  onOpenLeadModal: (service?: string) => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenLeadModal }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <TrendingUp className="w-8 h-8 text-emerald-600" />;
      case 1: return <Globe className="w-8 h-8 text-blue-600" />;
      case 2: return <Award className="w-8 h-8 text-amber-600" />;
      case 3: default: return <Clock className="w-8 h-8 text-purple-600" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-100 text-slate-800 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header styled with Bento small-caps */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 text-slate-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>BENEFIT SECTION: HASIL NYATA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Fokus Pada Satu Hal: <br className="hidden sm:inline" />
            <span className="text-blue-900 font-extrabold">
              Pertumbuhan Omzet Yang Melompat Tinggi
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Mengapa ribuan owner bisnis tidak mau pindah dari Armada ADMS? Karena setiap rupiah yang mereka investasikan kembali menjadi keuntungan bisnis yang berkelanjutan.
          </p>
        </div>

        {/* 4 Benefits with Big Stat Badge styled as Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {BENEFITS_RESULTS.map((ben, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-md border border-slate-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
                    {getIcon(idx)}
                  </div>
                  <div className="text-right">
                    <span className="block text-3xl sm:text-4xl font-black font-mono text-blue-900">
                      {ben.stat}
                    </span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      {ben.label}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                  {ben.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {ben.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  Terverifikasi Laporan Analytics
                </span>
                <span className="text-slate-400 font-bold">Armada ADMS Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box styled as Bento Hero Card */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl p-8 sm:p-10 text-white shadow-md border-0 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Siap Melihat Grafik Omzet Anda Menanjak?
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-xl font-normal">
              Dapatkan konsultasi gratis &amp; rekomendasi strategi promosi terbaik dari tim Digital Marketing Specialist kami sekarang.
            </p>
          </div>
          <button
            onClick={() => onOpenLeadModal('Konsultasi Strategi Omzet')}
            className="w-full sm:w-auto shrink-0 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Mulai Scale-Up Bisnis</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

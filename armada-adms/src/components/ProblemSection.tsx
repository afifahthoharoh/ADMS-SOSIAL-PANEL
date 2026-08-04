import React from 'react';
import { AlertCircle, Database, TrendingDown, Users, ArrowDownRight, CheckCircle2, HelpCircle } from 'lucide-react';
import { PROBLEM_STORIES } from '../data/content';

export const ProblemSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlertCircle': return <AlertCircle className="w-7 h-7 text-red-500" />;
      case 'Database': return <Database className="w-7 h-7 text-amber-500" />;
      case 'TrendingDown': return <TrendingDown className="w-7 h-7 text-orange-500" />;
      case 'Users': default: return <Users className="w-7 h-7 text-blue-500" />;
    }
  };

  return (
    <section id="problem" className="py-16 md:py-24 bg-slate-100 text-slate-800 relative overflow-hidden font-sans">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header styled with Bento small-caps */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 text-slate-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <HelpCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>Realita Pahit Pebisnis &amp; UMKM Saat Ini</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Apakah Anda Sedang Mengalami <br className="hidden sm:inline" />
            <span className="text-red-600 underline decoration-red-300 decoration-wavy">4 Masalah Bikin Boncos</span> Ini?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Banyak owner bisnis, sales properti, dan event organizer stres karena omzet jalan di tempat padahal sudah rajin promosi tiap hari. Cek apakah Anda merasakan salah satu di antaranya:
          </p>
        </div>

        {/* 4 Pain Point Cards styled as Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROBLEM_STORIES.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-md border border-slate-200 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Card Header Icon & Number */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-3xl font-black font-mono text-slate-300 group-hover:text-red-400 transition-colors">
                    0{item.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>

                {/* Storytelling Pain */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 bg-red-50/60 p-4 rounded-2xl border-l-4 border-red-400 font-medium">
                  "{item.pain}"
                </p>
              </div>

              {/* Relate & Solution Bridge */}
              <div className="flex items-start gap-3 pt-4 border-t border-slate-100 text-sm font-semibold text-slate-800">
                <ArrowDownRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-slate-700 font-medium">
                  <strong className="text-blue-600 font-bold">Solusinya: </strong>
                  {item.relate}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Transition Banner to Solution styled like Bento Hero Card */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-blue-600 rounded-3xl p-8 sm:p-10 text-white text-center shadow-md relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="inline-block px-3 py-1 bg-amber-500 text-white font-bold text-[10px] sm:text-xs rounded-full uppercase tracking-widest shadow-sm">
              💡 KABAR BAIK UNTUK ANDA
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Tinggalkan Cara Lama yang Melelahkan!
            </h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal">
              Anda tidak perlu lagi sebar brosur manual atau bakar uang iklan tanpa tracking. Armada ADMS menggabungkan kekuatan <strong className="text-amber-300 font-bold">WhatsApp Broadcast Tertarget</strong> dan <strong className="text-white font-semibold">Digital Marketing AI</strong> untuk mengantarkan calon pembeli langsung ke layar HP Anda.
            </p>
            <div className="pt-3">
              <a
                href="#layanan"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
              >
                <span>Lihat Bagaimana Armada ADMS Membantu Anda</span>
                <ArrowDownRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

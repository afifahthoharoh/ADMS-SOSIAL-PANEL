import React, { useState, useEffect } from 'react';
import { Rocket, Clock, ShieldCheck, ArrowRight, PhoneCall, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface CtaSectionProps {
  onOpenLeadModal: (service?: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenLeadModal }) => {
  // Live Countdown Timer State (Hours : Minutes : Seconds)
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 4, minutes: 0, seconds: 0 }; // Loop back for landing page simulation
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => String(num).padStart(2, '0');

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-600 text-white relative overflow-hidden font-sans">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Urgency Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest animate-bounce mb-8 shadow-sm">
          <AlertTriangle className="w-4 h-4 text-amber-300 shrink-0" />
          <span>⚠️ SLOT TERBATAS HARI INI: SISA 4 SLOT VIP KONSULTASI GRATIS!</span>
        </div>

        {/* Strong Closing Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          Mulai Sekarang Sebelum <br className="hidden sm:inline" />
          <span className="text-amber-300 font-extrabold">
            Kompetitor Anda Lebih Dulu
          </span> Merebut Prospek Anda!
        </h2>

        {/* Persuasive Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 font-normal max-w-3xl mx-auto leading-relaxed mb-10">
          Jangan tunggu sampai kompetitor Anda mendominasi halaman 1 Google dan membanjiri HP pelanggan potensial di kota Anda. Ambil langkah terdepan hari ini bersama Armada ADMS!
        </p>

        {/* COUNTDOWN TIMER BOX styled as Bento Card */}
        <div className="max-w-md mx-auto bg-white/15 border border-white/25 rounded-3xl p-6 shadow-md mb-12 backdrop-blur-md">
          <span className="block text-xs font-bold uppercase tracking-widest text-amber-300 mb-3 flex items-center justify-center gap-1.5">
            <Clock className="w-4 h-4 animate-spin" />
            <span>PROMO SPESIAL BERAKHIR DALAM:</span>
          </span>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-white/10 p-3 rounded-2xl border border-white/15">
              <span className="block text-3xl sm:text-4xl font-black font-mono text-white">
                {formatNum(timeLeft.hours)}
              </span>
              <span className="text-[10px] font-bold uppercase text-white/80">Jam</span>
            </div>
            <div className="bg-white/10 p-3 rounded-2xl border border-white/15">
              <span className="block text-3xl sm:text-4xl font-black font-mono text-white">
                {formatNum(timeLeft.minutes)}
              </span>
              <span className="text-[10px] font-bold uppercase text-white/80">Menit</span>
            </div>
            <div className="bg-white/10 p-3 rounded-2xl border border-white/15">
              <span className="block text-3xl sm:text-4xl font-black font-mono text-amber-300">
                {formatNum(timeLeft.seconds)}
              </span>
              <span className="text-[10px] font-bold uppercase text-amber-300">Detik</span>
            </div>
          </div>

          <p className="text-[11px] text-white/80 mt-3 font-normal">
            *Dapatkan <strong className="text-amber-300">Gratis E-Book Script Closing WA</strong> &amp; <strong className="text-white">Audit SEO Website</strong> untuk pendaftaran hari ini!
          </p>
        </div>

        {/* Big CTA Action Buttons styled as Bento pills */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <button
            onClick={() => onOpenLeadModal('KLAIM PROMO VIP SEKARANG')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-8 py-5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <PhoneCall className="w-6 h-6 animate-bounce" />
            <span>Klaim Promo &amp; Konsultasi Gratis</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={`https://wa.me/${BRAND_INFO.phone}?text=Halo%20Armada%20ADMS,%20saya%20mau%20konsultasi%20jasa%20WA%20Blast%20&%20Digital%20Marketing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-6 py-5 rounded-full border border-white/25 transition-all duration-200 cursor-pointer backdrop-blur-sm"
          >
            <span>Chat Langsung ke WA Kantor</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/80 font-normal">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>Tanpa Kontrak Mengikat</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>Garansi Uang Kembali 100%</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>Proses Eksekusi 1x24 Jam</span>
          </div>
        </div>

      </div>
    </section>
  );
};

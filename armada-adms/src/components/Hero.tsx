import React, { useState, useEffect } from 'react';
import { ShieldCheck, Users, TrendingUp, CheckCircle2, ArrowRight, Sparkles, MessageSquare, Send, CheckCheck, Award, Zap, PhoneCall } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface HeroProps {
  onOpenLeadModal: (service?: string) => void;
  onOpenBonusModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal, onOpenBonusModal }) => {
  // Interactive Live Broadcast Simulation State
  const [simulatedCount, setSimulatedCount] = useState(128450);
  const [activeMessageIdx, setActiveMessageIdx] = useState(0);

  const sampleMessages = [
    { name: 'Bpk. Hendra (Surabaya)', text: 'Halo Pak Hendra! Promo Wedding Package sisa 2 slot hari ini diskon 30%...', status: 'Delivered (Read ⚡)' },
    { name: 'Ibu Arimbi (Jakarta Sel)', text: 'Selamat siang Bu Arimbi, undangan private viewing Grand Hills Residence khusus VIP...', status: 'Delivered (Read ⚡)' },
    { name: 'Kak Bayu (Bandung)', text: 'Hai Kak Bayu! Tiket Early Bird Soundfest sisa 50 lembar, langsung klik link WA ini...', status: 'Delivered (Read ⚡)' },
    { name: 'dr. Verrel (Jakarta Bar)', text: 'Halo dr. Verrel, jadwal maintenance alat laser klinik bulan ini free upgrade...', status: 'Delivered (Read ⚡)' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSimulatedCount((prev) => prev + Math.floor(Math.random() * 8) + 1);
      setActiveMessageIdx((prev) => (prev + 1) % sampleMessages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [sampleMessages.length]);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-slate-100 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Copywriting & CTAs styled as Bento Hero Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-md flex flex-col justify-between space-y-6">
            
            <div>
              {/* Trust Badge Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Partner Digital Marketing & WA Blast Terpercaya Sejak 2017</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping ml-1"></span>
              </div>

              {/* Powerful Problem-Solving Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-none text-white my-4">
                Iklan Boncos & Susah Cari Pelanggan? <br className="hidden sm:inline" />
                <span className="text-amber-300">
                  Ubah Database Jadi Banjir Closing
                </span> Tiap Hari!
              </h1>

              {/* Value + Hasil Subheadline */}
              <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-2xl">
                Jangkau hingga <strong className="text-amber-300 font-bold">jutaan nomor WhatsApp tertarget</strong> (by lokasi, usia, & gender) dengan open rate <strong className="text-white font-semibold">98.4%</strong> tanpa perlu save kontak. Kombinasikan dengan SEO, Meta Ads & Google Ads dominan untuk lonjakan omzet bisnis & UMKM Anda!
              </p>
            </div>

            <div className="space-y-6">
              {/* 3 Required CTAs: Konsultasi Gratis | Coba Sekarang | Cek Harga */}
              <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => onOpenLeadModal('Konsultasi Gratis VIP')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-base px-7 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5 animate-bounce" />
                  <span>Konsultasi Gratis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenLeadModal('Coba Sekarang - Paket Trial')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold text-base px-6 py-3.5 rounded-full shadow-sm border border-white/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Zap className="w-5 h-5 text-amber-300 animate-pulse" />
                  <span>Coba Sekarang</span>
                </button>

                <a
                  href="#harga"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/60 hover:bg-slate-900 text-white font-bold text-base px-6 py-3.5 rounded-full border border-slate-700/60 transition-all duration-200 cursor-pointer"
                >
                  <span>Cek Harga & Paket</span>
                </a>
              </div>

              {/* Trust Points Checklist */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/15 text-xs sm:text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Garansi 100% Nomor Valid</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Anti Blokir Nomor Bisnis</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1 justify-center sm:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Laporan Detail & Transparan</span>
                </div>
              </div>

              {/* Social Proof (Jumlah Client) */}
              <div className="flex flex-wrap items-center justify-start gap-5 bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-sm">
                <div className="flex -space-x-3 overflow-hidden">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" alt="Client 1" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="Client 2" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="Client 3" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" alt="Client 4" />
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-xs font-black text-white ring-2 ring-white">
                    10k+
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-amber-300 text-sm font-bold">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                    <span className="text-white ml-1 font-extrabold">4.9 / 5.0</span>
                  </div>
                  <p className="text-xs text-white/80">
                    Dipercaya <strong className="text-white font-semibold">{BRAND_INFO.clientCount} UMKM</strong>, Event Organizer & Perusahaan
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Live WhatsApp Blast Simulator & Stats styled as Bento Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md text-slate-800 relative">
            
            <div className="space-y-4">
              {/* Card Header: Live Status */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="text-xs sm:text-sm font-bold tracking-wide text-slate-700 uppercase">
                    LIVE BROADCAST ENGINE
                  </span>
                </div>
                <span className="text-[11px] font-mono bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md border border-blue-200 font-bold">
                  Server: VIP-PRO-01
                </span>
              </div>

              {/* Big Live Counter styled like Bento stat-number */}
              <div className="py-6 text-center bg-slate-50 rounded-2xl border border-slate-200">
                <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
                  Pesan WhatsApp Terkirim Hari Ini
                </span>
                <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-blue-900">
                  {simulatedCount.toLocaleString('id-ID')}
                </div>
                <div className="flex items-center justify-center gap-4 mt-2 text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                    <CheckCheck className="w-4 h-4" /> 98.4% Open Rate
                  </span>
                  <span>•</span>
                  <span>0% Blokir Nomor</span>
                </div>
              </div>

              {/* Live Message Feed Simulation */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wide">
                  <span>⚡ Simulasi Real-time Personal Blast:</span>
                  <span className="text-amber-600 font-semibold animate-pulse">Sedang mengirim...</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex items-start gap-3 transition-all duration-300 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200 font-bold">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-slate-900 truncate">
                        {sampleMessages[activeMessageIdx].name}
                      </span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-mono font-bold">
                        {sampleMessages[activeMessageIdx].status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 italic font-medium">
                      "{sampleMessages[activeMessageIdx].text}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Target Filter Tag Preview */}
              <div className="pt-3 border-t border-slate-100">
                <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-2">
                  🎯 Filter Database Tertarget Tersedia:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-lg">
                    📍 Jabodetabek & Surabaya
                  </span>
                  <span className="text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-lg">
                    👤 Pengusaha & Owner UMKM
                  </span>
                  <span className="text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-1 rounded-lg">
                    🛍️ Belanja Online &gt; 500k
                  </span>
                  <span className="text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-lg">
                    🏡 Properti & Investor
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Button inside card styled as Bento .btn-main */}
            <button
              onClick={() => onOpenLeadModal('Request Custom Target Database')}
              className="w-full mt-5 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 rounded-full text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Request Cek Database Target Kota Anda</span>
            </button>

            {/* Floating Badge Overlay bottom right */}
            <div className="absolute -bottom-4 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-3 rounded-2xl shadow-lg font-black text-xs flex items-center gap-2 border-2 border-white animate-bounce">
              <Award className="w-5 h-5 shrink-0" />
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider opacity-90">GARANSI 100%</span>
                <span>Uang Kembali Jika Gagal!</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

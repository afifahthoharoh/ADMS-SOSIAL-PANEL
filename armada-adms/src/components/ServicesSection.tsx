import React, { useState } from 'react';
import { MessageSquare, Share2, Search, Compass, Layout, Smartphone, Star, Target, UserCheck, Image, Zap, ShieldCheck, BarChart3, CheckCircle, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { WA_BLAST_FEATURES, DIGITAL_SERVICES } from '../data/content';

interface ServicesSectionProps {
  onOpenLeadModal: (service?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenLeadModal }) => {
  const [activeWaTab, setActiveWaTab] = useState(0);

  const getWaIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-6 h-6 text-amber-400" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-emerald-400" />;
      case 'Image': return <Image className="w-6 h-6 text-blue-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-orange-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-teal-400" />;
      case 'BarChart3': default: return <BarChart3 className="w-6 h-6 text-purple-400" />;
    }
  };

  const getDmIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-7 h-7 text-blue-600" />;
      case 'Share2': return <Share2 className="w-7 h-7 text-indigo-600" />;
      case 'Compass': return <Compass className="w-7 h-7 text-red-600" />;
      case 'Layout': return <Layout className="w-7 h-7 text-amber-600" />;
      case 'Smartphone': return <Smartphone className="w-7 h-7 text-teal-600" />;
      case 'Star': default: return <Star className="w-7 h-7 text-yellow-500 fill-yellow-500" />;
    }
  };

  return (
    <section id="layanan" className="py-16 md:py-24 bg-slate-100 text-slate-800 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title styled with Bento small-caps */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 text-slate-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 shrink-0 text-blue-600" />
            <span>SOLUSI LAYANAN UTAMA ARMADA ADMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            2 Pilar Senjata Rahasia Untuk <br className="hidden sm:inline" />
            <span className="text-blue-900 font-extrabold">
              Ledakan Omzet &amp; Lead Berkualitas
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Kami tidak sekadar menjual tool atau pasang iklan. Kami merancang ekosistem pemasaran terintegrasi dari hulu ke hilir untuk memastikan setiap rupiah budget marketing Anda kembali menjadi omzet berlipat.
          </p>
        </div>

        {/* PILLAR 1: WHATSAPP BLAST MARKETING styled as Bento Hero Card */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl p-6 sm:p-10 md:p-14 text-white shadow-md mb-20 relative overflow-hidden border-0">
          <div className="absolute -right-20 top-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8">
            
            {/* Left side info */}
            <div className="lg:w-1/2 space-y-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-amber-300 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
                  <MessageSquare className="w-4 h-4" />
                  <span>PILAR #1: HIGH-SPEED WA BLAST</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug">
                  Jasa WhatsApp Blast Profesional Ke <br className="hidden sm:inline" />
                  <span className="text-amber-300">Jutaan Nomor Tanpa Save Kontak</span>
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed mt-3">
                  Sentuh calon pembeli tepat di genggaman mereka. Dengan rasio open rate mencapai <strong className="text-white font-bold">98.4%</strong>, pesan promosi Anda dijamin dibaca dalam hitungan menit tanpa khawatir nomor utama bisnis Anda terblokir.
                </p>

                {/* Interactive Tabs Button Switcher */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-4">
                  {WA_BLAST_FEATURES.map((feat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveWaTab(idx)}
                      className={`p-3 rounded-2xl text-left font-bold text-xs sm:text-sm transition-all duration-200 border flex items-center gap-2 cursor-pointer ${
                        activeWaTab === idx
                          ? 'bg-amber-500 text-white border-amber-400 shadow-sm scale-[1.02]'
                          : 'bg-white/10 text-white/80 border-white/15 hover:border-white/30 hover:bg-white/20'
                      }`}
                    >
                      {getWaIcon(feat.icon)}
                      <span className="truncate">{feat.title.split(' ')[0]} {feat.title.split(' ')[1]}</span>
                    </button>
                  ))}
                </div>

                {/* Active Tab Description Display */}
                <div className="bg-white/10 border border-white/20 p-6 rounded-2xl mt-4 backdrop-blur-sm animate-in fade-in duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-white/15 border border-white/20">
                      {getWaIcon(WA_BLAST_FEATURES[activeWaTab].icon)}
                    </div>
                    <h4 className="text-lg font-extrabold text-white">
                      {WA_BLAST_FEATURES[activeWaTab].title}
                    </h4>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed font-normal">
                    {WA_BLAST_FEATURES[activeWaTab].desc}
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenLeadModal('Konsultasi WA Blast')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-4 rounded-full shadow-sm hover:shadow-md transition-all text-sm sm:text-base cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                  <span>Konsultasi &amp; Cek Database WA Blast</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right side: Mockup Card showing WhatsApp broadcast benefits styled as White Bento Card */}
            <div className="lg:w-1/2 w-full bg-white text-slate-800 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-900 uppercase">
                    ⭐ KENAPA WA BLAST KAMI PALING DIMINATI?
                  </span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 font-mono font-bold px-2 py-0.5 rounded">
                    100% Verified
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { title: 'Kirim hingga 1.000.000+ nomor per hari', desc: 'Sangat cocok untuk event akbar, promo mall, & developer properti.' },
                    { title: 'Tanpa Save Kontak Paling Aman', desc: 'Sistem server kami bekerja otomatis tanpa Anda repot mengetik manual.' },
                    { title: 'Pesan Personal Menyapa Nama', desc: '"Halo Ibu Sita, promo khusus warga Depok hari ini..." -> Konversi 5x lebih tinggi!' },
                    { title: 'Kirim Gambar, Brosur PDF & Video', desc: 'Tampilkan produk Anda dengan resolusi jernih HD & tombol link klik langsung.' },
                    { title: 'Database Tertarget (Usia, Gender, Kota)', desc: 'Mau target wanita usia 25-40 tahun di Surabaya pencinta perawatan kulit? Kami ada!' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-slate-900">{item.title}</h5>
                        <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center">
                <p className="text-xs text-slate-700 font-medium">
                  💡 <strong className="text-blue-900 font-bold">Garansi Uang Kembali 100%</strong> jika nomor database tidak valid atau sistem gagal mengirim!
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* PILLAR 2: DIGITAL MARKETING SERVICES */}
        <div id="digital-marketing" className="pt-4">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-200/80 text-slate-600 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              <Share2 className="w-4 h-4 text-blue-600" />
              <span>PILAR #2: DIGITAL MARKETING 360° SERVICES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Layanan Digital Marketing Lengkap Untuk <br className="hidden sm:inline" />
              <span className="text-blue-900 font-extrabold">Dominasi Pasar Organik &amp; Berbayar</span>
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Pilih layanan spesifik yang bisnis Anda butuhkan atau kombinasikan dalam satu paket All-in-One bergaransi konversi.
            </p>
          </div>

          {/* Grid of 6 Digital Marketing Services styled as Bento Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIGITAL_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-md border border-slate-200 transition-all duration-300 flex flex-col justify-between relative group"
              >
                {srv.badge && (
                  <span className="absolute -top-3 right-6 bg-amber-500 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-sm">
                    ★ {srv.badge}
                  </span>
                )}

                <div>
                  {/* Service Icon & Header */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors shadow-sm">
                    {getDmIcon(srv.iconName)}
                  </div>

                  <h4 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {srv.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {srv.description}
                  </p>

                  {/* Bullet Points Benefits */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      Yang Akan Anda Dapatkan:
                    </span>
                    {srv.benefits.map((ben, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA inside card styled like Bento pill button */}
                <button
                  onClick={() => onOpenLeadModal(`Konsultasi Layanan: ${srv.title}`)}
                  className="w-full mt-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-amber-500 text-slate-800 hover:text-white font-bold py-3.5 rounded-full border border-slate-200 hover:border-amber-500 transition-all duration-200 text-xs sm:text-sm cursor-pointer shadow-sm"
                >
                  <span>Konsultasi Layanan Ini</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

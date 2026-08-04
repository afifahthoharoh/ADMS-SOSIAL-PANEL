import React, { useState } from 'react';
import { Database, Award, CheckCircle2, Clock, FileText, Calculator, TrendingUp, Sparkles, PhoneCall, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS, BRAND_INFO } from '../data/content';

interface WhyChooseUsProps {
  onOpenLeadModal: (service?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenLeadModal }) => {
  // Interactive ROI & Lead Calculator State
  const [contactCount, setContactCount] = useState<number>(5000);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(250000); // Rp 250k
  const [conversionRate, setConversionRate] = useState<number>(1.5); // 1.5%

  const estLeads = Math.round(contactCount * (0.08)); // ~8% reply rate
  const estClosing = Math.round(contactCount * (conversionRate / 100));
  const estRevenue = estClosing * avgOrderValue;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-6 h-6 text-blue-600" />;
      case 'Award': return <Award className="w-6 h-6 text-amber-500" />;
      case 'Clock': return <Clock className="w-6 h-6 text-emerald-500" />;
      case 'FileText': return <FileText className="w-6 h-6 text-purple-600" />;
      case 'CheckCircle2': default: return <CheckCircle2 className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <section id="keunggulan" className="py-16 md:py-24 bg-slate-100 text-slate-800 relative overflow-hidden font-sans">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header styled with Bento small-caps */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 text-slate-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <Award className="w-4 h-4 shrink-0 text-amber-500" />
            <span>KENAPA MEMILIH ARMADA ADMS?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            5 Keunggulan Nyata Yang Bikin <br className="hidden sm:inline" />
            <span className="text-blue-900 font-extrabold">
              Kompetitor Anda Ketar-Ketir
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Bukan sekadar janji manis. Kami telah terbukti mendampingi {BRAND_INFO.clientCount} klien dari berbagai industri sejak {BRAND_INFO.since} dengan standar kualitas tertinggi di Indonesia.
          </p>
        </div>

        {/* Grid of 5 Why Choose Us Points styled as Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {WHY_CHOOSE_US_POINTS.map((point, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 sm:p-8 shadow-sm transition-all duration-300 flex flex-col justify-between ${
                idx === 0 
                  ? 'lg:col-span-2 bg-gradient-to-br from-blue-900 to-blue-600 text-white border-0 shadow-md' 
                  : 'bg-white border border-slate-200 text-slate-800 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                    idx === 0 ? 'bg-white/10 border border-white/20' : 'bg-slate-50 border border-slate-200'
                  }`}>
                    {getIcon(point.icon)}
                  </div>
                  <h3 className={`text-lg sm:text-xl font-extrabold ${idx === 0 ? 'text-white' : 'text-slate-900'}`}>
                    {point.title}
                  </h3>
                </div>
                <p className={`text-sm sm:text-base leading-relaxed font-normal ${idx === 0 ? 'text-white/90' : 'text-slate-600'}`}>
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
          
          {/* 6th Card: Trust Stats Card styled as Amber Bento Feature Card */}
          <div className="bg-amber-500 text-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full text-white shadow-sm inline-block">
                ⚡ TRUSTED SINCE 2017
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-4 leading-tight">
                48.5 Juta+ Pesan Terkirim Sukses!
              </h3>
              <p className="text-white/90 font-normal text-sm mt-2">
                Bergabunglah bersama ribuan pebisnis cerdas yang sudah menikmati efisiensi pemasaran digital bersama kami.
              </p>
            </div>
            <button
              onClick={() => onOpenLeadModal('Konsultasi Keunggulan Armada ADMS')}
              className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-full text-xs sm:text-sm shadow-sm transition-transform hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Konsultasi Sekarang</span>
            </button>
          </div>
        </div>

        {/* INTERACTIVE FEATURE: Simulator Potensi Omzet & Lead WA Blast styled as White Bento Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm relative">
          <div className="absolute -top-3.5 left-6 bg-amber-500 text-white font-bold text-[10px] sm:text-xs px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm flex items-center gap-1.5">
            <Calculator className="w-4 h-4" />
            <span>INTERACTIVE TOOL: SIMULATOR POTENSI OMZET ANDA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            
            {/* Controls */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Hitung Sendiri Potensi Ledakan Omzet Anda
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-normal">
                  Geser slider di bawah ini sesuai estimasi jumlah blast kontak dan harga rata-rata produk/jasa bisnis Anda:
                </p>
              </div>

              {/* Slider 1: Jumlah Kontak Blast */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-slate-700">📱 Jumlah Kontak WhatsApp Blast:</span>
                  <span className="font-mono font-black text-blue-900 text-lg">
                    {contactCount.toLocaleString('id-ID')} Kontak
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={contactCount}
                  onChange={(e) => setContactCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono font-bold">
                  <span>1.000 (Starter)</span>
                  <span>50.000 (Growth)</span>
                  <span>100.000 (Korporat)</span>
                </div>
              </div>

              {/* Slider 2: Rata-rata Harga Produk/Jasa */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-slate-700">💰 Rata-rata Harga Produk / Jasa (Rp):</span>
                  <span className="font-mono font-black text-emerald-600 text-lg">
                    Rp {avgOrderValue.toLocaleString('id-ID')}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono font-bold">
                  <span>Rp 50rb (F&amp;B/Retail)</span>
                  <span>Rp 1 Jt (Klinik/Jasa)</span>
                  <span>Rp 5 Jt+ (Properti/B2B)</span>
                </div>
              </div>

              {/* Slider 3: Estimasi Konversi Closing */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-slate-700">🎯 Estimasi Rasio Closing (%):</span>
                  <span className="font-mono font-black text-amber-600 text-lg">
                    {conversionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.25"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono font-bold">
                  <span>0.5% (Konservatif)</span>
                  <span>1.5% (Rata-rata Normal)</span>
                  <span>5% (Promo Spesial / High Intent)</span>
                </div>
              </div>
            </div>

            {/* Results Card styled as Bento Hero Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl p-6 sm:p-8 space-y-6 text-white shadow-md border-0">
              <div className="text-center pb-4 border-b border-white/20">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                  ESTIMASI HASIL KAMPANYE ANDA
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/15 text-center backdrop-blur-sm">
                  <span className="block text-xs text-white/80 font-medium mb-1">
                    💬 Estimasi Chat Masuk (Lead)
                  </span>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-amber-300">
                    ~{estLeads.toLocaleString('id-ID')} Prospek
                  </span>
                  <span className="block text-[10px] text-white/70 mt-1 font-normal">
                    (Asumsi 8% respon tertarik)
                  </span>
                </div>

                <div className="bg-white/10 p-4 rounded-2xl border border-white/15 text-center backdrop-blur-sm">
                  <span className="block text-xs text-white/80 font-medium mb-1">
                    🤝 Estimasi Transaksi Closing
                  </span>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                    {estClosing.toLocaleString('id-ID')} Sales
                  </span>
                  <span className="block text-[10px] text-white/70 mt-1 font-normal">
                    (Berdasarkan rasio {conversionRate}%)
                  </span>
                </div>
              </div>

              <div className="bg-white/15 border border-white/25 p-6 rounded-2xl text-center shadow-sm backdrop-blur-sm">
                <span className="block text-xs uppercase font-extrabold tracking-wider text-amber-300 mb-1">
                  🚀 POTENSI OMZET YANG BISA ANDA KANTONGI
                </span>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-white">
                  Rp {estRevenue.toLocaleString('id-ID')}
                </div>
                <p className="text-[11px] text-white/80 mt-2 font-normal">
                  *Perhitungan adalah simulasi berdasar rata-rata klien kami. Hasil aktual tergantung daya tarik penawaran &amp; kecepatan CS membalas.
                </p>
              </div>

              <button
                onClick={() => onOpenLeadModal(`Konsultasi Paket Blast ${contactCount.toLocaleString('id-ID')} Kontak`)}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-full text-sm sm:text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 animate-spin" />
                <span>Wujudkan Potensi Omzet Ini Sekarang!</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

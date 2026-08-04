import React, { useState } from 'react';
import { Check, Sparkles, Award, ShieldCheck, Zap, PhoneCall, Gift, HelpCircle } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/content';
import { PricingPackage } from '../types';

interface PricingSectionProps {
  onOpenLeadModal: (service?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenLeadModal }) => {
  const [activeTab, setActiveTab] = useState<'wa_blast' | 'digital_marketing'>('wa_blast');

  const filteredPackages = PRICING_PACKAGES.filter((pkg) => pkg.type === activeTab);

  return (
    <section id="harga" className="py-16 md:py-24 bg-slate-100 text-slate-800 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header styled with Bento small-caps */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 text-slate-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <Gift className="w-4 h-4 shrink-0 text-amber-500" />
            <span>PILIHAN PAKET INVESTASI MARKETING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Harga Transparan &amp; Paling Masuk Akal <br className="hidden sm:inline" />
            <span className="text-blue-900 font-extrabold">
              Garansi Uang Kembali 100%
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Pilih kuota blast kontak sesuai target market atau ambil paket all-in-one digital marketing. Semua harga sudah termasuk konsultasi copywriting gratis!
          </p>

          {/* Tab Switcher styled as Bento pills */}
          <div className="pt-6 flex justify-center">
            <div className="bg-white p-1.5 rounded-full border border-slate-200 inline-flex shadow-sm">
              <button
                onClick={() => setActiveTab('wa_blast')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activeTab === 'wa_blast'
                    ? 'bg-amber-500 text-white shadow-sm scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Zap className="w-4 h-4 shrink-0" />
                <span>📢 Paket WhatsApp Blast (1k - 100k)</span>
              </button>

              <button
                onClick={() => setActiveTab('digital_marketing')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activeTab === 'digital_marketing'
                    ? 'bg-blue-900 text-white shadow-sm scale-[1.02]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>🚀 Paket Digital Marketing (SEO &amp; Ads)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid styled as Bento Cards */}
        <div className={`grid grid-cols-1 gap-6 ${
          filteredPackages.length === 2 
            ? 'md:grid-cols-2 max-w-4xl mx-auto' 
            : 'md:grid-cols-2 lg:grid-cols-4'
        }`}>
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-br from-blue-900 to-blue-600 border-0 shadow-md text-white scale-[1.03]'
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-md text-slate-800'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-white font-bold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-sm flex items-center gap-1">
                  ★ PALING LARIS ★
                </span>
              )}

              <div>
                {/* Header */}
                <div className={`pb-6 border-b mb-6 ${pkg.popular ? 'border-white/20' : 'border-slate-100'}`}>
                  <h3 className={`text-xl font-black mb-1 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs min-h-[32px] font-normal ${pkg.popular ? 'text-white/80' : 'text-slate-500'}`}>
                    {pkg.subtitle}
                  </p>

                  <div className="mt-4">
                    {pkg.originalPrice && (
                      <span className={`block text-xs font-semibold line-through ${pkg.popular ? 'text-white/60' : 'text-slate-400'}`}>
                        {pkg.originalPrice}
                      </span>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl sm:text-4xl font-black font-mono ${pkg.popular ? 'text-amber-300' : 'text-blue-900'}`}>
                        {pkg.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  <span className={`block text-xs font-bold uppercase tracking-wider ${pkg.popular ? 'text-amber-300' : 'text-slate-500'}`}>
                    Fasilitas Lengkap:
                  </span>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className={`flex items-start gap-2.5 text-xs sm:text-sm font-normal ${pkg.popular ? 'text-white/90' : 'text-slate-700'}`}>
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? 'text-amber-300' : 'text-emerald-600'}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Bonus Checklist */}
                {pkg.bonus.length > 0 && (
                  <div className={`rounded-2xl p-4 mb-6 space-y-2 border ${
                    pkg.popular ? 'bg-white/10 border-white/20 text-white' : 'bg-amber-50 border-amber-200 text-slate-800'
                  }`}>
                    <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-amber-600">
                      <Gift className="w-3.5 h-3.5" />
                      BONUS EKSKLUSIF HARI INI:
                    </span>
                    {pkg.bonus.map((bon, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-medium">
                        <span>🎁</span>
                        <span>{bon}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Order Button */}
              <div>
                <button
                  onClick={() => onOpenLeadModal(`Pesan ${pkg.name} (${pkg.price})`)}
                  className={`w-full py-4 px-6 rounded-full font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-amber-500 hover:bg-amber-600 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{pkg.ctaText}</span>
                </button>
                <span className={`block text-center text-[11px] mt-2 font-normal ${pkg.popular ? 'text-white/70' : 'text-slate-500'}`}>
                  🔒 Diproses kilat 1x24 jam &amp; terverifikasi
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Guarantee Footer Badge styled as Bento Card */}
        <div className="mt-14 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900">
                Garansi 100% Nomor Valid &amp; Pengiriman Bersertifikat
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Apakah Anda khawatir nomor tujuan mati atau tidak aktif? Sistem Armada ADMS otomatis mengganti nomor yang gagal terkirim tanpa dikenakan biaya tambahan sepersen pun.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenLeadModal('Konsultasi Custom Paket Enterprise')}
            className="w-full sm:w-auto shrink-0 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-full text-xs sm:text-sm shadow-sm transition-colors cursor-pointer"
          >
            Request Paket Custom &amp; Corporate
          </button>
        </div>

      </div>
    </section>
  );
};

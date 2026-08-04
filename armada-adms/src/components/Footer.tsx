import React from 'react';
import { Rocket, PhoneCall, Mail, MapPin, Instagram, Facebook, Globe, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, SEO_DATA } from '../data/content';

interface FooterProps {
  onOpenLeadModal: (service?: string) => void;
  onOpenSeoModal: () => void;
  onOpenBonusModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadModal, onOpenSeoModal, onOpenBonusModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 font-sans border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-900 to-blue-600 flex items-center justify-center text-white shadow-sm">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                  ARMADA <span className="text-amber-500 font-black">ADMS</span>
                </span>
                <span className="block text-[10px] font-semibold tracking-wider uppercase text-slate-400">
                  Digital &amp; WhatsApp Marketing
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
              {BRAND_INFO.fullName} adalah agensi pemasaran digital &amp; penyedia layanan WhatsApp Broadcast berkecepatan tinggi terpercaya yang telah mendampingi pertumbuhan omzet 10.450+ UMKM dan korporasi Indonesia sejak {BRAND_INFO.since}.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-900 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-900 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-900 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li><a href="#keunggulan" className="hover:text-amber-400 transition-colors">Keunggulan Kami</a></li>
              <li><a href="#layanan" className="hover:text-amber-400 transition-colors">WhatsApp Blast</a></li>
              <li><a href="#digital-marketing" className="hover:text-amber-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#harga" className="hover:text-amber-400 transition-colors">Paket &amp; Harga</a></li>
              <li><a href="#testimoni" className="hover:text-amber-400 transition-colors">Testimoni &amp; ROI</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ / Tanya Jawab</a></li>
            </ul>
          </div>

          {/* Col 3: Tools & Bonus (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Fitur &amp; Bonus Gratis
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <button onClick={onOpenBonusModal} className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer">
                  <span>✨ Bonus E-Book Script WA</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <button onClick={onOpenSeoModal} className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer">
                  <span>🛡️ Audit SEO &amp; Schema Tag</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLeadModal('Simulator Potensi Omzet')} className="hover:text-white transition-colors cursor-pointer">
                  🧮 Simulator Potensi Omzet
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLeadModal('Kemitraan Reseller / Agensi')} className="hover:text-white transition-colors cursor-pointer">
                  🤝 Program Reseller / Agensi
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Alamat & Kontak Kantor (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Kontak &amp; Alamat Kantor
            </h4>
            <div className="space-y-3 text-xs font-normal">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-300 block font-semibold">Kantor Pusat Jakarta:</strong>
                  <span>{BRAND_INFO.addressJakarta}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-300 block font-semibold">Cabang Surabaya:</strong>
                  <span>{BRAND_INFO.addressSurabaya}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <PhoneCall className="w-4 h-4 text-emerald-500 shrink-0" />
                <a 
                  href={`https://wa.me/${BRAND_INFO.phone}?text=Halo%20Armada%20ADMS`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-amber-400 font-bold underline transition-colors"
                >
                  +62 812-3456-7890 (WA Official)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{BRAND_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Keywords Footer Tag Cloud */}
        <div className="py-8 border-b border-slate-800">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            🔍 SEO Popular Keywords &amp; Services in Indonesia:
          </span>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
            {SEO_DATA.keywords.map((kw, i) => (
              <span key={i} className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 font-normal">
                #{kw}
              </span>
            ))}
            <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 font-normal">#wa blast surabaya</span>
            <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 font-normal">#wa blast jakarta</span>
            <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 font-normal">#jasa seo bergaransi</span>
            <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 font-normal">#iklan facebook instagram ads</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">{BRAND_INFO.fullName}</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

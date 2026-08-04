import React, { useState, useEffect } from 'react';
import { Rocket, PhoneCall, Menu, X, Sparkles, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface NavbarProps {
  onOpenLeadModal: (service?: string) => void;
  onOpenSeoModal: () => void;
  onOpenBonusModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal, onOpenSeoModal, onOpenBonusModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'WA Blast', href: '#layanan' },
    { name: 'Digital Marketing', href: '#digital-marketing' },
    { name: 'Paket & Harga', href: '#harga' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Cara Kerja', href: '#cara-kerja' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans">
      {/* Top Urgency Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white text-xs sm:text-sm py-2 px-4 shadow-md border-b border-blue-800/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wide animate-pulse">
              HOT PROMO
            </span>
            <p className="font-medium text-slate-200">
              ⚡ Gratis Konsultasi SEO & E-Book Script Closing WA untuk <span className="text-amber-400 font-bold underline">10 UMKM Tercepat</span> Hari Ini!
            </p>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <button 
              onClick={onOpenBonusModal}
              className="flex items-center gap-1 text-amber-300 hover:text-amber-200 font-semibold underline decoration-amber-400 transition-colors cursor-pointer text-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Lihat Bonus Script WA</span>
            </button>
            <span className="text-slate-600 hidden md:inline">|</span>
            <button 
              onClick={onOpenSeoModal}
              className="hidden md:flex items-center gap-1 text-blue-300 hover:text-blue-200 font-medium transition-colors cursor-pointer text-xs"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SEO Audit & Schema</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-100' 
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
              <Rocket className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                ARMADA <span className="text-blue-600 font-black">ADMS</span>
              </span>
              <span className="block text-[10px] font-semibold tracking-wider uppercase text-slate-500 -mt-1">
                Digital & WhatsApp Marketing
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenLeadModal('Konsultasi Gratis Umum')}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 text-sm cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 animate-pulse" />
              <span>Konsultasi Gratis</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-700 hover:text-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="space-y-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal('Konsultasi Gratis via Mobile Menu');
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold py-3 px-4 rounded-xl shadow-md text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Konsultasi Gratis Sekarang</span>
            </button>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBonusModal();
                }}
                className="flex items-center justify-center gap-1 bg-amber-50 text-amber-800 border border-amber-200 py-2 px-3 rounded-lg text-xs font-bold"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Script Closing WA</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSeoModal();
                }}
                className="flex items-center justify-center gap-1 bg-blue-50 text-blue-800 border border-blue-200 py-2 px-3 rounded-lg text-xs font-bold"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Audit SEO & Schema</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

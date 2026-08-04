import React, { useState } from 'react';
import { MessageSquare, X, PhoneCall } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface FloatingWaButtonProps {
  onOpenLeadModal: (service?: string) => void;
}

export const FloatingWaButton: React.FC<FloatingWaButtonProps> = ({ onOpenLeadModal }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const directWaLink = `https://wa.me/${BRAND_INFO.phone}?text=Halo%20tim%20Armada%20ADMS,%20saya%20tertarik%20dengan%20jasa%20WA%20Blast%20&%20Digital%20Marketing.%20Boleh%20minta%20info%20paketnya?`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-sans">
      
      {/* Tooltip Chat Bubble */}
      {showTooltip && (
        <div className="bg-white text-slate-900 px-4 py-3 rounded-2xl shadow-2xl border border-slate-200 text-xs sm:text-sm font-semibold max-w-xs relative animate-in fade-in slide-in-from-bottom-3 duration-300">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full flex items-center justify-center text-[10px]"
            aria-label="Tutup pesan"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2 mb-1 text-emerald-600 font-extrabold text-[11px] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>CS Online 24/7 (Respon &lt; 2 Menit)</span>
          </div>
          <p className="text-slate-700 font-medium leading-relaxed">
            👋 Halo! Mau konsultasi promo atau pilih database kota Anda? Klik di sini ya!
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            <a
              href={directWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors w-full text-center"
            >
              Chat WhatsApp Langsung
            </a>
          </div>
          {/* Arrow pointing down */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-slate-200 transform rotate-45"></div>
        </div>
      )}

      {/* Main Button with Pulse Effect */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onOpenLeadModal('Konsultasi Cepat (Floating WA)')}
          className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black px-4 py-3 rounded-full shadow-lg text-xs tracking-wide uppercase shadow-orange-500/30 hover:scale-105 transition-transform"
        >
          <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
          <span>Form Konsultasi VIP</span>
        </button>

        <a
          href={directWaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:scale-110 transition-transform duration-200 relative group"
          aria-label="Chat WhatsApp Official"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
          <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-emerald-600 relative z-10" />
        </a>
      </div>

    </div>
  );
};

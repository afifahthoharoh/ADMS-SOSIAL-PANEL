import React, { useState } from 'react';
import { X, Sparkles, Copy, Check, MessageSquare, Lightbulb, ArrowRight, ShieldCheck } from 'lucide-react';
import { BONUS_CLOSING_SCRIPTS } from '../data/content';

interface BonusScriptsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLeadModal: (service?: string) => void;
}

export const BonusScriptsModal: React.FC<BonusScriptsModalProps> = ({ isOpen, onClose, onOpenLeadModal }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('Semua');

  if (!isOpen) return null;

  const categories = ['Semua', 'Cold Lead (Blast Pertama)', 'Follow Up (Belum Balas)', 'Promo & Diskon Khusus', 'Closing & Urgency'];

  const filteredScripts = activeTab === 'Semua'
    ? BONUS_CLOSING_SCRIPTS
    : BONUS_CLOSING_SCRIPTS.filter((s) => s.category === activeTab);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 font-sans">
      
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 p-6 sm:p-7 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-950/10 hover:bg-slate-950/20 text-slate-950 flex items-center justify-center transition-colors cursor-pointer font-bold"
            aria-label="Tutup"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 text-xs font-black uppercase px-3 py-1 rounded-full bg-slate-950 text-amber-400 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> BONUS EKSKLUSIF ARMADA ADMS
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
            E-Book Digital: 4 Formula Script Closing WA
          </h3>
          <p className="text-xs sm:text-sm text-slate-900/90 font-medium mt-1 max-w-2xl">
            Tinggal COPY - PASTE dan ganti nama produk Anda. Script ini dirancang dengan teknik psikologi konsumen untuk merubah chat masuk dari WA Blast menjadi orderan transfer nyata!
          </p>

          {/* Category Tabs */}
          <div className="pt-5 flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === cat
                    ? 'bg-slate-950 text-amber-400 shadow-md scale-105'
                    : 'bg-amber-600/30 text-slate-900 hover:bg-amber-600/50'
                }`}
              >
                {cat.replace(' (Blast Pertama)', '').replace(' (Belum Balas)', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body: List of Scripts */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 bg-slate-50">
          {filteredScripts.map((item) => {
            const isCopied = copiedId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:border-amber-400 transition-colors space-y-4 relative"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-extrabold text-slate-900 mt-2">
                      {item.title}
                    </h4>
                  </div>

                  <button
                    onClick={() => handleCopy(item.id, item.script)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isCopied
                        ? 'bg-emerald-600 text-white shadow-md scale-105'
                        : 'bg-slate-900 hover:bg-blue-600 text-white shadow-sm'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Tersalin ke Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Script Ini</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100 italic">
                  <strong>Skenario Penggunaan:</strong> {item.scenario}
                </div>

                {/* Script Box */}
                <div className="bg-slate-900 text-emerald-300 font-mono text-xs sm:text-sm p-5 rounded-2xl border border-slate-800 whitespace-pre-wrap relative leading-relaxed shadow-inner">
                  {item.script}
                </div>

                {/* Expert Tips */}
                <div className="flex items-start gap-2.5 bg-amber-50 p-3.5 rounded-xl border border-amber-200/60 text-xs text-amber-900">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-extrabold block text-amber-800">💡 Tips Ahli dari Armada ADMS:</strong>
                    <span>{item.tips}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Mau kami bantu sesuaikan script dengan produk Anda secara gratis?</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenLeadModal('Konsultasi Custom Script WA & Blast');
            }}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Minta Bantuan CS Armada ADMS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

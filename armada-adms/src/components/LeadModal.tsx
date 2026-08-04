import React, { useState, useEffect } from 'react';
import { X, PhoneCall, CheckCircle2, ShieldCheck, Send, Sparkles, AlertCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { LeadFormData } from '../types';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, initialService }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    businessName: '',
    serviceNeeded: initialService || 'WhatsApp Blast Tertarget',
    budget: 'Rp 1 Juta - 5 Juta',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build Formatted WA Message
    const text = `Halo Tim Armada ADMS! 🚀 Saya tertarik untuk konsultasi pemasaran bisnis saya.\n\n` +
      `📋 *Data Calon Klien:*\n` +
      `• *Nama:* ${formData.name}\n` +
      `• *No WhatsApp:* ${formData.phone}\n` +
      `• *Nama Usaha:* ${formData.businessName || '-'}\n` +
      `• *Layanan Diminati:* ${formData.serviceNeeded}\n` +
      `• *Estimasi Budget:* ${formData.budget}\n` +
      `• *Catatan / Target Kota:* ${formData.message || '-'}\n\n` +
      `Mohon dibantu informasi katalog, kuota database, dan promonya ya! Terima kasih. 🙏`;

    const waUrl = `https://wa.me/${BRAND_INFO.phone}?text=${encodeURIComponent(text)}`;
    
    setSubmitted(true);
    
    // Open in new window/tab after a brief delay
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  const servicesList = [
    'WhatsApp Blast Tertarget',
    'Paket Growth WA Blast (5.000 Kontak)',
    'Paket Bisnis Pro WA Blast (10.000 Kontak)',
    'SEO Dominasi Halaman 1 Google',
    'Meta Ads (Facebook & Instagram Ads)',
    'Google Ads & Google Maps Optimization',
    'Pembuatan Website & Landing Page',
    'Social Media Management & Content',
    'Kombinasi All-in-One (WA Blast + Ads + SEO)'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 font-sans">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-slate-900 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-amber-500 text-slate-950">
              <Sparkles className="w-3 h-3" /> KLAIM PROMO KONSULTASI
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Form Konsultasi & Cek Database
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Isi data singkat Anda di bawah ini untuk mendapatkan rekomendasi database dan estimasi ROI dari tim spesialis kami.
          </p>
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">
                Data Anda Berhasil Dicatat!
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Sistem sedang mengalihkan Anda ke WhatsApp Official Account Manager Armada ADMS dengan data Anda yang sudah terketik rapi...
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors"
                >
                  Tutup Jendela Ini
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Nama Lengkap */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Nama Lengkap Anda <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Bpk. Hendra Gunawan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium bg-slate-50/50"
                />
              </div>

              {/* No WhatsApp */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 081234567890"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium bg-slate-50/50"
                />
              </div>

              {/* Nama Usaha */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Nama Bisnis / Perusahaan (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Sari Rasa Wedding & Catering"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium bg-slate-50/50"
                />
              </div>

              {/* Layanan Diminati */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                    Layanan Utama
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm font-semibold bg-slate-50/50 cursor-pointer"
                  >
                    {servicesList.map((srv, i) => (
                      <option key={i} value={srv}>{srv}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                    Estimasi Budget Promo
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm font-semibold bg-slate-50/50 cursor-pointer"
                  >
                    <option value="Di bawah Rp 1 Juta">Di bawah Rp 1 Juta (Trial)</option>
                    <option value="Rp 1 Juta - 5 Juta">Rp 1 Juta - 5 Juta</option>
                    <option value="Rp 5 Juta - 15 Juta">Rp 5 Juta - 15 Juta</option>
                    <option value="Rp 15 Juta ke atas">Rp 15 Juta ke atas (Korporat)</option>
                  </select>
                </div>
              </div>

              {/* Pesan / Target Kota */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Target Kota / Kebutuhan Khusus Anda
                </label>
                <textarea
                  rows={2}
                  placeholder="Contoh: Butuh database ibu rumah tangga di Surabaya untuk promo kuliner minggu depan..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium bg-slate-50/50 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-[length:200%_100%] hover:bg-[position:100%_0] text-slate-950 font-black py-4 rounded-2xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Kirim & Lanjut Ke WhatsApp Sekarang</span>
                </button>
              </div>

              {/* Security note */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Aman & Privasi Data Anda Terjamin</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

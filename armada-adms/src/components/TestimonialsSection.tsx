import React, { useState } from 'react';
import { Star, TrendingUp, Quote, CheckCircle, Building2, User, Filter, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  onOpenLeadModal: (service?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenLeadModal }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const industries = ['All', 'UMKM & F&B', 'Properti & Real Estate', 'Klinik & Salon', 'Event Organizer', 'B2B & Manufaktur'];

  const filteredTestimonials = selectedIndustry === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.industry === selectedIndustry);

  return (
    <section id="testimoni" className="py-16 md:py-24 bg-slate-100 text-slate-800 relative overflow-hidden font-sans">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header styled with Bento small-caps */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200/80 text-slate-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <Star className="w-4 h-4 shrink-0 text-amber-500 fill-amber-500" />
            <span>BUKTI SOSIAL &amp; STUDI KASUS REAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Cerita Nyata Dari Para Owner Bisnis Yang <br className="hidden sm:inline" />
            <span className="text-blue-900 font-extrabold">
              Omzetnya Melejit Drastis
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Bukan review fiktif. Berikut adalah dokumentasi pengalaman nyata dan metrik pertumbuhan bisnis yang dialami klien-klien kami dari berbagai sektor usaha di seluruh Indonesia.
          </p>

          {/* Industry Filter Buttons styled as Bento pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selectedIndustry === ind
                    ? 'bg-amber-500 text-white shadow-sm scale-105'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {ind === 'All' ? '🌟 Semua Industri' : ind}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid styled as Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-md border border-slate-200 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Metric Badge at top right */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="bg-slate-50 border border-slate-200 text-slate-800 px-3.5 py-1.5 rounded-2xl text-right shadow-sm">
                    <span className="block text-lg font-black font-mono text-blue-900">
                      {t.metric}
                    </span>
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      {t.metricLabel}
                    </span>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-blue-200 mb-3" />

                {/* Review Content */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6 font-normal">
                  "{t.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-200"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1">
                    <span>{t.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100 shrink-0" />
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {t.role} — <strong className="text-slate-800">{t.company}</strong>
                  </p>
                  <span className="inline-block text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded mt-1">
                    🏷️ {t.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner styled as Bento Hero Card */}
        <div className="mt-14 bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl p-8 sm:p-10 text-white text-center shadow-md border-0 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Punya Bisnis di Kategori Serupa?
            </h3>
            <p className="text-white/90 text-sm sm:text-base font-normal">
              Kami punya formula copywriting dan database tertarget khusus untuk industri Anda. Hubungi kami sekarang dan jadilah kisah sukses berikutnya!
            </p>
            <div className="pt-3">
              <button
                onClick={() => onOpenLeadModal(`Konsultasi Studi Kasus Industri ${selectedIndustry}`)}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer text-sm sm:text-base"
              >
                <span>Konsultasi Strategi Sesuai Industri Saya</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

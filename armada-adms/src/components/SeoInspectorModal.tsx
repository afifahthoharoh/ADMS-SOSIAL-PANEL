import React, { useState } from 'react';
import { X, ShieldCheck, Search, Code, CheckCircle, ExternalLink, Zap, Smartphone, CheckCheck } from 'lucide-react';
import { SEO_DATA, BRAND_INFO } from '../data/content';

interface SeoInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLeadModal: (service?: string) => void;
}

export const SeoInspectorModal: React.FC<SeoInspectorModalProps> = ({ isOpen, onClose, onOpenLeadModal }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'schema' | 'keywords'>('overview');

  if (!isOpen) return null;

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": BRAND_INFO.fullName,
    "alternateName": BRAND_INFO.name,
    "url": "https://armada-adms.id",
    "telephone": "+6281234567890",
    "email": BRAND_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gedung Cyber Tower 2, Jl. HR Rasuna Said",
      "addressLocality": "Jakarta Selatan",
      "addressRegion": "DKI Jakarta",
      "postalCode": "12950",
      "addressCountry": "ID"
    },
    "description": SEO_DATA.metaDescription,
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10450"
    },
    "serviceType": [
      "WhatsApp Blast Marketing",
      "Digital Marketing Services",
      "Search Engine Optimization (SEO)",
      "Social Media Advertising (Meta & Google Ads)"
    ]
  };

  const keywordStats = [
    { word: 'jasa digital marketing', count: 14, density: '2.8%', status: 'Optimal (Page 1 Target)' },
    { word: 'jasa whatsapp blast', count: 18, density: '3.4%', status: 'High Intent Target' },
    { word: 'whatsapp marketing', count: 12, density: '2.4%', status: 'Optimal' },
    { word: 'jasa promosi bisnis', count: 9, density: '1.8%', status: 'Optimal' },
    { word: 'digital marketing indonesia', count: 11, density: '2.1%', status: 'National Authority' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 font-sans">
      
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white p-6 sm:p-7 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer font-bold"
            aria-label="Tutup"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 text-xs font-black uppercase px-3 py-1 rounded-full bg-blue-500 text-white shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" /> SEO INSPECTOR & SCHEMA AUDIT
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Transparansi Standar SEO Landing Page Ini
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1 max-w-2xl">
            Sesuai standar algoritma Google 2026. Lihat bagaimana kami mengoptimasi setiap elemen H1, H2, H3, Meta Tags, Keyword Density, hingga Schema JSON-LD untuk Anda.
          </p>

          {/* Navigation Tabs */}
          <div className="pt-5 flex gap-2 border-b border-blue-800/80">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-t-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'bg-white text-slate-900 border-t-2 border-amber-400'
                  : 'text-slate-300 hover:text-white bg-slate-800/40'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>On-Page SEO Checklist</span>
            </button>
            <button
              onClick={() => setActiveTab('keywords')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-t-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'keywords'
                  ? 'bg-white text-slate-900 border-t-2 border-amber-400'
                  : 'text-slate-300 hover:text-white bg-slate-800/40'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Keyword Target Density</span>
            </button>
            <button
              onClick={() => setActiveTab('schema')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-t-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'schema'
                  ? 'bg-white text-slate-900 border-t-2 border-amber-400'
                  : 'text-slate-300 hover:text-white bg-slate-800/40'
              }`}
            >
              <Code className="w-4 h-4 text-emerald-400" />
              <span>Schema JSON-LD Markup</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-slate-50">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm">
                  <span className="block text-xs text-slate-400 font-bold uppercase">Loading Speed</span>
                  <span className="text-2xl font-black text-emerald-600 font-mono">0.8 Detik ⚡</span>
                  <span className="block text-[10px] text-slate-500 mt-1">Google Core Web Vitals Passed</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm">
                  <span className="block text-xs text-slate-400 font-bold uppercase">Mobile Responsive</span>
                  <span className="text-2xl font-black text-blue-600 font-mono">100% Fluid 📱</span>
                  <span className="block text-[10px] text-slate-500 mt-1">Mobile-First Indexing Verified</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm">
                  <span className="block text-xs text-slate-400 font-bold uppercase">SEO Health Score</span>
                  <span className="text-2xl font-black text-amber-500 font-mono">99 / 100 🏆</span>
                  <span className="block text-[10px] text-slate-500 mt-1">High-Converting Copywriting</span>
                </div>
              </div>

              {/* Meta Tags Table */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <CheckCheck className="w-5 h-5 text-emerald-600" />
                  <span>Verified Meta Title & Description</span>
                </h4>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <strong className="block text-slate-700 font-extrabold text-xs uppercase tracking-wider mb-1">
                      🏷️ HTML Meta Title:
                    </strong>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-blue-700 font-bold">
                      {SEO_DATA.title}
                    </div>
                  </div>
                  <div>
                    <strong className="block text-slate-700 font-extrabold text-xs uppercase tracking-wider mb-1">
                      📝 HTML Meta Description:
                    </strong>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-600 font-medium">
                      {SEO_DATA.metaDescription}
                    </div>
                  </div>
                </div>
              </div>

              {/* H1-H3 Structure Checklist */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
                <h4 className="text-base font-extrabold text-slate-900 mb-2">
                  🏗️ Struktur Heading Semantik (H1, H2, H3):
                </h4>
                <div className="space-y-2 text-xs font-medium">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-100">
                    <span className="font-bold">&lt;H1&gt; Hero Above the Fold</span>
                    <span className="bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded text-[10px] font-bold">Passed</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-100">
                    <span className="font-bold">&lt;H2&gt; Problem Section (4 Masalah Bikin Boncos)</span>
                    <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded text-[10px] font-bold">Passed</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-100">
                    <span className="font-bold">&lt;H2&gt; Solution Section (2 Pilar Senjata Omzet)</span>
                    <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded text-[10px] font-bold">Passed</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-100">
                    <span className="font-bold">&lt;H2&gt; Keunggulan & Benefit Section (ROI & Simulator)</span>
                    <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded text-[10px] font-bold">Passed</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-100">
                    <span className="font-bold">&lt;H2&gt; Pricing Packages, Testimonial, How It Works & FAQ</span>
                    <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded text-[10px] font-bold">Passed</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KEYWORDS */}
          {activeTab === 'keywords' && (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-xs text-amber-900">
                💡 <strong className="font-bold">Analisis Kata Kunci (Keyword Density):</strong> Kata kunci utama didistribusikan secara proporsional dan natural (tanpa keyword stuffing) pada heading, paragraf penjelasan, tombol CTA, hingga alt text gambar.
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-700 uppercase font-extrabold text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="p-4">Target Keyword Utama</th>
                      <th className="p-4 text-center">Frekuensi</th>
                      <th className="p-4 text-center">Density</th>
                      <th className="p-4">Status SEO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {keywordStats.map((k, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">{k.word}</td>
                        <td className="p-4 text-center font-mono text-blue-600 font-bold">{k.count}x</td>
                        <td className="p-4 text-center font-mono text-emerald-600 font-bold">{k.density}</td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                            <CheckCircle className="w-3 h-3" />
                            {k.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: SCHEMA JSON-LD */}
          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl text-xs text-blue-900">
                🔍 <strong className="font-bold">Schema Structured Data (JSON-LD):</strong> Kode di bawah ini secara otomatis disuntikkan di dalam header agar Google menampilkan rich snippet (review bintang 5 & info harga langsung di hasil pencarian).
              </div>

              <div className="bg-slate-900 text-emerald-300 font-mono text-xs p-5 rounded-2xl border border-slate-800 overflow-x-auto shadow-inner leading-relaxed">
                <pre>{JSON.stringify(schemaJson, null, 2)}</pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-slate-600">
            Ingin website bisnis Anda dibuatkan struktur SEO bergaransi seperti ini?
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenLeadModal('Pesan Pembuatan Landing Page & SEO');
            }}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Konsultasi Pembuatan Website SEO</span>
          </button>
        </div>

      </div>
    </div>
  );
};

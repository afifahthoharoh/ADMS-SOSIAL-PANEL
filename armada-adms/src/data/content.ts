import { ServiceItem, PricingPackage, Testimonial, FaqItem, ClosingScript } from '../types';

export const BRAND_INFO = {
  name: 'Armada ADMS',
  fullName: 'Armada Digital Marketing Services',
  tagline: 'Partner Resmi Pertumbuhan Omzet Bisnis & UMKM Indonesia',
  phone: '6281234567890', // For WhatsApp redirect
  email: 'halo@armada-adms.id',
  addressJakarta: 'Gedung Cyber Tower 2, Jl. HR Rasuna Said, Kuningan, Jakarta Selatan 12950',
  addressSurabaya: 'Pakuwon Center Lt. 18, Jl. Embong Malang No. 1-5, Surabaya 60261',
  since: '2017',
  clientCount: '10,450+',
  messagesSent: '48.5 Juta+',
  avgOpenRate: '98.4%',
  avgROI: '420%'
};

export const SEO_DATA = {
  title: 'Armada ADMS - Jasa WhatsApp Blast & Digital Marketing High-Converting #1 Indonesia',
  metaDescription: 'Tingkatkan omzet bisnis & UMKM dengan jasa WhatsApp Blast tertarget hingga jutaan nomor, SEO Website, Google Ads, dan Meta Ads dari Armada ADMS bergaransi.',
  keywords: [
    'jasa digital marketing',
    'jasa whatsapp blast',
    'whatsapp marketing',
    'jasa promosi bisnis',
    'digital marketing indonesia',
    'database nomor wa tertarget',
    'jasa seo website indonesia',
    'jasa iklan meta ads facebook',
    'jasa iklan google ads'
  ]
};

export const PROBLEM_STORIES = [
  {
    id: '1',
    title: 'Iklan Mahal, Tapi yang Balas Cuma "Pala, Neti, & Ghosting"?',
    pain: 'Udah bakar budget jutaan di Facebook & Instagram Ads, tapi lead yang masuk tidak berkualitas. Mau follow-up malah diblokir atau di-read doang.',
    relate: 'Bukan salah produk Anda, tapi cara jangkau audiens yang kurang personal dan kurang tepat sasaran!',
    icon: 'AlertCircle'
  },
  {
    id: '2',
    title: 'Database Nomor Ribuan Punya Eks-Klien, Tapi Anggur di HP?',
    pain: 'Punya ribuan kontak mantan pembeli atau database prospek, tapi bingung cara nyapanya karena takut nomor diblokir kalau kirim satu-satu secara manual.',
    relate: 'Padahal 80% omzet bisnis datang dari repeat order dan follow-up database yang sudah kenal brand Anda!',
    icon: 'Database'
  },
  {
    id: '3',
    title: 'Promosi Tradisional & Brosur Sudah Nggak Zaman?',
    pain: 'Sebar brosur, pasang spanduk, bahkan kirim email marketing open rate-nya cuma di bawah 5%. Kalah telak sama kompetitor yang agresif di genggaman HP kustomer.',
    relate: 'Kini 98% orang Indonesia membuka pesan WhatsApp dalam waktu kurang dari 3 menit setelah pesan diterima!',
    icon: 'TrendingDown'
  },
  {
    id: '4',
    title: 'Susah Cari Pelanggan Baru di Tengah Persaingan Ketat?',
    pain: 'Bingung mencari market baru yang sesuai kategori umur, lokasi kota, atau daya beli untuk promo event, launch produk baru, atau jasa properti/F&B Anda.',
    relate: 'Armada ADMS punya solusi database tertarget by lokasi & demografi yang bersih, aktif, dan legal!',
    icon: 'Users'
  }
];

export const WA_BLAST_FEATURES = [
  {
    title: 'Database Tertarget Premium',
    desc: 'Filter kontak berdasarkan kota/provinsi, jenis kelamin, usia, hingga ketertarikan (Properti, Otomotif, F&B, Belanja Online).',
    icon: 'Target'
  },
  {
    title: 'Personalisasi Sapaan Nama',
    desc: 'Pesan menyapa langsung nama calon customer (cth: "Halo Pak Budi di Surabaya..."), membuat pesan terasa hangat & bukan spam automatik.',
    icon: 'UserCheck'
  },
  {
    title: 'Support Multimedia Lengkap',
    desc: 'Kirim katalog PDF, gambar brosur resolusi tinggi, video demonstrasi produk, hingga tombol link interaktif langsung klik.',
    icon: 'Image'
  },
  {
    title: 'Kapasitas Jutaan per Hari',
    desc: 'Server dedicated berkecepatan tinggi mampu mengirim dari 1.000 hingga 1.000.000+ pesan broadcast per hari tanpa delay.',
    icon: 'Zap'
  },
  {
    title: 'Tanpa Save Nomor Paling Aman',
    desc: 'Anda tidak perlu menyimpan kontak satu per satu. Sistem kami menjamin keamanan nomor utama bisnis Anda dari risiko pemblokiran.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Laporan Real-Time & Detail',
    desc: 'Dapatkan dasbor analitik transparan: berapa pesan terkirim (Delivered), dibaca (Read), gagal, dan rasio klik tautan (CTR).',
    icon: 'BarChart3'
  }
];

export const DIGITAL_SERVICES: ServiceItem[] = [
  {
    id: 'seo',
    title: 'SEO Website Dominasi Page 1 Google',
    description: 'Optimasi website bisnis Anda agar nangkring di halaman 1 Google tanpa bayar iklan per klik. Trafik organik jangka panjang yang stabil dan trust tinggi.',
    iconName: 'Search',
    badge: 'High ROI Organik',
    benefits: [
      'Audit SEO menyeluruh & perbaikan struktur teknis',
      'Riset keyword "buyer intent" (kata kunci pembeli siap transaksi)',
      'Backlink media nasional otoritas tinggi & garansi ranking 10 besar'
    ]
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads (Instagram & Facebook Ads)',
    description: 'Kampanye iklan berkonversi tinggi dengan penargetan algoritma AI mutakhir untuk mendatangkan lead siap closing setiap hari.',
    iconName: 'Share2',
    badge: 'Fast Lead Generation',
    benefits: [
      'Pembuatan kreatif iklan (Video Reels & Carousel desain premium)',
      'Setup Pixel tracking & Retargeting otomatis ke pengunjung web',
      'Optimasi budget bulanan agar CPA (biaya per lead) paling murah'
    ]
  },
  {
    id: 'google-ads',
    title: 'Google Ads (Search & Display Network)',
    description: 'Jaring calon pembeli yang sedang aktif mencari produk/jasa Anda detik ini juga di mesin pencari Google & YouTube Ads.',
    iconName: 'Compass',
    benefits: [
      'Setup Google Search Ads kata kunci penawaran langsung',
      'Google Maps & Local Service Ads untuk mendominasi kota Anda',
      'Laporan transparansi klik & anti-click fraud monitoring'
    ]
  },
  {
    id: 'landing-page',
    title: 'Landing Page & Website High-Converting',
    description: 'Pembuatan website profesional berkecepatan tinggi, SEO-ready, dengan formula copywriting hipnosis yang merubah pengunjung jadi pembeli.',
    iconName: 'Layout',
    badge: 'Best Seller',
    benefits: [
      'Desain modern, mobile-first, & loading super cepat < 2 detik',
      'Integrasi tombol WhatsApp floating & form pemesanan otomatis',
      'Gratis domain .com / .id & SSL hosting cloud premium setahun'
    ]
  },
  {
    id: 'smm',
    title: 'Social Media Management & Branding',
    description: 'Bikin akun Instagram & TikTok bisnis Anda terlihat keren, profesional, dan aktif setiap hari tanpa Anda repot mikirin ide konten.',
    iconName: 'Smartphone',
    benefits: [
      '15-30 desain feed & Reels animasi berkualitas tinggi per bulan',
      'Copywriting caption persuasif & riset hashtag tertarget',
      'Admin interaktif untuk merespon komen & menaikkan engagement'
    ]
  },
  {
    id: 'google-review',
    title: 'Optimasi Google My Business & Review 5 Star',
    description: 'Tingkatkan kepercayaan pelanggan lokal dengan reputasi bintang 5 dan optimasi agar toko/kantor Anda muncul di Google Maps teratas.',
    iconName: 'Star',
    benefits: [
      'Review ulasan positif dari akun Google lokal & aktif (non-bot)',
      'Optimasi foto lokasi, deskripsi produk, & Q&A usaha',
      'Peningkatan trafik kunjungan fisik & telepon langsung'
    ]
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Database Premium & Tertarget Terlengkap',
    desc: 'Koleksi database nomor WhatsApp bersih, diperbarui setiap bulan, difilter berdasarkan kode pos, demografi, dan riwayat belanja konsumen online.',
    icon: 'Database'
  },
  {
    title: 'Tim Ahli Berpengalaman Sejak 2017',
    desc: 'Lebih dari 7 tahun mendampingi 10.000+ UMKM, brand franchise, hingga korporasi besar dalam merancang strategi digital marketing pemenang.',
    icon: 'Award'
  },
  {
    title: 'Harga Terjangkau & Transparan (Tanpa Hidden Fee)',
    desc: 'Pilihan paket fleksibel mulai dari Rp 150 ribuan untuk UMKM hingga paket enterprise dengan garansi uang kembali jika sistem tidak berjalan.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Proses Eksekusi Kilat 1x24 Jam',
    desc: 'Materi promosi siap? Campaign WhatsApp Blast maupun setup Iklan Anda langsung live diproses hari itu juga oleh dedicated account manager.',
    icon: 'Clock'
  },
  {
    title: 'Laporan Analitik Lengkap & Terverifikasi',
    desc: 'Kami tidak hanya janji. Setelah blast atau running iklan, Anda menerima file laporan Excel & PDF bukti pengiriman yang bisa dicek validitasnya.',
    icon: 'FileText'
  }
];

export const BENEFITS_RESULTS = [
  {
    title: 'Lonjakan Omzet & Closing Instan',
    desc: 'Pesan yang masuk langsung ke WhatsApp pribadi prospek memicu interaksi langsung, menghasilkan tingkat closing hingga 5x lebih tinggi dibanding iklan biasa.',
    stat: '500%',
    label: 'Kenaikan Respon Lead'
  },
  {
    title: 'Jangkauan Luas Tanpa Batas Wilayah',
    desc: 'Sentuh calon pembeli di seluruh pelosok Indonesia atau fokus ke radius 5 km dari toko fisik Anda hanya dalam hitungan menit.',
    stat: '98.4%',
    label: 'Rata-rata Open Rate WA'
  },
  {
    title: 'Branding Naik & Diingat Konsumen',
    desc: 'Kehadiran brand Anda yang konsisten dan profesional di WhatsApp & halaman 1 Google membuat bisnis Anda dianggap sebagai pemimpin pasar di industri Anda.',
    stat: '#1',
    label: 'Top of Mind Awareness'
  },
  {
    title: 'Efisiensi Waktu & Biaya Marketing 80%',
    desc: 'Tinggalkan cara manual menelepon atau mengirim brosur satu per satu. Biarkan sistem otomatis kami bekerja 24/7 mencarikan pembeli untuk Anda.',
    stat: '80%',
    label: 'Penghematan Waktu Tim'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'wa-1k',
    name: 'Paket Starter WA',
    subtitle: 'Cocok untuk coba-coba & promo UMKM lokal pemula',
    price: 'Rp 189.000',
    originalPrice: 'Rp 350.000',
    contactsCount: 1000,
    type: 'wa_blast',
    features: [
      '1.000 Kontak WhatsApp Blast',
      'Bisa Pakai Database Sendiri / Database Armada',
      'Filter Target Kota / Provinsi',
      'Support Teks + 1 Gambar/Brosur',
      'Personalisasi Nama Penerima',
      'Laporan Pengiriman Detail (Excel)',
      'Proses Selesai dalam 3 Jam'
    ],
    bonus: [
      'Gratis E-Book "Formula Copywriting WA Hypnoselling"',
      'Gratis Template Script Closing CS'
    ],
    ctaText: 'Pesan Paket 1.000 Kontak'
  },
  {
    id: 'wa-5k',
    name: 'Paket Growth WA',
    subtitle: 'Pilihan paling populer untuk peningkat omzet event / promo bulanan',
    price: 'Rp 699.000',
    originalPrice: 'Rp 1.250.000',
    contactsCount: 5000,
    popular: true,
    type: 'wa_blast',
    features: [
      '5.000 Kontak WhatsApp Blast',
      'Database Tertarget Premium (Usia, Gender, Lokasi)',
      'Support Teks + Gambar + PDF Katalog + Video',
      'Tombol CTA Interaktif (Klik langsung ke WA/Web)',
      'Penjadwalan Waktu Kirim (Morning/Evening Prime Time)',
      'Garansi Pengiriman 100% Valid (Ganti Nomor Tidak Aktif)',
      'Dedicated Account Manager'
    ],
    bonus: [
      'Gratis Konsultasi Strategi Promo 30 Menit',
      'Gratis 500 Nomor Database Cadangan',
      'Gratis Script Auto-Reply Closing CS'
    ],
    ctaText: 'Pilih Paket Best Seller 5.000'
  },
  {
    id: 'wa-10k',
    name: 'Paket Bisnis Pro',
    subtitle: 'Untuk brand agresif, developer properti, F&B, dan klinik kecantikan',
    price: 'Rp 1.199.000',
    originalPrice: 'Rp 2.200.000',
    contactsCount: 10000,
    type: 'wa_blast',
    features: [
      '10.000 Kontak WhatsApp Blast Kecepatan Tinggi',
      'Database Spesifik by Kategori Bisnis (Investor, Sultan, dll)',
      'Multi-Session Blast (Bisa dibagi 2-3 kali jadwal kirim)',
      'Prioritas Antrian Server VIP (Langsung jalan < 1 jam)',
      'Support A/B Testing 2 Materi Copywriting Berbeda',
      'Laporan Real-time Dashboard + Sertifikat Bukti Kirim',
      'Garansi Replika Nomor Gagal 100%'
    ],
    bonus: [
      'Gratis Audit Social Media & SEO Website senilai Rp 1,5 Juta',
      'Gratis 1.500 Kontak Database Tambahan',
      'Gratis Desain Banner Promo WA Blast Premium'
    ],
    ctaText: 'Pesan Paket Pro 10.000 Kontak'
  },
  {
    id: 'wa-100k',
    name: 'Paket Korporat & Event',
    subtitle: 'Solusi massal untuk kampanye nasional, pameran akbar, & franchise',
    price: 'Rp 8.500.000',
    originalPrice: 'Rp 15.000.000',
    contactsCount: 100000,
    type: 'wa_blast',
    features: [
      '100.000 Kontak WhatsApp Blast Dedicated Server',
      'Akses Full Custom Database se-Indonesia',
      'Bisa Dipecah Hingga 10x Jadwal Kampanye Sepanjang Tahun',
      'Masking / Nomor Pengirim Verified (Opsional)',
      'Konsultasi Langsung dengan Tim Strategist Armada ADMS',
      'Laporan Eksekutif Bulanan + Rekomendasi Optimasi',
      'Prioritas Support 24/7 VIP Account Director'
    ],
    bonus: [
      'Gratis Pembuatan Landing Page Promo Promo Eksklusif',
      'Gratis 10.000 Kontak Tambahan',
      'Diskon 30% untuk Jasa Google Ads & Meta Ads Bulanan'
    ],
    ctaText: 'Hubungi VIP Account Korporat'
  },
  {
    id: 'dm-seo',
    name: 'Paket SEO Dominasi Google',
    subtitle: 'Garansi halaman 1 Google untuk kata kunci bisnis Anda',
    price: 'Rp 2.900.000 / bln',
    originalPrice: 'Rp 5.000.000',
    type: 'digital_marketing',
    features: [
      'Optimasi 10 Kata Kunci Utama Bisnis Anda',
      'Audit & Perbaikan On-Page SEO + Speed Booster',
      '10 Artikel Blog SEO Berkwalitas Tinggi per Bulan',
      '5 High-Authority Backlink Media Nasional (DA 50+)',
      'Optimasi Google My Business (Google Maps)',
      'Laporan Ranking Mingguan & Monthly Traffic Growth'
    ],
    bonus: [
      'Gratis Audit Website Kompetitor',
      'Gratis SSL Certificate & Cloudflare Security Setup'
    ],
    ctaText: 'Mulai Dominasi Google Sekarang'
  },
  {
    id: 'dm-ads',
    name: 'Paket Ads Growth All-in-One',
    subtitle: 'Kombinasi Meta Ads (FB/IG) + Google Ads siap menghasilkan lead tiap hari',
    price: 'Rp 3.500.000 / bln',
    originalPrice: 'Rp 6.500.000',
    popular: true,
    type: 'digital_marketing',
    features: [
      'Management Iklan Meta Ads (FB & IG) + Google Search Ads',
      'Pembuatan 6 Konsep Kreatif Iklan (Desain + Video Reels)',
      'Riset Audiens AI + Setup Pixel Tracking & Retargeting',
      'Optimasi Harian oleh Media Buyer Berpengalaman 7 Tahun',
      'Konsultasi Penjualan & Script Closing CS agar Iklan Maksimal',
      'Laporan ROI & Konversi Transparan'
    ],
    bonus: [
      'Gratis Pembuatan 1 Landing Page High-Converting senilai Rp 2,5 Jt',
      'Gratis Voucher Saldo Google Ads senilai Rp 750.000 (Untuk akun baru)'
    ],
    ctaText: 'Ambil Paket Ads Growth Best Seller'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Bpk. Hendra Gunawan',
    role: 'Owner & Founder',
    company: 'Sari Rasa Catering & Wedding Organizer',
    industry: 'UMKM & F&B',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    content: 'Awalnya ragu mau pakai WA Blast karena takut diblokir. Tapi setelah konsultasi sama tim Armada ADMS, dikasih database calon pengantin di Surabaya & Sidoarjo. Baru blast 5.000 nomor, langsung masuk 142 chat WA penanya paket wedding, dan closing 18 paket dalam seminggu! Omzet naik 400% drastis!',
    metric: '+400%',
    metricLabel: 'Kenaikan Omzet Mingguan',
    rating: 5
  },
  {
    id: '2',
    name: 'Ibu Arimbi Pratiwi',
    role: 'Marketing Director',
    company: 'Grand Hills Residence Properti',
    industry: 'Properti & Real Estate',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    content: 'Untuk jualan rumah harga 1 Milyar ke atas, teknik promosi brosur biasa udah nggak mempan. Kami ambil paket kombinasi Google Ads + WA Blast 10.000 database pengusaha Jakarta Selatan dari Armada. Hasilnya luar biasa, jadwal survey show unit penuh selama 3 minggu berturut-turut, sold out 12 unit bulan ini!',
    metric: '12 Unit',
    metricLabel: 'Sold Out dalam 30 Hari',
    rating: 5
  },
  {
    id: '3',
    name: 'dr. Verrel Aditya, Sp.KK',
    role: 'Managing Physician',
    company: 'Aethelgard Aesthetic & Glow Clinic',
    industry: 'Klinik & Salon',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200',
    content: 'Kami pakai layanan SEO Website + Google Review dari Armada ADMS sejak 6 bulan lalu. Sekarang kalau orang cari "Klinik Kecantikan Terbaik di Jakarta Barat", nama klinik kami selalu nomor 1 di Google & Maps! Booking treatment harian meningkat 3x lipat tanpa harus bakar uang iklan tiap hari.',
    metric: '#1 Google',
    metricLabel: 'Ranking Kata Kunci Utama',
    rating: 5
  },
  {
    id: '4',
    name: 'Mas Bayu Dwi Saputra',
    role: 'Project Manager',
    company: 'Soundfest Nusantara 2025',
    industry: 'Event Organizer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    content: 'Masa promo tiket Early Bird cuma 3 hari, butuh ledakan pembeli cepat. Armada ADMS eksekusi WA Blast ke 50.000 nomor anak muda pecinta musik di Jabodetabek & Bandung. Gila, dalam waktu 4 jam server tiket kami hampir down karena ribuan orang langsung klik link CTA di WhatsApp. Tiket ludes 100%!',
    metric: '50.000',
    metricLabel: 'Tiket Sold Out 4 Jam',
    rating: 5
  },
  {
    id: '5',
    name: 'Johan Sebastian',
    role: 'CEO',
    company: 'PT Maju Bersama Logistik (B2B)',
    industry: 'B2B & Manufaktur',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    content: 'Layanan terpercaya sejak kami kenal tahun 2019. Kami rutin blast katalog layanan kargo terbaru ke database manajer pabrik & gudang di kawasan industri Cikarang & Karawang. Open rate-nya mencapai 99%, sangat profesional dan laporannya transparan banget.',
    metric: '99.2%',
    metricLabel: 'Open Rate B2B Decision Maker',
    rating: 5
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Konsultasi & Penentuan Target',
    desc: 'Ceritakan bisnis, produk, & target pasar Anda kepada tim ahli kami via WhatsApp atau Zoom. Kami bantu tentukan strategi & filter database paling tepat.',
    icon: 'MessageSquare'
  },
  {
    step: '02',
    title: 'Penyiapan Materi & Copywriting',
    desc: 'Kirimkan teks promo, gambar, brosur, atau video Anda. Tim copywriter kami akan bantu poles kata-katanya agar memiliki daya bius hipnoselling & tidak dianggap spam.',
    icon: 'Edit3'
  },
  {
    step: '03',
    title: 'Eksekusi Blast / Launching Iklan',
    desc: 'Sistem server dedicated berkecepatan tinggi kami mulai mengirimkan ribuan pesan WA secara personal atau menjalankan kampanye iklan digital Anda di waktu prime time.',
    icon: 'Rocket'
  },
  {
    step: '04',
    title: 'Terima Banjir Order & Laporan Detail',
    desc: 'Siapkan tim admin CS Anda untuk membalas masuknya ratusan chat calon pembeli! Anda juga menerima laporan pengiriman detail bersertifikat.',
    icon: 'CheckSquare'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Keamanan',
    question: 'Apakah nomor WhatsApp bisnis saya aman dari blokir?',
    answer: 'Sangat aman 100%! Sistem pengiriman WA Blast Armada ADMS menggunakan server dedicated kami sendiri (nomor masking/server). Nomor utama bisnis Anda HANYA dicantumkan di dalam pesan sebagai link CTA atau kontak pemesanan, sehingga nomor WhatsApp official Anda tidak akan pernah terkena blokir oleh WhatsApp.'
  },
  {
    category: 'Teknis',
    question: 'Apakah database nomor dari Armada ADMS benar-benar aktif & valid?',
    answer: 'Ya, database kami melalui proses cleansing (pembersihan) dan validasi nomor aktif setiap akhir bulan menggunakan software checker AI. Jika dalam laporan ada nomor yang terdeteksi tidak aktif atau gagal kirim, sistem kami otomatis memberikan GARANSI penggantian kuota nomor secara gratis!'
  },
  {
    category: 'Teknis',
    question: 'Apakah saya bisa menggunakan database kontak dari saya sendiri?',
    answer: 'Tentu saja sangat bisa! Kalau Anda sudah memiliki kumpulan nomor pembeli lama, member, atau prospek dari pameran/iklan sebelumnya, Anda bisa mengirimkan filenya (Excel/CSV) kepada kami. Kami akan bantu bersihkan dari nomor mati dan blast pesan promo Anda dengan harga khusus.'
  },
  {
    category: 'Layanan',
    question: 'Berapa lama waktu proses pengerjaan sejak saya memesan?',
    answer: 'Proses eksekusi sangat cepat, umumnya 1 hingga 3 jam saja setelah materi copywriting dan desain promo disetujui. Untuk jadwal blast, Anda juga bisa request jam pengiriman terbaik (misal: jam 09.00 pagi atau jam 19.00 malam saat jam santai).'
  },
  {
    category: 'Harga & Garansi',
    question: 'Bagaimana sistem pembayaran & apakah ada garansi uang kembali?',
    answer: 'Pembayaran dapat dilakukan melalui transfer rekening perusahaan resmi (BCA/Mandiri) atau QRIS. Kami memberikan garansi transparansi 100%: Anda akan mendapatkan file laporan Excel berisi daftar nomor yang berhasil terkirim. Jika server kami mengalami gangguan dan blast tidak terkirim, uang Anda kembali utuh 100%.'
  },
  {
    category: 'Layanan',
    question: 'Apakah Armada ADMS juga bisa bantu buatkan kata-kata promo (copywriting)?',
    answer: 'Pasti! Setiap pemesanan paket WhatsApp Blast maupun Digital Marketing di Armada ADMS sudah termasuk FREE konsultasi & pembuatan copywriting persuasif oleh tim spesialis kami yang sudah berpengalaman melambungkan konversi ribuan brand.'
  },
  {
    category: 'Layanan',
    question: 'Apa perbedaan WA Blast biasa dengan WA Marketing di Armada ADMS?',
    answer: 'WA Blast biasa seringkali dikirim sembarangan tanpa nama, tanpa filter target, dan terasa seperti spam mengganggu. Di Armada ADMS, kami menerapkan prinsip "Warm Personal Marketing": pesan menyapa nama penerima, database difilter sesuai minat produk Anda, dan copywriting disusun dengan teknik psikologi konsumen agar mereka senang membaca promo Anda.'
  },
  {
    category: 'Harga & Garansi',
    question: 'Bagaimana cara mulai konsultasi untuk menentukan paket yang cocok?',
    answer: 'Sangat mudah! Klik tombol "Konsultasi Gratis via WhatsApp" yang ada di landing page ini. Account Manager kami siap menganalisis kebutuhan bisnis Anda secara gratis tanpa paksaan harus langsung beli.'
  }
];

export const BONUS_CLOSING_SCRIPTS: ClosingScript[] = [
  {
    id: '1',
    title: 'Script Sapaan Pertama (Dari Lead WA Blast)',
    scenario: 'Ketika prospek membalas pesan broadcast dengan kata "Halo, mau tanya dong" atau "Ini apa ya?"',
    category: 'Cold Lead (Blast Pertama)',
    script: `Halo Kak [Nama Prospek]! 😊 Terima kasih banyak sudah merespon pesan kami.\n\nPerkenalkan saya [Nama CS] dari [Nama Brand/Bisnis Anda]. Senang sekali bisa terhubung dengan Kakak.\n\nKebetulan minggu ini kami sedang ada promo spesial [Sebutkan Promo/Diskon, misal: Free Ongkir / Diskon 30% untuk 10 pemesan pertama].\n\nBoleh tahu Kak [Nama Prospek] saat ini sedang mencari [Sebutkan Layanan/Produk, misal: Paket Skincare / Rumah tinggal / Catering event] untuk kebutuhan kapan ya Kak? Agar saya bisa bantu kirimkan rekomendasi katalog terbaiknya. 🙏`,
    tips: 'Selalu sebutkan nama prospek untuk membangun keakraban. Akhiri pesan dengan pertanyaan terbuka (open-ended question) agar prospek mau membalas lagi.'
  },
  {
    id: '2',
    title: 'Script Follow-up Halus (Setelah di-Read 24 Jam Tanpa Balasan)',
    scenario: 'Prospek sudah minta katalog atau harga, tapi setelah dibaca (read) tidak ada kabar lebih lanjut.',
    category: 'Follow Up (Belum Balas)',
    script: `Permisi Kak [Nama Prospek], selamat pagi/siang! 🌟\n\nMelanjutkan obrolan kita kemarin tentang [Sebutkan Produk/Layanan], apakah ada bagian dari katalog atau daftar harga yang ingin Kakak diskusikan lebih lanjut?\n\nJika ada kendala di budget atau spesifikasi, jangan sungkan info ke kami ya Kak, supaya [Nama Brand Anda] bisa bantu carikan alternatif solusi atau penawaran yang paling pas untuk Kakak.\n\nOh ya, untuk kuota promo spesial diskonnya sisa 3 slot lagi untuk minggu ini Kak. Apakah mau saya bantu amankan slotnya dulu hari ini? ☺️`,
    tips: 'Jangan pernah menegur prospek karena tidak membalas. Gunakan pendekatan menawarkan bantuan ("berusaha mencarikan solusi budget") dan sisipkan urgensi halus.'
  },
  {
    id: '3',
    title: 'Script Penawaran Promo & Diskon Kilat (Flash Sale)',
    scenario: 'Mengirimkan penawaran khusus akhir bulan atau promo event ke database kontak lama.',
    category: 'Promo & Diskon Khusus',
    script: `🔥 KABAR GEMBIRA KHUSUS UNTUK KAK [NAMA PROSPEK]! 🔥\n\nSebagai bentuk apresiasi kami kepada pelanggan setia/spesial [Nama Brand Anda], hari ini kami mengadakan flash promo *PAYDAY SALE DISKON HINGGA 40%* + Gratis Voucher Belanja!\n\n✨ Keuntungan khusus hari ini:\n1. [Sebutkan benefit 1, misal: Gratis Biaya Pengiriman]\n2. [Sebutkan benefit 2, misal: Garansi Tukar Baru 30 Hari]\n3. [Sebutkan benefit 3, misal: Bonus Eksklusif senilai Rp 150.000]\n\n⏳ *Promo ini hanya berlaku untuk 15 orang tercepat yang membalas pesan ini dengan ketik: "MAU PROMO"!*\n\nYuk Kak, klik ketik "MAU PROMO" sekarang sebelum kehabisan slotnya ya! 🚀`,
    tips: 'Gunakan format poin (bullet points) agar mudah dibaca cepat di layar HP. Buat call to action (CTA) yang sangat mudah seperti ketik 2 kata saja.'
  },
  {
    id: '4',
    title: 'Script Urgency Closing (Mengatasi Ragu-ragu / Nanti Dulu)',
    scenario: 'Prospek bilang "Boleh deh Kak, tapi saya pikir-pikir dulu ya" atau "Besok ya saya kabari".',
    category: 'Closing & Urgency',
    script: `Baik, tidak apa-apa sama sekali Kak [Nama Prospek], silakan dipertimbangkan dulu dengan tenang dengan keluarga/partner. 😊\n\nSebagai informasi kecil Kak, untuk harga promo Rp [Sebutkan Harga Promo] dan bonus gratisnya kebetulan sistem kami akan otomatis kembali ke harga normal Rp [Sebutkan Harga Normal] pada pukul 23.59 malam ini.\n\nKalau Kak [Nama Prospek] memang sudah cocok dengan produknya, saya bisa bantu *lock / kunci harga promonya dulu* dengan DP ringan hanya Rp [Sebutkan Nominal Kecil, misal: 50.000] saja hari ini. Jadi Kakak tetap bisa dapat harga termurahnya walau pelunasannya baru besok atau lusa.\n\nBagaimana Kak, mau saya bantu kirimkan form pemesanan dan lock harganya sekarang? 🙏✨`,
    tips: 'Teknik "Lock Harga dengan DP Kecil" sangat efektif untuk meruntuhkan keraguan prospek yang menunda transaksi.'
  }
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
  badge?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  contactsCount?: number;
  popular?: boolean;
  features: string[];
  bonus: string[];
  ctaText: string;
  type: 'wa_blast' | 'digital_marketing';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: 'UMKM & F&B' | 'Properti & Real Estate' | 'Klinik & Salon' | 'Event Organizer' | 'B2B & Manufaktur';
  avatar: string;
  content: string;
  metric: string;
  metricLabel: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Keamanan' | 'Teknis' | 'Harga & Garansi' | 'Layanan';
}

export interface ClosingScript {
  id: string;
  title: string;
  scenario: string;
  category: 'Cold Lead (Blast Pertama)' | 'Follow Up (Belum Balas)' | 'Promo & Diskon Khusus' | 'Closing & Urgency';
  script: string;
  tips: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  businessName: string;
  serviceNeeded: string;
  budget: string;
  message: string;
}

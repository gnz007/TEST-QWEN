export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedTime: string;
  icon: string;
  category: 'computer' | 'notebook' | 'console' | 'other';
}

export interface Technician {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  certifications: string[];
  rating: number;
  photo: string;
  availableDays: string[];
}

export interface Appointment {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  serviceId: string;
  technicianId?: string;
  date: string;
  time: string;
  description: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  serviceType: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  validUntil: string;
  badge?: string;
}

export interface GalleryImage {
  id: string;
  before: string;
  after: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: {
    day: string;
    open: string;
    close: string;
  }[];
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

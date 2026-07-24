export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedTime: string;
  category: 'computadora' | 'notebook' | 'consola' | 'mantenimiento' | 'datos' | 'hardware';
  popular?: boolean;
}

export interface Technician {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  certifications: string[];
  availableDays: string[];
  image: string;
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
  verified: boolean;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  validUntil: string;
  services: string[];
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Reparación de Computadoras de Escritorio',
    description: 'Diagnóstico y reparación completa de PCs de escritorio. Incluye hardware y software.',
    price: 45000,
    estimatedTime: '2-3 días hábiles',
    category: 'computadora',
    popular: true,
  },
  {
    id: '2',
    name: 'Reparación de Notebooks/Laptops',
    description: 'Servicio especializado para laptops de todas las marcas. Cambio de pantalla, teclado, batería.',
    price: 55000,
    estimatedTime: '3-5 días hábiles',
    category: 'notebook',
    popular: true,
  },
  {
    id: '3',
    name: 'Reparación de PS4 y Consolas',
    description: 'Reparación de PlayStation 4, Xbox y Nintendo Switch. Problemas de HDMI, sobrecalentamiento, lector.',
    price: 40000,
    estimatedTime: '2-4 días hábiles',
    category: 'consola',
  },
  {
    id: '4',
    name: 'Diagnóstico Técnico',
    description: 'Evaluación completa del equipo para identificar fallas. Se descuenta si se realiza la reparación.',
    price: 15000,
    estimatedTime: '24 horas',
    category: 'mantenimiento',
  },
  {
    id: '5',
    name: 'Mantenimiento Preventivo',
    description: 'Limpieza interna, cambio de pasta térmica, optimización de sistema y actualización de drivers.',
    price: 35000,
    estimatedTime: '1-2 días hábiles',
    category: 'mantenimiento',
    popular: true,
  },
  {
    id: '6',
    name: 'Recuperación de Datos',
    description: 'Recuperación de archivos perdidos o eliminados de discos duros, SSDs y memorias USB.',
    price: 80000,
    estimatedTime: '3-7 días hábiles',
    category: 'datos',
  },
  {
    id: '7',
    name: 'Actualización de Hardware',
    description: 'Instalación de SSD, aumento de RAM, cambio de placa de video u otros componentes.',
    price: 30000,
    estimatedTime: '1-2 días hábiles',
    category: 'hardware',
  },
  {
    id: '8',
    name: 'Limpieza y Optimización de Software',
    description: 'Eliminación de virus, optimización del sistema, instalación de programas y actualizaciones.',
    price: 25000,
    estimatedTime: '24 horas',
    category: 'mantenimiento',
  },
];

export const TECHNICIANS: Technician[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    specialty: 'Computadoras y Notebooks',
    experience: 12,
    rating: 4.9,
    certifications: ['CompTIA A+', 'Microsoft Certified', 'Apple Certified'],
    availableDays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Ana Rodríguez',
    specialty: 'Consolas y Gaming',
    experience: 8,
    rating: 4.8,
    certifications: ['Sony Certified', 'Xbox Specialist'],
    availableDays: ['Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Miguel Torres',
    specialty: 'Recuperación de Datos',
    experience: 15,
    rating: 5.0,
    certifications: ['Data Recovery Pro', 'Forensic Certified'],
    availableDays: ['Lunes', 'Miércoles', 'Viernes'],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
  },
  {
    id: '4',
    name: 'Laura Fernández',
    specialty: 'Hardware y Actualizaciones',
    experience: 10,
    rating: 4.7,
    certifications: ['NVIDIA Certified', 'AMD Specialist'],
    availableDays: ['Lunes', 'Martes', 'Jueves', 'Sábado'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    customerName: 'Roberto García',
    rating: 5,
    comment: 'Excelente servicio! Repararon mi laptop en tiempo récord y quedó como nueva. Muy profesionales.',
    date: '2024-01-15',
    serviceType: 'Reparación de Notebooks',
    verified: true,
  },
  {
    id: '2',
    customerName: 'María López',
    rating: 5,
    comment: 'Recuperaron todos mis datos del disco duro que pensé que estaba perdido. Increíble trabajo!',
    date: '2024-01-10',
    serviceType: 'Recuperación de Datos',
    verified: true,
  },
  {
    id: '3',
    customerName: 'Juan Pérez',
    rating: 4,
    comment: 'Muy buen servicio técnico. Mi PS4 funciona perfecto ahora. Recomendado 100%.',
    date: '2024-01-08',
    serviceType: 'Reparación de Consolas',
    verified: true,
  },
  {
    id: '4',
    customerName: 'Carmen Díaz',
    rating: 5,
    comment: 'El mantenimiento preventivo hizo una gran diferencia. Mi computadora está mucho más rápida.',
    date: '2024-01-05',
    serviceType: 'Mantenimiento Preventivo',
    verified: true,
  },
  {
    id: '5',
    customerName: 'Fernando Ruiz',
    rating: 5,
    comment: 'Atención personalizada y precios justos. Definitivamente volveré cuando lo necesite.',
    date: '2024-01-02',
    serviceType: 'Actualización de Hardware',
    verified: true,
  },
];

export const OFFERS: Offer[] = [
  {
    id: '1',
    title: 'Pack Mantenimiento + Optimización',
    description: 'Mantenimiento preventivo completo más limpieza y optimización de software con un 20% de descuento.',
    originalPrice: 60000,
    discountedPrice: 48000,
    validUntil: '2024-03-31',
    services: ['Mantenimiento Preventivo', 'Limpieza y Optimización'],
    featured: true,
  },
  {
    id: '2',
    title: 'Diagnóstico Gratis con Reparación',
    description: 'Si realizas la reparación con nosotros, el diagnóstico es completamente gratis.',
    originalPrice: 15000,
    discountedPrice: 0,
    validUntil: '2024-12-31',
    services: ['Diagnóstico Técnico'],
  },
  {
    id: '3',
    title: 'Upgrade Completo SSD + RAM',
    description: 'Instalación de SSD de 480GB más 8GB de RAM con mano de obra incluida.',
    originalPrice: 120000,
    discountedPrice: 95000,
    validUntil: '2024-02-28',
    services: ['Actualización de Hardware'],
    featured: true,
  },
];

export const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
];

export const OPENING_HOURS = {
  weekdays: { open: '09:00', close: '19:00' },
  saturday: { open: '09:00', close: '14:00' },
  sunday: 'closed',
};

export const FAQS = [
  {
    question: '¿Cómo agendar una cita?',
    answer: 'Puedes agendar una cita directamente desde nuestra web completando el formulario de reservas. Selecciona el servicio, técnico preferido, fecha y hora disponible. Recibirás una confirmación inmediata.',
  },
  {
    question: '¿Puedo reprogramar mi cita?',
    answer: 'Sí, puedes reprogramar tu cita contactándonos por WhatsApp o teléfono con al menos 24 horas de anticipación. Haremos lo posible por acomodarte en otro horario.',
  },
  {
    question: '¿Cuál es el horario de atención?',
    answer: 'Atendemos de lunes a viernes de 9:00 a 19:00 hs y sábados de 9:00 a 14:00 hs. Domingos y feriados cerramos.',
  },
  {
    question: '¿Ofrecen servicio a domicilio?',
    answer: 'Actualmente no ofrecemos servicio a domicilio, pero puedes dejar tu equipo en nuestro taller y te avisamos cuando esté listo. También coordinamos retiro y entrega por courier con costo adicional.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos efectivo, tarjetas de crédito y débito, transferencias bancarias y Mercado Pago. También ofrecemos hasta 3 cuotas sin interés en tarjetas seleccionadas.',
  },
  {
    question: '¿Cuál es la garantía de las reparaciones?',
    answer: 'Todas nuestras reparaciones tienen 90 días de garantía. Si el mismo problema vuelve a aparecer dentro de ese período, lo solucionamos sin costo adicional.',
  },
  {
    question: '¿Cuánto tiempo demora una reparación típica?',
    answer: 'Depende del tipo de reparación. Diagnósticos toman 24 horas, mantenimientos 1-2 días, reparaciones complejas 3-5 días hábiles. Te daremos un estimado preciso tras evaluar tu equipo.',
  },
];

export const GALLERY_IMAGES = [
  { id: '1', before: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600', after: 'https://images.unsplash.com/photo-1547082299-de196ea013d0?w=600', title: 'Reparación de Notebook' },
  { id: '2', before: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600', after: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600', title: 'Limpieza de PC Gamer' },
  { id: '3', before: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=600', after: 'https://images.unsplash.com/photo-1592478411213-61535fdd861d?w=600', title: 'Reparación de PS4' },
  { id: '4', before: 'https://images.unsplash.com/photo-1588872657578-a3d2af9f8a73?w=600', after: 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=600', title: 'Actualización de Hardware' },
  { id: '5', before: 'https://images.unsplash.com/photo-1597872250977-4797bf5b5fb1?w=600', after: 'https://images.unsplash.com/photo-1587202453290-1ddb785205a6?w=600', title: 'Recuperación de Datos' },
  { id: '6', before: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600', after: 'https://images.unsplash.com/photo-1588872657578-a3d2af9f8a73?w=600', title: 'Mantenimiento Preventivo' },
];

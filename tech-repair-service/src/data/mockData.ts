import { Service, Technician, Review, FAQ, Offer, GalleryImage, ContactInfo } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Reparación de Computadoras de Escritorio',
    description: 'Diagnóstico y reparación completa de PCs de escritorio. Solucionamos problemas de hardware y software.',
    price: 45000,
    estimatedTime: '2-3 días',
    icon: 'monitor',
    category: 'computer'
  },
  {
    id: '2',
    name: 'Reparación de Notebooks/Laptops',
    description: 'Reparación especializada en notebooks. Cambio de pantalla, teclado, batería y más.',
    price: 55000,
    estimatedTime: '3-5 días',
    icon: 'laptop',
    category: 'notebook'
  },
  {
    id: '3',
    name: 'Reparación de PS4 y Consolas',
    description: 'Servicio técnico para PlayStation 4, Xbox y otras consolas. Limpieza, reparación de HDMI, sobrecalentamiento.',
    price: 40000,
    estimatedTime: '2-4 días',
    icon: 'gamepad',
    category: 'console'
  },
  {
    id: '4',
    name: 'Diagnóstico Técnico',
    description: 'Evaluación completa del equipo para identificar fallas. El costo se descuenta si aceptas la reparación.',
    price: 15000,
    estimatedTime: '24 horas',
    icon: 'stethoscope',
    category: 'other'
  },
  {
    id: '5',
    name: 'Mantenimiento Preventivo',
    description: 'Limpieza interna, cambio de pasta térmica, optimización del sistema para prevenir futuras fallas.',
    price: 35000,
    estimatedTime: '1-2 días',
    icon: 'shield-check',
    category: 'computer'
  },
  {
    id: '6',
    name: 'Recuperación de Datos',
    description: 'Recuperación de archivos perdidos o eliminados de discos duros, SSDs y memorias.',
    price: 80000,
    estimatedTime: '3-7 días',
    icon: 'hard-drive',
    category: 'other'
  },
  {
    id: '7',
    name: 'Actualización de Hardware',
    description: 'Mejora el rendimiento de tu equipo con SSD, más RAM, tarjeta gráfica u otros componentes.',
    price: 30000,
    estimatedTime: '1-2 días',
    icon: 'cpu',
    category: 'computer'
  },
  {
    id: '8',
    name: 'Limpieza y Optimización de Software',
    description: 'Eliminación de virus, optimización del sistema, instalación de programas y actualizaciones.',
    price: 25000,
    estimatedTime: '1 día',
    icon: 'sparkles',
    category: 'other'
  },
  {
    id: '9',
    name: 'Cambio de Piezas',
    description: 'Reemplazo de componentes dañados: batería, pantalla, teclado, disco duro, fuente de poder.',
    price: 35000,
    estimatedTime: '2-3 días',
    icon: 'wrench',
    category: 'notebook'
  },
  {
    id: '10',
    name: 'Instalación de Sistema Operativo',
    description: 'Instalación limpia de Windows, Linux o macOS con todos los drivers y programas esenciales.',
    price: 20000,
    estimatedTime: '1 día',
    icon: 'download',
    category: 'other'
  }
];

export const technicians: Technician[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    specialty: 'Computadoras y Notebooks',
    experience: 8,
    certifications: ['CompTIA A+', 'Microsoft Certified', 'Apple Certified'],
    rating: 4.9,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    availableDays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
  },
  {
    id: '2',
    name: 'Ana Rodríguez',
    specialty: 'Consolas y Gaming',
    experience: 5,
    certifications: ['Sony Certified Technician', 'Xbox Specialist'],
    rating: 4.8,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    availableDays: ['Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  },
  {
    id: '3',
    name: 'Miguel Torres',
    specialty: 'Recuperación de Datos',
    experience: 10,
    certifications: ['Data Recovery Specialist', 'Hard Drive Expert'],
    rating: 5.0,
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    availableDays: ['Lunes', 'Miércoles', 'Viernes']
  },
  {
    id: '4',
    name: 'Laura Fernández',
    specialty: 'Software y Optimización',
    experience: 6,
    certifications: ['Microsoft Certified', 'Linux Professional'],
    rating: 4.7,
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    availableDays: ['Lunes', 'Martes', 'Jueves', 'Sábado']
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    customerName: 'Roberto García',
    rating: 5,
    comment: 'Excelente servicio. Mi notebook quedó como nueva después de cambiarle la pantalla. Muy profesionales y rápidos.',
    date: '2024-01-15',
    serviceType: 'Reparación de Notebooks'
  },
  {
    id: '2',
    customerName: 'María López',
    rating: 5,
    comment: 'Recuperaron todos mis datos del disco duro que pensé que estaba perdido. ¡Increíble trabajo! Totalmente recomendados.',
    date: '2024-01-10',
    serviceType: 'Recuperación de Datos'
  },
  {
    id: '3',
    customerName: 'Juan Pérez',
    rating: 4,
    comment: 'Muy buen servicio técnico para mi PS4. La limpieza solucionó el problema de sobrecalentamiento. Volveré si lo necesito.',
    date: '2024-01-05',
    serviceType: 'Reparación de Consolas'
  },
  {
    id: '4',
    customerName: 'Carla Martínez',
    rating: 5,
    comment: 'Actualizaron mi PC con un SSD y más RAM. Ahora vuela. El precio fue justo y el servicio excelente.',
    date: '2023-12-28',
    serviceType: 'Actualización de Hardware'
  },
  {
    id: '5',
    customerName: 'Diego Sánchez',
    rating: 5,
    comment: 'El diagnóstico fue preciso y me explicaron todo claramente. Sin dudas el mejor servicio técnico de la zona.',
    date: '2023-12-20',
    serviceType: 'Diagnóstico Técnico'
  }
];

export const faqs: FAQ[] = [
  {
    question: '¿Cómo agendar una cita?',
    answer: 'Puedes agendar una cita fácilmente a través de nuestro formulario online en la sección "Reservar Cita". Selecciona el servicio, técnico preferido, fecha y hora disponible. También puedes contactarnos por WhatsApp o teléfono.'
  },
  {
    question: '¿Puedo reprogramar mi cita?',
    answer: 'Sí, puedes reprogramar tu cita sin cargo hasta 24 horas antes. Contáctanos por teléfono, WhatsApp o email con al menos un día de anticipación.'
  },
  {
    question: '¿Cuál es el horario de atención?',
    answer: 'Atendemos de Lunes a Viernes de 9:00 a 19:00 hs y Sábados de 9:00 a 13:00 hs. Domingos y feriados cerrados.'
  },
  {
    question: '¿Ofrecen servicio a domicilio?',
    answer: 'Sí, ofrecemos servicio a domicilio para diagnósticos básicos y mantenimiento preventivo dentro de un radio de 10km. Consulta costos adicionales.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos efectivo, tarjetas de crédito y débito (hasta 3 cuotas sin interés), transferencia bancaria y Mercado Pago.'
  },
  {
    question: '¿Cuál es la garantía de las reparaciones?',
    answer: 'Todas nuestras reparaciones tienen 90 días de garantía. Si el mismo problema reaparece, lo solucionamos sin cargo adicional.'
  },
  {
    question: '¿Cuánto tiempo demora una reparación típica?',
    answer: 'Depende del servicio. Diagnósticos: 24hs. Reparaciones simples: 2-3 días. Recuperación de datos: 3-7 días. Te informaremos el tiempo estimado tras el diagnóstico.'
  },
  {
    question: '¿Hacen presupuesto sin cargo?',
    answer: 'El diagnóstico tiene un costo que se descuenta totalmente si aceptas realizar la reparación con nosotros. Así no pierdes dinero.'
  }
];

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Pack Mantenimiento + Optimización',
    description: 'Limpieza interna completa, cambio de pasta térmica y optimización de software. Ideal para mejorar el rendimiento.',
    originalPrice: 60000,
    discountedPrice: 50000,
    validUntil: '2024-02-28',
    badge: 'Más Popular'
  },
  {
    id: '2',
    title: 'Diagnóstico + Reparación Combo',
    description: 'Diagnóstico completo más reparación básica. Ahorra en el costo del diagnóstico.',
    originalPrice: 60000,
    discountedPrice: 52000,
    validUntil: '2024-02-28',
    badge: 'Ahorro 15%'
  },
  {
    id: '3',
    title: 'Actualización SSD + Instalación',
    description: 'Incluye SSD de 480GB, clonado de datos e instalación. Tu PC volará.',
    originalPrice: 95000,
    discountedPrice: 79000,
    validUntil: '2024-03-15',
    badge: 'Oferta Limitada'
  },
  {
    id: '4',
    title: 'Limpieza de Consola + 3 Juegos',
    description: 'Limpieza profunda de tu PS4/Xbox más instalación de 3 juegos a elección.',
    originalPrice: 55000,
    discountedPrice: 45000,
    validUntil: '2024-02-20',
    badge: 'Gaming'
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    before: 'https://images.unsplash.com/photo-1597872250969-bc5a75c95e04?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&h=400&fit=crop',
    title: 'Restauración de Notebook',
    description: 'Notebook con daños por líquido completamente restaurada'
  },
  {
    id: '2',
    before: 'https://images.unsplash.com/photo-1593640408182-31c70c826695?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&h=400&fit=crop',
    title: 'PC Gaming Actualizada',
    description: 'Actualización completa con nueva GPU y refrigeración líquida'
  },
  {
    id: '3',
    before: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1593640408182-31c70c826695?w=600&h=400&fit=crop',
    title: 'Limpieza de PS4',
    description: 'Consola con sobrecalentamiento solucionado tras limpieza profunda'
  },
  {
    id: '4',
    before: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&h=400&fit=crop',
    title: 'Reparación de Placa Madre',
    description: 'Placa madre reparada con componentes reemplazados'
  },
  {
    id: '5',
    before: 'https://images.unsplash.com/photo-1544731612-de7f061e71f1?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1593640408182-31c70c826695?w=600&h=400&fit=crop',
    title: 'Setup Organizado',
    description: 'Organización de cables y optimización de espacio'
  },
  {
    id: '6',
    before: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&h=400&fit=crop',
    title: 'Recuperación de Datos',
    description: 'Disco duro dañado con datos recuperados exitosamente'
  }
];

export const contactInfo: ContactInfo = {
  phone: '+54 11 1234-5678',
  whatsapp: '+54 9 11 1234-5678',
  email: 'contacto@techrepair.com',
  address: 'Av. Tecnológica 1234, Ciudad Digital',
  hours: [
    { day: 'Lunes', open: '09:00', close: '19:00' },
    { day: 'Martes', open: '09:00', close: '19:00' },
    { day: 'Miércoles', open: '09:00', close: '19:00' },
    { day: 'Jueves', open: '09:00', close: '19:00' },
    { day: 'Viernes', open: '09:00', close: '19:00' },
    { day: 'Sábado', open: '09:00', close: '13:00' },
    { day: 'Domingo', open: 'Cerrado', close: 'Cerrado' }
  ],
  socialLinks: [
    { platform: 'Facebook', url: 'https://facebook.com/techrepair' },
    { platform: 'Instagram', url: 'https://instagram.com/techrepair' },
    { platform: 'Twitter', url: 'https://twitter.com/techrepair' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/techrepair' }
  ]
};

export const timeSlots: string[] = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
];

export const holidays: string[] = [
  '2024-01-01', // Año Nuevo
  '2024-02-12', // Carnaval
  '2024-02-13', // Carnaval
  '2024-03-24', // Día de la Memoria
  '2024-03-29', // Viernes Santo
  '2024-04-02', // Malvinas
  '2024-05-01', // Trabajador
  '2024-05-25', // Revolución de Mayo
  '2024-06-17', // Güemes
  '2024-06-20', // Belgrano
  '2024-07-09', // Independencia
  '2024-08-17', // San Martín
  '2024-10-12', // Diversidad Cultural
  '2024-11-20', // Soberanía
  '2024-12-08', // Inmaculada Concepción
  '2024-12-25', // Navidad
];

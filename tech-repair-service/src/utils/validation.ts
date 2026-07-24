import { z } from 'zod';

export const appointmentSchema = z.object({
  customerName: z.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre es demasiado largo'),
  phone: z.string()
    .min(8, 'El teléfono debe tener al menos 8 dígitos')
    .regex(/^[\d\s\-\+\(\)]+$/, 'Formato de teléfono inválido'),
  email: z.string()
    .email('Email inválido')
    .min(5, 'Email muy corto'),
  serviceId: z.string()
    .min(1, 'Debes seleccionar un servicio'),
  technicianId: z.string().optional(),
  date: z.string()
    .min(1, 'Debes seleccionar una fecha'),
  time: z.string()
    .min(1, 'Debes seleccionar un horario'),
  description: z.string()
    .max(500, 'La descripción no puede exceder los 500 caracteres')
    .optional()
});

export const contactFormSchema = z.object({
  name: z.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string()
    .email('Email inválido'),
  phone: z.string()
    .min(8, 'El teléfono debe tener al menos 8 dígitos'),
  subject: z.string()
    .min(3, 'El asunto debe tener al menos 3 caracteres'),
  message: z.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder los 1000 caracteres')
});

export const reviewSchema = z.object({
  customerName: z.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres'),
  rating: z.number()
    .min(1, 'Debes calificar con al menos 1 estrella')
    .max(5, 'La calificación máxima es 5 estrellas'),
  comment: z.string()
    .min(10, 'El comentario debe tener al menos 10 caracteres')
    .max(500, 'El comentario no puede exceder los 500 caracteres'),
  serviceType: z.string()
    .min(1, 'Debes seleccionar un tipo de servicio')
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ReviewFormData = z.infer<typeof reviewSchema>;

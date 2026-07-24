import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export function formatTime(time: string): string {
  return time;
}

export function getDayName(date: Date): string {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  return days[date.getDay()];
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

export function isHoliday(date: Date): boolean {
  const dateStr = date.toISOString().split('T')[0];
  const holidays: string[] = [
    '2024-01-01',
    '2024-02-12',
    '2024-02-13',
    '2024-03-24',
    '2024-03-29',
    '2024-04-02',
    '2024-05-01',
    '2024-05-25',
    '2024-06-17',
    '2024-06-20',
    '2024-07-09',
    '2024-08-17',
    '2024-10-12',
    '2024-11-20',
    '2024-12-08',
    '2024-12-25',
  ];
  return holidays.includes(dateStr);
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]{8,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

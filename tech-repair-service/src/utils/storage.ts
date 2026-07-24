import { Appointment } from '@/types';

const STORAGE_KEY = 'techrepair_appointments';

export const appointmentStorage = {
  getAll(): Appointment[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading appointments:', error);
      return [];
    }
  },

  save(appointment: Appointment): void {
    try {
      const appointments = this.getAll();
      appointments.push(appointment);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
    } catch (error) {
      console.error('Error saving appointment:', error);
      throw new Error('No se pudo guardar la reserva. Por favor intenta nuevamente.');
    }
  },

  update(appointment: Appointment): void {
    try {
      const appointments = this.getAll();
      const index = appointments.findIndex(a => a.id === appointment.id);
      if (index !== -1) {
        appointments[index] = appointment;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
      }
    } catch (error) {
      console.error('Error updating appointment:', error);
      throw new Error('No se pudo actualizar la reserva.');
    }
  },

  delete(id: string): void {
    try {
      const appointments = this.getAll();
      const filtered = appointments.filter(a => a.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    } catch (error) {
      console.error('Error deleting appointment:', error);
      throw new Error('No se pudo eliminar la reserva.');
    }
  },

  getByDate(date: string): Appointment[] {
    const appointments = this.getAll();
    return appointments.filter(a => a.date === date);
  },

  isSlotAvailable(date: string, time: string): boolean {
    const appointments = this.getByDate(date);
    return !appointments.some(a => a.time === time && a.status !== 'cancelled');
  },

  getAvailableSlots(date: string): string[] {
    const allSlots = [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
      '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
    ];
    
    const bookedSlots = this.getByDate(date)
      .filter(a => a.status !== 'cancelled')
      .map(a => a.time);
    
    return allSlots.filter(slot => !bookedSlots.includes(slot));
  }
};

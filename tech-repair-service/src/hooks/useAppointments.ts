import { useState, useEffect, useCallback } from 'react';
import type { Appointment } from '../data/mockData';

const STORAGE_KEY = 'tech-repair-appointments';

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setAppointments(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading appointments:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveAppointments = useCallback((newAppointments: Appointment[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newAppointments));
      setAppointments(newAppointments);
    } catch (error) {
      console.error('Error saving appointments:', error);
      throw error;
    }
  }, []);

  const addAppointment = useCallback((appointment: Omit<Appointment, 'id' | 'status' | 'createdAt'>) => {
    const newAppointment: Appointment = {
      ...appointment,
      id: `apt-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    
    const updated = [...appointments, newAppointment];
    saveAppointments(updated);
    return newAppointment;
  }, [appointments, saveAppointments]);

  const updateAppointmentStatus = useCallback((id: string, status: Appointment['status']) => {
    const updated = appointments.map(apt => 
      apt.id === id ? { ...apt, status } : apt
    );
    saveAppointments(updated);
  }, [appointments, saveAppointments]);

  const deleteAppointment = useCallback((id: string) => {
    const updated = appointments.filter(apt => apt.id !== id);
    saveAppointments(updated);
  }, [appointments, saveAppointments]);

  const getAvailableSlots = useCallback((date: string) => {
    const bookedSlots = appointments
      .filter(apt => apt.date === date && apt.status !== 'cancelled')
      .map(apt => apt.time);
    
    return bookedSlots;
  }, [appointments]);

  return {
    appointments,
    isLoading,
    addAppointment,
    updateAppointmentStatus,
    deleteAppointment,
    getAvailableSlots,
  };
}

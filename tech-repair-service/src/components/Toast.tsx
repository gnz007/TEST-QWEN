import { X } from 'lucide-react';
import { cn } from '../utils/helpers';

interface ToastProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: (id: string) => void;
}

export function Toast({ id, message, type, onClose }: ToastProps) {
  const styles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-primary-600',
  };

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
  };

  return (
    <div
      className={cn(
        'flex items-center justify-between px-4 py-3 rounded-lg shadow-lg text-white min-w-[300px] max-w-md animate-slide-up',
        styles[type]
      )}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold">{icons[type]}</span>
        <p className="text-sm font-medium">{message}</p>
      </div>
      <button
        onClick={() => onClose(id)}
        className="ml-4 hover:opacity-75 transition-opacity"
        aria-label="Cerrar notificación"
      >
        <X size={18} />
      </button>
    </div>
  );
}

interface ToastContainerProps {
  toasts: ToastProps[];
  onClose: (id: string) => void;
}

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map(toast => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  );
}

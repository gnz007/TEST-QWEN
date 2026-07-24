import { Monitor, Laptop, Gamepad, Stethoscope, ShieldCheck, HardDrive, Cpu, Sparkles, Wrench, Download } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  monitor: Monitor,
  laptop: Laptop,
  gamepad: Gamepad,
  stethoscope: Stethoscope,
  'shield-check': ShieldCheck,
  'hard-drive': HardDrive,
  cpu: Cpu,
  sparkles: Sparkles,
  wrench: Wrench,
  download: Download,
};

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedTime: string;
  icon: string;
  onBook?: () => void;
}

export function ServiceCard({ id, name, description, price, estimatedTime, icon, onBook }: ServiceCardProps) {
  const Icon = iconMap[icon] || Monitor;

  return (
    <div className="card p-6 group">
      {/* Icon */}
      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon size={28} className="text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-metallic-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {name}
      </h3>
      <p className="text-metallic-600 dark:text-metallic-400 text-sm mb-4 line-clamp-2">
        {description}
      </p>

      {/* Meta Info */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-2xl font-bold text-primary-600">${price.toLocaleString('es-AR')}</span>
        </div>
        <div className="text-right">
          <span className="text-xs text-metallic-500 dark:text-metallic-400 block">Tiempo estimado</span>
          <span className="text-sm font-medium text-metallic-700 dark:text-metallic-300">{estimatedTime}</span>
        </div>
      </div>

      {/* Action Button */}
      {onBook && (
        <button
          onClick={onBook}
          className="w-full btn-primary text-sm"
        >
          Agendar este servicio
        </button>
      )}
    </div>
  );
}

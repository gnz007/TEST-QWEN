import { Star } from 'lucide-react';

interface ReviewCardProps {
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  serviceType: string;
}

export function ReviewCard({ customerName, rating, comment, date, serviceType }: ReviewCardProps) {
  return (
    <div className="card p-6">
      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-metallic-300 dark:text-metallic-600'}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-metallic-700 dark:text-metallic-300 mb-4 italic">"{comment}"</p>

      {/* Meta */}
      <div className="flex items-center justify-between pt-4 border-t border-metallic-200 dark:border-metallic-800">
        <div>
          <span className="font-semibold text-metallic-900 dark:text-white">{customerName}</span>
          <p className="text-xs text-metallic-500 dark:text-metallic-400">{serviceType}</p>
        </div>
        <span className="text-xs text-metallic-400">
          {new Date(date).toLocaleDateString('es-AR', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </span>
      </div>
    </div>
  );
}

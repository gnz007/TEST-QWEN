import { motion } from 'framer-motion';

interface TechnicianCardProps {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  certifications: string[];
  rating: number;
  photo: string;
  availableDays: string[];
}

export function TechnicianCard({
  name,
  specialty,
  experience,
  certifications,
  rating,
  photo,
  availableDays,
}: TechnicianCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card overflow-hidden group"
    >
      {/* Photo */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/95 dark:bg-metallic-900/95 px-3 py-1 rounded-full flex items-center space-x-1">
          <span className="text-yellow-500">★</span>
          <span className="font-semibold text-metallic-900 dark:text-white">{rating}</span>
        </div>

        {/* Name Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-white/80 text-sm">{specialty}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Experience */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs text-metallic-500 dark:text-metallic-400 block">Experiencia</span>
            <span className="text-lg font-semibold text-metallic-900 dark:text-white">{experience} años</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-metallic-500 dark:text-metallic-400 block">Certificaciones</span>
            <span className="text-sm font-medium text-primary-600">{certifications.length}</span>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {certifications.slice(0, 3).map((cert, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs rounded-md"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Available Days */}
        <div>
          <span className="text-xs text-metallic-500 dark:text-metallic-400 block mb-2">Días disponibles</span>
          <div className="flex flex-wrap gap-1">
            {availableDays.map((day) => (
              <span
                key={day}
                className="px-2 py-1 bg-metallic-100 dark:bg-metallic-800 text-metallic-600 dark:text-metallic-300 text-xs rounded"
              >
                {day.slice(0, 3)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

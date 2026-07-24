import { cn } from '../utils/helpers';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function Select({ label, error, options, className = '', id, ...props }: SelectProps) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium text-metal-700 dark:text-metal-300 mb-1">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={cn(
          'w-full px-4 py-2.5 border rounded-lg transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
          'bg-white dark:bg-metal-800 text-metal-900 dark:text-metal-100',
          error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-metal-300 dark:border-metal-600 hover:border-metal-400 dark:hover:border-metal-500',
          className
        )}
        {...props}
      >
        <option value="">Seleccionar...</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}

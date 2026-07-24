import { cn } from '../utils/helpers';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', id, ...props }: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-metal-700 dark:text-metal-300 mb-1">
          {label}
        </label>
      )}
      <input
        id={inputId}
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
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}

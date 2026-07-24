import { cn } from '../utils/helpers';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ label, error, className = '', id, ...props }: TextareaProps) {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-metal-700 dark:text-metal-300 mb-1">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={cn(
          'w-full px-4 py-2.5 border rounded-lg transition-all duration-200 resize-none',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
          'bg-white dark:bg-metal-800 text-metal-900 dark:text-metal-100',
          error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-metal-300 dark:border-metal-600 hover:border-metal-400 dark:hover:border-metal-500',
          className
        )}
        rows={4}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}

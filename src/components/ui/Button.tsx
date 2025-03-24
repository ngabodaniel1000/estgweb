
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    icon,
    iconPosition = 'left',
    disabled,
    children,
    ...props
  }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-estg-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-estg-blue text-white hover:bg-estg-blue-dark': variant === 'primary',
            'bg-estg-gray-light text-foreground hover:bg-estg-gray-medium': variant === 'secondary',
            'border border-estg-gray-medium bg-transparent hover:bg-estg-gray-light': variant === 'outline',
            'bg-transparent hover:bg-estg-gray-light': variant === 'ghost',
            'text-xs px-3 py-1.5 rounded-md': size === 'sm',
            'text-sm px-4 py-2 rounded-md': size === 'md',
            'text-base px-6 py-3 rounded-md': size === 'lg',
            'gap-1.5': !!icon && iconPosition === 'left',
            'flex-row-reverse gap-1.5': !!icon && iconPosition === 'right',
          },
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : icon}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

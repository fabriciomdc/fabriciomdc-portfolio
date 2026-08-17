import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

export const Button = ({ children, variant = 'primary', size = 'md', onClick }: ButtonProps) => {
  return (
    <button
      className={cn(
        'font-display font-medium rounded-lg transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-violet focus:ring-offset-2 focus:ring-offset-background',
        {
          'bg-violet text-foreground hover:bg-purple': variant === 'primary',
          'bg-surface-2 text-foreground border border-border hover:bg-surface': variant === 'secondary',
          'bg-transparent text-muted hover:text-foreground hover:bg-surface-2': variant === 'ghost'
        },
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg'
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

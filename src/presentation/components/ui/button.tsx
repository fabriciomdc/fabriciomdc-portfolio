import * as React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'technical'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'group relative inline-flex h-12 items-center justify-center',
          'px-6 font-mono text-xs font-medium uppercase tracking-[0.15em]',
          'transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet',
          'disabled:pointer-events-none disabled:opacity-50',

          variant === 'default' && [
            'bg-violet text-white',
            'border border-purple',
            'shadow-[4px_4px_0_0_#3B82F6]',
            'hover:translate-x-[2px] hover:translate-y-[2px]',
            'hover:shadow-[2px_2px_0_0_#3B82F6]'
          ],

          variant === 'outline' && [
            'bg-transparent text-foreground',
            'border border-border',
            'shadow-[3px_3px_0_0_#272B36]',
            'hover:border-violet',
            'hover:text-purple',
            'hover:translate-x-[2px] hover:translate-y-[2px]',
            'hover:shadow-[1px_1px_0_0_#7C3AED]'
          ],

          variant === 'technical' && [
            'bg-surface text-muted',
            'border border-border',
            'hover:border-blue',
            'hover:text-blue'
          ],

          className
        )}
        {...props}
      >
        <span>{children}</span>

        <span
          className={cn(
            'ml-4 transition-transform duration-200',
            'group-hover:translate-x-1'
          )}
        >
          →
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }

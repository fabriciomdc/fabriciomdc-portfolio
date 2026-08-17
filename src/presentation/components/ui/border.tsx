import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const borderVariants = cva(
  "relative bg-background text-foreground",
  {
    variants: {
      variant: {
        simple:
          'border-2 border-border',
        rough:
          'border-2 border-border [border-image:repeating-linear-gradient(45deg,transparent,transparent_3px,var(--muted-foreground)33_3px,var(--muted-foreground)33_6px)_1]',
        double:
          'border-2 border-border shadow-[inset_0_0_0_6px_var(--background),inset_0_0_0_7px_var(--muted-foreground)]',
        dashed:
          'border-2 border-dashed border-border'
      }
    },
    defaultVariants: {
      variant: 'simple'
    }
  }
)

interface BorderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof borderVariants> {}

const Border = React.forwardRef<HTMLDivElement, BorderProps>(
  ({ className, variant = 'simple', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(borderVariants({ variant, className }))}
        style={{ padding: '4% 3%' }}
        {...props}
      >
        {variant === 'rough' && (
          <>
            <div className="absolute top-0 left-0 h-full w-px bg-muted-foreground/30" />
            <div className="absolute top-0 right-0 h-full w-px bg-muted-foreground/30" />
            <div className="absolute top-0 left-0 h-px w-full bg-muted-foreground/30" />
            <div className="absolute bottom-0 left-0 h-px w-full bg-muted-foreground/30" />
          </>
        )}
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)

Border.displayName = 'Border'

export { Border, borderVariants }

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const typographyVariants = cva('tracking-tight', {
  variants: {
    variant: {
      h1: 'font-display text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.03em]',
      h2: 'font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.02em]',
      h3: 'font-display text-[clamp(1.5rem,3vw,2.25rem)] font-black uppercase leading-[0.95]',
      h4: 'font-display text-xl font-bold uppercase',
      h5: 'font-display text-base font-bold uppercase tracking-[0.05em]',
      h6: 'font-mono text-xs font-bold uppercase tracking-[0.15em]',
      body: 'text-base leading-relaxed text-muted-foreground',
      'body-lg': 'text-lg leading-relaxed text-muted-foreground',
      'body-sm': 'text-sm leading-relaxed text-muted-foreground',
      'body-xs': 'text-xs leading-relaxed text-muted-foreground',
      lead: 'text-xl leading-relaxed text-muted-foreground',
      label: 'font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground',
      caption: 'font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground',
      blockquote: 'border-l-4 border-foreground pl-6 italic text-muted-foreground',
      code: 'font-mono text-sm bg-secondary px-2 py-1 border border-border',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
})

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'blockquote' | 'code' | 'pre'

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  as?: TypographyElement
  className?: string
  children?: React.ReactNode
}

const variantElementMap: Record<string, TypographyElement> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  'body-lg': 'p',
  'body-sm': 'p',
  'body-xs': 'p',
  lead: 'p',
  label: 'span',
  caption: 'span',
  blockquote: 'blockquote',
  code: 'code',
}

function Typography({ className, variant, as, children, ...props }: TypographyProps) {
  const Component = as || variantElementMap[variant || 'body'] || 'p'

  return (
    <Component
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    >
      {children}
    </Component>
  )
}

Typography.displayName = 'Typography'

export { Typography, typographyVariants }

import { cn } from '@/lib/utils'

interface ComicFrameProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
}

export function ComicFrame({
  children,
  className,
  innerClassName
}: ComicFrameProps) {
  return (
    <div className={cn('relative bg-background border-2 border-foreground', className)}>
      <div className="absolute inset-0 translate-x-1 translate-y-1 bg-foreground/10" />
      <div className={cn('relative', innerClassName)}>
        {children}
      </div>
    </div>
  )
}

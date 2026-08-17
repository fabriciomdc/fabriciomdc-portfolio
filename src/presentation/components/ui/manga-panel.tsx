import React from 'react'
import { cn } from '@/lib/utils'

interface MangaPanelProps {
  children: React.ReactNode
  className?: string
  number?: string
}

export function MangaPanel({ children, className, number = '01' }: MangaPanelProps) {
  return (
    <div
      className={cn(
        "relative p-[2px] bg-foreground rounded-sm shadow-2xl",
        className
      )}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'
      }}
    >
      <div
        className="relative bg-background p-6 overflow-hidden"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 19px), calc(100% - 19px) 100%, 0 100%)'
        }}
      >
        <div className="relative z-10">
          {children}
        </div>

        <div className="absolute top-0 left-4 bg-foreground px-2 py-0.5 text-[10px] font-mono text-background uppercase tracking-widest flex items-center gap-1 z-20">
          <span className="w-1.5 h-1.5 bg-violet inline-block" />
          {number}
        </div>

        <div className="absolute top-2 right-2 text-foreground/30 font-mono text-xs select-none z-20">
          +
        </div>

        <svg
          className="absolute -top-3 -left-3 w-16 h-16 fill-foreground z-20 pointer-events-none"
          viewBox="0 0 100 100"
        >
          <path d="M50 0 C35 15, 10 10, 0 45 C15 35, 15 55, 35 45 C20 60, 5 70, 20 95 C35 75, 55 85, 45 45 C65 55, 80 40, 95 20 C75 15, 65 0, 50 0 Z" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="6" cy="26" r="2.5" />
          <circle cx="26" cy="6" r="3" />
        </svg>

        <svg
          className="absolute -bottom-4 -right-4 w-20 h-20 fill-foreground z-20 pointer-events-none rotate-180"
          viewBox="0 0 100 100"
        >
          <path d="M50 0 C35 15, 10 10, 0 45 C15 35, 15 55, 35 45 C20 60, 5 70, 20 95 C35 75, 55 85, 45 45 C65 55, 80 40, 95 20 C75 15, 65 0, 50 0 Z" />
          <circle cx="10" cy="15" r="5" />
          <circle cx="20" cy="8" r="3" />
        </svg>

        <svg
          className="absolute top-1/3 -right-2 w-6 h-10 fill-foreground z-20 pointer-events-none"
          viewBox="0 0 50 100"
        >
          <path d="M0 10 C20 15, 35 5, 45 35 C25 40, 40 65, 15 75 C5 60, 0 65, 0 10 Z" />
          <circle cx="38" cy="12" r="2.5" />
          <circle cx="42" cy="50" r="3" />
        </svg>

        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--foreground) 1px, transparent 1px)',
            backgroundSize: '8px 8px'
          }}
        />

        <div className="absolute bottom-1 right-1 text-[10px] text-foreground/40 font-mono tracking-tighter pointer-events-none z-20">
          // {number}
        </div>
      </div>
    </div>
  )
}

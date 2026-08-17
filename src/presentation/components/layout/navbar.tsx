import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Contact', href: '/contact' }
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface border-b-2 border-border shadow-[0_4px_0_0_#1D3B7A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="group font-display text-xl font-bold text-foreground
              hover:text-violet transition-colors"
          >
            {'<'}
            <span className="text-violet">Fab</span>
            {' />'}
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'relative px-4 py-2 font-mono text-xs uppercase tracking-[0.15em]',
                  'transition-all duration-200',
                  'hover:translate-y-[-2px]',
                  location.pathname === item.href
                    ? 'text-violet bg-surface-2 border border-border shadow-[2px_2px_0_0_#1D3B7A]'
                    : 'text-muted hover:text-foreground border border-transparent'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className={cn(
              'md:hidden text-muted hover:text-foreground',
              'border border-border p-2',
              'shadow-[2px_2px_0_0_#1D3B7A]',
              'hover:translate-x-[1px] hover:translate-y-[1px]',
              'hover:shadow-[1px_1px_0_0_#1D3B7A]',
              'transition-all duration-200'
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface-2 border-b-2 border-border">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'block px-4 py-3 font-mono text-xs uppercase tracking-[0.15em]',
                  'border border-border transition-all duration-200',
                  'hover:translate-x-[2px] hover:translate-y-[-2px]',
                  location.pathname === item.href
                    ? 'text-violet bg-surface shadow-[2px_2px_0_0_#1D3B7A]'
                    : 'text-muted hover:text-foreground hover:bg-surface hover:shadow-[2px_2px_0_0_#303746]'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

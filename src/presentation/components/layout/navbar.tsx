import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/presentation/components/ui/theme-toggle";
import iconLogo from "@/presentation/assets/icons/icon-logo-removebg-preview.png";
import iconLogoBlue from "@/presentation/assets/icons/icon-logo-blue-removebg-preview.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95vw] lg:w-[85vw] bg-card border-2 border-foreground paper-texture">
      <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={theme === "light" ? iconLogoBlue : iconLogo}
            alt="Fab.dev"
            className="h-10 w-10"
          />
        </a>

        <div className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground",
                item.href === "#home" ? "text-purple" : "",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className={cn(
              "text-muted-foreground hover:text-foreground",
              "border border-border p-2",
              "transition-all duration-200",
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-secondary border-t-2 border-border">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-4 py-3 font-mono text-xs uppercase tracking-[0.15em]",
                  "border border-border transition-all duration-200",
                  item.href === "#home"
                    ? "text-purple bg-card"
                    : "text-muted-foreground hover:text-foreground hover:bg-card",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

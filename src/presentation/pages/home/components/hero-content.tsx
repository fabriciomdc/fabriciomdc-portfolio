import { ArrowUpRight } from "lucide-react";
import { Typography } from "@/presentation/components/ui/typography";

interface HeroContentProps {
  onOpenCV?: () => void;
}

export const HeroContent = ({ onOpenCV }: HeroContentProps) => {
  return (
    <div className="relative z-10 flex flex-col justify-center p-8 md:p-14 lg:p-16">
      <div className="space-y-3">
        <div className="inline-block border-2 border-foreground bg-background px-4 py-2 shadow-[3px_3px_0_0_var(--foreground)]">
          <Typography variant="h3">Olá mundo!</Typography>
        </div>

        <div>
          <Typography variant="h3" className="text-muted-foreground">
            Eu sou
          </Typography>
        </div>

        <div className="relative inline-block">
          <div className="absolute inset-0 border-[3px] border-foreground bg-background shadow-[6px_6px_0_0_var(--foreground)]" />
          <div className="relative border-[3px] border-foreground bg-background px-6 py-4 shadow-[6px_6px_0_0_var(--foreground)]">
            <Typography variant="h1" className="text-foreground">
              Fabricio MDEC
            </Typography>
          </div>
        </div>

        <div className="inline-block border-2 border-foreground bg-background shadow-[inset_0_0_0_3px_var(--background),inset_0_0_0_5px_var(--foreground),3px_3px_0_0_var(--foreground)] px-4 py-2">
          <Typography variant="h6">
            Front-end Developer | Tech Enthusiast
          </Typography>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="/cv"
          onClick={(e) => {
            e.preventDefault()
            onOpenCV?.()
          }}
          className="group inline-flex items-center gap-3 border-2 border-foreground bg-violet px-6 py-4 text-primary-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]">
            Resumo
          </span>
          <ArrowUpRight className="h-4 w-4" />
        </a>

        <a
          href="#contact"
          className="group inline-flex items-center gap-3 border-2 border-foreground bg-foreground px-6 py-4 text-background shadow-[4px_4px_0_0_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]">
            Vamos Conversar
          </span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

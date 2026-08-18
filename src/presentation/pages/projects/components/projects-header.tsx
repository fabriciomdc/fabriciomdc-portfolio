import { ArrowUpRight } from "lucide-react"
import { SectionLabel } from "@/presentation/components/ui/decorations"

export const ProjectsHeader = () => {
  return (
    <div className="relative z-10 border-b-2 border-foreground p-12">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <SectionLabel number="03" label="Selected Work" />
        </div>
        <a
          href="#projects"
          className="group flex items-center gap-4 border-2 border-foreground px-5 py-3 text-[10px] uppercase tracking-[0.15em] transition-all hover:bg-foreground/5"
        >
          View All
          <ArrowUpRight className="h-4 w-4 text-violet" />
        </a>
      </div>
    </div>
  )
}

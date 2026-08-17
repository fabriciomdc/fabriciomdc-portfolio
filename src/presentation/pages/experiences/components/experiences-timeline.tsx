import { experience } from "@/presentation/data"
import { cn } from "@/lib/utils"

export const ExperiencesTimeline = () => {
  return (
    <div className="p-12">
      <div className="relative border-l-2 border-foreground">
        {experience.map((item, index) => (
          <div
            key={index}
            className={cn(
              "relative pl-8",
              index === experience.length - 1 ? "pb-0" : "pb-12",
            )}
          >
            <span className="absolute left-[-9px] top-1 h-4 w-4 rounded-full border-2 border-foreground bg-violet" />
            <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-violet">
              {item.period}
            </span>
            <h3 className="font-display mt-3 text-xl font-black uppercase">
              {item.role}
            </h3>
            <div className="mt-2 flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.1em]">
                {item.company}
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                {item.type}
              </span>
            </div>
            <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
              {item.location}
            </span>
            <p className="mt-3 max-w-[560px] text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            {item.highlights.length > 0 && (
              <ul className="mt-3 space-y-1">
                {item.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

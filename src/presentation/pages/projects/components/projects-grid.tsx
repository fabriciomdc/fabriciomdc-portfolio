import { cn } from "@/lib/utils"
import { projects } from "@/presentation/data"

function ProjectCard({
  project,
  isLast,
}: {
  project: (typeof projects)[number]
  isLast: boolean
}) {
  return (
    <article
      className={cn(
        "border-b-2 border-foreground p-5 transition-colors hover:bg-foreground/5",
        !isLast && "md:border-r-2",
      )}
    >
      <div className="relative aspect-video border-2 border-foreground bg-card p-2">
        <div className="relative flex h-full items-center justify-center overflow-hidden border-2 border-foreground bg-background">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, color-mix(in srgb, var(--primary) 20%, transparent) 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }}
              />
              <div className="h-20 w-20 rotate-45 border-2 border-violet bg-violet/10 transition-transform duration-500 group-hover:rotate-[55deg]" />
            </>
          )}
          <span className="font-mono absolute left-3 top-3 text-[10px] font-bold">
            {project.number}
          </span>
        </div>
      </div>

      <div className="pt-6">
        <h3 className="font-display text-2xl font-black uppercase">
          {project.title}
        </h3>
        <p className="mt-4 min-h-16 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="font-mono border-2 border-foreground bg-card px-2 py-1 text-[8px] uppercase tracking-[0.1em]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export const ProjectsGrid = () => {
  return (
    <div className="grid md:grid-cols-3 border-t-2 border-foreground relative z-10">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.number}
          project={project}
          isLast={index === projects.length - 1}
        />
      ))}
    </div>
  )
}

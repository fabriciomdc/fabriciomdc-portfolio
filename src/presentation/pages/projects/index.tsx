import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/presentation/data";
import { SectionLabel, HalftoneEdge, InkSplatter, SpeedLines } from "@/presentation/components/ui/decorations";

export const Projects = () => {
  return (
    <section id="projects" className="relative m-2 overflow-hidden border-2 border-foreground bg-background paper-texture-strong">
      <HalftoneEdge position="top" />
      <HalftoneEdge position="right" />
      <SpeedLines angle={-30} />
      <InkSplatter className="left-[-30px] top-[-30px] opacity-16" />
      <InkSplatter className="right-[-18px] top-[-18px] h-28 w-28 opacity-14" />
      <InkSplatter className="bottom-[-22px] left-[-22px] h-34 w-34 opacity-15" />
      <InkSplatter className="bottom-[-26px] right-[-26px] opacity-18" />

      <div className="relative z-10 border-b-2 border-foreground p-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel number="03" label="Selected Work" />
            <h2 className="font-display text-[clamp(3rem,6vw,4.5rem)] font-black uppercase leading-[0.85] tracking-[-0.03em]">
              Selected
              <br />
              <span className="text-violet">Work.</span>
            </h2>
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

      <div className="grid md:grid-cols-3 border-t-2 border-foreground relative z-10">
        {projects.map((project, index) => (
          <article
            key={project.number}
            className={cn(
              "border-b-2 border-foreground p-5 transition-colors hover:bg-foreground/5",
              index !== projects.length - 1 && "md:border-r-2"
            )}
          >
            <div className="relative aspect-[4/3] border-2 border-foreground bg-card p-2">
              <div className="relative flex h-full items-center justify-center overflow-hidden border-2 border-foreground bg-background">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "radial-gradient(circle, color-mix(in srgb, var(--primary) 20%, transparent) 1px, transparent 1px)",
                    backgroundSize: "8px 8px",
                  }}
                />
                <div className="h-20 w-20 rotate-45 border-2 border-violet bg-violet/10 transition-transform duration-500 group-hover:rotate-[55deg]" />
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
        ))}
      </div>
    </section>
  );
};

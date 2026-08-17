import { ArrowUpRight, MoveDown } from "lucide-react";
import { HalftoneEdge, InkSplatter, SpeedLines } from "@/presentation/components/ui/decorations";

export const Home = () => {
  return (
    <section id="home" className="relative m-2 overflow-hidden border-2 border-foreground bg-background paper-texture-strong">
      <HalftoneEdge position="top" />
      <HalftoneEdge position="right" />
      <SpeedLines angle={-45} />
      <InkSplatter className="left-[-32px] top-[-32px] opacity-20" />
      <InkSplatter className="right-[-20px] top-[-20px] h-32 w-32 opacity-15" />
      <InkSplatter className="bottom-[-24px] left-[-24px] h-36 w-36 opacity-15" />
      <InkSplatter className="bottom-[-28px] right-[-28px] opacity-18" />

      <div className="grid min-h-[600px] grid-cols-1 lg:grid-cols-[100px_1fr_1fr]">
        <aside className="hidden lg:flex lg:flex-col lg:justify-between border-r-2 border-foreground p-5 relative z-10">
          <div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              Issue
            </span>
            <div className="font-display mt-2 text-5xl font-black">01</div>
          </div>
          <MoveDown className="h-4 w-4 text-violet" />
        </aside>

        <div className="relative z-10 flex flex-col justify-center p-8 md:p-14 lg:p-16">
          <div
            className="font-mono inline-block w-fit mb-8 px-3 py-1 text-xs uppercase tracking-[0.2em]"
            style={{
              backgroundColor: "color-mix(in srgb, var(--primary) 20%, transparent)",
              backgroundImage: "radial-gradient(circle, color-mix(in srgb, var(--primary) 50%, transparent) 1.5px, transparent 1.5px)",
              backgroundSize: "6px 6px",
            }}
          >
            Full-Stack Developer
          </div>

          <h1 className="font-display text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.03em]">
            I Build
            <br />
            Digital
            <br />
            <span className="text-violet">Experiences.</span>
          </h1>

          <p className="mt-8 max-w-[450px] text-lg leading-relaxed text-muted-foreground">
            I design and build scalable digital products, applications and
            systems focused on real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-4 border-2 border-foreground bg-violet px-6 py-4 text-primary-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em]">
                Explore My Work
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border-2 border-foreground px-4 py-3 text-[10px] uppercase tracking-[0.16em] transition-all hover:bg-foreground/5"
            >
              Contact Me
              <ArrowUpRight className="h-4 w-4 text-violet" />
            </a>
          </div>
        </div>

        <div className="relative min-h-[400px] overflow-hidden border-t-2 border-foreground">
          <div className="absolute inset-6 -rotate-2 border-2 border-foreground bg-card p-2">
            <div className="relative flex h-full min-h-[350px] items-center justify-center overflow-hidden border-2 border-foreground bg-background">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle, color-mix(in srgb, var(--primary) 30%, transparent) 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }}
              />

              <div className="relative h-48 w-48">
                <div className="absolute inset-0 rounded-full border-2 border-violet" />
                <div className="absolute inset-5 rounded-full border-2 border-violet/70" />
                <div className="absolute inset-10 rounded-full border-2 border-violet/50" />
                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-violet bg-violet/20" />
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-violet/30" />
                <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-violet/30" />
              </div>

              <span className="font-mono absolute left-4 top-4 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                Visual System / 001
              </span>
              <span className="font-mono absolute bottom-4 right-4 text-[9px] uppercase tracking-[0.2em] text-violet">
                FAB.DEV
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

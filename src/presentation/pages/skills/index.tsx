import { skills } from "@/presentation/data";
import { SectionLabel, HalftoneEdge, InkSplatter, SpeedLines } from "@/presentation/components/ui/decorations";

export const Skills = () => {
  return (
    <section id="skills" className="relative m-2 overflow-hidden border-2 border-foreground bg-background paper-texture-strong">
      <HalftoneEdge position="left" />
      <HalftoneEdge position="top" />
      <SpeedLines angle={60} />
      <InkSplatter className="left-[-26px] top-[-26px] opacity-15" />
      <InkSplatter className="right-[-22px] top-[-22px] h-30 w-30 opacity-13" />
      <InkSplatter className="bottom-[-28px] left-[-28px] h-36 w-36 opacity-14" />

      <div className="relative z-10 grid lg:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b-2 border-foreground p-12 lg:border-b-0 lg:border-r-2">
          <SectionLabel number="04" label="Skills" />
          <h2 className="font-display text-[clamp(3rem,5vw,3.75rem)] font-black uppercase leading-[0.9]">
            Tools &
            <br />
            <span className="text-violet">Technologies.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="group flex min-h-[112px] flex-col justify-end border-b-2 border-foreground p-6 transition-colors hover:bg-foreground/5"
            >
              <span className="font-mono text-[9px] font-bold text-muted-foreground/50">
                0{index + 1}
              </span>
              <h3 className="font-display mt-3 text-xl font-bold uppercase group-hover:text-violet">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

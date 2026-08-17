import { SectionLabel, InfoBlock, HalftoneEdge, InkSplatter, SpeedLines } from "@/presentation/components/ui/decorations";

export const About = () => {
  return (
    <section id="about" className="relative m-2 overflow-hidden border-2 border-foreground bg-background paper-texture-strong">
      <HalftoneEdge position="left" />
      <HalftoneEdge position="bottom" />
      <SpeedLines angle={45} color="var(--violet)" />
      <InkSplatter className="left-[-28px] top-[-28px] opacity-18" />
      <InkSplatter className="right-[-24px] top-[-24px] h-36 w-36 opacity-15" />
      <InkSplatter className="bottom-[-20px] left-[-20px] h-32 w-32 opacity-16" />
      <InkSplatter className="bottom-[-30px] right-[-30px] opacity-20" />

      <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-b-2 border-foreground p-12 lg:border-b-0 lg:border-r-2">
          <SectionLabel number="02" label="About Me" />
          <h2 className="font-display max-w-[640px] text-[clamp(2.5rem,5vw,3.75rem)] font-black uppercase leading-[0.95] tracking-[-0.02em]">
            I turn complex problems into simple, scalable{" "}
            <span className="text-violet">solutions.</span>
          </h2>
          <p className="mt-8 max-w-[560px] text-base leading-relaxed text-muted-foreground">
            I enjoy understanding how systems work, designing their
            architecture and turning ideas into products that are useful,
            maintainable and built to evolve.
          </p>
        </div>

        <div>
          <div className="border-b-2 border-foreground">
            <InfoBlock number="01" title="Focused" text="Clean architecture and solid engineering practices." />
          </div>
          <div className="border-b-2 border-foreground">
            <InfoBlock number="02" title="Curious" text="Always exploring new technologies and better solutions." />
          </div>
          <InfoBlock number="03" title="Practical" text="Technology should solve problems, not create complexity." />
        </div>
      </div>
    </section>
  );
};

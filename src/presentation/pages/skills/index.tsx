import {
  HalftoneEdge,
  InkSplatter,
  SpeedLines,
} from "@/presentation/components/ui/decorations";
import { SkillsHeader } from "./components/skills-header";
import { SkillsGrid } from "./components/skills-grid";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative m-2 overflow-hidden border-2 border-foreground bg-background paper-texture-strong"
    >
      <HalftoneEdge position="left" />
      <HalftoneEdge position="top" />
      <SpeedLines angle={60} />
      <InkSplatter className="left-[-26px] top-[-26px] opacity-15" />
      <InkSplatter className="right-[-22px] top-[-22px] h-30 w-30 opacity-13" />
      <InkSplatter className="bottom-[-28px] left-[-28px] h-36 w-36 opacity-14" />

      <div className="relative z-10">
        <SkillsHeader />
        <SkillsGrid />
      </div>
    </section>
  );
};

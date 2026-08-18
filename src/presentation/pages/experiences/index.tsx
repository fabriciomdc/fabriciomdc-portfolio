import {
  HalftoneEdge,
  InkSplatter,
  SpeedLines,
} from "@/presentation/components/ui/decorations"
import { ExperiencesHeader } from "./components/experiences-header"
import { ExperiencesTimeline } from "./components/experiences-timeline"

export const Experiences = () => {
  return (
    <section
      id="experience"
      className="relative m-2 overflow-hidden border-2 border-foreground bg-background paper-texture-strong"
    >
      <HalftoneEdge position="right" />
      <HalftoneEdge position="bottom" />
      <SpeedLines angle={-60} color="var(--violet)" />
      <InkSplatter className="left-[-24px] top-[-24px] opacity-14" />
      <InkSplatter className="right-[-30px] top-[-30px] opacity-17" />
      <InkSplatter className="bottom-[-22px] left-[-22px] h-40 w-40 opacity-18" />

      <div className="relative z-10 grid lg:grid-cols-[0.8fr_1.2fr]">
        <ExperiencesHeader />
        <ExperiencesTimeline />
      </div>
    </section>
  )
}

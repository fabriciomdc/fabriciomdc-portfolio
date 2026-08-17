import {
  HalftoneEdge,
  InkSplatter,
  SpeedLines,
} from "@/presentation/components/ui/decorations"
import { AboutIntro } from "./components/about-intro"
import { AboutTraits } from "./components/about-traits"

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
        <AboutIntro />
        <AboutTraits />
      </div>
    </section>
  )
}

import {
  HalftoneEdge,
  InkSplatter,
  SpeedLines,
} from "@/presentation/components/ui/decorations"
import { ProjectsHeader } from "./components/projects-header"
import { ProjectsGrid } from "./components/projects-grid"

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative m-2 overflow-hidden border-2 border-foreground bg-background paper-texture-strong"
    >
      <HalftoneEdge position="top" />
      <HalftoneEdge position="right" />
      <SpeedLines angle={-30} />
      <InkSplatter className="left-[-30px] top-[-30px] opacity-16" />
      <InkSplatter className="right-[-18px] top-[-18px] h-28 w-28 opacity-14" />
      <InkSplatter className="bottom-[-22px] left-[-22px] h-34 w-34 opacity-15" />
      <InkSplatter className="bottom-[-26px] right-[-26px] opacity-18" />

      <ProjectsHeader />
      <ProjectsGrid />
    </section>
  )
}

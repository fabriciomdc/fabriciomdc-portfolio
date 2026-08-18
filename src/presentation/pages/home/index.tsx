import {
  HalftoneEdge,
  InkSplatter,
  SpeedLines,
} from "@/presentation/components/ui/decorations";
import { IssueSidebar } from "./components/issue-sidebar";
import { HeroContent } from "./components/hero-content";
import { HeroIllustration } from "./components/hero-illustration";

interface HomeProps {
  onOpenCV?: () => void;
}

export const Home = ({ onOpenCV }: HomeProps) => {
  return (
    <section
      id="home"
      className="relative m-2 overflow-hidden border-2 border-foreground bg-background paper-texture-strong"
    >
      <HalftoneEdge position="top" />
      <HalftoneEdge position="right" />
      <SpeedLines angle={-45} />
      <InkSplatter className="left-[-32px] top-[-32px] opacity-20" />
      <InkSplatter className="right-[-20px] top-[-20px] h-32 w-32 opacity-15" />
      <InkSplatter className="bottom-[-24px] left-[-24px] h-36 w-36 opacity-15" />
      <InkSplatter className="bottom-[-28px] right-[-28px] opacity-18" />

      <div className="grid min-h-[600px] grid-cols-1 lg:grid-cols-[100px_1fr_1fr]">
        <IssueSidebar />
        <HeroContent onOpenCV={onOpenCV} />
        <HeroIllustration />
      </div>
    </section>
  );
};

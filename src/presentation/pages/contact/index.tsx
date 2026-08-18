import {
  HalftoneEdge,
  InkSplatter,
  SpeedLines,
  ActionBurst,
} from "@/presentation/components/ui/decorations"
import { ContactHeader } from "./components/contact-header"
import { ContactLinks } from "./components/contact-links"
import { Footer } from "./components/footer"

export const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="relative m-2 overflow-hidden border-2 border-foreground bg-background paper-texture-strong"
      >
        <HalftoneEdge position="top" />
        <HalftoneEdge position="left" />
        <SpeedLines angle={30} />
        <ActionBurst className="absolute -right-8 -top-8 h-32 w-32 opacity-20" />
        <InkSplatter className="left-[-28px] top-[-28px] opacity-16" />
        <InkSplatter className="right-[-22px] top-[-22px] h-32 w-32 opacity-14" />
        <InkSplatter className="bottom-[-24px] left-[-24px] h-34 w-34 opacity-15" />

        <div className="relative z-10 grid lg:grid-cols-[1fr_1fr]">
          <ContactHeader />
          <ContactLinks />
        </div>
      </section>

      <Footer />
    </>
  )
}

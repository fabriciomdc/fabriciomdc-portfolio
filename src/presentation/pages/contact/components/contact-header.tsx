import { SectionLabel } from "@/presentation/components/ui/decorations"

export const ContactHeader = () => {
  return (
    <div className="border-r-2 border-foreground p-12">
      <SectionLabel number="06" label="Contact" />
      <h2 className="font-display max-w-[560px] text-[clamp(3rem,6vw,4.5rem)] font-black uppercase leading-[0.9]">
        Vamos <span className="text-violet">Conversar</span>
      </h2>
    </div>
  )
}

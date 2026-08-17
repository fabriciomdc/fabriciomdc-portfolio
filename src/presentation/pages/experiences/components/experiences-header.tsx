import { SectionLabel } from "@/presentation/components/ui/decorations"

export const ExperiencesHeader = () => {
  return (
    <div className="border-b-2 border-foreground p-12 lg:border-b-0 lg:border-r-2">
      <SectionLabel number="05" label="Experience" />
      <h2 className="font-display text-[clamp(3rem,5vw,3.75rem)] font-black uppercase leading-[0.9]">
        Empresas por onde
        <br />
        <span className="text-violet">Passei</span>
      </h2>
    </div>
  )
}

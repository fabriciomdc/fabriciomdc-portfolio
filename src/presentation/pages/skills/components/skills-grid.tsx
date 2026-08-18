import { useState } from "react"
import { skills } from "@/presentation/data"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/presentation/components/ui/tabs"

type SkillItem = { name: string; icon: string }

function SkillButton({ name, icon }: SkillItem) {
  return (
    <div className="group flex items-center gap-3 border-2 border-foreground bg-background px-4 py-3 shadow-[3px_3px_0_0_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-foreground/5">
      <img src={icon} alt={name} className="h-6 w-6" />
      <span className="font-mono text-xs font-bold uppercase tracking-[0.1em]">
        {name}
      </span>
    </div>
  )
}

function SkillsList({ items }: { items: SkillItem[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 pb-12">
      {items.map((skill) => (
        <SkillButton key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  )
}

export const SkillsGrid = () => {
  const [activeTab, setActiveTab] = useState("languages")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="languages">Languages</TabsTrigger>
        <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
        <TabsTrigger value="tools">DB & Tools</TabsTrigger>
      </TabsList>
      <TabsContent value="languages">
        <SkillsList items={skills.languages} />
      </TabsContent>
      <TabsContent value="frameworks">
        <SkillsList items={skills.frameworks} />
      </TabsContent>
      <TabsContent value="tools">
        <SkillsList items={skills.tools} />
      </TabsContent>
    </Tabs>
  )
}

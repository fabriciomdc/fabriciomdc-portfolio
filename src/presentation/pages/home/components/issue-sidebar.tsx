import { MoveDown } from "lucide-react"

export const IssueSidebar = () => {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:justify-between border-r-2 border-foreground p-5 relative z-10">
      <div>
        <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
          Issue
        </span>
        <div className="font-display mt-2 text-5xl font-black">01</div>
      </div>
      <MoveDown className="h-4 w-4 text-violet" />
    </aside>
  )
}

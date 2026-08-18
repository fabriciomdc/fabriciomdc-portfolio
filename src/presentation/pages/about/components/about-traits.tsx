import { GitHubProfile } from "./github-profile"

export const AboutTraits = () => {
  return (
    <div className="flex flex-col">
      <GitHubProfile />
      <div className="border-t-2 border-foreground" />
      <div className="flex-1" />
    </div>
  )
}

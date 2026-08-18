export interface GitHubStats {
  commits: number;
  pullRequests: number;
  repositories: number;
  followers: number;
}

export async function fetchGitHubStats(username: string): Promise<GitHubStats> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };

  const [reposRes, commitsRes, prsRes] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`, { headers }),
    fetch(
      `https://api.github.com/search/commits?q=author:${username}&per_page=1`,
      { headers },
    ),
    fetch(
      `https://api.github.com/search/issues?q=author:${username}+type:pr&per_page=1`,
      { headers },
    ),
  ]);

  const repos = await reposRes.json();
  const commits = await commitsRes.json();
  const prs = await prsRes.json();

  return {
    repositories: repos.public_repos ?? 0,
    followers: repos.followers ?? 0,
    commits: commits.total_count ?? 0,
    pullRequests: prs.total_count ?? 0,
  };
}

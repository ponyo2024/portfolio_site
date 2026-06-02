import Link from 'next/link'
import NavBar from '@/components/NavBar'
import { getAllProjects, type ProjectMeta } from '@/lib/projects'

const categoryLabel: Record<string, string> = {
  product: '主作品之外',
  agent: 'AI Agent',
  rag: 'RAG',
  memory: '记忆 / Memory',
  content: '内容 / Writing',
  foundation: '课程 / Foundations',
  agentic: 'Multi-Agent',
}

function groupByCategory(projects: ProjectMeta[]): [string, ProjectMeta[]][] {
  const order = ['product', 'agentic', 'agent', 'rag', 'memory', 'content', 'foundation']
  const groups = new Map<string, ProjectMeta[]>()
  for (const p of projects) {
    const arr = groups.get(p.category) || []
    arr.push(p)
    groups.set(p.category, arr)
  }
  return order
    .filter((k) => groups.has(k))
    .map((k) => [k, groups.get(k)!] as [string, ProjectMeta[]])
}

export default function ArchivePage() {
  const archived = getAllProjects().filter((p) => !p.featured)
  const grouped = groupByCategory(archived)

  return (
    <main className="pt-16">
      <NavBar />

      <section className="px-6 md:px-12 pt-20 pb-12 max-w-3xl mx-auto">
        <h1
          className="text-3xl md:text-4xl text-foreground leading-tight mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
        >
          Archive
        </h1>
        <p className="text-muted leading-relaxed max-w-xl">
          这里放一些早期 demo、课程作业和跑通想法的小原型。它们不是现在最想重点展示的作品，但记录了我一路试东西的痕迹。
        </p>
        <Link
          href="/"
          className="inline-block mt-6 text-sm text-accent hover:text-accent-hover transition-colors"
        >
          ← 回首页
        </Link>
      </section>

      <section className="px-6 md:px-12 pb-24 max-w-3xl mx-auto">
        {grouped.map(([category, items]) => (
          <div key={category} className="mb-14">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-muted mb-5">
              {categoryLabel[category] || category}
            </h2>
            <ul>
              {items.map((p) => (
                <li key={p.slug} className="border-t border-border first:border-t-0">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group flex items-baseline justify-between gap-6 py-4 transition-colors"
                  >
                    <div className="min-w-0 flex-1">
                      <div
                        className="text-base text-foreground group-hover:text-accent transition-colors"
                        style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
                      >
                        {p.title}
                      </div>
                      <div className="text-sm text-muted truncate">{p.subtitle}</div>
                    </div>
                    <div className="text-xs font-mono text-subtle whitespace-nowrap">
                      {p.createdAt?.slice(0, 7)}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  )
}

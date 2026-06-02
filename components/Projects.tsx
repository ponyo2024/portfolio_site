import Link from 'next/link'
import Image from 'next/image'
import { getAllProjects, type ProjectMeta } from '@/lib/projects'

const statusFallback: Record<string, string> = {
  shipped: '已完成',
  'in-progress': '正在做',
  planned: '计划中',
}

function StatusBadge({ project }: { project: ProjectMeta }) {
  const label = project.statusLabel || statusFallback[project.status] || project.status
  return (
    <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] tracking-wide text-accent">
      {label}
    </span>
  )
}

function ProductRow({ project, index }: { project: ProjectMeta; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid gap-6 rounded-[1.25rem] border border-border/85 bg-card/70 p-4 shadow-[0_18px_48px_rgba(86,64,45,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-accent/35 hover:bg-card md:grid-cols-[0.95fr_1.25fr] md:gap-8 md:p-5"
    >
      <div className="relative overflow-hidden rounded-[1rem] bg-background">
        <Image
          src={project.thumbnail}
          alt={`${project.title} 项目封面`}
          width={900}
          height={675}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3 rounded-full bg-card/88 px-3 py-1 text-xs font-mono text-accent backdrop-blur">
          No.{String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <div className="flex min-w-0 flex-col justify-center px-1 py-1 md:px-0">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <StatusBadge project={project} />
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-background/50 px-2.5 py-0.5 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>

        <h3
          className="mb-2 text-2xl leading-tight text-foreground transition-colors group-hover:text-accent md:text-3xl"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
        >
          {project.title}
        </h3>

        <p
          className="mb-4 text-base italic text-muted md:text-lg"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {project.subtitle}
        </p>

        <p className="max-w-2xl text-[15px] leading-7 text-foreground/75">
          {project.description}
        </p>

        <span className="mt-5 inline-block text-sm text-accent transition-colors group-hover:text-accent-hover">
          读这个作品 →
        </span>
      </div>
    </Link>
  )
}

export default function Projects() {
  const featured = getAllProjects().filter((p) => p.featured)

  return (
    <section id="work" className="px-6 md:px-12 py-16 md:py-20">
      <div className="mx-auto mb-10 max-w-6xl md:mb-12">
        <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-muted">
          Featured Works
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <h3
            className="text-3xl leading-tight text-foreground md:text-[2.35rem]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
          >
            三件认真呈现的作品
          </h3>
          <p className="max-w-2xl text-base leading-7 text-muted">
            它们分别来自三种很具体的生活：照顾情绪、陪伴家人、整理自己的早晨。技术在里面，但不是主角，真正的主角是人。
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-5">
        {featured.map((project, i) => (
          <ProductRow key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-6xl text-sm leading-7 text-muted">
        以前做过的一些 demo、课程作业和小实验，我放在{' '}
        <Link href="/archive" className="text-accent hover:text-accent-hover underline underline-offset-4">
          /archive
        </Link>
        ，留给好奇的人慢慢翻。
      </div>
    </section>
  )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import {
  getAllProjects,
  getProjectBySlug,
  getProjectContent,
  getProjectChangelog,
  getAdjacentProjects,
} from '@/lib/projects'
import Changelog from '@/components/Changelog'

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }))
}

const statusFallback: Record<string, string> = {
  shipped: '已完成',
  'in-progress': '正在做',
  planned: '计划中',
}

function HeroMedia({ project }: { project: ReturnType<typeof getProjectBySlug> }) {
  const media = project?.media
  if (!media) return null

  if (media.type === 'video') {
    return (
      <div className="w-full rounded-lg overflow-hidden mb-8 border border-border">
        <video
          src={media.src}
          poster={media.poster}
          controls
          muted
          className="w-full"
        />
      </div>
    )
  }

  return (
    <div className="w-full rounded-lg overflow-hidden mb-8 border border-border">
      <Image
        src={media.src}
        alt={project.title}
        width={1100}
        height={720}
        className="w-full object-cover"
      />
    </div>
  )
}

export default async function ProjectPage(props: PageProps<'/projects/[slug]'>) {
  const { slug } = await props.params

  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const content = getProjectContent(slug)
  const changelog = getProjectChangelog(slug)
  const { prev, next } = getAdjacentProjects(slug)
  const statusLabel = project.statusLabel || statusFallback[project.status]

  return (
    <div className="min-h-screen">
      <nav className="px-6 md:px-12 py-6 max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-sm text-muted hover:text-accent transition-colors flex items-center gap-2"
        >
          ← 回首页
        </Link>
      </nav>

      <div className="px-6 md:px-12 py-8 max-w-3xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center text-[11px] tracking-wide uppercase font-mono text-accent border border-accent/40 rounded-full px-2.5 py-0.5">
              {statusLabel}
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl text-foreground mb-3 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
          >
            {project.title}
          </h1>

          <p
            className="text-lg md:text-xl text-muted italic mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.subtitle}
          </p>

          <p className="text-foreground/80 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </header>

        <HeroMedia project={project} />

        {project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-xs font-mono border border-border rounded-md text-muted bg-card"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(project.liveDemo || project.github || project.externalUrl) && (
          <div className="flex gap-3 mb-14">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-accent text-background text-sm rounded-md hover:bg-accent-hover transition-colors"
              >
                Live →
              </a>
            )}
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-accent text-background text-sm rounded-md hover:bg-accent-hover transition-colors"
              >
                打开 →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-border text-foreground text-sm rounded-md hover:border-accent hover:text-accent transition-colors"
              >
                GitHub →
              </a>
            )}
          </div>
        )}

        <article className="prose-warm mt-12">
          <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </article>

        <Changelog changelog={changelog} />

        <div className="mt-16 pt-8 border-t border-border grid grid-cols-2 gap-4">
          <div>
            {prev && (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex flex-col gap-1 p-4 rounded-md border border-border hover:border-accent/50 transition-colors"
              >
                <span className="text-xs text-muted font-mono">← 上一个</span>
                <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                  {prev.title}
                </span>
              </Link>
            )}
          </div>
          <div className="flex justify-end">
            {next && (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex flex-col gap-1 p-4 rounded-md border border-border hover:border-accent/50 transition-colors text-right"
              >
                <span className="text-xs text-muted font-mono">下一个 →</span>
                <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

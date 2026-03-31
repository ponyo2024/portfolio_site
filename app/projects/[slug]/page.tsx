import { notFound } from 'next/navigation'
import Link from 'next/link'
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

const statusLabel: Record<string, string> = {
  shipped: '已上线',
  'in-progress': '开发中',
  planned: '规划中',
}

function HeroMedia({ project }: { project: ReturnType<typeof getProjectBySlug> }) {
  if (!project?.media) return null

  if (project.media.type === 'video') {
    return (
      <div className="w-full rounded-xl overflow-hidden mb-8">
        <video
          src={project.media.src}
          poster={project.media.poster}
          controls
          muted
          className="w-full"
        />
      </div>
    )
  }

  return (
    <div className="w-full rounded-xl overflow-hidden mb-8">
      <img
        src={project.media.src}
        alt={project.title}
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

  return (
    <div className="min-h-screen">
      {/* Back nav */}
      <nav className="px-6 md:px-12 lg:px-24 py-6">
        <Link
          href="/#projects"
          className="text-sm text-muted hover:text-accent transition-colors font-mono flex items-center gap-2"
        >
          ← 返回首页
        </Link>
      </nav>

      <div className="px-6 md:px-12 lg:px-24 py-12 max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          {/* Status + category */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent/10 text-accent">
              {project.category}
            </span>
            <span className="text-xs font-mono text-muted">
              {statusLabel[project.status]}
            </span>
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.title}
          </h1>

          <p className="text-muted text-lg mb-6">{project.subtitle}</p>

          <p className="text-muted leading-relaxed max-w-2xl">{project.description}</p>
        </header>

        {/* Hero media */}
        <HeroMedia project={project} />

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm border border-white/[0.06] rounded-lg text-foreground/70 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.liveDemo || project.github) && (
          <div className="flex gap-4 mb-16">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors"
              >
                Live Demo →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-white/[0.06] text-foreground text-sm font-medium rounded-lg hover:border-accent hover:text-accent transition-colors"
              >
                GitHub →
              </a>
            )}
          </div>
        )}

        {/* MDX Content */}
        <article className="prose-dark mt-16">
          <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </article>

        {/* Changelog */}
        <Changelog changelog={changelog} />

        {/* Adjacent navigation */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] grid grid-cols-2 gap-4">
          <div>
            {prev && (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex flex-col gap-1 p-4 rounded-lg border border-white/[0.06] hover:border-[rgba(255,107,138,0.3)] transition-colors"
              >
                <span className="text-xs text-muted font-mono">← 上一个项目</span>
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
                className="group flex flex-col gap-1 p-4 rounded-lg border border-white/[0.06] hover:border-[rgba(255,107,138,0.3)] transition-colors text-right"
              >
                <span className="text-xs text-muted font-mono">下一个项目 →</span>
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

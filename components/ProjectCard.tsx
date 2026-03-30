import Link from 'next/link'
import type { ProjectMeta } from '@/lib/projects'

const categoryLabel: Record<string, string> = {
  agent: 'Agent',
  rag: 'RAG',
  memory: '记忆',
  content: '内容',
  foundation: '基础',
}

interface ProjectCardProps {
  project: ProjectMeta
  featured?: boolean
}

function Thumbnail({ project }: { project: ProjectMeta }) {
  const src = project.media?.poster || project.thumbnail

  if (src) {
    return (
      <img
        src={src}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    )
  }

  // Placeholder: unified dark bg with subtle icon
  return (
    <div className="w-full h-full bg-[#1A1A2E] flex items-center justify-center">
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2A2A40"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  )
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  if (featured) {
    return (
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#14141F] border border-white/[0.06] rounded-xl overflow-hidden hover:border-[rgba(255,107,138,0.3)] transition-all duration-200">
          {/* Image */}
          <div className="aspect-video overflow-hidden">
            <Thumbnail project={project} />
          </div>

          {/* Text */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-[rgba(255,107,138,0.15)] text-accent w-fit mb-4">
              {categoryLabel[project.category] || project.category}
            </span>
            <h3
              className="text-xl font-bold text-[#F0F0F0] group-hover:text-accent transition-colors mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {project.title}
            </h3>
            <p className="text-sm text-[#9A9AB0] mb-3">{project.subtitle}</p>
            <p className="text-sm text-[#7A7A8E] leading-relaxed mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded border border-white/[0.06] text-[#7A7A8E]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    )
  }

  // Standard card
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="h-full bg-[#14141F] border border-white/[0.06] rounded-xl overflow-hidden hover:border-[rgba(255,107,138,0.3)] transition-all duration-200">
        {/* Image */}
        <div className="aspect-video overflow-hidden">
          <Thumbnail project={project} />
        </div>

        {/* Text */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-[rgba(255,107,138,0.15)] text-accent">
              {categoryLabel[project.category] || project.category}
            </span>
          </div>
          <h3
            className="text-lg font-bold text-[#F0F0F0] group-hover:text-accent transition-colors mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.title}
          </h3>
          <p className="text-sm text-[#7A7A8E] leading-relaxed mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded border border-white/[0.06] text-[#7A7A8E]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

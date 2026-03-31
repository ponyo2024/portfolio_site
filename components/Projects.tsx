import { getAllProjects } from '@/lib/projects'
import ProjectCard from './ProjectCard'

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-10">
      <h2
        className="text-xl md:text-2xl font-bold text-[#F0F0F0] border-l-3 border-accent pl-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      <p className="text-[#7A7A8E] mt-2 pl-4 text-sm max-w-xl">
        {subtitle}
      </p>
    </div>
  )
}

export default function Projects() {
  const projects = getAllProjects()
  const featured = projects.filter((p) => p.featured)
  const content = projects.filter((p) => p.category === 'content')
  const foundation = projects.filter((p) => p.category === 'foundation')

  return (
    <div id="projects">
      {/* Tier 1: Featured / Core AI Projects */}
      <section className="px-6 md:px-12 lg:px-24 pt-8 pb-20 max-w-6xl mx-auto">
        <SectionHeader
          title="实战项目"
          subtitle="每个项目都是真实构建的产品原型，涵盖 Agent、RAG、个性化记忆等 AI 能力。"
        />
        <div className="space-y-10">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="featured" />
          ))}
        </div>
      </section>

      {/* Tier 2: Content Products */}
      {content.length > 0 && (
        <div style={{ backgroundColor: '#0D0D12' }}>
          <section className="px-6 md:px-12 lg:px-24 py-20 max-w-6xl mx-auto">
            <SectionHeader
              title="内容产品"
              subtitle="从写作到产品——用内容验证产品思维和用户直觉。"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.map((project) => (
                <ProjectCard key={project.slug} project={project} variant="content" />
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Tier 3: Technical Foundation */}
      {foundation.length > 0 && (
        <div style={{ backgroundColor: '#111116' }}>
          <section className="px-6 md:px-12 lg:px-24 py-20 max-w-6xl mx-auto">
            <SectionHeader
              title="技术基础"
              subtitle="课程项目，展示数据工程和机器学习基础能力。"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {foundation.map((project) => (
                <ProjectCard key={project.slug} project={project} variant="foundation" />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

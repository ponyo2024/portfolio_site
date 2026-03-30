import { getAllProjects } from '@/lib/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = getAllProjects()
  const featured = projects.filter((p) => p.featured)
  const standard = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-28 max-w-6xl mx-auto">
      <h2
        className="text-2xl md:text-3xl font-bold text-[#F0F0F0] mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        实战项目
      </h2>
      <p className="text-[#7A7A8E] mb-16 max-w-xl text-sm">
        每个项目都是真实构建的产品原型，涵盖 Agent、RAG、个性化记忆等 AI 能力。
      </p>

      {/* Featured projects - large cards, larger gap */}
      {featured.length > 0 && (
        <div className="space-y-8 mb-16">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
      )}

      {/* Standard projects - grid */}
      {standard.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {standard.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}

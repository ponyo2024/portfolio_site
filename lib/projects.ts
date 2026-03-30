import fs from 'fs'
import path from 'path'

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects')
const CATEGORIES_FILE = path.join(process.cwd(), 'content', 'categories.json')

export interface ProjectMedia {
  type: 'image' | 'video' | 'gif'
  src: string
  poster?: string
}

export interface ProjectMeta {
  slug: string
  title: string
  subtitle: string
  description: string
  category: string
  tags: string[]
  techStack: string[]
  status: 'shipped' | 'in-progress' | 'planned'
  priority: number
  featured: boolean
  visible: boolean
  thumbnail: string
  media?: ProjectMedia
  liveDemo: string
  github: string
  createdAt: string
  updatedAt: string
}

export interface ChangelogEntry {
  version: string
  date: string
  title: string
  summary: string
  changes: string[]
}

export interface ProjectChangelog {
  entries: ChangelogEntry[]
}

export interface Category {
  id: string
  label: string
  description: string
}

export function getAllProjects(): ProjectMeta[] {
  const slugs = fs.readdirSync(PROJECTS_DIR).filter((name) => {
    const fullPath = path.join(PROJECTS_DIR, name)
    return fs.statSync(fullPath).isDirectory()
  })

  const projects = slugs
    .map((slug) => {
      const metaPath = path.join(PROJECTS_DIR, slug, 'meta.json')
      if (!fs.existsSync(metaPath)) return null
      const meta: ProjectMeta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))
      return meta
    })
    .filter((p): p is ProjectMeta => p !== null && p.visible === true)
    .sort((a, b) => a.priority - b.priority)

  return projects
}

export function getProjectBySlug(slug: string): ProjectMeta | null {
  const metaPath = path.join(PROJECTS_DIR, slug, 'meta.json')
  if (!fs.existsSync(metaPath)) return null
  const meta: ProjectMeta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))
  if (!meta.visible) return null
  return meta
}

export function getProjectContent(slug: string): string {
  const contentPath = path.join(PROJECTS_DIR, slug, 'content.mdx')
  if (!fs.existsSync(contentPath)) return ''
  return fs.readFileSync(contentPath, 'utf-8')
}

export function getProjectChangelog(slug: string): ProjectChangelog {
  const changelogPath = path.join(PROJECTS_DIR, slug, 'changelog.json')
  if (!fs.existsSync(changelogPath)) return { entries: [] }
  return JSON.parse(fs.readFileSync(changelogPath, 'utf-8'))
}

export function getCategories(): Category[] {
  return JSON.parse(fs.readFileSync(CATEGORIES_FILE, 'utf-8'))
}

export function getProjectsByCategory(): Record<string, ProjectMeta[]> {
  const projects = getAllProjects()
  const result: Record<string, ProjectMeta[]> = {}
  for (const project of projects) {
    if (!result[project.category]) {
      result[project.category] = []
    }
    result[project.category].push(project)
  }
  return result
}

export function getAdjacentProjects(
  slug: string
): { prev: ProjectMeta | null; next: ProjectMeta | null } {
  const projects = getAllProjects()
  const index = projects.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}

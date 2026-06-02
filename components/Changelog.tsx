'use client'

import { useState } from 'react'
import type { ProjectChangelog } from '@/lib/projects'

interface ChangelogProps {
  changelog: ProjectChangelog
}

export default function Changelog({ changelog }: ChangelogProps) {
  const [expanded, setExpanded] = useState(false)

  if (!changelog.entries || changelog.entries.length === 0) return null

  const latest = changelog.entries[0]
  const rest = changelog.entries.slice(1)

  return (
    <div className="mt-14 border-t border-border pt-10">
      <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-muted mb-6">
        Changelog
      </h2>

      <ChangelogEntry entry={latest} isLatest />

      {expanded && rest.map((entry, i) => <ChangelogEntry key={i} entry={entry} />)}

      {rest.length > 0 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm text-accent hover:text-accent-hover transition-colors flex items-center gap-2"
        >
          {expanded ? '收起 ↑' : `查看全部 (${rest.length} 条) ↓`}
        </button>
      )}
    </div>
  )
}

function ChangelogEntry({
  entry,
  isLatest = false,
}: {
  entry: ProjectChangelog['entries'][0]
  isLatest?: boolean
}) {
  return (
    <div className="mb-6 pl-4 border-l-2 border-border hover:border-accent transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-mono text-accent">v{entry.version}</span>
        {isLatest && (
          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/30">
            最新
          </span>
        )}
        <span className="text-xs text-muted font-mono">{entry.date}</span>
      </div>
      <h3
        className="text-base text-foreground mb-2"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
      >
        {entry.title}
      </h3>
      <p className="text-sm text-foreground/75 mb-3 leading-relaxed">{entry.summary}</p>
      {entry.changes && entry.changes.length > 0 && (
        <ul className="space-y-1">
          {entry.changes.map((change, i) => (
            <li key={i} className="text-xs text-muted flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">·</span>
              <span>{change}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

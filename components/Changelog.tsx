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
    <div className="mt-12 border-t border-border pt-10">
      <h2
        className="text-lg font-semibold text-foreground mb-6"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        版本更新
      </h2>

      {/* Latest entry */}
      <ChangelogEntry entry={latest} isLatest />

      {/* Older entries */}
      {expanded && rest.map((entry, i) => <ChangelogEntry key={i} entry={entry} />)}

      {/* Toggle */}
      {rest.length > 0 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm text-accent hover:text-accent-hover transition-colors font-mono flex items-center gap-2"
        >
          {expanded ? '收起历史记录 ↑' : `查看全部更新 (${rest.length} 条更早的记录) ↓`}
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
          <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
            最新
          </span>
        )}
        <span className="text-xs text-muted font-mono">{entry.date}</span>
      </div>
      <h3 className="text-sm font-medium text-foreground mb-2">{entry.title}</h3>
      <p className="text-sm text-muted mb-3 leading-relaxed">{entry.summary}</p>
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

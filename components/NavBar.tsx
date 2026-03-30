import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="h-full max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Left: Name + positioning */}
        <div className="flex items-center gap-3">
          <span className="text-foreground font-medium text-sm" style={{ fontFamily: 'var(--font-display)' }}>
            翁冀
          </span>
          <span className="hidden sm:inline text-muted text-xs font-mono">
            AI Product Manager
          </span>
        </div>

        {/* Right: Nav links + CTA */}
        <div className="flex items-center gap-6">
          <Link
            href="#projects"
            className="text-sm text-[#9A9AB0] hover:text-accent transition-colors"
          >
            项目
          </Link>
          <Link
            href="#contact"
            className="text-sm text-[#9A9AB0] hover:text-accent transition-colors"
          >
            联系
          </Link>
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex px-4 py-1.5 text-xs font-mono border border-white/[0.06] rounded-lg text-muted hover:border-accent hover:text-accent transition-colors"
          >
            下载 PDF
          </a>
        </div>
      </div>
    </nav>
  )
}

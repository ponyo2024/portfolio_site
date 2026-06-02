import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border/70 bg-background/82 backdrop-blur-md">
      <div className="h-full max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="text-foreground text-base tracking-wide hover:text-accent transition-colors"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          翁冀
        </Link>

        <div className="flex items-center gap-6 md:gap-7">
          <Link href="/#work" className="text-sm text-muted hover:text-foreground transition-colors">
            作品
          </Link>
          <Link href="/#now" className="text-sm text-muted hover:text-foreground transition-colors">
            近况
          </Link>
          <Link href="/#contact" className="text-sm text-muted hover:text-foreground transition-colors">
            联系
          </Link>
        </div>
      </div>
    </nav>
  )
}

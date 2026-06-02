const links = [
  { label: 'Email', href: 'mailto:selmaj@163.com' },
  { label: 'GitHub', href: 'https://github.com/ponyo2024/' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 pt-16 pb-16 max-w-4xl mx-auto"
    >
      <div className="border-t border-border mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-muted mb-5">
            公众号
          </h2>
          <p
            className="text-lg text-foreground leading-relaxed mb-6 max-w-sm"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            偶尔写一点做产品路上的想法、对家人的观察、读到的好东西，也记录一些慢慢成形的小作品。
          </p>
          <div className="max-w-sm rounded-2xl border border-border bg-card/70 px-5 py-4 text-sm leading-7 text-muted">
            公众号二维码和名称还没放进来。等信息确定后，这里可以换成一张更完整的小名片。
          </div>
        </div>

        <div>
          <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-muted mb-5">
            Contact
          </h2>
          <p
            className="text-lg text-foreground leading-relaxed mb-6 max-w-sm"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            想合作、想聊产品，或者只是想说一点别的，都可以写信给我。
          </p>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-base text-foreground hover:text-accent transition-colors underline underline-offset-4 decoration-subtle hover:decoration-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-border flex items-center justify-between text-xs font-mono text-subtle">
        <span>&copy; 2026 翁冀 / jiweng.dev</span>
        <span>made slowly</span>
      </div>
    </section>
  )
}

const links = [
  { label: 'Email', value: 'selmaj@163.com', href: 'mailto:selmaj@163.com' },
  { label: 'GitHub', value: 'github.com/ponyo2024', href: 'https://github.com/ponyo2024/' },
  { label: 'LinkedIn', value: 'Ji Weng', href: 'https://www.linkedin.com/in/ji-weng-075a96138/' },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 pt-20 pb-12 max-w-6xl mx-auto">
      {/* Separator */}
      <div className="border-t border-white/[0.06] mb-12" />

      {/* Contact links - clean row with dot separators */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        {links.map((link, i) => (
          <span key={link.label} className="flex items-center gap-x-6">
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-sm text-[#9A9AB0] hover:text-accent transition-colors"
            >
              {link.label}
            </a>
            {i < links.length - 1 && (
              <span className="text-white/10">&middot;</span>
            )}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <span className="text-[#7A7A8E] text-xs font-mono">&copy; 2026 翁冀</span>
      </div>
    </section>
  )
}

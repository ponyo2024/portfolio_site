const links = [
  { label: 'Email', value: '待填写', href: 'mailto:待填写' },
  { label: 'GitHub', value: 'github.com/待填写', href: 'https://github.com/' },
  { label: 'LinkedIn', value: '待填写', href: '#' },
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

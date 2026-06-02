export default function Now() {
  return (
    <section
      id="now"
      className="px-6 md:px-12 py-16 md:py-20 max-w-4xl mx-auto"
    >
      <div className="mb-8 flex items-baseline gap-4">
        <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-muted">
          Now / 近况
        </h2>
        <span className="text-xs font-mono text-subtle">2026 / 06</span>
      </div>

      <div
        className="max-w-2xl space-y-5 text-lg leading-relaxed text-foreground/85 md:text-xl"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
      >
        <p>
          这个月主要在继续打磨 <em className="text-accent not-italic">Hush</em>：让“镜子”更会记得上下文，也让整个空间更安静、更稳定。
        </p>
        <p>
          老翁渔记已经在小范围体验，小马穿衣则继续服务我的日常早晨。它们都不大，但都很真实。
        </p>
        <p className="text-base text-muted not-italic" style={{ fontFamily: 'var(--font-sans)' }}>
          每月更新一次。上次更新：2026/06/02。
        </p>
      </div>
    </section>
  )
}

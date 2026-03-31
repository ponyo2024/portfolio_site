export default function Hero() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pt-20 pb-12 md:pt-28 md:pb-16 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text */}
        <div className="flex-1">
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            将灵感落地为
            <br />
            AI 产品原型
          </h1>
          <p className="mt-6 text-muted text-lg max-w-2xl leading-relaxed">
            搭建、探索、持续迭代。
          </p>
        </div>

        {/* Profile photo */}
        <div className="shrink-0">
          <img
            src="/images/profile.jpg"
            alt="Ji Weng"
            className="w-56 md:w-64 rounded-2xl object-cover border border-white/[0.06]"
          />
        </div>
      </div>
    </section>
  )
}

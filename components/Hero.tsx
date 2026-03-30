export default function Hero() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 max-w-5xl mx-auto">
      <h1
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        从真实业务问题出发，
        <br />
        构建 AI 产品原型
      </h1>
      <p className="mt-6 text-muted text-lg max-w-2xl leading-relaxed">
        10年游戏运营经验 → AI 产品经理。擅长把 Agent、RAG、记忆系统等 AI 能力落地为可用的产品。
      </p>
    </section>
  )
}

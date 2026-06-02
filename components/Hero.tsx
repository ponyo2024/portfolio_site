import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 md:px-12 pt-24 pb-14 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-rose/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.05fr] md:gap-14">
        <div>
          <p className="mb-5 text-xs font-mono tracking-[0.24em] uppercase text-accent">
            Ji Weng / Personal Works
          </p>
          <h1
            className="max-w-2xl text-4xl text-foreground md:text-5xl lg:text-[3.5rem] leading-[1.1]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            把生活里的小愿望，
            <br />
            慢慢做成作品。
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted md:text-lg">
            我是翁冀。这里收着一些我慢慢做出来的小东西：给家人用的工具，给自己搭的日常系统，也有一间可以安静待一会儿的数字小屋。
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-foreground/75">
            我喜欢把复杂的技术做得柔软一点，让它贴近真实的人、真实的早晨、真实的心情。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-accent px-5 py-2.5 text-sm text-background shadow-[0_10px_30px_rgba(177,114,82,0.22)] transition-colors hover:bg-accent-hover"
            >
              看重点作品
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-card/70 px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              写信给我
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full bg-sky/30 blur-2xl" />
          <div className="absolute -bottom-5 left-8 h-24 w-24 rounded-full bg-sage/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-card p-2 shadow-[0_24px_70px_rgba(86,64,45,0.16)]">
            <Image
              src="/images/portfolio-hero.png"
              alt="窗边书桌、水彩花束和晨光组成的作品集插画"
              width={1280}
              height={1024}
              priority
              className="aspect-[1.2/1] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-6 flex items-center gap-3 rounded-2xl border border-white/75 bg-card/90 px-4 py-3 shadow-[0_16px_42px_rgba(86,64,45,0.14)] backdrop-blur">
            <Image
              src="/images/profile.jpg"
              alt="翁冀的头像"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <div className="text-sm leading-5">
              <div className="text-foreground">翁冀 / Ji Weng</div>
              <div className="text-xs text-muted">building with care</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-3 text-sm text-muted sm:grid-cols-3">
        {[
          ['01', 'Hush', '一间可以慢慢说话的数字小屋'],
          ['02', '老翁渔记', '送给爸爸的钓鱼日志'],
          ['03', '小马穿衣', '服务真实早晨的搭配工具'],
        ].map(([num, title, text]) => (
          <div key={title} className="rounded-2xl border border-border/80 bg-card/55 px-4 py-3 backdrop-blur">
            <span className="font-mono text-xs text-accent">{num}</span>
            <span className="ml-3 text-foreground">{title}</span>
            <p className="mt-1 leading-6">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import { EB_Garamond, Noto_Serif_SC, Noto_Sans_SC, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const ebGaramond = EB_Garamond({
  variable: '--font-display-latin',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

const notoSerifSC = Noto_Serif_SC({
  variable: '--font-display-cjk',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

const notoSansSC = Noto_Sans_SC({
  variable: '--font-noto',
  weight: ['300', '400', '500'],
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  weight: ['400'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '翁冀 Ji Weng',
  description: '做一些温柔、实用，也和真实生活有关的小作品。',
  icons: {
    icon: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${ebGaramond.variable} ${notoSerifSC.variable} ${notoSansSC.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: 'Дом мёда Абхазии | Натуральный горный мёд с пасек Бзыбского ущелья',
  description: 'Купить натуральный абхазский мёд: альпийский, каштановый, бортевой, цитрусовый. Прямые поставки от пасечников. Доставка по России. ✅ Гарантия качества.',
  keywords: 'абхазский мёд, горный мёд, натуральный мёд, мёд Абхазия, каштановый мёд, бортевой мёд, альпийский мёд, купить мёд',
  

  openGraph: {
    title: 'Дом мёда Абхазии - Натуральный горный мёд',
    description: 'Прямые поставки натурального мёда из экологически чистых районов Абхазии',
    images: ['https://i.postimg.cc/PxtsJWs9/logohoney_1.png'],
  },
  

  alternates: {
    canonical: 'https://arshbamed.ru/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
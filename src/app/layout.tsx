import '@/styles/global.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Дом мёда Абхазии',
  description: 'Лучший абхазский мед — натуральный, свежий и вкусный. Заказывайте прямо с сайта!', 
  icons: {
    icon: '/favicon.ico?v=2',
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

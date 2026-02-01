import type { Metadata } from "next";
import PrivacyPolicy from "../Privacy";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Дом мёда в Абхазии | Купить мёд",
  description:
    "Политика конфиденциальности сайта Дом мёда Аршба. Узнайте, как мы защищаем ваши данные при покупке натурального мёда из Абхазии.",
  keywords: [
    "купить мед в абхазии",
    "мед из абхазии",
    "натуральный мед из абхазии",
    "альпийский мед в абхазии",
    "горный мед в абхазии",
    "дом меда в абхазии",
    "купить натуральный мед в абхазии"
  ],
  openGraph: {
    title: "Политика конфиденциальности — Дом мёда Аршба",
    description:
      "Политика конфиденциальности сайта Дом мёда Аршба. Мы заботимся о безопасности ваших данных при покупке мёда из Абхазии.",
    url: "https://arshbamed.ru/privacy",
    siteName: "Дом мёда Аршба",
    images: [
      {
        url: "https://i.postimg.cc/nr2gWQyk/honey.png",
        width: 1200,
        height: 630,
        alt: "Политика конфиденциальности Дом мёда в Абхазии",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}

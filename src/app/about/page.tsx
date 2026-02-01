import type { Metadata } from "next";
import About from "../About";

export const metadata: Metadata = {
  title: "О нас — Дом мёда в Абхазии | Купить натуральный мёд",
  description:
    "Дом мёда Аршба в Абхазии — семейная пасека. Узнайте о нашей истории, как мы собираем натуральный альпийский и горный мёд в Абхазии.",
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
    title: "О нас — Дом мёда Аршба в Абхазии",
    description:
      "Познакомьтесь с семейной пасекой Дом мёда Аршба. Горный и альпийский мёд, натуральный и экологически чистый.",
    url: "https://arshbamed.ru/about",
    siteName: "Дом мёда Аршба",
    images: [
      {
        url: "https://i.postimg.cc/nr2gWQyk/honey.png",
        width: 1200,
        height: 630,
        alt: "Дом мёда Аршба — натуральный мёд из Абхазии",
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
  return <About />;
}

import type { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: "Купить мёд в Абхазии — Дом мёда Аршба",
  description:
    "Натуральный мёд из Абхазии. Горный мёд, альпийский мёд, липовый и цветочный. Купить мёд в Абхазии напрямую от пасечников.",
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
    title: "Дом мёда в Абхазии — купить натуральный мёд",
    description:
      "Горный, альпийский и натуральный мёд из Абхазии. Купить мед в Абхазии напрямую от пасечников.",
    url: "https://arshbamed.ru",
    siteName: "Дом мёда Аршба",
    images: [
      {
        url: "https://i.postimg.cc/nr2gWQyk/honey.png",
        width: 1200,
        height: 630,
        alt: "Натуральный мёд из Абхазии",
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
  return <Home />;
}
import type { Metadata } from "next";
import Catalog from "../Catalog";

export const metadata: Metadata = {
  title: "Каталог — Купить мёд в Абхазии | Натуральный мёд",
  description:
    "Каталог натурального мёда из Абхазии. Горный, альпийский, липовый и цветочный мёд. Купить мед в Абхазии напрямую от семейной пасеки.",
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
    title: "Каталог — Дом мёда в Абхазии",
    description:
      "Натуральный мёд из Абхазии. Горный, альпийский и липовый мёд. Купить мёд напрямую от пасеки.",
    url: "https://arshbamed.ru/catalog",
    siteName: "Дом мёда Аршба",
    images: [
      {
        url: "https://i.postimg.cc/nr2gWQyk/honey.png",
        width: 1200,
        height: 630,
        alt: "Каталог натурального мёда из Абхазии",
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
  return <Catalog />;
}

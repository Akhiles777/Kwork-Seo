import type { Metadata } from "next";
import Delivery from "../Delivery";

export const metadata: Metadata = {
  title: "Доставка и оплата — Купить мёд в Абхазии | Дом мёда",
  description:
    "Узнайте о доставке и способах оплаты натурального мёда из Абхазии. Горный, альпийский и цветочный мёд. Купить мёд напрямую от пасеки.",
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
    title: "Доставка и оплата — Дом мёда в Абхазии",
    description:
      "Доставка и способы оплаты натурального мёда из Абхазии. Горный, альпийский и липовый мёд напрямую от пасеки.",
    url: "https://arshbamed.ru/delivery",
    siteName: "Дом мёда Аршба",
    images: [
      {
        url: "https://i.postimg.cc/nr2gWQyk/honey.png",
        width: 1200,
        height: 630,
        alt: "Доставка и оплата мёда из Абхазии",
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
  return <Delivery />;
}

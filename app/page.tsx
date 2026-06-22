import type { Metadata } from "next";

import HeadSection from "./home/head";
import BodySection from "./home/body";
import StartPrice from "./home/StartPrice";
import PriceSection from "./home/price";
import ImageSection from "./home/image";

const siteUrl = "https://your-domain.com";

export const metadata: Metadata = {
  title: "SCAN SUNG POS | ระบบ POS ร้านอาหารและ QR Order",
  description:
    "SCAN SUNG POS ระบบ POS ร้านอาหารและระบบสั่งอาหารผ่าน QR Code ช่วยให้ลูกค้าสแกนเมนู สั่งอาหาร และส่งออเดอร์เข้าร้านแบบเรียลไทม์ เริ่มใช้งานง่ายภายในไม่กี่นาที",
  keywords: [
    "ระบบ POS ร้านอาหาร",
    "QR Order",
    "ระบบสั่งอาหารผ่าน QR Code",
    "ระบบจัดการร้านอาหาร",
    "ระบบรับออเดอร์",
    "เมนูออนไลน์",
    "POS ร้านอาหาร",
    "QR menu",
    "SCAN SUNG POS",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "SCAN SUNG POS | ระบบ POS ร้านอาหารและ QR Order",
    description:
      "ให้ลูกค้าสแกน QR Code ดูเมนู สั่งอาหาร และส่งออเดอร์เข้าระบบร้านได้ทันที ลดความผิดพลาดและเพิ่มความเร็วในการให้บริการ",
    url: siteUrl,
    siteName: "SCAN SUNG POS",
    type: "website",
    locale: "th_TH",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "SCAN SUNG POS ระบบ POS ร้านอาหารและ QR Order",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SCAN SUNG POS | ระบบ POS ร้านอาหารและ QR Order",
    description:
      "ระบบ POS ร้านอาหารและ QR Order สำหรับรับออเดอร์ผ่าน QR Code แบบเรียลไทม์",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main>
      <HeadSection />
      <ImageSection />
      <BodySection />

      <PriceSection />
    </main>
  );
}

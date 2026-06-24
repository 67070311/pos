import type { Metadata } from "next";

import HeadSection from "./home/head";
import BodySection from "./home/body";
import StartPrice from "./home/StartPrice";
import PriceSection from "./home/price";
import ImageSection from "./home/image";
import { OPEN_GRAPH_IMAGE, SEO_KEYWORDS, SITE_NAME } from "./seo";

export const metadata: Metadata = {
  title: {
    absolute: "SCAN SUNG POS | ระบบ POS ร้านอาหารพร้อม QR Code",
  },
  description:
    "SCAN SUNG POS หรือ ScanSung ระบบ POS ร้านอาหารผ่านเว็บพร้อม QR Order ลูกค้าสแกน QR Code ดูเมนูและสั่งอาหารได้ ไม่ต้องซื้อเครื่อง POS ราคาเริ่มต้น 199 บาท",
  keywords: SEO_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SCAN SUNG POS | ระบบ POS ร้านอาหารพร้อม QR Code",
    description:
      "POS ผ่านเว็บสำหรับร้านอาหาร ลูกค้าสแกน QR Code ดูเมนู สั่งอาหาร และส่งออเดอร์เข้าร้านได้ทันที",
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "th_TH",
    images: [OPEN_GRAPH_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "SCAN SUNG POS | ระบบ POS ร้านอาหารพร้อม QR Code",
    description:
      "POS ร้านอาหารผ่านเว็บ พร้อม QR Order ไม่ต้องซื้อเครื่อง POS",
    images: [OPEN_GRAPH_IMAGE.url],
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

import type { Metadata } from "next";
import FaqHead from "./head";
import { OPEN_GRAPH_IMAGE, SITE_NAME } from "../seo";

export const metadata: Metadata = {
  title: "คำถามเกี่ยวกับ POS ไม่ใช้เครื่องและ QR Order",
  description:
    "คำถามเกี่ยวกับ SCAN SUNG POS ระบบ POS ร้านอาหารผ่านเว็บ ไม่ใช้เครื่อง POS ไม่ต้องโหลดแอป พร้อมระบบสั่งอาหารผ่าน QR Code บนมือถือและแท็บเล็ต",
  keywords: [
    "POS ไม่ใช้เครื่อง",
    "POS ไม่ต้องซื้อเครื่อง",
    "POS ผ่านเว็บ",
    "QR Order คืออะไร",
    "ระบบสั่งอาหารผ่าน QR Code",
    "ระบบ POS ร้านอาหาร",
    "ScanSung",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ ระบบ POS บนเบราว์เซอร์ | SCAN SUNG POS",
    description:
      "รวมคำถามเกี่ยวกับระบบ POS ที่ใช้งานผ่านเว็บเบราว์เซอร์ ไม่ต้องดาวน์โหลดแอป และไม่ต้องซื้อเครื่อง POS เพิ่ม",
    url: "/faq",
    siteName: SITE_NAME,
    type: "website",
    locale: "th_TH",
    images: [OPEN_GRAPH_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "คำถามเกี่ยวกับ POS ไม่ใช้เครื่องและ QR Order",
    description:
      "POS ร้านอาหารผ่านเว็บ ไม่ต้องซื้อเครื่อง พร้อมระบบสั่งอาหารผ่าน QR Code",
    images: [OPEN_GRAPH_IMAGE.url],
  },
};

export default function FaqPage() {
  return (
    <main>
      <FaqHead />
    </main>
  );
}

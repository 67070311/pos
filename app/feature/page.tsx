import type { Metadata } from "next";
import FeatureSection from "./head";
import PriceSection from "./price";
import { OPEN_GRAPH_IMAGE, SITE_NAME } from "../seo";

export const metadata: Metadata = {
  title: "ฟีเจอร์ระบบ POS ร้านอาหารและ QR Order",
  description:
    "ฟีเจอร์ SCAN SUNG POS ระบบ POS ร้านอาหารผ่านเว็บ ไม่ใช้เครื่อง POS ลูกค้าสั่งอาหารผ่าน QR Code พร้อมจัดการร้าน เมนู ออเดอร์ ยอดขาย และพนักงาน",
  keywords: [
    "POS ไม่ใช้เครื่อง",
    "POS ไม่ต้องซื้อเครื่อง",
    "POS ผ่านเว็บ",
    "ฟีเจอร์ POS ร้านอาหาร",
    "ระบบสั่งอาหารผ่าน QR Code",
    "QR Order",
    "ระบบจัดการร้านอาหาร",
    "ScanSung",
  ],
  alternates: {
    canonical: "/feature",
  },
  openGraph: {
    title: "ฟีเจอร์ SCAN SUNG POS | ระบบ POS ร้านอาหารและ QR Order",
    description:
      "ระบบ POS ร้านอาหารพร้อม QR Order ใช้งานผ่านเว็บ 100% ลูกค้าสแกน สั่งอาหาร และร้านรับออเดอร์ได้ทันที",
    url: "/feature",
    siteName: SITE_NAME,
    type: "website",
    locale: "th_TH",
    images: [OPEN_GRAPH_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "ฟีเจอร์ระบบ POS ร้านอาหารและ QR Order",
    description:
      "POS ร้านอาหารผ่านเว็บ ไม่ต้องซื้อเครื่อง พร้อมระบบสั่งอาหารผ่าน QR Code",
    images: [OPEN_GRAPH_IMAGE.url],
  },
};

export default function FeaturePage() {
  return (
    <main>
      <FeatureSection />
      <PriceSection />
    </main>
  );
}

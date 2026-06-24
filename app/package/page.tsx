import type { Metadata } from "next";
import PackageHead from "./head";
import { OPEN_GRAPH_IMAGE, SITE_NAME } from "../seo";

export const metadata: Metadata = {
  title: "POS ราคาถูก ราคา 199 บาท สำหรับร้านอาหาร",
  description:
    "แพ็กเกจ SCAN SUNG POS ระบบ POS ราคาถูกสำหรับร้านอาหาร ราคา 199 บาทต่อเดือน พร้อม QR Order ใช้ผ่านเว็บ ไม่ต้องซื้อเครื่อง POS ทดลองใช้ฟรี 30 วัน",
  keywords: [
    "POS ราคาถูก",
    "POS ราคา 199 บาท",
    "ราคา POS ร้านอาหาร",
    "โปรแกรม POS ราคาถูก",
    "POS ไม่ใช้เครื่อง",
    "ระบบ POS ร้านอาหาร",
    "QR Order",
    "ScanSung",
  ],
  alternates: {
    canonical: "/package",
  },
  openGraph: {
    title: "POS ร้านอาหาร ราคา 199 บาท | SCAN SUNG POS",
    description:
      "ราคาเดียว 199 บาทต่อเดือน ใช้งานระบบ POS ร้านอาหารผ่านเว็บ พร้อม QR Order ทดลองใช้ฟรี 30 วัน",
    url: "/package",
    siteName: SITE_NAME,
    type: "website",
    locale: "th_TH",
    images: [OPEN_GRAPH_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "POS ร้านอาหาร ราคา 199 บาท | SCAN SUNG POS",
    description:
      "POS ราคาถูกสำหรับร้านอาหาร ใช้ผ่านเว็บ ไม่ต้องซื้อเครื่อง POS",
    images: [OPEN_GRAPH_IMAGE.url],
  },
};

export default function PackagePage() {
  return (
    <main>
      <PackageHead />
    </main>
  );
}

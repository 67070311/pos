import type { Metadata } from "next";
import FeatureSection from "./head";
import PriceSection from "./price";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com";

export const metadata: Metadata = {
  title: "ฟีเจอร์ SCAN SUNG POS | ระบบ POS ร้านอาหารและ QR Order",
  description:
    "ฟีเจอร์หลักของ SCAN SUNG POS ระบบสั่งอาหารผ่าน QR Code สำหรับร้านอาหาร ใช้งานผ่านเว็บ ไม่ต้องโหลดแอป ไม่ต้องซื้อเครื่อง POS แพง พร้อมจัดการร้าน เมนู ออเดอร์ ยอดขาย และพนักงาน",
  alternates: {
    canonical: `${siteUrl}/feature`,
  },
  openGraph: {
    title: "ฟีเจอร์ SCAN SUNG POS | ระบบ POS ร้านอาหารและ QR Order",
    description:
      "ระบบ POS ร้านอาหารพร้อม QR Order ใช้งานผ่านเว็บ 100% ลูกค้าสแกน สั่งอาหาร และร้านรับออเดอร์ได้ทันที",
    url: `${siteUrl}/feature`,
    siteName: "SCAN SUNG POS",
    type: "website",
    locale: "th_TH",
  },
  robots: {
    index: true,
    follow: true,
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

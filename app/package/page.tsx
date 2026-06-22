import type { Metadata } from "next";
import PackageHead from "./head";

const siteUrl = "https://your-domain.com/package";

export const metadata: Metadata = {
  title: "แพ็กเกจระบบ POS ร้านอาหาร | SCAN SUNG POS",
  description:
    "แพ็กเกจ SCAN SUNG POS ราคา 199 บาทต่อเดือน ระบบ POS ร้านอาหารพร้อม QR Order จัดการร้าน เมนู ออเดอร์ ยอดขาย และพนักงาน ทดลองใช้ฟรี 30 วัน",
  keywords: [
    "ระบบ POS ร้านอาหาร",
    "POS ร้านอาหาร",
    "ระบบสั่งอาหารผ่าน QR Code",
    "ระบบจัดการร้านอาหาร",
    "ระบบรับออเดอร์",
    "QR Order",
    "SCAN SUNG POS",
    "ราคา POS ร้านอาหาร",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "แพ็กเกจระบบ POS ร้านอาหาร | SCAN SUNG POS",
    description:
      "ราคาเดียว 199 บาทต่อเดือน ใช้งานระบบ POS ร้านอาหารผ่านเว็บ พร้อม QR Order ทดลองใช้ฟรี 30 วัน",
    url: siteUrl,
    siteName: "SCAN SUNG POS",
    type: "website",
    locale: "th_TH",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "แพ็กเกจระบบ POS ร้านอาหาร SCAN SUNG POS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "แพ็กเกจระบบ POS ร้านอาหาร | SCAN SUNG POS",
    description:
      "ระบบ POS ร้านอาหารผ่านเว็บ พร้อม QR Order ราคา 199 บาทต่อเดือน ทดลองใช้ฟรี 30 วัน",
    images: ["https://your-domain.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PackagePage() {
  return (
    <main>
      <PackageHead />
    </main>
  );
}

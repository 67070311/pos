import type { Metadata } from "next";
import FaqHead from "./head";

const siteUrl = "https://your-domain.com/faq";

export const metadata: Metadata = {
  title: "FAQ ระบบ POS บนเบราว์เซอร์ | SCAN SUNG POS",
  description:
    "คำถามที่พบบ่อยเกี่ยวกับระบบ POS บนเบราว์เซอร์ ใช้งานผ่านเว็บ ไม่ต้องโหลดแอป ไม่ต้องซื้อเครื่อง POS เฉพาะ รองรับมือถือ แท็บเล็ต และคอมพิวเตอร์",
  keywords: [
    "FAQ POS",
    "ระบบ POS บนเบราว์เซอร์",
    "POS ไม่ต้องโหลดแอป",
    "POS ไม่ต้องซื้อเครื่อง",
    "ระบบขายหน้าร้านผ่านเว็บ",
    "ระบบ POS ร้านอาหาร",
    "ระบบจัดการร้าน",
    "SCAN SUNG POS",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "FAQ ระบบ POS บนเบราว์เซอร์ | SCAN SUNG POS",
    description:
      "รวมคำถามเกี่ยวกับระบบ POS ที่ใช้งานผ่านเว็บเบราว์เซอร์ ไม่ต้องดาวน์โหลดแอป และไม่ต้องซื้อเครื่อง POS เพิ่ม",
    url: siteUrl,
    siteName: "SCAN SUNG POS",
    type: "website",
    locale: "th_TH",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ ระบบ POS บนเบราว์เซอร์ SCAN SUNG POS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ ระบบ POS บนเบราว์เซอร์ | SCAN SUNG POS",
    description:
      "ระบบ POS ผ่านเว็บ ไม่ต้องโหลดแอป ไม่ต้องซื้อเครื่อง POS เฉพาะ ใช้งานได้บนมือถือ แท็บเล็ต และคอมพิวเตอร์",
    images: ["https://your-domain.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FaqPage() {
  return (
    <main>
      <FaqHead />
    </main>
  );
}

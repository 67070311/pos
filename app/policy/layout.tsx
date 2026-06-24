import type { Metadata } from "next";
import { OPEN_GRAPH_IMAGE } from "../seo";

export const metadata: Metadata = {
  title: "เงื่อนไขการใช้งาน",
  description:
    "เงื่อนไขและข้อกำหนดการใช้งาน SCAN SUNG POS ระบบ POS ร้านอาหารและระบบสั่งอาหารผ่าน QR Code",
  alternates: {
    canonical: "/policy",
  },
  openGraph: {
    title: "เงื่อนไขการใช้งาน | SCAN SUNG POS",
    description:
      "เงื่อนไขการใช้งานระบบ POS ร้านอาหารและระบบสั่งอาหารผ่าน QR Code ของ SCAN SUNG POS",
    url: "/policy",
    type: "website",
    locale: "th_TH",
    images: [OPEN_GRAPH_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "เงื่อนไขการใช้งาน | SCAN SUNG POS",
    description:
      "เงื่อนไขการใช้งานระบบ POS ร้านอาหารและระบบสั่งอาหารผ่าน QR Code",
    images: [OPEN_GRAPH_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

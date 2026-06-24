import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  OPEN_GRAPH_IMAGE,
  SEO_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "./seo";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SCAN SUNG POS | ระบบ POS ร้านอาหารพร้อม QR Code",
    template: "%s | SCAN SUNG POS",
  },
  description:
    "SCAN SUNG POS ระบบ POS ร้านอาหารผ่านเว็บ พร้อมระบบสั่งอาหารผ่าน QR Code ไม่ต้องซื้อเครื่อง POS ราคาเริ่มต้น 199 บาทต่อเดือน",
  applicationName: SITE_NAME,
  keywords: SEO_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Restaurant POS Software",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SCAN SUNG POS | ระบบ POS ร้านอาหารพร้อม QR Code",
    description:
      "ระบบ POS ร้านอาหารผ่านเว็บ ลูกค้าสแกน QR Code ดูเมนูและสั่งอาหารได้ทันที ไม่ต้องซื้อเครื่อง POS",
    url: "/",
    siteName: SITE_NAME,
    locale: "th_TH",
    type: "website",
    images: [OPEN_GRAPH_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "SCAN SUNG POS | ระบบ POS ร้านอาหารพร้อม QR Code",
    description:
      "ระบบ POS ร้านอาหารผ่านเว็บ พร้อม QR Order ราคาเริ่มต้น 199 บาทต่อเดือน",
    images: [OPEN_GRAPH_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: ["ScanSung", "SCAN SUNG", "สแกนสั่ง", "แสกนสั่ง"],
        url: SITE_URL,
        logo: `${SITE_URL}/logo/logo.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "th-TH",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="th">
      <body className={prompt.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

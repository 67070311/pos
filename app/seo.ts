export const SITE_URL = "https://scansung.app";
export const SITE_NAME = "SCAN SUNG POS";
export const OPEN_GRAPH_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "SCAN SUNG POS ระบบ POS ร้านอาหารพร้อมระบบสั่งอาหารผ่าน QR Code",
};

export const SEO_KEYWORDS = [
  "แสกนสั่ง",
  "สแกนสั่ง",
  "scansung",
  "scan sung",
  "SCAN SUNG POS",
  "POS",
  "ระบบ POS",
  "ระบบ POS ร้านอาหาร",
  "POS ร้านอาหาร",
  "POS ไม่ใช้เครื่อง",
  "POS ไม่ต้องซื้อเครื่อง",
  "POS ผ่านเว็บ",
  "POS ราคาถูก",
  "POS ราคา 199 บาท",
  "ระบบร้านอาหาร",
  "ระบบจัดการร้านอาหาร",
  "ระบบสั่งอาหารผ่าน QR Code",
  "QR Order",
  "QR Menu",
  "เมนูออนไลน์",
  "ระบบรับออเดอร์",
];

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

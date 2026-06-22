"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ClipboardList, QrCode, Store, Utensils } from "lucide-react";

type Feature = {
  step: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com";

const viewport = {
  once: true,
  amount: 0.2,
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const cardMotion: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const features: Feature[] = [
  {
    step: "01",
    title: "สร้างร้าน",
    description:
      "สมัครและตั้งค่าร้านของคุณ พร้อมตั้งค่าข้อมูลพื้นฐานของร้าน สาขา และโต๊ะ เพื่อเตรียมรับออเดอร์ผ่านระบบ",
    image: "/home/body/first.png",
    imageAlt: "หน้าจอสร้างร้านในระบบ SCAN SUNG POS",
    icon: <Store size={18} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    step: "02",
    title: "เพิ่มเมนูอาหาร",
    description:
      "เพิ่มเมนู รูปภาพ รายละเอียด หมวดหมู่ และราคา เพื่อให้ลูกค้าดูเมนูและเลือกสั่งอาหารผ่านมือถือได้ง่ายขึ้น",
    image: "/home/body/second.png",
    imageAlt: "หน้าจอเพิ่มเมนูอาหารในระบบ SCAN SUNG POS",
    icon: <Utensils size={18} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    step: "03",
    title: "วาง QR บนโต๊ะ",
    description:
      "ดาวน์โหลดหรือพิมพ์ QR Code ของแต่ละโต๊ะ แล้วนำไปวางให้ลูกค้าสแกน ดูเมนู และส่งออเดอร์เข้าระบบ",
    image: "/home/body/third.png",
    imageAlt: "ป้าย QR Code สำหรับวางบนโต๊ะอาหาร",
    icon: <QrCode size={18} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    step: "04",
    title: "รับออเดอร์ได้ทันที",
    description:
      "เมื่อลูกค้าสแกน QR และสั่งอาหาร ออเดอร์จะถูกส่งเข้าสู่ระบบของร้านแบบเรียลไทม์ ช่วยลดความผิดพลาด",
    image: "/home/body/4.png",
    imageAlt: "ระบบรับออเดอร์จาก QR Code แบบเรียลไทม์",
    icon: <ClipboardList size={18} strokeWidth={2.2} aria-hidden="true" />,
  },
];

export default function BodySection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:py-24"
    >
      <SectionBackground />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <p className="mx-auto mb-3 inline-flex items-center rounded-full bg-[#f1ecff] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#7437f2] sm:text-xs">
            HOW IT WORKS
          </p>

          <h2
            id="how-it-works-title"
            className="text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-5xl"
          >
            เริ่มใช้งานง่าย
            <br />
            ภายใน <span className="text-[#7437f2]">5 นาที</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-neutral-500 sm:text-base">
            ตั้งค่าร้าน เพิ่มเมนู วาง QR Code และเริ่มรับออเดอร์ผ่านระบบได้ทันที
          </p>
        </motion.header>

        <ol
          className="grid gap-4 sm:gap-5 md:grid-cols-2"
          aria-label="ขั้นตอนเริ่มใช้งานระบบ SCAN SUNG POS"
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.step} feature={feature} index={index} />
          ))}
        </ol>
      </div>

      <HowToJsonLd />
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.li
      variants={cardMotion}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden rounded-[28px] bg-[#f7f5ff] p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(116,55,242,0.12)] sm:p-6"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7437f2] text-white shadow-lg shadow-purple-200">
          {feature.icon}
        </span>

        <span className="text-xs font-medium tracking-[0.16em] text-[#7437f2]">
          {feature.step}
        </span>
      </div>

      <h3 className="text-xl font-semibold leading-tight text-neutral-950 sm:text-2xl">
        {feature.title}
      </h3>

      <p className="mt-3 min-h-[72px] text-sm font-light leading-relaxed text-neutral-500 sm:text-base">
        {feature.description}
      </p>

      <div className="mt-5 overflow-hidden rounded-[22px] bg-white p-4 shadow-inner shadow-purple-50">
        <div className="relative h-[190px] sm:h-[220px]">
          <Image
            src={feature.image}
            alt={feature.imageAlt}
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            priority={index === 0}
            className="object-contain transition duration-500 group-hover:scale-[1.035]"
          />
        </div>
      </div>
    </motion.li>
  );
}

function SectionBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute left-[-10%] top-[12%] h-[300px] w-[300px] rounded-full bg-[#7437f2]/[0.05] blur-3xl" />
      <div className="absolute right-[-10%] bottom-[8%] h-[340px] w-[340px] rounded-full bg-[#7437f2]/[0.05] blur-3xl" />
    </div>
  );
}

function HowToJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "วิธีเริ่มใช้งาน SCAN SUNG POS ภายใน 5 นาที",
    description:
      "ขั้นตอนเริ่มใช้งานระบบสั่งอาหารผ่าน QR Code สำหรับร้านอาหาร ตั้งแต่สร้างร้าน เพิ่มเมนู วาง QR Code และรับออเดอร์แบบเรียลไทม์",
    step: features.map((feature) => ({
      "@type": "HowToStep",
      name: feature.title,
      text: feature.description,
      image: `${siteUrl}${feature.image}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

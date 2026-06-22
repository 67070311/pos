"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import {
  BarChart3,
  Check,
  ClipboardList,
  FolderTree,
  MenuSquare,
  PackageCheck,
  QrCode,
  Sparkles,
  Store,
  Users,
  Utensils,
} from "lucide-react";

type FeatureItem = {
  label: string;
  icon: ReactNode;
};

type LimitItem = {
  label: string;
  icon: ReactNode;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com";

const viewport = {
  once: true,
  amount: 0.25,
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const features: FeatureItem[] = [
  {
    label: "ระบบสั่งอาหารผ่าน QR",
    icon: <QrCode size={12} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    label: "ระบบจัดการร้าน",
    icon: <Store size={12} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    label: "ระบบจัดการเมนู",
    icon: <MenuSquare size={12} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    label: "ระบบจัดการหมวดหมู่",
    icon: <FolderTree size={12} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    label: "ระบบรับออเดอร์",
    icon: <ClipboardList size={12} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    label: "ระบบดูยอดขายวันนี้",
    icon: <BarChart3 size={12} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    label: "ระบบจัดการพนักงาน",
    icon: <Users size={12} strokeWidth={2.2} aria-hidden="true" />,
  },
];

const limits: LimitItem[] = [
  {
    label: "เมนูสูงสุด 50 เมนู",
    icon: <Utensils size={13} strokeWidth={2.1} aria-hidden="true" />,
  },
  {
    label: "พนักงานสูงสุด 4 คน",
    icon: <Users size={13} strokeWidth={2.1} aria-hidden="true" />,
  },
];

const trialBenefits = ["ไม่ผูกบัตร", "ไม่ผูกมัด", "ยกเลิกเมื่อไหร่ก็ได้"];

export default function PriceSection() {
  return (
    <section
      id="price"
      aria-labelledby="price-title"
      className="relative overflow-hidden bg-white px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-16 md:px-8 md:pt-20 lg:pb-16 lg:pt-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading />

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          aria-labelledby="price-plan-title"
          className="mx-auto max-w-3xl overflow-hidden rounded-[18px] bg-gradient-to-br from-[#ff8b4a] via-[#ff572f] to-[#d92218] p-2 shadow-[0_18px_45px_rgba(255,87,47,0.16)] sm:rounded-[22px] sm:p-2.5 lg:p-3"
        >
          <div className="relative overflow-hidden rounded-[15px] sm:rounded-[19px]">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.28),transparent_34%),radial-gradient(circle_at_82%_28%,rgba(255,255,255,0.13),transparent_30%)]"
            />

            <TopPlanCard />

            <BottomPlanDetails />
          </div>
        </motion.article>

        <PriceCta />

        <p className="mx-auto mt-5 max-w-xl text-center text-[10px] font-light leading-relaxed text-neutral-500 sm:text-[11px]">
          ราคาเหมาะสำหรับร้านอาหาร คาเฟ่
          และร้านเครื่องดื่มที่ต้องการเริ่มรับออเดอร์ผ่าน QR Code
          โดยไม่ต้องลงทุนระบบขนาดใหญ่ตั้งแต่วันแรก
        </p>
      </div>

      <SeoJsonLd />
    </section>
  );
}

function SectionHeading() {
  return (
    <motion.header
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mx-auto mb-5 max-w-xl text-center sm:mb-6 lg:mb-7"
    >
      <p className="mx-auto mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-[#ffdfd1] bg-white px-3 py-1.5 text-[10px] font-normal text-[#ff572f] shadow-[0_6px_18px_rgba(255,87,47,0.06)] sm:text-[11px]">
        <Sparkles size={12} strokeWidth={2.2} aria-hidden="true" />
        แพ็กเกจเดียว จ่ายง่าย ใช้ครบ
      </p>

      <h2
        id="price-title"
        className="text-xl font-medium tracking-tight text-neutral-950 sm:text-2xl lg:text-[30px]"
      >
        ราคาเดียวสำหรับร้านอาหาร
      </h2>

      <p className="mx-auto mt-2.5 max-w-lg text-[11px] font-light leading-relaxed text-neutral-500 sm:text-xs">
        ระบบ POS ร้านอาหารพร้อม QR Order สำหรับจัดการร้าน เมนู ออเดอร์ ยอดขาย
        และพนักงาน ใช้งานผ่านเว็บได้ทันที ไม่ต้องซื้อเครื่อง POS เพิ่ม
      </p>
    </motion.header>
  );
}

function TopPlanCard() {
  return (
    <div className="relative rounded-[15px] bg-white p-3.5 shadow-[0_14px_36px_rgba(55,20,10,0.11)] sm:rounded-[19px] sm:p-4 lg:p-5">
      <div className="grid items-center gap-4 lg:grid-cols-[1.1fr_0.5fr_0.85fr] lg:gap-5">
        <PlanText />
        <PlanImage />
        <TrialCard />
      </div>
    </div>
  );
}

function PlanText() {
  return (
    <div className="text-center lg:text-left">
      <p className="mb-2 inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wide text-[#ff572f]">
        <Sparkles size={12} strokeWidth={2.2} aria-hidden="true" />
        SCAN SUNG POS
      </p>

      <h3
        id="price-plan-title"
        className="text-xl font-medium leading-tight tracking-tight text-neutral-950 sm:text-2xl lg:text-[30px]"
      >
        แพ็กเกจเดียว
        <br />
        <span className="font-light italic text-[#ff572f]">
          คุ้มค่าสำหรับร้านอาหาร
        </span>
      </h3>

      <div
        className="mt-3 flex items-end justify-center gap-1.5 lg:justify-start"
        aria-label="ราคา 199 บาทต่อเดือน"
      >
        <span className="text-4xl font-medium leading-none text-neutral-950 sm:text-5xl">
          199
        </span>
        <span className="pb-1 text-sm font-normal text-neutral-900 sm:text-base">
          บาท/เดือน
        </span>
      </div>

      <p className="mx-auto mt-2.5 max-w-sm text-[11px] font-light leading-relaxed text-neutral-500 sm:text-xs lg:mx-0">
        เริ่มต้นง่าย จ่ายราคาเดียว ได้ฟีเจอร์ครบสำหรับจัดการร้าน รับออเดอร์
        และดูแลเมนูอาหารผ่านเว็บ
      </p>
    </div>
  );
}

function PlanImage() {
  return (
    <div className="mx-auto flex w-full max-w-[110px] justify-center sm:max-w-[130px] lg:max-w-[120px]">
      <Image
        src="/home/price/Payment Done.gif"
        alt="ภาพประกอบแพ็กเกจระบบ POS ร้านอาหาร SCAN SUNG POS"
        width={260}
        height={260}
        sizes="(max-width: 640px) 110px, (max-width: 1024px) 130px, 120px"
        unoptimized
        className="h-auto w-full object-contain drop-shadow-[0_10px_26px_rgba(255,87,47,0.13)]"
      />
    </div>
  );
}

function TrialCard() {
  return (
    <aside className="mx-auto w-full max-w-[250px] rounded-[15px] border border-[#ffeadf] bg-[#fff6f1] p-3 shadow-[0_10px_24px_rgba(255,87,47,0.08)] lg:mx-0">
      <div className="mb-2.5 flex items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ff835f] to-[#ff3f25] text-white shadow-sm shadow-orange-200">
          <PackageCheck size={16} strokeWidth={2.2} aria-hidden="true" />
        </span>

        <div>
          <h3 className="text-xs font-medium text-neutral-950 sm:text-sm">
            ทดลองใช้ฟรี 30 วัน
          </h3>
          <p className="text-[10px] font-light text-neutral-500 sm:text-[11px]">
            เริ่มได้ทันที ไม่ต้องใช้บัตร
          </p>
        </div>
      </div>

      <ul className="space-y-1.5" aria-label="เงื่อนไขทดลองใช้ฟรี">
        {trialBenefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-center gap-2 text-[11px] font-light text-neutral-800 sm:text-xs"
          >
            <Check
              size={13}
              strokeWidth={2.3}
              className="shrink-0 text-[#ff572f]"
              aria-hidden="true"
            />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function BottomPlanDetails() {
  return (
    <div className="relative grid gap-4 px-3.5 py-4 text-white sm:px-4 lg:grid-cols-[1.35fr_0.9fr] lg:gap-5 lg:px-5 lg:py-5">
      <FeatureList />
      <LimitList />
    </div>
  );
}

function FeatureList() {
  return (
    <div>
      <h3 className="mb-2.5 text-sm font-medium text-white">รวมทุกฟีเจอร์</h3>

      <ul
        aria-label="ฟีเจอร์ในแพ็กเกจ SCAN SUNG POS"
        className="grid gap-2 sm:grid-cols-2"
      >
        {features.map((feature) => (
          <li
            key={feature.label}
            className="flex items-center gap-2 text-[11px] font-light text-white/92 sm:text-xs"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/14 text-white backdrop-blur">
              {feature.icon}
            </span>
            <span>{feature.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LimitList() {
  return (
    <div>
      <h3 className="mb-2.5 text-sm font-medium text-white">ข้อจำกัดแพ็กเกจ</h3>

      <ul
        aria-label="ข้อจำกัดของแพ็กเกจ"
        className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1"
      >
        {limits.map((limit) => (
          <li
            key={limit.label}
            className="flex items-center gap-2 text-[11px] font-light text-white/92 sm:text-xs"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/14 text-white backdrop-blur">
              {limit.icon}
            </span>
            <span>{limit.label}</span>
          </li>
        ))}
      </ul>

      <div className="mt-3 rounded-[12px] border border-white/20 bg-white/12 p-3 text-white backdrop-blur">
        <p className="text-xs font-medium">ทดลองใช้ฟรี 30 วัน</p>
        <p className="mt-1 text-[10px] font-light leading-relaxed text-white/80 sm:text-[11px]">
          ไม่ผูกบัตร ไม่ผูกมัด ยกเลิกเมื่อไหร่ก็ได้
        </p>
      </div>
    </div>
  );
}

function PriceCta() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mx-auto mt-6 flex justify-center sm:mt-7"
    >
      <Link
        href="/package"
        aria-label="ดูรายละเอียดแพ็กเกจ SCAN SUNG POS"
        className="inline-flex w-full max-w-[210px] items-center justify-center rounded-full bg-neutral-950 px-6 py-2.5 text-sm font-medium text-white shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 sm:w-auto sm:min-w-[190px]"
      >
        ทดลองใช้เลย
      </Link>
    </motion.div>
  );
}

function SeoJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SCAN SUNG POS",
    description:
      "ระบบ POS ร้านอาหารและระบบสั่งอาหารผ่าน QR Code สำหรับจัดการร้าน เมนู หมวดหมู่ ออเดอร์ ยอดขาย และพนักงาน",
    brand: {
      "@type": "Brand",
      name: "SCAN SUNG",
    },
    category: "Restaurant POS Software",
    image: `${siteUrl}/home/price/Payment Done.gif`,
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "THB",
      availability: "https://schema.org/InStock",
      description:
        "แพ็กเกจ SCAN SUNG POS ราคา 199 บาทต่อเดือน ทดลองใช้ฟรี 30 วัน ไม่ผูกบัตร ไม่ผูกมัด",
    },
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

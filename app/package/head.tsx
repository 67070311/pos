"use client";

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

const viewport = {
  once: true,
  amount: 0.2,
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const features: FeatureItem[] = [
  {
    label: "ระบบสั่งอาหารผ่าน QR",
    icon: <QrCode size={11} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    label: "ระบบจัดการร้าน",
    icon: <Store size={11} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    label: "ระบบจัดการเมนู",
    icon: <MenuSquare size={11} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    label: "ระบบจัดการหมวดหมู่",
    icon: <FolderTree size={11} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    label: "ระบบรับออเดอร์",
    icon: <ClipboardList size={11} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    label: "ระบบดูยอดขายวันนี้",
    icon: <BarChart3 size={11} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    label: "ระบบจัดการพนักงาน",
    icon: <Users size={11} strokeWidth={2.2} aria-hidden="true" />,
  },
];

const limits: FeatureItem[] = [
  {
    label: "เมนูสูงสุด 50 เมนู",
    icon: <Utensils size={11} strokeWidth={2.2} aria-hidden="true" />,
  },
  {
    label: "พนักงานสูงสุด 4 คน",
    icon: <Users size={11} strokeWidth={2.2} aria-hidden="true" />,
  },
];

const trialBenefits = ["ทดลองใช้ฟรี 30 วัน", "ไม่ผูกบัตร", "ไม่ผูกมัด"];

const suitableFor = [
  "ร้านอาหาร",
  "คาเฟ่",
  "ร้านเครื่องดื่ม",
  "ร้านที่รับออเดอร์ผ่าน QR",
];

export default function PackageHead() {
  return (
    <section
      id="package"
      aria-labelledby="package-title"
      className="relative flex min-h-[calc(100dvh-64px)] items-center overflow-hidden bg-[#f7f5ff] px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:py-16"
    >
      <BackgroundDecoration />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <PageHeader />

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          aria-labelledby="main-package-title"
          className="mx-auto grid max-w-5xl gap-3 rounded-[26px] bg-[#7437f2] p-3 text-white shadow-[0_22px_70px_rgba(116,55,242,0.28)] sm:p-4 lg:grid-cols-[0.82fr_1.18fr]"
        >
          <PriceColumn />
          <FeatureColumn />
        </motion.article>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-8 flex max-w-5xl justify-center sm:mt-10 lg:mt-12"
        >
          <Link
            href="/login"
            aria-label="เริ่มทดลองใช้ SCAN SUNG POS ฟรี"
            className="inline-flex w-full max-w-[320px] items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#7437f2] focus:ring-offset-2 sm:w-auto sm:min-w-[280px]"
          >
            ทดลองใช้เลย
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          aria-labelledby="package-detail-title"
          className="mx-auto mt-8 grid max-w-5xl gap-4 sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
        >
          <h2 id="package-detail-title" className="sr-only">
            รายละเอียดแพ็กเกจ SCAN SUNG POS
          </h2>

          <MiniCard
            title="เหมาะสำหรับ"
            icon={<Store size={16} strokeWidth={2.2} aria-hidden="true" />}
            items={suitableFor}
          />

          <MiniCard
            title="ทดลองใช้ฟรี"
            icon={
              <PackageCheck size={16} strokeWidth={2.2} aria-hidden="true" />
            }
            items={trialBenefits}
          />

          <LimitCard />
        </motion.div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[10px] font-light leading-relaxed text-neutral-500 sm:text-xs">
          เหมาะสำหรับร้านอาหาร คาเฟ่
          และร้านเครื่องดื่มที่อยากเริ่มรับออเดอร์ผ่าน QR Code ด้วยระบบ POS
          ที่ใช้งานง่ายผ่านเว็บ
        </p>
      </div>
    </section>
  );
}

function PageHeader() {
  return (
    <motion.header
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mx-auto mb-6 max-w-2xl text-center sm:mb-8"
    >
      <p className="mx-auto mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#ded4ff] bg-white px-3 py-1 text-[10px] font-normal text-[#7437f2] shadow-sm sm:text-[11px]">
        <Sparkles size={11} strokeWidth={2.2} aria-hidden="true" />
        แพ็กเกจเดียว จ่ายง่าย ใช้ครบ
      </p>

      <h1
        id="package-title"
        className="text-2xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-3xl lg:text-[30px]"
      >
        ราคาเดียวสำหรับร้านอาหาร
      </h1>

      <p className="mx-auto mt-2 max-w-xl text-xs font-light leading-relaxed text-neutral-500 sm:text-sm">
        ระบบ POS ร้านอาหารพร้อม QR Order ใช้งานผ่านเว็บได้ทันที
      </p>
    </motion.header>
  );
}

function PriceColumn() {
  return (
    <div className="rounded-[22px] bg-white p-4 text-neutral-950 sm:p-5">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7437f2] text-white">
          <QrCode size={19} strokeWidth={2.2} aria-hidden="true" />
        </span>

        <div>
          <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#7437f2]">
            SCAN SUNG POS
          </p>

          <h2
            id="main-package-title"
            className="text-lg font-semibold leading-tight text-neutral-950 sm:text-xl"
          >
            แพ็กเกจเดียว
          </h2>
        </div>
      </div>

      <p className="text-xs font-light text-neutral-500">
        คุ้มค่าสำหรับร้านอาหาร
      </p>

      <div
        className="mt-1.5 flex items-end gap-2"
        aria-label="ราคา 199 บาทต่อเดือน"
      >
        <span className="text-5xl font-semibold leading-none tracking-tight text-neutral-950 sm:text-6xl">
          199
        </span>

        <span className="pb-1 text-xs font-light text-neutral-700 sm:text-sm">
          บาท/เดือน
        </span>
      </div>

      <p className="mt-2.5 text-[11px] font-light leading-relaxed text-neutral-500 sm:text-xs">
        จ่ายราคาเดียว ได้ฟีเจอร์ครบสำหรับจัดการร้าน รับออเดอร์
        และดูแลเมนูอาหารผ่านเว็บ
      </p>
    </div>
  );
}

function FeatureColumn() {
  return (
    <div className="rounded-[22px] bg-white/10 p-4 ring-1 ring-white/15 sm:p-5">
      <h3 className="mb-3 text-sm font-semibold text-white sm:text-base">
        รวมทุกฟีเจอร์
      </h3>

      <ul
        aria-label="ฟีเจอร์ในแพ็กเกจ SCAN SUNG POS"
        className="grid gap-2 sm:grid-cols-2"
      >
        {features.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2 text-[11px] font-light text-white/90 sm:text-xs"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/16 text-white ring-1 ring-white/20">
              {item.icon}
            </span>

            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: ReactNode;
  items: string[];
}) {
  return (
    <section className="rounded-[20px] bg-white p-4 text-neutral-950 shadow-[0_14px_45px_rgba(17,24,39,0.08)] ring-1 ring-black/5">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f0ebff] text-[#7437f2]">
          {icon}
        </span>

        <h3 className="text-sm font-semibold text-neutral-950">{title}</h3>
      </div>

      <ul className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-[11px] font-light text-neutral-600 sm:text-xs"
          >
            <Check
              size={12}
              strokeWidth={2.3}
              className="shrink-0 text-[#7437f2]"
              aria-hidden="true"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function LimitCard() {
  return (
    <section className="rounded-[20px] bg-white p-4 text-neutral-950 shadow-[0_14px_45px_rgba(17,24,39,0.08)] ring-1 ring-black/5 sm:col-span-2 lg:col-span-1">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f0ebff] text-[#7437f2]">
          <Utensils size={16} strokeWidth={2.2} aria-hidden="true" />
        </span>

        <h3 className="text-sm font-semibold text-neutral-950">
          ข้อจำกัดแพ็กเกจ
        </h3>
      </div>

      <ul className="space-y-1.5">
        {limits.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2 text-[11px] font-light text-neutral-600 sm:text-xs"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#f0ebff] text-[#7437f2]">
              {item.icon}
            </span>

            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function BackgroundDecoration() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute left-[-8%] top-[4%] h-[220px] w-[220px] rounded-full bg-[#7437f2]/10 blur-3xl" />
      <div className="absolute right-[-8%] top-[34%] h-[240px] w-[240px] rounded-full bg-[#7437f2]/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-[46%] bg-white" />
    </div>
  );
}

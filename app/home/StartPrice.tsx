"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import {
  BadgeCheck,
  Check,
  Clock3,
  CreditCard,
  Globe2,
  MonitorX,
  QrCode,
  ScanLine,
  Smartphone,
  Sparkles,
} from "lucide-react";

type Benefit = {
  text: string;
  icon: ReactNode;
};

type Highlight = {
  title: string;
  description: string;
  icon: ReactNode;
};

const viewport = {
  once: true,
  amount: 0.25,
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
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

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 36,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const benefits: Benefit[] = [
  {
    text: "ลูกค้าสแกนแล้วสั่งได้เลย",
    icon: <ScanLine size={17} strokeWidth={2.2} />,
  },
  {
    text: "ไม่ต้องโหลดแอป",
    icon: <Smartphone size={17} strokeWidth={2.2} />,
  },
  {
    text: "ไม่ต้องซื้อเครื่อง POS",
    icon: <MonitorX size={17} strokeWidth={2.2} />,
  },
  {
    text: "ใช้งานผ่านเว็บ 100%",
    icon: <Globe2 size={17} strokeWidth={2.2} />,
  },
  {
    text: "เริ่มใช้งานได้ทันที",
    icon: <BadgeCheck size={17} strokeWidth={2.2} />,
  },
];

const highlights: Highlight[] = [
  {
    title: "ทดลองใช้ฟรี 30 วัน",
    description: "ลองใช้ก่อนตัดสินใจ",
    icon: <Clock3 size={17} strokeWidth={2.2} />,
  },
  {
    title: "ไม่ผูกบัตร",
    description: "เริ่มง่าย ไม่ต้องกรอกบัตร",
    icon: <CreditCard size={17} strokeWidth={2.2} />,
  },
  {
    title: "เริ่มได้ภายใน 5 นาที",
    description: "ใช้งานผ่านเว็บทันที",
    icon: <Sparkles size={17} strokeWidth={2.2} />,
  },
];

export default function StartPrice() {
  return (
    <section
      id="pricing"
      aria-labelledby="start-price-title"
      className="relative isolate overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:min-h-[680px] lg:py-20"
    >
      <StartPriceBackground />

      <div className="relative z-20 mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mb-8 max-w-2xl text-center sm:mb-10"
        >
          <p className="mx-auto mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#ded4ff] bg-white px-3.5 py-1.5 text-[11px] font-normal text-[#7437f2] shadow-sm">
            <QrCode size={14} strokeWidth={2.2} aria-hidden="true" />
            POS สำหรับร้านอาหาร
          </p>

          <h2
            id="start-price-title"
            className="text-2xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl"
          >
            เริ่มรับออเดอร์ผ่าน QR
            <br className="hidden sm:block" />
            ได้ง่ายในราคาเดียว
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs font-light leading-relaxed text-neutral-500 sm:text-sm">
            ระบบ POS ร้านอาหารพร้อม QR Order ใช้งานผ่านเว็บได้ทันที
            ไม่ต้องซื้อเครื่อง POS เพิ่ม ไม่ต้องให้ลูกค้าโหลดแอป
          </p>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div aria-hidden="true" className="hidden min-h-[420px] lg:block" />

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="rounded-[30px] bg-white/95 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.10)] ring-1 ring-black/5 backdrop-blur-md sm:p-6 lg:p-7"
          >
            <div className="rounded-[24px] bg-gradient-to-br from-[#7437f2] to-[#5d25d8] p-5 text-white shadow-[0_18px_50px_rgba(116,55,242,0.24)] sm:p-6">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/75">
                SCAN SUNG POS
              </p>

              <h3 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                199
                <span className="ml-2 text-sm font-light text-white/85 sm:text-base">
                  บาท/เดือน
                </span>
              </h3>

              <p className="mt-2 text-xs font-light leading-relaxed text-white/80 sm:text-sm">
                ได้ครบทั้งระบบสั่งอาหารผ่าน QR, จัดการเมนู, รับออเดอร์, ดูยอดขาย
                และจัดการพนักงาน
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/12 p-3 ring-1 ring-white/15 backdrop-blur"
                  >
                    <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/16 text-white">
                      {item.icon}
                    </span>

                    <p className="text-[11px] font-medium text-white">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[10px] font-light leading-relaxed text-white/70">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ul
              aria-label="ฟีเจอร์และข้อดีของระบบ SCAN SUNG POS"
              className="mt-5 grid gap-2.5 sm:grid-cols-2"
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit.text}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  transition={{
                    delay: index * 0.04,
                  }}
                  className="flex items-center gap-2.5 rounded-2xl bg-white p-3 text-xs font-light text-neutral-800 shadow-sm ring-1 ring-neutral-100 sm:text-sm"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4f0ff] text-[#7437f2] shadow-sm"
                  >
                    {benefit.icon}
                  </span>

                  <span>{benefit.text}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="/package"
                aria-label="เริ่มทดลองใช้งาน SCAN SUNG POS ฟรี 30 วัน"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#7437f2] px-6 py-2.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(116,55,242,0.24)] transition hover:-translate-y-0.5 hover:bg-[#642bea] focus:outline-none focus:ring-2 focus:ring-[#7437f2] focus:ring-offset-2 sm:w-auto sm:min-w-[170px]"
              >
                ทดลองใช้งานฟรี
              </Link>

              <Link
                href="/feature"
                aria-label="ดูฟีเจอร์ของระบบ SCAN SUNG POS"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#7437f2]/25 bg-white px-6 py-2.5 text-sm font-medium text-[#7437f2] transition hover:-translate-y-0.5 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-[#7437f2] focus:ring-offset-2 sm:w-auto sm:min-w-[150px]"
              >
                ดูฟีเจอร์
              </Link>
            </div>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-light text-neutral-500 sm:justify-start sm:text-xs">
              <Check
                size={13}
                strokeWidth={2.3}
                className="text-[#7437f2]"
                aria-hidden="true"
              />
              ทดลองใช้ฟรี 30 วัน ไม่ผูกบัตร ไม่ผูกมัด
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StartPriceBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.04,
          x: -40,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="absolute left-1/2 top-[42%] w-[760px] max-w-none -translate-x-[56%] -translate-y-1/2 opacity-60 sm:w-[900px] md:w-[1040px] lg:left-[34%] lg:top-[54%] lg:w-[1180px] lg:-translate-x-1/2 lg:opacity-90 xl:w-[1320px]"
      >
        <Image
          src="/home/price/bg.png"
          alt=""
          width={1400}
          height={880}
          sizes="100vw"
          priority={false}
          className="h-auto w-full select-none object-contain"
        />
      </motion.div>

      <div className="absolute inset-0 bg-white/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/30 to-white/96" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/85" />
    </div>
  );
}

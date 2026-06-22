"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

type FeatureItem = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pos.scansung.app";

const viewport = {
  once: true,
  amount: 0.25,
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
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

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -36,
  },
  show: {
    opacity: 1,
    x: 0,
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
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const featureItems: FeatureItem[] = [
  {
    eyebrow: "QR ORDER",
    title: "สั่งอาหารผ่าน QR Code",
    description:
      "ลูกค้าสแกน QR Code ที่โต๊ะ เปิดเมนูผ่านเว็บ เลือกอาหาร และส่งออเดอร์เข้าร้านได้ทันที ช่วยลดขั้นตอนการรับออเดอร์ และทำให้ร้านจัดการรายการอาหารได้เร็วขึ้น",
    image: "/feature/phone1.png",
    imageAlt: "หน้าจอสั่งอาหารผ่าน QR Code บนมือถือ",
  },
  {
    eyebrow: "WEB POS",
    title: "ใช้งานผ่านเว็บ ไม่ต้องโหลดแอป",
    description:
      "SCAN SUNG POS เป็นระบบ POS ร้านอาหารที่ใช้งานผ่านเว็บ ไม่ต้องติดตั้งแอปเพิ่ม และไม่ต้องซื้อเครื่อง POS ราคาแพง เหมาะกับร้านอาหาร คาเฟ่ ร้านตามสั่ง และร้านขนาดเล็กที่ต้องการเริ่มใช้งานเร็ว",
    image: "/feature/phone2.2.png",
    imageAlt: "หน้าจอระบบ POS ร้านอาหารผ่านเว็บ",
    reverse: true,
  },
  {
    eyebrow: "MANAGE",
    title: "จัดการร้าน เมนู ออเดอร์ และพนักงาน",
    description:
      "เจ้าของร้านสามารถจัดการข้อมูลร้าน เมนูอาหาร หมวดหมู่ รับออเดอร์ ดูยอดขายวันนี้ และจัดการพนักงานได้ในระบบเดียว ทำให้การดูแลร้านประจำวันง่ายขึ้น",
    image: "/feature/phone3.png",
    imageAlt: "หน้าจอจัดการร้าน เมนู ออเดอร์ ยอดขาย และพนักงาน",
  },
];

const seoFeatureList = [
  "ระบบ POS ร้านอาหาร",
  "ระบบ POS ร้านอาหารผ่านเว็บ",
  "ระบบสั่งอาหารผ่าน QR Code",
  "ระบบจัดการร้านอาหาร",
  "ระบบจัดการเมนูอาหาร",
  "ระบบจัดการหมวดหมู่",
  "ระบบรับออเดอร์",
  "ระบบดูยอดขายวันนี้",
  "ระบบจัดการพนักงาน",
  "ไม่ต้องโหลดแอป",
  "ไม่ต้องซื้อเครื่อง POS",
  "เหมาะสำหรับร้านอาหารขนาดเล็ก",
  "เหมาะสำหรับคาเฟ่",
  "เหมาะสำหรับร้านตามสั่ง",
  "ทดลองใช้ฟรี 30 วัน",
  "ราคาเริ่มต้น 199 บาทต่อเดือน",
];

export default function FeatureSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader />

        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28">
          {featureItems.map((item, index) => (
            <FeatureRow key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>

      <FeatureJsonLd />
    </section>
  );
}

function SectionHeader() {
  return (
    <motion.header
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mb-14 grid gap-7 md:mb-18 md:grid-cols-[0.95fr_1.05fr] md:items-end lg:mb-20"
    >
      <div>
        <p
          aria-hidden="true"
          className="text-6xl font-semibold leading-none text-neutral-100 sm:text-7xl md:text-8xl lg:text-9xl"
        >
          01
        </p>

        <p className="-mt-3 mb-3 text-xs font-medium tracking-[0.22em] text-[#7437f2] sm:text-sm">
          FEATURES
        </p>

        <h1
          id="features-title"
          className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-5xl lg:text-[54px]"
        >
          ฟีเจอร์สำหรับร้านอาหาร
          <br />
          <span className="text-[#7437f2]">ที่อยากเริ่มไว</span>
        </h1>
      </div>

      <p className="max-w-2xl text-sm font-light leading-relaxed text-neutral-500 sm:text-base md:ml-auto md:text-right lg:text-lg">
        SCAN SUNG POS คือระบบ POS ร้านอาหารผ่านเว็บที่ช่วยให้ร้านรับออเดอร์ผ่าน
        QR Code ได้ง่ายขึ้น พร้อมระบบจัดการร้าน เมนู ออเดอร์ ยอดขายวันนี้
        และพนักงาน โดยไม่ต้องโหลดแอปและไม่ต้องซื้อเครื่อง POS ราคาแพง
      </p>
    </motion.header>
  );
}

function FeatureRow({ item, index }: { item: FeatureItem; index: number }) {
  const textMotion = item.reverse ? fadeRight : fadeLeft;
  const imageMotion = item.reverse ? fadeLeft : fadeRight;

  return (
    <article
      className={[
        "grid items-center gap-7 md:grid-cols-[0.82fr_1.18fr] md:gap-10 lg:gap-14",
        item.reverse ? "md:grid-cols-[1.18fr_0.82fr]" : "",
        item.reverse ? "md:[&>*:first-child]:order-2" : "",
      ].join(" ")}
    >
      <motion.div
        variants={textMotion}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative z-10"
      >
        <div className="mb-3 flex items-center gap-3 sm:mb-4">
          <span className="text-xs font-semibold tracking-[0.18em] text-neutral-950 sm:text-sm">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="h-px w-8 bg-neutral-300 sm:w-10" />

          <span className="text-xs font-light tracking-[0.18em] text-[#7437f2] sm:text-sm">
            {item.eyebrow}
          </span>
        </div>

        <h2 className="max-w-xl text-xl font-semibold leading-tight text-neutral-950 sm:text-2xl md:text-3xl lg:text-[34px]">
          {item.title}
        </h2>

        <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-neutral-500 sm:text-base md:text-[17px] lg:text-lg">
          {item.description}
        </p>
      </motion.div>

      <motion.figure
        variants={imageMotion}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto flex w-full justify-center md:justify-end"
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          width={1200}
          height={1600}
          sizes="(max-width: 640px) 92vw, (max-width: 768px) 82vw, (max-width: 1024px) 52vw, 680px"
          className="h-auto w-full max-w-[360px] object-contain sm:max-w-[470px] md:max-w-[540px] lg:max-w-[620px] xl:max-w-[680px]"
          priority={index === 0}
        />
      </motion.figure>
    </article>
  );
}

function FeatureJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SCAN SUNG POS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${siteUrl}/feature`,
    description:
      "SCAN SUNG POS ระบบ POS ร้านอาหารผ่านเว็บ พร้อมระบบสั่งอาหารผ่าน QR Code จัดการร้าน เมนู หมวดหมู่ ออเดอร์ ยอดขายวันนี้ และพนักงาน ไม่ต้องโหลดแอป ไม่ต้องซื้อเครื่อง POS",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "THB",
      description:
        "แพ็กเกจเริ่มต้น 199 บาทต่อเดือน ทดลองใช้ฟรี 30 วัน ไม่ผูกบัตร ไม่ผูกมัด",
    },
    featureList: seoFeatureList,
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

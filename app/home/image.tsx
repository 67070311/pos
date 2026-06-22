"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

type VenueImage = {
  src: string;
  alt: string;
  title: string;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com";

const viewport = {
  once: true,
  amount: 0.25,
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
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageMotion: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const venueImages: VenueImage[] = [
  {
    src: "/home/image/2.png",
    alt: "ร้านอาหารที่ใช้งานระบบ POS และระบบสั่งอาหารผ่าน QR Code",
    title: "ร้านอาหาร",
  },
  {
    src: "/home/image/1.1.png",
    alt: "ครัวและทีมบริการที่ใช้งานระบบจัดการออเดอร์ร้านอาหาร",
    title: "ครัวและทีมบริการ",
  },
  {
    src: "/home/image/3.png",
    alt: "คาเฟ่ที่ใช้ระบบ POS และเมนูออนไลน์ผ่าน QR Code",
    title: "คาเฟ่",
  },
  {
    src: "/home/image/4.png",
    alt: "บาร์และร้านเครื่องดื่มที่ใช้ระบบรับออเดอร์ผ่าน QR Code",
    title: "บาร์",
  },
];

const venueTags = ["RESTAURANTS", "CAFES", "BARS", "KITCHENS", "ROOFTOPS"];

export default function ImageSection() {
  return (
    <section
      id="venue-gallery"
      aria-labelledby="venue-gallery-title"
      className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader />

        <div className="grid gap-3 md:grid-cols-[1fr_1fr] md:gap-4 lg:gap-5">
          <GalleryCard
            image={venueImages[0]}
            index={0}
            className="min-h-[260px] sm:min-h-[340px] md:min-h-[470px] lg:min-h-[520px]"
            priority
          />

          <div className="grid gap-3 md:gap-4 lg:gap-5">
            <GalleryCard
              image={venueImages[1]}
              index={1}
              className="min-h-[210px] sm:min-h-[260px] md:min-h-[225px] lg:min-h-[250px]"
            />

            <div className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:gap-5">
              <GalleryCard
                image={venueImages[2]}
                index={2}
                className="min-h-[210px] sm:min-h-[230px] md:min-h-[225px] lg:min-h-[250px]"
              />

              <GalleryCard
                image={venueImages[3]}
                index={3}
                className="min-h-[210px] sm:min-h-[230px] md:min-h-[225px] lg:min-h-[250px]"
              />
            </div>
          </div>
        </div>

        <GalleryCta />
      </div>

      <GalleryJsonLd />
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
      className="mb-8 grid gap-5 sm:mb-10 md:mb-12 md:grid-cols-[1fr_auto] md:items-end"
    >
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7437f2] sm:text-sm">
          BUILT FOR RESTAURANTS
        </p>

        <h2
          id="venue-gallery-title"
          className="max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl"
        >
          สร้างมาเพื่อ
          <br />
          <span className="mt-1 block text-2xl font-light italic leading-tight text-[#ff572f] sm:text-3xl lg:text-xl">
            ร้านอาหารทุกประเภท
          </span>
        </h2>
      </div>

      <ul
        aria-label="ประเภทร้านที่เหมาะกับระบบ SCAN SUNG POS"
        className="flex max-w-sm flex-wrap gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs md:justify-end md:text-right"
      >
        {venueTags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </motion.header>
  );
}

function GalleryCard({
  image,
  index,
  className,
  priority = false,
}: {
  image: VenueImage;
  index: number;
  className: string;
  priority?: boolean;
}) {
  return (
    <motion.figure
      variants={imageMotion}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      whileHover={{
        y: -5,
        scale: 1.01,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      className={[
        "group relative overflow-hidden rounded-[18px] bg-neutral-100 shadow-[0_18px_50px_rgba(15,23,42,0.07)] md:rounded-[20px]",
        className,
      ].join(" ")}
      aria-label={image.title}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={
          index === 0
            ? "(max-width: 768px) 100vw, 48vw"
            : "(max-width: 768px) 100vw, 38vw"
        }
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-75"
      />

      <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/92 px-3.5 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm backdrop-blur sm:text-sm">
        {image.title}
      </figcaption>
    </motion.figure>
  );
}

function GalleryCta() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="relative mx-auto mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row md:mt-12"
      aria-labelledby="venue-gallery-cta-title"
    >
      <h3 id="venue-gallery-cta-title" className="sr-only">
        ทดลองใช้งาน SCAN SUNG POS ฟรี หรือดูฟีเจอร์ระบบ
      </h3>

      <Link
        href="/package"
        aria-label="ทดลองใช้งานระบบ SCAN SUNG POS ฟรี"
        className="w-full max-w-[190px] rounded-full bg-[#7437f2] px-6 py-2.5 text-center text-sm font-medium text-white shadow-md shadow-purple-200 transition duration-300 hover:-translate-y-0.5 hover:bg-[#642bea] focus:outline-none focus:ring-2 focus:ring-[#7437f2] focus:ring-offset-2 sm:w-auto sm:min-w-[165px]"
      >
        ทดลองใช้งานฟรี
      </Link>

      <Link
        href="/feature"
        aria-label="ดูฟีเจอร์ของระบบ SCAN SUNG POS"
        className="w-full max-w-[190px] rounded-full border border-[#7437f2] bg-white px-6 py-2.5 text-center text-sm font-medium text-[#7437f2] transition duration-300 hover:-translate-y-0.5 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-[#7437f2] focus:ring-offset-2 sm:w-auto sm:min-w-[165px]"
      >
        ดูฟีเจอร์
      </Link>
    </motion.div>
  );
}

function GalleryJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "ตัวอย่างร้านอาหาร คาเฟ่ บาร์ และครัวที่เหมาะกับ SCAN SUNG POS",
    description:
      "แกลเลอรีตัวอย่างร้านอาหาร คาเฟ่ บาร์ และครัวที่สามารถใช้งานระบบ POS ร้านอาหารและระบบสั่งอาหารผ่าน QR Code",
    image: venueImages.map((image) => ({
      "@type": "ImageObject",
      contentUrl: `${siteUrl}${image.src}`,
      description: image.alt,
      name: image.title,
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

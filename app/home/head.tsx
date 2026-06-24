import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type FloatingTextItem = {
  text: string;
  className: string;
  delay: string;
};

type CursorItem = {
  name: string;
  color: "orange" | "blue";
  className: string;
};

const siteUrl = "https://scansung.app";

const floatingTexts: FloatingTextItem[] = [
  {
    text: "จัดการลูกค้าได้ผ่านมือถือ",
    className:
      "left-[2%] top-[24px] sm:left-[7%] sm:top-[38px] md:left-[2%] md:top-[115px] lg:left-[4%] lg:top-[135px]",
    delay: "0s",
  },
  {
    text: "รับ Order ได้ทันที",
    className:
      "right-[2%] top-[66px] sm:right-[7%] sm:top-[88px] md:right-[2%] md:top-[135px] lg:right-[4%] lg:top-[155px]",
    delay: ".45s",
  },
  {
    text: "ไม่ต้องโหลดแอป",
    className:
      "left-[3%] bottom-[112px] sm:left-[8%] sm:bottom-[150px] md:left-[2%] md:bottom-[190px] lg:left-[4%] lg:bottom-[220px]",
    delay: ".9s",
  },
  {
    text: "ใช้งานผ่านเว็บ 100%",
    className:
      "right-[3%] bottom-[160px] sm:right-[8%] sm:bottom-[205px] md:right-[2%] md:bottom-[245px] lg:right-[4%] lg:bottom-[285px]",
    delay: "1.25s",
  },
];

const cursors: CursorItem[] = [
  {
    name: "Manee",
    color: "orange",
    className:
      "left-[8%] top-[125px] flex sm:left-[14%] sm:top-[165px] md:left-[24%] md:top-[310px] lg:left-[27%] lg:top-[360px]",
  },
  {
    name: "Ming",
    color: "blue",
    className:
      "right-[7%] top-[235px] flex sm:right-[14%] sm:top-[295px] md:right-[22%] md:top-[430px] lg:right-[27%] lg:top-[500px]",
  },
];

export default function HeadSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-white px-4 pt-9 sm:px-6 sm:pt-11 md:px-8 md:pt-14"
    >
      <HeroBackground />

      <div className="relative z-20 mx-auto max-w-7xl">
        <HeroContent />
        <HeroVisual />
      </div>

      <HeroJsonLd />

      <style>{`
        @keyframes homeFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes phoneFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes maneeMove {
          0% {
            transform: translate(0, 0) rotate(-8deg);
          }

          16% {
            transform: translate(
              calc(70px * var(--cursor-move)),
              calc(-40px * var(--cursor-move))
            ) rotate(-8deg);
          }

          32% {
            transform: translate(
              calc(155px * var(--cursor-move)),
              calc(15px * var(--cursor-move))
            ) rotate(-8deg);
          }

          48% {
            transform: translate(
              calc(110px * var(--cursor-move)),
              calc(95px * var(--cursor-move))
            ) rotate(-8deg);
          }

          64% {
            transform: translate(
              calc(30px * var(--cursor-move)),
              calc(60px * var(--cursor-move))
            ) rotate(-8deg);
          }

          80% {
            transform: translate(
              calc(115px * var(--cursor-move)),
              calc(-15px * var(--cursor-move))
            ) rotate(-8deg);
          }

          100% {
            transform: translate(0, 0) rotate(-8deg);
          }
        }

        @keyframes mingMove {
          0% {
            transform: translate(0, 0) rotate(8deg);
          }

          16% {
            transform: translate(
              calc(-90px * var(--cursor-move)),
              calc(-25px * var(--cursor-move))
            ) rotate(8deg);
          }

          32% {
            transform: translate(
              calc(-170px * var(--cursor-move)),
              calc(45px * var(--cursor-move))
            ) rotate(8deg);
          }

          48% {
            transform: translate(
              calc(-120px * var(--cursor-move)),
              calc(-95px * var(--cursor-move))
            ) rotate(8deg);
          }

          64% {
            transform: translate(
              calc(-45px * var(--cursor-move)),
              calc(-55px * var(--cursor-move))
            ) rotate(8deg);
          }

          80% {
            transform: translate(
              calc(-145px * var(--cursor-move)),
              0
            ) rotate(8deg);
          }

          100% {
            transform: translate(0, 0) rotate(8deg);
          }
        }

        .home-float {
          animation: homeFloat 4s ease-in-out infinite;
        }

        .phone-float {
          animation: phoneFloat 5s ease-in-out infinite;
        }

        .cursor-moving {
          --cursor-move: 0.2;
        }

        .manee-move {
          animation: maneeMove 6s ease-in-out infinite;
        }

        .ming-move {
          animation: mingMove 6.5s ease-in-out infinite;
        }

        @media (min-width: 640px) {
          .cursor-moving {
            --cursor-move: 0.38;
          }
        }

        @media (min-width: 768px) {
          .cursor-moving {
            --cursor-move: 0.65;
          }

          @keyframes homeFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-14px);
            }
          }
        }

        @media (min-width: 1024px) {
          .cursor-moving {
            --cursor-move: 1;
          }

          @keyframes homeFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-18px);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-float,
          .phone-float,
          .manee-move,
          .ming-move {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-[54%] bg-gradient-to-t from-[#f2efff] via-[#faf8ff] to-transparent md:h-[48%] lg:h-[44%]" />

      <div className="absolute left-1/2 top-[42%] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-[#7437f2]/10 blur-3xl sm:h-[320px] sm:w-[320px] md:h-[390px] md:w-[390px]" />

      <div className="absolute -left-24 bottom-[12%] h-[230px] w-[230px] rounded-full bg-[#7437f2]/10 blur-3xl" />

      <div className="absolute -right-24 bottom-[16%] h-[280px] w-[280px] rounded-full bg-[#b9a6ff]/20 blur-3xl" />
    </div>
  );
}

function HeroContent() {
  return (
    <header className="relative z-30 mx-auto text-center">
      <p className="mx-auto mb-3 inline-flex items-center rounded-full border border-[#ded4ff] bg-white px-3 py-1 text-[10px] font-normal text-[#7437f2] shadow-sm sm:text-xs">
        POS ร้านอาหารพร้อม QR Order
      </p>

      <h1
        id="hero-title"
        className="mx-auto max-w-5xl text-[42px] font-semibold leading-none tracking-tight text-[#7437f2] sm:text-6xl md:text-7xl lg:text-8xl"
      >
        SCAN SUNG
      </h1>

      <p className="mt-2 text-lg font-medium text-neutral-800 sm:mt-3 sm:text-2xl md:text-3xl">
        POS สแกนสั่ง
      </p>

      <p className="mx-auto mt-2 max-w-[310px] text-[11px] font-light leading-relaxed text-neutral-500 sm:mt-3 sm:max-w-xl sm:text-sm md:text-base">
        ระบบ POS สำหรับร้านอาหาร ลูกค้าสแกน QR Code เพื่อดูเมนู สั่งอาหาร
        และส่งออเดอร์เข้าร้านได้ทันทีผ่านเว็บ
      </p>

      <p className="sr-only">
        SCAN SUNG POS คือระบบ POS ร้านอาหารพร้อมระบบสั่งอาหารผ่าน QR Code
        เหมาะสำหรับร้านอาหาร คาเฟ่ และร้านเครื่องดื่ม
        ใช้งานผ่านเว็บโดยไม่ต้องโหลดแอป
      </p>

      <div className="relative z-40 mt-4 flex flex-row items-center justify-center gap-2.5 sm:gap-3 md:mt-6">
        <Link
          href="/package"
          aria-label="ทดลองใช้งานระบบ SCAN SUNG POS ฟรี"
          className="inline-flex min-w-[138px] items-center justify-center rounded-full bg-[#7437f2] px-4 py-2.5 text-center text-xs font-medium text-white shadow-md shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-[#642bea] focus:outline-none focus:ring-2 focus:ring-[#7437f2] focus:ring-offset-2 sm:min-w-[165px] sm:px-6 sm:text-sm"
        >
          ทดลองใช้งานฟรี
        </Link>

        <Link
          href="/feature"
          aria-label="ดูฟีเจอร์ของระบบ SCAN SUNG POS"
          className="inline-flex min-w-[118px] items-center justify-center rounded-full border border-[#7437f2] bg-white px-4 py-2.5 text-center text-xs font-medium text-[#7437f2] transition hover:-translate-y-0.5 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-[#7437f2] focus:ring-offset-2 sm:min-w-[165px] sm:px-6 sm:text-sm"
        >
          ดูฟีเจอร์
        </Link>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative z-20 mx-auto mt-5 h-[390px] w-full max-w-[390px] sm:mt-7 sm:h-[480px] sm:max-w-[680px] md:mt-9 md:h-[560px] md:max-w-[960px] lg:mt-10 lg:h-[620px] lg:max-w-7xl">
      {floatingTexts.map((item) => (
        <FloatingText
          key={item.text}
          className={item.className}
          delay={item.delay}
        >
          {item.text}
        </FloatingText>
      ))}

      {cursors.map((cursor) => (
        <MouseTag
          key={cursor.name}
          name={cursor.name}
          color={cursor.color}
          className={cursor.className}
        />
      ))}

      <PhonePreview />
    </div>
  );
}

function PhonePreview() {
  return (
    <div className="absolute bottom-[-18px] left-1/2 z-10 w-[86vw] max-w-[320px] -translate-x-1/2 sm:bottom-[-28px] sm:max-w-[410px] md:bottom-[-36px] md:w-[480px] md:max-w-none lg:bottom-[-48px] lg:w-[540px]">
      <div className="phone-float">
        <Image
          src="/home/Head-phone.png"
          alt="ตัวอย่างหน้าจอระบบ SCAN SUNG POS สำหรับรับออเดอร์ผ่าน QR Code"
          width={900}
          height={900}
          priority
          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 480px, 540px"
          className="block h-auto w-full select-none object-contain drop-shadow-[0_24px_60px_rgba(98,58,180,0.22)] md:drop-shadow-[0_35px_90px_rgba(98,58,180,0.25)]"
        />
      </div>
    </div>
  );
}

function FloatingText({
  children,
  className = "",
  delay = "0s",
}: {
  children: ReactNode;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`home-float absolute z-30 whitespace-nowrap rounded-full bg-white px-2 py-1 text-[8px] font-normal text-neutral-900 shadow-[0_8px_20px_rgba(120,80,200,0.12)] sm:px-3 sm:py-1.5 sm:text-[10px] md:px-5 md:py-2.5 md:text-base lg:px-6 lg:py-3 lg:text-lg ${className}`}
    >
      {children}
    </div>
  );
}

function MouseTag({
  name,
  color,
  className = "",
}: {
  name: string;
  color: "orange" | "blue";
  className?: string;
}) {
  const isOrange = color === "orange";

  return (
    <div
      aria-hidden="true"
      className={`cursor-moving absolute z-40 items-center gap-1 ${
        isOrange ? "manee-move" : "ming-move"
      } ${className}`}
    >
      {isOrange ? (
        <>
          <CursorLabel name={name} color="orange" />
          <CursorArrow color="orange" />
        </>
      ) : (
        <>
          <CursorArrow color="blue" />
          <CursorLabel name={name} color="blue" />
        </>
      )}
    </div>
  );
}

function CursorLabel({
  name,
  color,
}: {
  name: string;
  color: "orange" | "blue";
}) {
  const colorClass = color === "orange" ? "bg-[#ef6532]" : "bg-[#1478ff]";

  return (
    <div className="relative">
      <div
        className={`rounded-full px-2.5 py-1 text-[10px] font-medium text-white shadow-lg sm:px-3 sm:py-1.5 sm:text-xs md:px-4 md:py-2 md:text-sm ${colorClass}`}
      >
        {name}
      </div>

      <span
        aria-hidden="true"
        className={`absolute -right-1 -top-1 h-2 w-2 animate-ping rounded-full sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 ${colorClass}`}
      />
    </div>
  );
}

function CursorArrow({ color }: { color: "orange" | "blue" }) {
  if (color === "orange") {
    return (
      <div
        aria-hidden="true"
        className="h-0 w-0 border-y-[5px] border-l-[10px] border-y-transparent border-l-[#ef6532] sm:border-y-[7px] sm:border-l-[13px] md:border-y-[10px] md:border-l-[18px]"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="h-0 w-0 border-y-[5px] border-r-[10px] border-y-transparent border-r-[#1478ff] sm:border-y-[7px] sm:border-r-[13px] md:border-y-[10px] md:border-r-[18px]"
    />
  );
}

function HeroJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SCAN SUNG POS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteUrl,
    image: `${siteUrl}/home/Head-phone.png`,
    description:
      "SCAN SUNG POS ระบบ POS ร้านอาหารพร้อม QR Order ลูกค้าสแกน QR Code เพื่อดูเมนู สั่งอาหาร และส่งออเดอร์เข้าร้านได้ทันทีผ่านเว็บโดยไม่ต้องโหลดแอป",
    offers: {
      "@type": "Offer",
      price: "199",
      priceCurrency: "THB",
      description: "แพ็กเกจ SCAN SUNG POS ราคา 199 บาทต่อเดือน",
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

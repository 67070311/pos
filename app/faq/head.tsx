"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const viewport = {
  once: true,
  amount: 0.2,
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

const faqItems: FaqItem[] = [
  {
    question: "ระบบ POS นี้คืออะไร?",
    answer:
      "ระบบ POS นี้คือระบบขายหน้าร้านที่ใช้งานผ่านเว็บเบราว์เซอร์ เช่น Chrome, Safari หรือ Edge ช่วยให้ร้านขายสินค้า ออกบิล จัดการสต็อก และดูรายงานยอดขายได้โดยไม่ต้องติดตั้งแอปหรือซื้อเครื่อง POS เพิ่ม",
  },
  {
    question: "ต้องดาวน์โหลดแอปก่อนใช้งานไหม?",
    answer:
      "ไม่ต้องดาวน์โหลดแอป สามารถใช้งานผ่านเบราว์เซอร์ได้ทันที เพียงเปิดเว็บไซต์ เข้าสู่ระบบ แล้วเริ่มขายได้เลย",
  },
  {
    question: "ต้องซื้อเครื่อง POS หรืออุปกรณ์เฉพาะไหม?",
    answer:
      "ไม่จำเป็นต้องมีเครื่อง POS เฉพาะ สามารถใช้งานผ่านคอมพิวเตอร์ โน้ตบุ๊ก แท็บเล็ต หรือมือถือที่เปิดเว็บเบราว์เซอร์ได้",
  },
  {
    question: "ใช้งานบนมือถือได้ไหม?",
    answer:
      "ได้ ระบบรองรับการใช้งานผ่านมือถือ แท็บเล็ต และคอมพิวเตอร์ ขอแค่มีอินเทอร์เน็ตและเบราว์เซอร์ก็สามารถใช้งานได้",
  },
  {
    question: "เหมาะกับร้านแบบไหน?",
    answer:
      "เหมาะกับร้านค้าทั่วไป เช่น ร้านอาหาร คาเฟ่ ร้านเสื้อผ้า ร้านของชำ ร้านออนไลน์ ร้านบริการ หรือร้านที่ต้องการระบบขายที่ใช้งานง่าย ไม่ต้องลงทุนซื้อเครื่องแพง",
  },
  {
    question: "ต้องมีอินเทอร์เน็ตตลอดไหม?",
    answer:
      "โดยทั่วไปต้องใช้อินเทอร์เน็ตเพื่อเข้าสู่ระบบ บันทึกข้อมูล และอัปเดตยอดขายแบบเรียลไทม์ แนะนำให้ใช้อินเทอร์เน็ตที่เสถียรเพื่อให้การขายลื่นไหล",
  },
  {
    question: "ถ้าเปลี่ยนเครื่องใช้งานได้ไหม?",
    answer:
      "ได้ เพราะระบบอยู่บนเบราว์เซอร์ เพียงเข้าสู่ระบบด้วยบัญชีเดิม ก็สามารถใช้งานต่อได้จากอุปกรณ์อื่น",
  },
  {
    question: "ข้อมูลร้านค้าจะหายไหมถ้าเครื่องเสีย?",
    answer:
      "ไม่หาย เพราะข้อมูลถูกจัดเก็บบนระบบออนไลน์ ไม่ได้ผูกกับเครื่องใดเครื่องหนึ่ง หากเครื่องเสียหรือเปลี่ยนอุปกรณ์ ก็ยังสามารถเข้าสู่ระบบเพื่อดูข้อมูลเดิมได้",
  },
  {
    question: "สามารถจัดการสินค้าและสต็อกได้ไหม?",
    answer:
      "ได้ สามารถเพิ่มสินค้า แก้ไขราคา กำหนดหมวดหมู่ เช็กจำนวนคงเหลือ และติดตามสต็อกได้จากระบบเดียว",
  },
  {
    question: "ออกบิลหรือใบเสร็จได้ไหม?",
    answer:
      "ได้ ระบบสามารถออกบิลหรือใบเสร็จให้ลูกค้าได้ อาจส่งเป็นไฟล์ ลิงก์ หรือพิมพ์ออกทางเครื่องพิมพ์ได้ หากร้านมีอุปกรณ์เสริม",
  },
  {
    question: "ไม่ใช้เครื่องพิมพ์ใบเสร็จได้ไหม?",
    answer:
      "ได้ หากไม่ต้องการใช้เครื่องพิมพ์ สามารถส่งใบเสร็จแบบดิจิทัลให้ลูกค้าแทนได้ เช่น ส่งผ่านลิงก์ รูปภาพ หรือไฟล์",
  },
  {
    question: "รองรับการชำระเงินแบบไหนบ้าง?",
    answer:
      "สามารถบันทึกการชำระเงินได้หลายรูปแบบ เช่น เงินสด โอนเงิน QR Payment บัตรเครดิต หรือช่องทางอื่น ขึ้นอยู่กับการตั้งค่าของร้าน",
  },
  {
    question: "ดูยอดขายย้อนหลังได้ไหม?",
    answer:
      "ได้ สามารถดูรายงานยอดขายย้อนหลัง รายวัน รายเดือน หรือช่วงเวลาที่ต้องการ ช่วยให้เจ้าของร้านติดตามผลประกอบการได้ง่ายขึ้น",
  },
  {
    question: "หลายสาขาใช้งานได้ไหม?",
    answer:
      "ได้ หากระบบรองรับหลายสาขา เจ้าของร้านสามารถดูยอดขายและสต็อกของแต่ละสาขาได้จากบัญชีเดียว",
  },
  {
    question: "พนักงานหลายคนใช้งานร่วมกันได้ไหม?",
    answer:
      "ได้ สามารถสร้างบัญชีพนักงานและกำหนดสิทธิ์การใช้งานได้ เช่น พนักงานขาย ผู้จัดการ หรือเจ้าของร้าน",
  },
  {
    question: "ระบบปลอดภัยไหม?",
    answer:
      "ระบบมีการเข้าสู่ระบบด้วยบัญชีผู้ใช้ และข้อมูลถูกจัดเก็บบนระบบออนไลน์ ช่วยลดความเสี่ยงจากข้อมูลหายในเครื่อง แนะนำให้ตั้งรหัสผ่านที่ปลอดภัยและไม่แชร์บัญชีร่วมกัน",
  },
  {
    question: "เริ่มใช้งานยากไหม?",
    answer:
      "ไม่ยาก ออกแบบมาให้ใช้งานง่าย เหมาะกับร้านค้าที่ไม่เคยใช้ระบบ POS มาก่อน เพียงเพิ่มสินค้า ตั้งค่าร้าน และเริ่มขายได้ทันที",
  },
  {
    question: "มีค่าใช้จ่ายเริ่มต้นสูงไหม?",
    answer:
      "ไม่จำเป็นต้องลงทุนซื้อเครื่อง POS หรือโหลดแอปเพิ่ม จึงช่วยลดต้นทุนเริ่มต้น เหมาะกับร้านใหม่หรือร้านที่ต้องการควบคุมค่าใช้จ่าย",
  },
  {
    question: "ใช้งานต่างที่ได้ไหม?",
    answer:
      "ได้ เจ้าของร้านสามารถเข้าดูยอดขาย รายงาน หรือจัดการร้านจากที่ไหนก็ได้ ผ่านอุปกรณ์ที่มีอินเทอร์เน็ต",
  },
  {
    question: "จุดเด่นของ POS บนเบราว์เซอร์คืออะไร?",
    answer:
      "จุดเด่นคือใช้งานง่าย ไม่ต้องติดตั้งแอป ไม่ต้องซื้อเครื่องเฉพาะ เปิดเว็บก็ขายได้ เปลี่ยนอุปกรณ์ได้สะดวก และดูข้อมูลร้านแบบออนไลน์ได้ทุกที่ทุกเวลา",
  },
];

export default function FaqHead() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:py-24"
    >
      <FaqBackground />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#7437f2]">
            FAQ
          </p>

          <h1
            id="faq-title"
            className="text-4xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-5xl md:text-6xl"
          >
            คำถามที่พบบ่อย
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-neutral-500 sm:text-base">
            รวมคำถามเกี่ยวกับระบบ POS บนเบราว์เซอร์ ใช้งานผ่านเว็บ
            ไม่ต้องโหลดแอป และไม่ต้องซื้อเครื่อง POS เฉพาะ
          </p>
        </motion.header>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto space-y-3"
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className={[
                  "overflow-hidden rounded-[22px] border transition-all duration-300",
                  isOpen
                    ? "border-[#ded4ff] bg-white shadow-[0_18px_60px_rgba(116,55,242,0.12)]"
                    : "border-[#ede8ff] bg-[#f6f3ff]",
                ].join(" ")}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="text-sm font-medium text-neutral-950 sm:text-base">
                    {item.question}
                  </span>

                  <span
                    className={[
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#7437f2] shadow-sm transition-transform duration-300",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  >
                    <ChevronDown
                      size={18}
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={[
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm font-light leading-relaxed text-neutral-600 sm:px-6 sm:pb-6 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>

      <FaqJsonLd />
    </section>
  );
}

function FaqBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(116,55,242,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(116,55,242,0.035)_1px,transparent_1px)] bg-[size:96px_96px]" />

      <div className="absolute left-[-10%] top-[12%] h-[320px] w-[320px] rounded-full bg-[#7437f2]/[0.045] blur-3xl" />

      <div className="absolute right-[-12%] bottom-[8%] h-[360px] w-[360px] rounded-full bg-[#7437f2]/[0.045] blur-3xl" />

      <div className="absolute inset-0 bg-white/75" />
    </div>
  );
}

function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
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

"use client";

import Link from "next/link";
import { ArrowDown, ChevronLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const loginUrl = "https://pos.scansung.app/login";

const termsSections = [
  {
    title: "1. ลักษณะของบริการ",
    items: [
      "ScanSung POS เป็นระบบจัดการร้านอาหารผ่านเว็บไซต์ สำหรับช่วยจัดการเมนู รับออเดอร์ผ่าน QR Code จัดการพนักงาน และดูยอดขายเบื้องต้น",
      "ระบบนี้เป็นเพียงเครื่องมือช่วยจัดการร้านอาหาร ร้านค้ายังคงเป็นผู้รับผิดชอบต่อการดำเนินธุรกิจ ราคาเมนู คุณภาพอาหาร การให้บริการลูกค้า ภาษี และข้อกำหนดทางกฎหมายที่เกี่ยวข้อง",
    ],
  },
  {
    title: "2. การสมัครและบัญชีผู้ใช้งาน",
    items: [
      "ผู้ใช้งานต้องให้ข้อมูลที่ถูกต้อง ครบถ้วน และเป็นปัจจุบันในการสมัครใช้งาน",
      "ผู้ใช้งานมีหน้าที่ดูแลรักษาบัญชี รหัสผ่าน และข้อมูลเข้าสู่ระบบของตนเองให้ปลอดภัย",
      "หากมีการใช้งานบัญชีโดยบุคคลอื่นจากความประมาทของผู้ใช้งาน ผู้ใช้งานต้องรับผิดชอบต่อความเสียหายที่เกิดขึ้น",
    ],
  },
  {
    title: "3. การทดลองใช้ฟรีและค่าบริการ",
    items: [
      "ผู้ใช้งานสามารถทดลองใช้ฟรีได้ 30 วัน โดยไม่ต้องผูกบัตรเครดิตและไม่มีข้อผูกมัดระยะยาว",
      "หลังจากสิ้นสุดช่วงทดลองใช้ฟรี หากต้องการใช้งานต่อ ผู้ใช้งานต้องชำระค่าบริการตามแพ็กเกจที่เลือก",
      "แพ็กเกจเริ่มต้นอยู่ที่ 199 บาทต่อเดือน หรือตามราคาที่แสดงบนเว็บไซต์ในขณะนั้น",
      "หากไม่ชำระค่าบริการภายในระยะเวลาที่กำหนด ผู้ให้บริการมีสิทธิระงับการใช้งานบางส่วนหรือทั้งหมด",
    ],
  },
  {
    title: "4. ข้อจำกัดของแพ็กเกจ",
    items: [
      "แพ็กเกจเริ่มต้นอาจจำกัดจำนวนเมนูสูงสุด 50 รายการ",
      "แพ็กเกจเริ่มต้นอาจจำกัดจำนวนพนักงานสูงสุด 4 คน",
      "หากต้องการใช้งานเกินข้อจำกัดของแพ็กเกจ อาจต้องอัปเกรดแพ็กเกจหรือชำระค่าบริการเพิ่มเติม",
    ],
  },
  {
    title: "5. หน้าที่และความรับผิดชอบของร้านค้า",
    items: [
      "ร้านค้าเป็นผู้รับผิดชอบต่อข้อมูลทั้งหมดที่นำเข้าสู่ระบบ เช่น ชื่อร้าน เมนู ราคา รูปภาพ ข้อมูลพนักงาน และข้อมูลออเดอร์",
      "ร้านค้าต้องตรวจสอบให้แน่ใจว่าข้อมูลเมนู ราคา และรายละเอียดต่าง ๆ ถูกต้องก่อนเปิดให้ลูกค้าสั่งอาหาร",
      "ผู้ให้บริการไม่รับผิดชอบต่อความผิดพลาดที่เกิดจากการตั้งค่าของร้านค้า เช่น ตั้งราคาผิด ลืมปิดเมนูหมด หรือพนักงานกดสถานะผิด",
    ],
  },
  {
    title: "6. ระบบสั่งอาหารผ่าน QR Code",
    items: [
      "ระบบ QR Code เป็นเครื่องมือช่วยให้ลูกค้าของร้านค้าดูเมนูและส่งออเดอร์ผ่านเว็บได้",
      "ร้านค้าเป็นผู้รับผิดชอบในการตรวจสอบออเดอร์ ยืนยันรายการอาหาร จัดเตรียมอาหาร ส่งมอบอาหาร และแก้ไขปัญหากับลูกค้าเอง",
      "หากเกิดกรณีลูกค้าสั่งผิด ออเดอร์ซ้ำ ลูกค้าไม่ชำระเงิน หรือข้อพิพาทระหว่างร้านค้ากับลูกค้า ร้านค้าจะเป็นผู้รับผิดชอบโดยตรง",
    ],
  },
  {
    title: "7. การชำระเงิน",
    items: [
      "หากระบบมีฟีเจอร์บันทึกสถานะการชำระเงิน เช่น เงินสดหรือ QR Payment ระบบดังกล่าวเป็นเพียงเครื่องมือช่วยบันทึกข้อมูลเท่านั้น",
      "ร้านค้าเป็นผู้รับผิดชอบในการตรวจสอบยอดเงิน การรับเงิน การคืนเงิน ใบเสร็จ ภาษี และธุรกรรมทางการเงินของตนเอง",
      "ผู้ให้บริการไม่รับผิดชอบต่อความเสียหายจากการชำระเงินผิดพลาด การโอนเงินผิดบัญชี หรือข้อพิพาททางการเงินระหว่างร้านค้ากับลูกค้า",
    ],
  },
  {
    title: "8. การใช้งานที่ไม่อนุญาต",
    items: [
      "ห้ามใช้บริการเพื่อกิจการที่ผิดกฎหมาย หลอกลวง ละเมิดสิทธิของบุคคลอื่น หรือก่อให้เกิดความเสียหายต่อระบบ",
      "ห้ามอัปโหลดข้อมูล รูปภาพ หรือเนื้อหาที่ละเมิดลิขสิทธิ์ เครื่องหมายการค้า สิทธิส่วนบุคคล หรือสิทธิของบุคคลอื่น",
      "ห้ามพยายามเจาะระบบ แฮกระบบ เข้าถึงข้อมูลที่ไม่ได้รับอนุญาต หรือกระทำการใด ๆ ที่ส่งผลเสียต่อความปลอดภัยของระบบ",
      "หากพบการใช้งานที่ฝ่าฝืนเงื่อนไข ผู้ให้บริการมีสิทธิระงับบัญชีหรือยกเลิกบริการได้ทันที",
    ],
  },
  {
    title: "9. ข้อมูล รูปภาพ และเนื้อหาของร้านค้า",
    items: [
      "ร้านค้ายังคงเป็นเจ้าของข้อมูล รูปภาพ เมนู และเนื้อหาที่นำเข้าสู่ระบบ",
      "การอัปโหลดข้อมูลเข้าสู่ระบบถือว่าร้านค้าอนุญาตให้ผู้ให้บริการจัดเก็บ ประมวลผล แสดงผล และสำรองข้อมูลดังกล่าวเท่าที่จำเป็นเพื่อให้บริการ",
      "ร้านค้ารับรองว่าข้อมูล รูปภาพ และเนื้อหาที่นำเข้าสู่ระบบไม่ละเมิดสิทธิของบุคคลอื่น",
    ],
  },
  {
    title: "10. ข้อมูลส่วนบุคคลและความเป็นส่วนตัว",
    items: [
      "ผู้ให้บริการอาจเก็บรวบรวม ใช้ และประมวลผลข้อมูลส่วนบุคคลเท่าที่จำเป็นต่อการให้บริการ เช่น ข้อมูลบัญชีผู้ใช้งาน ข้อมูลติดต่อ ข้อมูลออเดอร์ และข้อมูลการใช้งานระบบ",
      "ผู้ให้บริการจะดูแลข้อมูลส่วนบุคคลตามนโยบายความเป็นส่วนตัวและกฎหมายที่เกี่ยวข้อง",
      "ร้านค้ามีหน้าที่แจ้งลูกค้าหรือพนักงานของตนให้ทราบตามความเหมาะสมว่าอาจมีการเก็บและประมวลผลข้อมูลผ่านระบบ POS",
    ],
  },
  {
    title: "11. ความพร้อมใช้งานของระบบ",
    items: [
      "ผู้ให้บริการจะพยายามดูแลให้ระบบสามารถใช้งานได้อย่างต่อเนื่องและมีเสถียรภาพ",
      "ระบบอาจหยุดชะงัก ล่าช้า หรือใช้งานไม่ได้ชั่วคราวจากการบำรุงรักษา ปัญหาอินเทอร์เน็ต เหตุขัดข้องทางเทคนิค การโจมตีทางไซเบอร์ หรือเหตุสุดวิสัย",
      "ผู้ให้บริการไม่รับประกันว่าระบบจะปราศจากข้อผิดพลาดหรือสามารถใช้งานได้ตลอดเวลา",
    ],
  },
  {
    title: "12. การสำรองข้อมูลและการสูญหายของข้อมูล",
    items: [
      "ผู้ให้บริการอาจมีระบบสำรองข้อมูลตามความเหมาะสมเพื่อลดความเสี่ยงจากการสูญหายของข้อมูล",
      "ร้านค้าควรสำรองข้อมูลสำคัญของตนเองเป็นระยะ เช่น รายงานยอดขาย รายการออเดอร์ หรือข้อมูลที่จำเป็นต่อธุรกิจ",
      "ผู้ให้บริการไม่รับผิดชอบต่อความเสียหายที่เกิดจากการสูญหายของข้อมูล หากเกิดจากเหตุสุดวิสัย การใช้งานผิดวิธี หรือเหตุที่อยู่นอกเหนือการควบคุม",
    ],
  },
  {
    title: "13. การยกเลิกบริการและการคืนเงิน",
    items: [
      "ผู้ใช้งานสามารถยกเลิกบริการได้ตามช่องทางที่ผู้ให้บริการกำหนด",
      "หลังจากยกเลิกบริการ ผู้ใช้งานอาจไม่สามารถเข้าถึงระบบ ข้อมูลร้านค้า หรือข้อมูลออเดอร์ได้ จึงควรสำรองข้อมูลที่จำเป็นก่อนยกเลิก",
      "ค่าบริการที่ชำระแล้วโดยทั่วไปไม่สามารถขอคืนเงินได้ เว้นแต่ผู้ให้บริการจะระบุเป็นกรณีพิเศษ",
    ],
  },
  {
    title: "14. ทรัพย์สินทางปัญญา",
    items: [
      "ระบบ ซอฟต์แวร์ โค้ด ออกแบบ หน้าจอ โลโก้ ข้อความ รูปแบบการทำงาน ฐานข้อมูล และองค์ประกอบอื่น ๆ เป็นทรัพย์สินของผู้ให้บริการหรือผู้ได้รับอนุญาตที่เกี่ยวข้อง",
      "ผู้ใช้งานไม่มีสิทธิคัดลอก ดัดแปลง แจกจ่าย ขาย ให้เช่า ทำวิศวกรรมย้อนกลับ หรือใช้ประโยชน์จากระบบในลักษณะที่ละเมิดสิทธิของผู้ให้บริการ",
    ],
  },
  {
    title: "15. ข้อจำกัดความรับผิดของผู้ให้บริการ",
    items: [
      "ผู้ให้บริการไม่รับผิดชอบต่อความเสียหายทางตรง ทางอ้อม การสูญเสียรายได้ การสูญเสียกำไร การสูญเสียลูกค้า หรือความเสียหายทางธุรกิจใด ๆ ที่เกิดจากการใช้งานหรือไม่สามารถใช้งานระบบได้",
      "ความรับผิดสูงสุดของผู้ให้บริการ หากมี จะจำกัดไม่เกินจำนวนค่าบริการที่ผู้ใช้งานได้ชำระให้แก่ผู้ให้บริการในรอบเดือนล่าสุดก่อนเกิดเหตุ เว้นแต่กฎหมายจะกำหนดไว้เป็นอย่างอื่น",
    ],
  },
  {
    title: "16. เหตุสุดวิสัย",
    items: [
      "ผู้ให้บริการไม่ต้องรับผิดชอบต่อความล่าช้า ความเสียหาย หรือการไม่สามารถให้บริการได้ หากเกิดจากเหตุสุดวิสัยหรือเหตุที่อยู่นอกเหนือการควบคุม",
      "เหตุสุดวิสัยรวมถึงภัยธรรมชาติ ไฟไหม้ น้ำท่วม สงคราม การประท้วง การโจมตีทางไซเบอร์ ปัญหาผู้ให้บริการคลาวด์ อินเทอร์เน็ตขัดข้อง หรือคำสั่งของหน่วยงานรัฐ",
    ],
  },
  {
    title: "17. การเปลี่ยนแปลงเงื่อนไข",
    items: [
      "ผู้ให้บริการมีสิทธิแก้ไขหรือปรับปรุงเงื่อนไขการใช้งานนี้ได้ตามความเหมาะสม",
      "ผู้ให้บริการจะแจ้งให้ผู้ใช้งานทราบผ่านเว็บไซต์ ระบบหลังบ้าน หรือช่องทางที่เหมาะสม",
      "การที่ผู้ใช้งานยังคงใช้บริการต่อไปหลังจากมีการแก้ไขเงื่อนไข ถือว่าผู้ใช้งานยอมรับเงื่อนไขฉบับปรับปรุงแล้ว",
    ],
  },
  {
    title: "18. กฎหมายที่ใช้บังคับ",
    items: [
      "เงื่อนไขและข้อกำหนดฉบับนี้อยู่ภายใต้กฎหมายไทย",
      "หากเกิดข้อพิพาทระหว่างผู้ให้บริการและผู้ใช้งาน คู่สัญญาจะพยายามเจรจาไกล่เกลี่ยกันก่อน หากไม่สามารถตกลงกันได้ ให้ดำเนินการตามกระบวนการทางกฎหมายที่เกี่ยวข้องในประเทศไทย",
    ],
  },
  {
    title: "19. ช่องทางการติดต่อ",
    items: [
      "LINE Official Account: [ใส่ LINE OA]",
      "อีเมล: [ใส่อีเมล]",
      "เบอร์โทรศัพท์: [ใส่เบอร์โทร ถ้ามี]",
    ],
  },
];

export default function PolicyPage() {
  const [accepted, setAccepted] = useState(false);
  const [hasReachedReadPoint, setHasReachedReadPoint] = useState(false);
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  const readPointRef = useRef<HTMLDivElement | null>(null);

  const canContinue = accepted && hasReachedReadPoint;
  const hasButtonProgress = accepted || hasReachedReadPoint;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    function checkReadPoint() {
      const readPoint = readPointRef.current;
      if (!readPoint) return;

      const rect = readPoint.getBoundingClientRect();
      const triggerPoint = window.innerHeight - 150;
      const isBeforeReadPoint = rect.top > triggerPoint;

      setShowScrollArrow(isBeforeReadPoint);

      if (!isBeforeReadPoint) {
        setHasReachedReadPoint(true);
      }
    }

    checkReadPoint();

    window.addEventListener("scroll", checkReadPoint, { passive: true });
    window.addEventListener("resize", checkReadPoint);

    return () => {
      window.removeEventListener("scroll", checkReadPoint);
      window.removeEventListener("resize", checkReadPoint);
    };
  }, []);

  function scrollToReadPoint() {
    readPointRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  function handleContinue() {
    if (canContinue) {
      window.location.href = loginUrl;
      return;
    }

    if (!hasReachedReadPoint) {
      scrollToReadPoint();
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "เงื่อนไขและข้อกำหนดการใช้งาน ScanSung POS",
    description:
      "เงื่อนไขและข้อกำหนดการใช้งานระบบ ScanSung POS สำหรับร้านอาหาร ระบบสั่งอาหารผ่าน QR Code จัดการเมนู ออเดอร์ พนักงาน และยอดขาย",
    url: "https://pos.scansung.app/policy",
    inLanguage: "th-TH",
  };

  return (
    <main className="min-h-screen bg-[#7437f2] text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative min-h-screen bg-gradient-to-br from-[#7437f2] via-[#7437f2] to-[#5b21d8]">
        <div className="mx-auto w-full max-w-5xl px-0 sm:px-6 lg:px-8">
          <header className="relative z-10 flex items-center gap-3 px-4 pb-4 pt-5 text-white sm:px-0 sm:pb-6 sm:pt-8">
            <Link
              href="/"
              aria-label="ย้อนกลับ"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 backdrop-blur transition hover:bg-white/20"
            >
              <ChevronLeft className="h-4 w-4" />
            </Link>

            <div>
              <p className="text-[10px] font-medium text-white/80 sm:text-xs">
                ScanSung POS
              </p>
              <h1 className="text-base font-bold leading-tight sm:text-lg">
                เงื่อนไขและข้อกำหนดการใช้งาน
              </h1>
            </div>
          </header>

          <article className="relative z-10 rounded-t-[1.5rem] bg-white px-4 pb-[132px] pt-5 sm:rounded-[1.75rem] sm:px-7 sm:pb-[150px] sm:pt-8 lg:px-10">
            <div className="mx-auto max-w-3xl">
              <p className="mb-2 text-center text-[10px] font-medium text-[#7437f2] sm:text-xs">
                ปรับปรุงล่าสุด: 23 มิถุนายน 2026
              </p>

              <h2 className="text-center text-lg font-extrabold leading-snug text-zinc-950 sm:text-xl lg:text-2xl">
                เงื่อนไขและข้อกำหนดการใช้งาน
                <br className="hidden sm:block" />
                ระบบ POS ร้านอาหาร
              </h2>

              <div className="mt-4 rounded-2xl bg-purple-50 px-4 py-3 text-[11px] leading-5 text-zinc-700 sm:mt-5 sm:text-xs sm:leading-6">
                <p>
                  ยินดีต้อนรับสู่ ScanSung POS
                  กรุณาอ่านเงื่อนไขและข้อกำหนดการใช้งาน ก่อนสมัคร ทดลองใช้งาน
                  เข้าสู่ระบบ หรือใช้บริการ
                </p>
                <p className="mt-2 font-medium text-zinc-900">
                  หากท่านไม่ยอมรับเงื่อนไขนี้ กรุณายุติการใช้งานระบบทันที
                </p>
              </div>

              <div className="mt-6 space-y-5 sm:mt-7 sm:space-y-6">
                {termsSections.map((section, index) => (
                  <section key={section.title}>
                    {index === 17 && (
                      <div ref={readPointRef} className="h-px" />
                    )}

                    <h2 className="text-sm font-bold leading-6 text-zinc-950 sm:text-base">
                      {section.title}
                    </h2>

                    <ul className="mt-2 space-y-1.5 text-xs leading-6 text-zinc-600 sm:text-[13px] sm:leading-7">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7437f2]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <footer className="mt-7 rounded-2xl bg-purple-50 p-4 text-[11px] leading-5 text-zinc-700 sm:mt-9 sm:p-5 sm:text-xs sm:leading-6">
                <p className="font-bold text-zinc-900">
                  หากมีข้อสงสัยเกี่ยวกับเงื่อนไขการใช้งาน
                </p>
                <p className="mt-1.5">
                  กรุณาติดต่อทีมงาน ScanSung POS ผ่านช่องทาง LINE Official
                  Account หรืออีเมลที่ระบุไว้ด้านบน
                </p>
              </footer>
            </div>
          </article>
        </div>

        {showScrollArrow && (
          <button
            type="button"
            onClick={scrollToReadPoint}
            aria-label="เลื่อนไปยังส่วนท้ายของเงื่อนไข"
            className="fixed bottom-[116px] left-1/2 z-50 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-[#7437f2] text-white transition hover:bg-[#642bea] active:scale-95 sm:bottom-[128px] sm:h-9 sm:w-9"
          >
            <ArrowDown strokeWidth={3} className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        )}

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur sm:px-6 sm:pt-4 sm:pb-[calc(1rem+env(safe-area-inset-bottom))]">
          <div className="mx-auto w-full max-w-4xl space-y-2.5 sm:space-y-3">
            <label className="flex cursor-pointer items-start gap-2.5 text-[11px] leading-5 text-zinc-700 sm:text-xs sm:leading-5">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(event) => setAccepted(event.target.checked)}
                className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#7437f2] sm:h-4 sm:w-4"
              />

              <span>
                ฉันยอมรับ{" "}
                <span className="font-semibold text-[#7437f2]">
                  ข้อกำหนดและเงื่อนไข
                </span>{" "}
                การให้บริการของ ScanSung POS
              </span>
            </label>

            <button
              type="button"
              onClick={handleContinue}
              aria-disabled={!canContinue}
              className={`flex h-10 w-full items-center justify-center rounded-2xl border text-center text-[12px] font-medium transition sm:h-11 sm:text-sm ${
                canContinue
                  ? "border-[#7437f2] bg-[#7437f2] text-white hover:bg-[#642bea]"
                  : hasButtonProgress
                    ? "border-[#d9c8ff] bg-purple-100 text-[#7437f2]"
                    : "border-zinc-200 bg-zinc-200 text-zinc-400"
              }`}
            >
              {canContinue
                ? "ฉันยอมรับเงื่อนไขและเริ่มใช้งาน"
                : accepted && !hasReachedReadPoint
                  ? "เลื่อนอ่านให้ถึงส่วนท้ายของเงื่อนไขก่อน"
                  : !accepted && hasReachedReadPoint
                    ? "กรุณาติ๊กยอมรับเงื่อนไขก่อน"
                    : "กรุณาติ๊กยอมรับและอ่านให้ครบก่อน"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

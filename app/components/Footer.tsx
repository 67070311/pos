import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLine, FaTiktok } from "react-icons/fa6";

type SocialLink = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  className: string;
  iconClassName: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/buildifyx_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: FaInstagram,
    className: "bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]",
    iconClassName: "text-white",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CzN41u7iL/",
    icon: FaFacebookF,
    className: "bg-[#1877f2]",
    iconClassName: "text-white",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@buildifyx?_r=1&_t=ZS-97PvZYMgV6K",
    icon: FaTiktok,
    className: "bg-gradient-to-br from-[#00f2ea] via-white to-[#ff0050]",
    iconClassName: "text-[#111111]",
  },
  {
    name: "LINE",
    href: "#",
    icon: FaLine,
    className: "bg-[#06c755]",
    iconClassName: "text-white",
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#f7f7fb]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:py-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo/logo.png"
                alt="POS Footer Logo"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />

              <div>
                <h2 className="text-3xl font-semibold leading-none text-gray-700 sm:text-4xl">
                  POS
                </h2>
                <p className="mt-1 text-sm font-medium text-gray-400 sm:text-base">
                  Smart Restaurant System
                </p>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-bold text-gray-900 sm:text-2xl">
              ระบบจัดการร้านค้าแบบครบวงจร
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              ช่วยจัดการการขายหน้าร้าน สต๊อกสินค้า รายงานยอดขาย
              และข้อมูลลูกค้าให้ง่ายขึ้นในระบบเดียว
            </p>
          </div>

          <div className="md:pl-16">
            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Follow Us
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              ติดตามข่าวสารและผลงานของเราได้ผ่านช่องทางโซเชียล
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                const isExternalLink = item.href !== "#";

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target={isExternalLink ? "_blank" : undefined}
                    rel={isExternalLink ? "noopener noreferrer" : undefined}
                    aria-label={`Follow us on ${item.name}`}
                    className={`group flex h-11 w-11 items-center justify-center rounded-xl shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:scale-105 hover:shadow-md sm:h-12 sm:w-12 ${item.className}`}
                  >
                    <Icon
                      aria-hidden={true}
                      className={`text-lg transition group-hover:scale-110 sm:text-xl ${item.iconClassName}`}
                    />
                  </a>
                );
              })}
            </div>

            <p className="mt-3 text-xs text-gray-400">
              LINE ยังไม่ได้ใส่ลิงก์จริง สามารถเปลี่ยน href จาก &quot;#&quot;
              เป็นลิงก์ LINE OA ได้ทันที
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6">
          <div className="flex flex-col gap-3 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
            <p>Copyright © 2026 POS System. All rights reserved.</p>

            <a
              href="#"
              className="font-medium text-gray-600 transition hover:text-[#7437f2]"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

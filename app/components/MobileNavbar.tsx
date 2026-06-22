"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    label: "ฟีเจอร์",
    href: "/feature",
  },
  {
    label: "ราคา",
    href: "/package",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

const loginUrl = "https://pos.scansung.app/login";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "ปิดเมนู" : "เปิดเมนู"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="grid h-11 w-11 place-items-center bg-transparent transition active:scale-95 focus:outline-none"
      >
        <span className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 9 }).map((_, index) => (
            <span
              key={index}
              className={`h-1.5 w-1.5 rounded-full bg-[#7437f2] transition duration-200 ${
                isOpen ? "scale-90 opacity-70" : "scale-100 opacity-100"
              }`}
            />
          ))}
        </span>
      </button>

      <div
        className={`fixed inset-x-0 top-[72px] z-50 transition-opacity duration-200 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="ปิดเมนู"
          onClick={closeMenu}
          className="absolute inset-0 h-screen w-full bg-black/20"
        />

        <div
          className={`relative mx-4 mt-3 overflow-hidden rounded-[28px] border border-purple-100 bg-white shadow-[0_24px_70px_rgba(116,55,242,0.18)] transition-all duration-300 ${
            isOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
          }`}
        >
          <div className="p-3">
            <div className="mb-2 rounded-2xl bg-[#f7f3ff] px-4 py-3">
              <p className="text-xs font-medium text-[#7437f2]">
                SCAN SUNG POS
              </p>

              <p className="mt-1 text-sm font-semibold text-[#1f2433]">
                เมนูหลัก
              </p>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-[#1f2433] transition hover:bg-purple-50 hover:text-[#7437f2]"
              >
                <span>{item.label}</span>
                <span className="text-xl leading-none text-[#7437f2]">›</span>
              </Link>
            ))}

            <a
              href={loginUrl}
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center rounded-2xl bg-[#7437f2] px-4 py-3 text-base font-semibold text-white shadow-md shadow-purple-200 transition hover:bg-[#642bea]"
            >
              เข้าสู่ระบบ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

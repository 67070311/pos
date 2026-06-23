"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavItem } from "./Navbar";

type MobileNavbarProps = {
  navItems: NavItem[];
  loginHref: string;
};

export default function MobileNavbar({
  navItems,
  loginHref,
}: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "ปิดเมนู" : "เปิดเมนู"}
        aria-expanded={isOpen}
        aria-controls="mobile-navbar-menu"
        onClick={() => setIsOpen((prev) => !prev)}
        className="grid h-11 w-11 place-items-center rounded-full transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#7437f2]/40"
      >
        <span className="grid grid-cols-3 gap-1.5" aria-hidden="true">
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
        id="mobile-navbar-menu"
        className={`fixed inset-x-0 top-[72px] z-50 transition duration-200 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="ปิดเมนู"
          onClick={closeMenu}
          className="absolute inset-0 h-screen w-full bg-black/25"
        />

        <div
          className={`relative mx-4 mt-3 overflow-hidden rounded-[28px] border border-purple-100 bg-white shadow-[0_24px_70px_rgba(116,55,242,0.18)] transition duration-300 ${
            isOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
          }`}
        >
          <div className="p-3">
            <div className="mb-2 rounded-2xl bg-[#f7f3ff] px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#7437f2]">
                SCAN SUNG POS
              </p>

              <p className="mt-1 text-sm font-semibold text-[#1f2433]">
                เมนูหลัก
              </p>
            </div>

            <div className="space-y-1">
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
            </div>

            <Link
              href={loginHref}
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center rounded-2xl bg-[#7437f2] px-4 py-3.5 text-base font-semibold text-white shadow-md shadow-purple-200 transition hover:bg-[#642bea] active:scale-[0.99]"
            >
              เข้าสู่ระบบ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

export type NavItem = {
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

const policyUrl = "/policy";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="กลับหน้าหลัก"
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src="/logo/logo.png"
            alt="POS Logo"
            width={46}
            height={46}
            priority
            className="h-11 w-11 object-contain"
          />

          <span className="text-2xl font-bold tracking-tight text-[#1f2433]">
            POS
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex lg:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-semibold text-[#1f2433] transition hover:text-[#7437f2]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href={policyUrl}
          className="hidden rounded-full border border-[#d9c8ff] px-6 py-2.5 text-base font-normal text-[#7437f2] transition hover:border-[#7437f2] hover:bg-purple-50 md:inline-flex"
        >
          เข้าสู่ระบบ
        </Link>

        <MobileNavbar navItems={navItems} loginHref={policyUrl} />
      </nav>
    </header>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Navbar utama aplikasi.
 * - Kalau di halaman "/" (landing), menu akan scroll ke section (#product, #service, dst).
 * - Tombol "Get Started" arahkan ke halaman /auth (login/register).
 */
const nav = [
  { href: "#product", label: "Product" },
  { href: "#service", label: "Service" },
  { href: "#activity", label: "Activity" },
  { href: "#support", label: "Support" },
];

export default function Navbar() {
  const path = usePathname(); // cek posisi route aktif sekarang

  return (
    <header className="container pt-12 flex items-center justify-between">
      {/* Logo + link balik ke landing page */}
      <Link href="/" className="flex items-center gap-3">
        <div className="">
          <img src="/logo-brand-nav.svg" alt="CarePoint" className="h-10" />
        </div>
        <span className="font-satoshi font-bold text-[#121212] text-[28px]">CarePoint</span>
      </Link>

      {/* Menu nav hanya tampil kalau di landing page */}
      {path === "/" && (
        <nav className="hidden md:flex items-center gap-10 text-xl font-satoshi font-medium">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[#121212]/80 hover:text-[#3490AA] transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}

      {/* Tombol Get Started → /auth */}
      <div className="flex items-center gap-2">
        <Link
          href="/auth"
          className="rounded-full bg-[#121212] px-8 py-4 font-satoshi font-medium text-base leading-[120%] text-white"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

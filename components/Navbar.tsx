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
    <header className="mt-6 flex items-center justify-between rounded-2xl bg-white/90 px-5 py-3 shadow-soft">
      {/* Logo + link balik ke landing page */}
      <Link href="/" className="flex items-center gap-2">
        <img src="/logo.svg" alt="CarePoint" className="h-6" />
        <span className="font-semibold">CarePoint</span>
      </Link>

      {/* Menu nav hanya tampil kalau di landing page */}
      {path === "/" && (
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-slate-600 hover:text-ink transition"
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
          className="rounded-full bg-ink px-4 py-2 text-sm text-white"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

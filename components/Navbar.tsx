"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "#product", label: "Product" },
  { href: "#service", label: "Service" },
  { href: "#activity", label: "Activity" },
  { href: "#support", label: "Support" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <header className="mt-6 flex items-center justify-between rounded-2xl bg-white/90 px-5 py-3 shadow-soft">
      <Link href="/" className="flex items-center gap-2">
        <img src="/logo.svg" alt="CarePoint" className="h-6" />
        <span className="font-semibold">CarePoint</span>
      </Link>

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

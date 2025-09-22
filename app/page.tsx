import Navbar from "@/components/Navbar";
import Link from "next/link";

/**
 * Landing Page
 * - Berisi hero + section: Product, Service, Activity, Support.
 * - Setiap section punya id agar bisa discroll pakai anchor link (#product, dst).
 */
export default function Landing() {
  return (
    <div className="space-y-24">
      <Navbar />
      {/* Hero section */}
      <section className="rounded-[32px] bg-gradient-to-b from-white to-mist px-8 py-16 text-center shadow-soft">
        <h1 className="text-4xl md:text-5xl font-bold text-ink">
          Transform <span className="text-accent">Healthcare</span> Efficiency
          <br /> with Cutting-Edge Technology
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Manage patients, staff, finances, and more with our comprehensive, user-friendly system.
        </p>

        {/* CTA */}
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/auth"
            className="rounded-full bg-ink px-5 py-2 text-sm text-white"
          >
            Get Started
          </Link>
          <button className="rounded-full border px-5 py-2 text-sm">Watch a Demo</button>
        </div>
      </section>

      {/* Product section */}
      <section id="product" className="rounded-[32px] bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold">Product</h2>
        <p className="mt-2 text-slate-600">Our platform modules and features.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl2 bg-mist p-5">Electronic Medical Record</div>
          <div className="rounded-xl2 bg-mist p-5">Scheduling</div>
          <div className="rounded-xl2 bg-mist p-5">Analytics</div>
        </div>
      </section>

      {/* Service section */}
      <section id="service" className="rounded-[32px] bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold">Service</h2>
        <p className="mt-2 text-slate-600">Implementation, training, and support plans.</p>
        <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
          <li>Onboarding & data migration</li>
          <li>Customization & branding</li>
          <li>Staff training</li>
        </ul>
      </section>

      {/* Activity section */}
      <section id="activity" className="rounded-[32px] bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold">Activity</h2>
        <p className="mt-2 text-slate-600">Recent updates and changelog.</p>
        <div className="mt-4 space-y-3">
          <div className="rounded-xl2 bg-mist p-4">v0.2 – Dashboard improvements</div>
          <div className="rounded-xl2 bg-mist p-4">v0.1 – Initial release</div>
        </div>
      </section>

      {/* Support section */}
      <section id="support" className="rounded-[32px] bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold">Support</h2>
        <p className="mt-2 text-slate-600">Contact us form.</p>
        <form className="mt-4 grid gap-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg border px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border px-4 py-2"
          />
          <textarea
            placeholder="Message"
            className="rounded-lg border px-4 py-2"
            rows={4}
          />
          <button
            type="submit"
            className="rounded-full bg-accent px-5 py-2 text-sm text-white"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

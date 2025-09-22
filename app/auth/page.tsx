export default function AuthPage() {
  return (
    <section className="mx-auto mt-16 max-w-md rounded-2xl bg-white p-8 shadow-soft">
      <h2 className="mb-6 text-center text-2xl font-bold">Login / Sign Up</h2>
      <form className="grid gap-4">
        <input type="email" placeholder="Email" className="rounded-lg border px-4 py-2" />
        <input type="password" placeholder="Password" className="rounded-lg border px-4 py-2" />
        <button type="submit" className="rounded-full bg-ink px-5 py-2 text-sm text-white">
          Continue
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-slate-500">
        Don’t have an account? <a className="text-accent" href="#">Sign up</a>
      </p>
    </section>
  );
}

// app/page.tsx (Next.js + Tailwind)
// Paste this whole file. Uses pure CSS gradients (no images) to match the vibe.

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Background layers */}
      <div className="absolute inset-0 bg-black" />

      {/* Star field */}
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_20%_30%,rgba(255,255,255,.35)_1px,transparent_1.6px),radial-gradient(circle_at_70%_20%,rgba(255,255,255,.25)_1px,transparent_1.6px),radial-gradient(circle_at_50%_70%,rgba(255,255,255,.18)_1px,transparent_1.6px)] [background-size:140px_140px,180px_180px,220px_220px]" />

      {/* Big aurora blob */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[720px] w-[1100px] -translate-x-1/2 rounded-full opacity-80 blur-3xl [background:radial-gradient(circle_at_45%_40%,rgba(162,89,255,.9),transparent_60%),radial-gradient(circle_at_60%_55%,rgba(79,162,255,.75),transparent_58%),radial-gradient(circle_at_25%_70%,rgba(0,240,255,.55),transparent_55%)]" />

      {/* Dark vignette */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,.55)_70%,rgba(0,0,0,.85)_100%)]" />

      {/* Top nav */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        {/* Logo (simple “Power Automate”-ish mark) */}
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-10">
            <div className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 rotate-45 rounded-md bg-gradient-to-br from-sky-400 to-indigo-500" />
            <div className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 rotate-45 rounded-md bg-gradient-to-br from-fuchsia-400 to-indigo-600" />
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded bg-gradient-to-br from-cyan-300 to-white/80" />
          </div>
        </div>

        <nav className="hidden items-center gap-12 text-sm text-white/80 md:flex">
          <a className="hover:text-white" href="#details">
            Details
          </a>
          <a className="hover:text-white" href="#about">
            About
          </a>
          <a className="hover:text-white" href="#register">
            Register
          </a>
          <a className="hover:text-white" href="#gdg">
            GDG
          </a>
        </nav>

        <div className="flex items-center gap-4 text-white/85">
          <a
            className="rounded-md p-2 hover:bg-white/10"
            href="#"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            className="rounded-md p-2 hover:bg-white/10"
            href="#"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a className="hidden hover:text-white md:inline" href="#admin">
            Admin
          </a>
          <span className="hidden text-white/40 md:inline">·</span>
          <a className="hidden hover:text-white md:inline" href="#account">
            Account
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-10 md:pt-16">
        {/* Sparkle star */}
        <div className="mb-10 mt-4 md:mb-14 md:mt-6">
          <Sparkle />
        </div>

        <h1 className="text-center text-5xl font-light tracking-tight md:text-7xl">
          <span className="text-white/90">Build</span>{" "}
          <span className="bg-gradient-to-r from-violet-200 via-white/80 to-fuchsia-200 bg-clip-text text-transparent">
            with AI
          </span>
        </h1>
        <p className="mt-4 text-center text-sm text-white/60 md:text-base">
          Biggest AI Conference @ UTSC
        </p>

        <div className="mt-10" id="register">
          <button className="group relative rounded-2xl px-10 py-4 text-lg font-medium">
            {/* glass */}
            <span className="absolute inset-0 rounded-2xl bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,.35)] backdrop-blur-md transition group-hover:bg-white/14" />
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-60" />
            <span className="relative">Register</span>
          </button>
        </div>
      </main>

      {/* Planet (bottom) */}
      <div className="pointer-events-none absolute bottom-[-38vh] left-1/2 z-0 h-[95vh] w-[95vh] -translate-x-1/2 rounded-full">
        {/* Rim glow */}
        <div className="absolute inset-0 rounded-full [background:radial-gradient(circle_at_50%_35%,rgba(255,255,255,.06),transparent_55%),radial-gradient(circle_at_50%_65%,rgba(0,0,0,.95),rgba(0,0,0,1))]" />
        {/* Outer atmosphere */}
        <div className="absolute inset-[-14px] rounded-full blur-md [background:radial-gradient(circle_at_50%_20%,rgba(120,200,255,.18),transparent_45%),radial-gradient(circle_at_10%_65%,rgba(0,255,255,.12),transparent_55%),radial-gradient(circle_at_90%_60%,rgba(170,90,255,.10),transparent_55%)]" />
        {/* Edge highlight */}
        <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
        {/* City lights speckles */}
        <div className="absolute inset-0 rounded-full opacity-60 [mask-image:radial-gradient(circle_at_50%_40%,transparent_35%,black_55%)] [background-image:radial-gradient(circle_at_30%_65%,rgba(255,200,120,.35)_1px,transparent_2px),radial-gradient(circle_at_55%_72%,rgba(255,200,120,.28)_1px,transparent_2px),radial-gradient(circle_at_68%_62%,rgba(255,200,120,.24)_1px,transparent_2px)] [background-size:180px_180px,220px_220px,260px_260px]" />
      </div>

      {/* Floating chat/notification bubble */}
      <div className="fixed bottom-8 right-10 z-20">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-2xl bg-black/45 shadow-[0_18px_40px_rgba(0,0,0,.5)] backdrop-blur-md ring-1 ring-white/10" />
          <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 shadow-[0_10px_25px_rgba(0,0,0,.35)]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-white">
            I
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- tiny inline SVGs ---- */

function Sparkle() {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      aria-hidden="true"
      className="drop-shadow-[0_12px_30px_rgba(160,120,255,.35)]"
    >
      <defs>
        <radialGradient id="g" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(70 70) rotate(90) scale(60)">
          <stop stopColor="white" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#B9A6FF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M70 12C74 42 86 54 116 58C86 62 74 74 70 104C66 74 54 62 24 58C54 54 66 42 70 12Z"
        fill="url(#g)"
      />
      <path
        d="M70 20C73 44 84 55 108 58C84 61 73 72 70 96C67 72 56 61 32 58C56 55 67 44 70 20Z"
        fill="white"
        opacity="0.18"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 24h4V7.98h-4V24zM8 7.98h3.83v2.19h.05c.53-1 1.84-2.06 3.79-2.06C19.5 8.11 22 10.15 22 14.64V24h-4v-8.2c0-1.95-.03-4.46-2.72-4.46-2.72 0-3.14 2.12-3.14 4.32V24H8V7.98z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.2A4.8 4.8 0 107 12a4.8 4.8 0 005-4.8zm0 7.8A3 3 0 1115 12a3 3 0 01-3 3zm5.5-8.9a1.1 1.1 0 10-1.1-1.1 1.1 1.1 0 001.1 1.1z" />
    </svg>
  );
}

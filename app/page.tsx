import Link from "next/link";

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        backgroundImage: "url('/IMG_7024.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.42), rgba(0,0,0,0.48))",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.22) 52%, rgba(0,0,0,0.52) 100%)",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
          <div className="text-3xl font-bold tracking-tight md:text-5xl">
            Relay
          </div>

          <div className="flex items-center gap-4 text-lg text-white/90 md:gap-6 md:text-2xl">
            <a href="#" className="transition hover:text-white">
              Log in
            </a>
            <span className="text-white/35">|</span>
            <a href="#" className="transition hover:text-white">
              Sign Up
            </a>
          </div>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center px-6 pb-20 text-center md:px-10">
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-[-0.03em] md:text-7xl">
            The only place you’ll ever need for
            <br />
            local services.
          </h1>

          <p className="mt-6 max-w-4xl text-lg text-white/72 md:mt-8 md:text-2xl">
            Hire trusted local professionals for junk removal, landscaping,
            moving, and more.
          </p>

          <Link href="/explore" className="mt-10 md:mt-12">
            <button
              type="button"
              style={{
                padding: "18px 44px",
                minWidth: "230px",
                fontSize: "20px",
                fontWeight: 600,
                color: "#ffffff",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.16)",
                background:
                  "linear-gradient(180deg, rgba(110,156,118,0.92) 0%, rgba(33,79,60,0.94) 100%)",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.16)",
              }}
              className="transition duration-200 hover:scale-[1.02]"
            >
              Find Pros
            </button>
          </Link>

          <div
            className="mt-12 flex items-center gap-4 rounded-[26px] px-6 py-5 md:px-8 md:py-6"
            style={{
              background: "rgba(10, 16, 14, 0.58)",
              border: "1px solid rgba(255,255,255,0.10)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow:
                "0 12px 32px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "34px",
                lineHeight: 1,
                filter: "drop-shadow(0 0 10px rgba(92,151,99,0.18))",
              }}
            >
              🌲
            </div>

            <div className="text-left">
              <div className="text-2xl font-bold tracking-[0.10em] md:text-4xl">
                PNW BUILT
              </div>
              <div className="mt-1 text-base text-white/75 md:text-2xl">
                Everett, Washington
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

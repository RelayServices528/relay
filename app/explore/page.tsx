"use client";

import Link from "next/link";

import { useState } from "react";

type ServiceStatus = "active" | "limited" | "inactive";

type Service = {

  name: string;

  icon: string;

  description: string;

  status: ServiceStatus;

  statusText: string;

  statusDetail: string;

};

const serviceAreas = [

  "North Everett",

  "Marysville",

  "Lake Stevens",

  "Smokey Point",

  "Mukilteo",

];

const services: Service[] = [

  {

    name: "Junk Removal",

    icon: "🗑️",

    description:

      "Furniture, appliances, garage cleanouts, unwanted items, and general junk haul-away.",

    status: "active",

    statusText: "ACTIVE NOW",

    statusDetail: "Crews available",

  },

  {

    name: "Moving Help",

    icon: "🚚",

    description:

      "Loading, unloading, furniture moving, heavy-item help, and small local moves.",

    status: "limited",

    statusText: "LIMITED AVAILABILITY",

    statusDetail: "Few openings remaining",

  },

  {

    name: "Yard Cleanup & Hauling",

    icon: "🌿",

    description:

      "Branches, leaves, brush, storm debris, outdoor cleanup, and haul-away.",

    status: "inactive",

    statusText: "NOT ACTIVE",

    statusDetail: "No crews currently running",

  },

  {

    name: "Pickup & Delivery",

    icon: "📦",

    description:

      "Furniture, appliances, Marketplace purchases, and other bulky-item delivery.",

    status: "active",

    statusText: "ACTIVE NOW",

    statusDetail: "Crews available",

  },

];

function getStatusClasses(status: ServiceStatus) {

  if (status === "active") {

    return {

      dot: "bg-green-400",

      text: "text-green-400",

    };

  }

  if (status === "limited") {

    return {

      dot: "bg-amber-400",

      text: "text-amber-400",

    };

  }

  return {

    dot: "bg-white/45",

    text: "text-white/60",

  };

}

export default function ExplorePage() {

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  function chooseService(service: Service) {

    setSelectedService(service);

    setTimeout(() => {

      document.getElementById("request")?.scrollIntoView({

        behavior: "smooth",

        block: "start",

      });

    }, 100);

  }

  return (

    <main

      className="min-h-screen text-white"

      style={{

        backgroundImage:

          "linear-gradient(rgba(3, 12, 8, 0.68), rgba(3, 12, 8, 0.93)), url('/images/explore-bg.jpg')",

        backgroundSize: "cover",

        backgroundPosition: "center",

        backgroundAttachment: "fixed",

      }}

    >

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06100c]/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">

          <Link

            href="/"

            className="text-3xl font-extrabold tracking-tight text-white"

          >

            Relay

          </Link>

          <div className="flex items-center gap-4">

            <span className="hidden text-sm text-white/75 sm:block">

              📍 North Everett, WA

            </span>

            <span className="text-2xl text-white/90">☰</span>

          </div>

        </div>

      </header>

      <div className="mx-auto max-w-5xl px-5 pb-28 pt-9 md:px-8">

        <section className="mb-7">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">

            PNW Built

          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">

            Explore Local Services

          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">

            Book as a guest or create an account for member discounts and faster

            repeat bookings.

          </p>

        </section>

        <section className="mb-9 rounded-3xl border border-white/10 bg-[#071a13]/85 p-5 backdrop-blur-xl md:p-6">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-green-400/20 bg-green-500/10 text-3xl">

                🎁

              </div>

              <div>

                <h2 className="text-lg font-bold">Join Relay today —</h2>

                <p className="mt-1 max-w-sm leading-6 text-white/80">

                  Save <strong className="text-green-400">$15</strong> on each

                  of your first 3 services.

                </p>

                <p className="mt-1 text-sm text-white/50">

                  Up to $45 in savings.

                </p>

              </div>

            </div>

            <Link

              href="/signup"

              className="rounded-2xl bg-gradient-to-b from-[#69ad79] to-[#33744c] px-6 py-4 text-center font-bold text-white transition hover:brightness-110"

            >

              Create Free Account

            </Link>

          </div>

        </section>

        <section>

          <div className="mb-5">

            <h2 className="text-2xl font-bold">Our Services</h2>

            <p className="mt-1 text-white/65">

              Choose a service to get started.

            </p>

          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {services.map((service) => {

              const styles = getStatusClasses(service.status);

              return (

                <button

                  key={service.name}

                  type="button"

                  onClick={() => chooseService(service)}

                  className="overflow-hidden rounded-3xl border border-white/10 bg-[#071812]/90 text-left backdrop-blur-xl transition hover:border-green-400/30 hover:bg-[#0a2118]/95"

                >

                  <div className="relative h-36 overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#183629] via-[#10271d] to-[#081510]">

                    <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-90">

                      {service.icon}

                    </div>

                    <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-green-400/25 bg-[#07130e]/90 text-xl">

                      {service.icon}

                    </div>

                  </div>

                  <div className="p-5">

                    <h3 className="text-2xl font-bold">{service.name}</h3>

                    <p className="mt-2 min-h-[72px] leading-6 text-white/70">

                      {service.description}

                    </p>

                    <div className="mt-5">

                      <div className="flex items-center gap-2">

                        <span

                          className={`h-3 w-3 rounded-full ${styles.dot}`}

                        />

                        <span

                          className={`text-sm font-bold ${styles.text}`}

                        >

                          {service.statusText}

                        </span>

                      </div>

                      <p className="ml-5 mt-1 text-sm text-white/55">

                        {service.statusDetail}

                      </p>

                    </div>

                  </div>

                </button>

              );

            })}

          </div>

          <p className="mt-4 text-sm leading-6 text-white/50">

            A service can still be requested when crews are not currently

            active. We&apos;ll help schedule it for a later time.

          </p>

        </section>

        <section className="mt-9 rounded-3xl border border-white/10 bg-[#071812]/90 p-6 backdrop-blur-xl">

          <div className="flex items-start gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-green-400/20 bg-green-500/10 text-3xl">

              📍

            </div>

            <div>

              <h2 className="text-xl font-bold">

                We proudly serve these areas

              </h2>

              <p className="mt-2 leading-7 text-white/70">

                North Everett, Marysville, Lake Stevens, Smokey Point, and

                Mukilteo.

              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                {serviceAreas.map((area) => (

                  <span

                    key={area}

                    className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/80"

                  >

                    {area}

                  </span>

                ))}

              </div>

              <p className="mt-4 text-sm text-green-400">

                View full service area →

              </p>

            </div>

          </div>

        </section>

        {selectedService && (

          <section

            id="request"

            className="mt-10 scroll-mt-28 rounded-3xl border border-green-400/20 bg-[#06140f]/95 p-6 backdrop-blur-xl md:p-8"

          >

            <div className="mb-6 flex items-start justify-between gap-4">

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-400">

                  Start Your Request

                </p>

                <h2 className="mt-2 text-3xl font-bold">

                  {selectedService.icon} {selectedService.name}

                </h2>

                <p className="mt-2 text-white/60">

                  No Relay account is required.

                </p>

              </div>

              <button

                type="button"

                onClick={() => setSelectedService(null)}

                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/60"

              >

                ✕

              </button>

            </div>

            <div className="mb-8 grid grid-cols-5 gap-2">

              {["Location", "Details", "Photos", "Contact", "Review"].map(

                (step, index) => (

                  <div key={step} className="text-center">

                    <div

                      className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold ${

                        index === 0

                          ? "border-green-400 bg-green-500/25 text-green-300"

                          : "border-white/15 bg-black/20 text-white/45"

                      }`}

                    >

                      {index + 1}

                    </div>

                    <p className="mt-2 hidden text-xs text-white/50 sm:block">

                      {step}

                    </p>

                  </div>

                )

              )}

            </div>

            <div className="space-y-5">

              <div>

                <label

                  htmlFor="area"

                  className="mb-2 block text-sm font-semibold"

                >

                  Where is the job located?

                </label>

                <select

                  id="area"

                  defaultValue=""

                  className="w-full rounded-2xl border border-white/10 bg-[#0c2017] px-4 py-4 text-white outline-none"

                >

                  <option value="" disabled>

                    Select your service area

                  </option>

                  {serviceAreas.map((area) => (

                    <option key={area} value={area}>

                      {area}

                    </option>

                  ))}

                </select>

              </div>

              <div>

                <label

                  htmlFor="address"

                  className="mb-2 block text-sm font-semibold"

                >

                  Service Address

                </label>

                <input

                  id="address"

                  type="text"

                  placeholder="Enter your service address"

                  className="w-full rounded-2xl border border-white/10 bg-[#0c2017] px-4 py-4 text-white placeholder:text-white/35 outline-none"

                />

              </div>

              <div>

                <label

                  htmlFor="details"

                  className="mb-2 block text-sm font-semibold"

                >

                  Tell us about the job

                </label>

                <textarea

                  id="details"

                  rows={4}

                  placeholder={`What do you need help with for ${selectedService.name.toLowerCase()}?`}

                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#0c2017] px-4 py-4 text-white placeholder:text-white/35 outline-none"

                />

              </div>

              <div>

                <label

                  htmlFor="photos"

                  className="mb-2 block text-sm font-semibold"

                >

                  Add Photos

                </label>

                <input

                  id="photos"

                  type="file"

                  accept="image/*"

                  multiple

                  className="w-full rounded-2xl border border-dashed border-white/15 bg-[#0c2017] px-4 py-5 text-sm text-white/60"

                />

                <p className="mt-2 text-xs text-white/45">

                  Photos help us understand the job and provide a more accurate

                  quote.

                </p>

              </div>

              <div className="border-t border-white/10 pt-6">

                <h3 className="text-xl font-bold">Contact Information</h3>

                <p className="mt-1 text-sm text-white/60">

                  Booking as a guest? Just enter your information so we can

                  contact you.

                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">

                  <div>

                    <label

                      htmlFor="name"

                      className="mb-2 block text-sm font-semibold"

                    >

                      Full Name

                    </label>

                    <input

                      id="name"

                      type="text"

                      placeholder="Your full name"

                      className="w-full rounded-2xl border border-white/10 bg-[#0c2017] px-4 py-4 text-white placeholder:text-white/35 outline-none"

                    />

                  </div>

                  <div>

                    <label

                      htmlFor="phone"

                      className="mb-2 block text-sm font-semibold"

                    >

                      Phone Number

                    </label>

                    <input

                      id="phone"

                      type="tel"

                      placeholder="(425) 555-0123"

                      className="w-full rounded-2xl border border-white/10 bg-[#0c2017] px-4 py-4 text-white placeholder:text-white/35 outline-none"

                    />

                  </div>

                  <div className="sm:col-span-2">

                    <label

                      htmlFor="email"

                      className="mb-2 block text-sm font-semibold"

                    >

                      Email Address

                    </label>

                    <input

                      id="email"

                      type="email"

                      placeholder="you@example.com"

                      className="w-full rounded-2xl border border-white/10 bg-[#0c2017] px-4 py-4 text-white placeholder:text-white/35 outline-none"

                    />

                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-green-400/20 bg-green-500/5 p-5">

                <div className="flex gap-3">

                  <span className="text-2xl">🎁</span>

                  <div>

                    <h3 className="font-bold text-green-300">

                      Create your account and save

                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/70">

                      Get <strong>$15 off this service</strong> and $15 off each

                      of your next 2 services.

                    </p>

                    <p className="mt-1 text-sm font-bold text-amber-300">

                      That&apos;s up to $45 in savings.

                    </p>

                    <Link

                      href="/signup"

                      className="mt-4 inline-flex rounded-xl border border-green-400/30 bg-green-500/10 px-4 py-2 text-sm font-bold text-green-300 transition hover:bg-green-500/20"

                    >

                      Create My Account

                    </Link>

                  </div>

                </div>

              </div>

              <button

                type="button"

                className="w-full rounded-2xl bg-gradient-to-b from-[#69ad79] to-[#33744c] px-6 py-4 text-lg font-bold text-white transition hover:brightness-110"

              >

                Continue & Get Quote

              </button>

              <p className="text-center text-xs text-white/40">

                You do not need an account to request a service.

              </p>

            </div>

          </section>

        )}

        <section className="mt-10 rounded-3xl border border-white/10 bg-[#071812]/90 p-6 backdrop-blur-xl">

          <h2 className="text-center text-2xl font-bold">How Relay Works</h2>

          <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            <div className="text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-green-400/25 bg-green-500/10 font-bold text-green-300">

                1

              </div>

              <h3 className="mt-3 font-bold">Choose a Service</h3>

              <p className="mt-2 text-sm leading-6 text-white/60">

                Pick the service you need help with.

              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-green-400/25 bg-green-500/10 font-bold text-green-300">

                2

              </div>

              <h3 className="mt-3 font-bold">Tell Us the Details</h3>

              <p className="mt-2 text-sm leading-6 text-white/60">

                Add your location, details, and photos.

              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-green-400/25 bg-green-500/10 font-bold text-green-300">

                3

              </div>

              <h3 className="mt-3 font-bold">Get a Quote</h3>

              <p className="mt-2 text-sm leading-6 text-white/60">

                We&apos;ll review your request and provide pricing.

              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-green-400/25 bg-green-500/10 font-bold text-green-300">

                4

              </div>

              <h3 className="mt-3 font-bold">We Get It Done</h3>

              <p className="mt-2 text-sm leading-6 text-white/60">

                Your crew arrives and handles the job.

              </p>

            </div>

          </div>

        </section>

        <section

          id="about"

          className="mt-10 rounded-3xl border border-white/10 bg-[#071812]/90 p-6 backdrop-blur-xl md:p-8"

        >

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-400">

            About Relay

          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-green-300">

            Built for our community.

            <br />

            Here to help.

          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-white/70">

            Relay is a local service platform built in Everett, Washington. We

            make it simple to get reliable local help for jobs that need a truck,

            hauling, moving, cleanup, or delivery.

          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-black/15 p-4">

              <h3 className="font-bold">📍 Local & Reliable</h3>

              <p className="mt-1 text-sm text-white/60">

                We live and work in the communities we serve.

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-black/15 p-4">

              <h3 className="font-bold">💵 Transparent Pricing</h3>

              <p className="mt-1 text-sm text-white/60">

                Clear quotes before the work begins.

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-black/15 p-4">

              <h3 className="font-bold">⏱️ On-Time Crews</h3>

              <p className="mt-1 text-sm text-white/60">

                We show up and get the job handled.

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-black/15 p-4">

              <h3 className="font-bold">🌲 PNW Built</h3>

              <p className="mt-1 text-sm text-white/60">

                Built locally in Everett, Washington.

              </p>

            </div>

          </div>

        </section>

        <div className="mt-8 text-center">

          <Link

            href="/"

            className="text-sm font-semibold text-green-400 hover:text-white"

          >

            ← Back Home

          </Link>

        </div>

      </div>

      <nav className="sticky bottom-0 z-40 border-t border-white/10 bg-[#06100c]/95 backdrop-blur-xl">

        <div className="mx-auto grid max-w-5xl grid-cols-4 px-3 py-3 text-center text-xs">

          <Link href="/" className="py-2 text-white/60">

            <div className="text-xl">⌂</div>

            <div className="mt-1">Home</div>

          </Link>

          <div className="py-2 text-green-400">

            <div className="text-xl">⌕</div>

            <div className="mt-1">Explore</div>

          </div>

          <a href="#about" className="py-2 text-white/60">

            <div className="text-xl">ⓘ</div>

            <div className="mt-1">About</div>

          </a>

          <Link href="/account" className="py-2 text-white/40">

            <div className="text-xl">♙</div>

            <div className="mt-1">Account</div>

          </Link>

        </div>

      </nav>

    </main>

  );

}
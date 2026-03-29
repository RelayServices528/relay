"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const services = [
  {
    name: "Junk Removal",
    description:
      "Fast local haul-away for furniture, appliances, garage cleanouts, yard debris, and general junk pickup.",
    includes: [
      "Furniture removal",
      "Mattress pickup",
      "Appliance haul-away",
      "Garage cleanouts",
      "Yard debris removal",
      "Hot tub removal",
    ],
    areas: ["Everett", "Marysville", "Lake Stevens", "Arlington", "Mukilteo"],
    pricing: ["Single item from $95", "Small load from $165", "Full load pricing available"],
    cta: "Request Junk Removal",
  },
  {
    name: "House Cleaning",
    description:
      "Reliable local cleaning for homes, apartments, move-outs, recurring cleans, and deep refreshes.",
    includes: [
      "Standard house cleaning",
      "Deep cleaning",
      "Move-in cleaning",
      "Move-out cleaning",
      "Apartment cleaning",
      "Kitchen and bathroom focus",
    ],
    areas: ["Everett", "Marysville", "Lynnwood", "Mukilteo", "Lake Stevens"],
    pricing: ["Basic clean from $120", "Deep clean from $220", "Custom quotes available"],
    cta: "Request House Cleaning",
  },
  {
    name: "Pressure Washing",
    description:
      "Exterior cleaning for driveways, siding, patios, fences, walkways, and entry areas.",
    includes: [
      "Driveway washing",
      "Patio cleaning",
      "Siding wash",
      "Fence washing",
      "Walkway cleaning",
      "Deck rinse-down",
    ],
    areas: ["Everett", "Mukilteo", "Marysville", "Lake Stevens", "Snohomish"],
    pricing: ["Driveways from $150", "Siding from $225", "Bundle pricing available"],
    cta: "Request Pressure Washing",
  },
  {
    name: "Moving Help",
    description:
      "Local labor help for loading, unloading, lifting, rearranging furniture, and small moves.",
    includes: [
      "Loading trucks",
      "Unloading trucks",
      "Furniture moving",
      "Apartment moves",
      "In-home rearranging",
      "Heavy item help",
    ],
    areas: ["Everett", "Marysville", "Lake Stevens", "Lynnwood", "Arlington"],
    pricing: ["2-hour help from $140", "Heavy item moves quoted", "Small move support available"],
    cta: "Request Moving Help",
  },
  {
    name: "Yard Cleanup",
    description:
      "Seasonal and one-time outdoor cleanup for leaves, branches, overgrowth, and debris removal.",
    includes: [
      "Leaf cleanup",
      "Branch pickup",
      "Weed and overgrowth cleanup",
      "Storm debris cleanup",
      "General yard cleanup",
      "Bagged waste haul-away",
    ],
    areas: ["Everett", "Lake Stevens", "Marysville", "Arlington", "Snohomish"],
    pricing: ["Cleanup visits from $110", "Larger yards custom quoted", "Debris haul-away available"],
    cta: "Request Yard Cleanup",
  },
  {
    name: "Handyman",
    description:
      "General help for small household fixes, light installs, assembly, and property touch-ups.",
    includes: [
      "Furniture assembly",
      "TV mounting",
      "Light fixture swaps",
      "Shelf installs",
      "Minor repairs",
      "Punch-list tasks",
    ],
    areas: ["Everett", "Marysville", "Lynnwood", "Mukilteo", "Lake Stevens"],
    pricing: ["Small jobs from $95", "Hourly options available", "Multi-task visits available"],
    cta: "Request Handyman Help",
  },
  {
    name: "Painting",
    description:
      "Interior and exterior painting support for touch-ups, walls, trim, fences, and small projects.",
    includes: [
      "Interior walls",
      "Trim painting",
      "Touch-ups",
      "Fence painting",
      "Small room repaints",
      "Prep and masking",
    ],
    areas: ["Everett", "Marysville", "Lake Stevens", "Mukilteo", "Snohomish"],
    pricing: ["Touch-ups from $125", "Room painting quoted", "Exterior estimates available"],
    cta: "Request Painting",
  },
  {
    name: "Gutter Cleaning",
    description:
      "Safe local gutter cleanout for homes needing debris removal, flow checks, and seasonal maintenance.",
    includes: [
      "Gutter debris removal",
      "Downspout clearing",
      "Seasonal cleanouts",
      "Roof edge cleanup",
      "Basic flow check",
      "Before/after photos",
    ],
    areas: ["Everett", "Mukilteo", "Marysville", "Lake Stevens", "Lynnwood"],
    pricing: ["Single-story from $135", "Multi-story quoted", "Seasonal service available"],
    cta: "Request Gutter Cleaning",
  },
  {
    name: "Pest Control",
    description:
      "Local pest support for general treatment plans, inspections, and recurring service options.",
    includes: [
      "General pest treatment",
      "Exterior barrier service",
      "Rodent inspection",
      "Spider treatment",
      "Ant treatment",
      "Recurring service plans",
    ],
    areas: ["Everett", "Marysville", "Lake Stevens", "Lynnwood", "Mukilteo"],
    pricing: ["Initial visits from $139", "Recurring plans available", "Inspection pricing varies"],
    cta: "Request Pest Control",
  },
];

const pros = [
  {
    name: "Everett Junk Pros",
    service: "Junk Removal",
    rating: "4.9",
    jobs: "240+ jobs",
    area: "Everett • 4 mi away",
    price: "From $95",
  },
  {
    name: "North Sound Clean Co.",
    service: "House Cleaning",
    rating: "4.8",
    jobs: "180+ jobs",
    area: "Marysville • 6 mi away",
    price: "From $120",
  },
  {
    name: "Cascade Wash & Restore",
    service: "Pressure Washing",
    rating: "4.9",
    jobs: "130+ jobs",
    area: "Mukilteo • 9 mi away",
    price: "From $150",
  },
  {
    name: "Sound Move Assist",
    service: "Moving Help",
    rating: "4.7",
    jobs: "110+ jobs",
    area: "Everett • 5 mi away",
    price: "From $140",
  },
  {
    name: "Lake Stevens Yard Crew",
    service: "Yard Cleanup",
    rating: "4.7",
    jobs: "95+ jobs",
    area: "Lake Stevens • 8 mi away",
    price: "From $110",
  },
  {
    name: "Evergreen Fix-It",
    service: "Handyman",
    rating: "4.8",
    jobs: "150+ jobs",
    area: "Lynnwood • 10 mi away",
    price: "From $95",
  },
  {
    name: "Northwest Paint Detail",
    service: "Painting",
    rating: "4.8",
    jobs: "120+ jobs",
    area: "Snohomish • 11 mi away",
    price: "From $125",
  },
  {
    name: "Rainline Gutter Co.",
    service: "Gutter Cleaning",
    rating: "4.9",
    jobs: "140+ jobs",
    area: "Mukilteo • 7 mi away",
    price: "From $135",
  },
  {
    name: "Cascade Pest Defense",
    service: "Pest Control",
    rating: "4.8",
    jobs: "170+ jobs",
    area: "Everett • 3 mi away",
    price: "From $139",
  },
];

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Junk Removal");

  const filteredServices = useMemo(() => {
    return services.filter((service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const activeService =
    services.find((service) => service.name === selectedCategory) ?? services[0];

  const filteredPros = pros.filter((pro) => {
    const matchesCategory = pro.service === activeService.name;
    const matchesSearch =
      pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.area.toLowerCase().includes(searchTerm.toLowerCase());

    if (!searchTerm.trim()) return matchesCategory;
    return matchesCategory && matchesSearch;
  });

  return (
    <main
      className="min-h-screen text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(4, 12, 9, 0.86), rgba(4, 12, 9, 0.95)), url('/images/explore-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen px-6 py-8 md:px-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-xl">
          Explore Local Services
        </h1>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for a service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 rounded-2xl bg-[#122820]/90 border border-[#2b5747] text-white placeholder:text-white/55 outline-none"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
          {filteredServices.map((service) => {
            const isActive = selectedCategory === service.name;

            return (
              <button
                key={service.name}
                type="button"
                onClick={() => setSelectedCategory(service.name)}
                className={`p-4 rounded-2xl text-center transition border ${
                  isActive
                    ? "bg-[#214b3d] border-[#67b38f] shadow-[0_0_0_1px_rgba(103,179,143,0.35)]"
                    : "bg-[#122820]/90 border-[#1f3d32] hover:bg-[#173328]"
                }`}
              >
                <span className="text-base md:text-lg font-medium">{service.name}</span>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 mb-10">
          <section className="bg-[#0f211b]/88 border border-[#234336] rounded-3xl p-6 md:p-8 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/55 mb-2">
                  Selected Service
                </p>
                <h2 className="text-3xl font-bold">{activeService.name}</h2>
              </div>

              <span className="text-xs md:text-sm px-3 py-2 rounded-full bg-[#173328] border border-[#2c5647] text-white/80">
                Everett Area
              </span>
            </div>

            <p className="text-white/75 leading-7 mb-6">
              {activeService.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">What’s Included</h3>
                <ul className="space-y-2 text-white/78">
                  {activeService.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Service Areas</h3>
                <ul className="space-y-2 text-white/78 mb-6">
                  {activeService.areas.map((area) => (
                    <li key={area}>• {area}</li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold mb-3">Starting Pricing</h3>
                <ul className="space-y-2 text-white/78">
                  {activeService.pricing.map((price) => (
                    <li key={price}>• {price}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="px-5 py-3 rounded-xl bg-[#214b3d] hover:bg-[#295745] transition font-semibold">
                {activeService.cta}
              </button>
              <button className="px-5 py-3 rounded-xl bg-transparent border border-[#325b4c] hover:bg-[#173328] transition">
                View Local Pros
              </button>
            </div>
          </section>

          <aside className="bg-[#0f211b]/88 border border-[#234336] rounded-3xl p-6 backdrop-blur-sm flex flex-col justify-between min-h-[280px]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/55 mb-2">
                Map Preview
              </p>
              <h3 className="text-2xl font-bold mb-3">Everett Area Map</h3>
              <p className="text-white/72 leading-7">
                Live map pins, zip-based discovery, and nearby pro matching can go here next.
                For now, this panel keeps the Explore layout filled while the service browser works.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-[#315847] bg-[#122820]/70 min-h-[180px] flex items-center justify-center text-white/55 text-center px-6">
              Interactive Map Coming Soon
            </div>
          </aside>
        </div>

        <section className="mb-10">
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/55 mb-2">
                Local Providers
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                {activeService.name} Pros
              </h2>
            </div>

            <span className="text-sm text-white/65">
              {filteredPros.length} result{filteredPros.length === 1 ? "" : "s"}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredPros.length > 0 ? (
              filteredPros.map((pro) => (
                <div
                  key={pro.name}
                  className="bg-[#0f211b]/88 border border-[#234336] p-6 rounded-3xl backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{pro.name}</h3>
                      <p className="text-sm text-white/65 mt-1">{pro.service}</p>
                    </div>

                    <span className="text-xs px-3 py-2 rounded-full bg-[#173328] border border-[#2c5647] text-white/80">
                      Verified
                    </span>
                  </div>

                  <div className="mt-4 text-sm text-white/78">
                    ⭐ {pro.rating} • {pro.jobs}
                  </div>

                  <div className="text-sm text-white/65 mt-1">{pro.area}</div>

                  <div className="mt-3 font-semibold text-lg">{pro.price}</div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button className="bg-[#214b3d] hover:bg-[#295745] px-4 py-2 rounded-xl transition font-medium">
                      Request Quote
                    </button>
                    <button className="border border-[#325b4c] hover:bg-[#173328] px-4 py-2 rounded-xl transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="md:col-span-2 bg-[#0f211b]/88 border border-[#234336] p-6 rounded-3xl text-white/72">
                No matching pros found for this search yet.
              </div>
            )}
          </div>
        </section>

        <div className="mt-10">
          <Link href="/" className="text-[#8fd3b3] hover:text-white transition">
            ← Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
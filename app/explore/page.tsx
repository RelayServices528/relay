import Link from "next/link";

const categories = [
  "Junk Removal",
  "House Cleaning",
  "Pressure Washing",
  "Moving Help",
  "Yard Cleanup",
  "Handyman",
  "Painting",
  "Gutter Cleaning",
  "Pest Control",
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
    name: "Lake Stevens Yard Crew",
    service: "Yard Cleanup",
    rating: "4.7",
    jobs: "95+ jobs",
    area: "Lake Stevens • 8 mi away",
    price: "From $110",
  },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[#07110d] text-white p-8">

      <h1 className="text-4xl font-bold mb-6">
        Explore Local Services
      </h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for a service..."
          className="w-full p-4 rounded-lg bg-[#122820] border border-[#1f3d32]"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-[#122820] p-4 rounded-xl text-center"
          >
            {category}
          </div>
        ))}
      </div>

      <div className="bg-[#122820] rounded-xl h-[350px] flex items-center justify-center mb-10">
        Everett Area Map (Coming Soon)
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {pros.map((pro) => (
          <div
            key={pro.name}
            className="bg-[#122820] p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold">{pro.name}</h3>
            <p className="text-sm opacity-70">{pro.service}</p>

            <div className="mt-3 text-sm">
              ⭐ {pro.rating} • {pro.jobs}
            </div>

            <div className="text-sm opacity-70">
              {pro.area}
            </div>

            <div className="mt-2 font-semibold">
              {pro.price}
            </div>

            <button className="mt-4 bg-green-500 px-4 py-2 rounded">
              Request Quote
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/" className="text-green-400">
          ← Back Home
        </Link>
      </div>

    </main>
  );
}

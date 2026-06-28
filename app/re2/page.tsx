"use client";

import { useState } from "react";
import BackButton from "@/components/BackButton";
import GuideCard from "@/components/GuideCard";
import Navbar from "@/components/Navbar";

const guides = [
  {
    title: "Safe Combinations",
    description: "All safe codes and rewards.",
    href: "/re2/safe-combinations",
  },
  {
    title: "Locker Codes",
    description: "Every locker code in the game.",
    href: "/re2/locker-codes",
  },
  {
    title: "Medallion Puzzle",
    description: "How to solve every medallion puzzle.",
    href: "/re2/medallion-puzzle",
  },
  {
    title: "Chess Plug Puzzle",
    description: "Complete chess plug solution.",
    href: "/re2/chess-plug-puzzle",
  },
  {
    title: "Portable Safe Solutions",
    description: "Unlock every portable safe.",
    href: "/re2/portable-safe-solutions",
  },
];

export default function RE2Page() {
  const [search, setSearch] = useState("");

const filteredGuides = guides.filter((guide) =>
  guide.title.toLowerCase().includes(search.toLowerCase())
);
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
        <Navbar />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <BackButton href="/">Back Home</BackButton>

        <h1 className="mt-6 text-5xl font-bold">
          Resident Evil 2 Remake
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          Complete puzzle guides, locker codes, walkthroughs and collectible
          locations for Resident Evil 2 Remake.
        </p>

        <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search RE2 guides..."
            className="mt-10 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500"
/>

{filteredGuides.length > 0 ? (
  <div className="mt-12 grid gap-6">
    {filteredGuides.map((guide) => (
      <GuideCard
        key={guide.href}
        title={guide.title}
        description={guide.description}
        href={guide.href}
      />
    ))}
  </div>
) : (
  <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center">
    <h2 className="text-2xl font-bold">
      No guides found
    </h2>

    <p className="mt-3 text-zinc-400">
      Try searching for &quot;safe&quot;, &quot;locker&quot;, or &quot;puzzle&quot;.
    </p>
  </div>
)}
      </div>
    </main>
  );
}

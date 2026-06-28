import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resident Evil 2 Safe Combinations | Survival Horror Vault",
  description:
    "All Resident Evil 2 Remake safe combinations, rewards, locations, and scenario notes in one clean guide.",
};

import GuideLayout from "@/components/GuideLayout";
import QuickFacts from "@/components/QuickFacts";
import GuideCard from "@/components/GuideCard";

const safes = [
{
  name: "West Office Safe",
  area: "Police Station",
  location: "West Office",
  combination: "9L • 15R • 7L",
  reward: "Hip Pouch",
  scenario: "Same across all scenarios",
  difficulty: "Easy",
  notes: "Found in the West Office. Useful early-game upgrade.",
},

{
  name: "Waiting Room Safe",
  area: "Police Station",
  location: "Waiting Room",
  combination: "6L • 2R • 11L",
  reward: "Muzzle Brake",
  scenario: "Same across all scenarios",
  difficulty: "Easy",
  notes: "Located upstairs in the waiting room.",
},

{
  name: "Sewer Safe",
  area: "Sewers",
  location: "Treatment Pool Room",
  combination: "2L • 12R • 8L",
  reward: "Shotgun Stock (W-870)",
  scenario: "Same across all scenarios",
  difficulty: "Easy",
  notes: "Found later in the sewers section.",
},
];

export default function SafeCombinationsPage() {
  return (
  <GuideLayout
    game="Resident Evil 2 Remake"
    title="Safe Combinations"
    backHref="/re2"
    backText="Back to Resident Evil 2"
  >
<QuickFacts
  facts={[
    { label: "Area", value: "Police Station & Sewers" },
    { label: "Safes", value: "3" },
    { label: "Scenario", value: "All" },
    { label: "Difficulty", value: "Easy" },
  ]}
/>
    <div className="space-y-6">
      {safes.map((safe) => (
        <section
          key={safe.name}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
        >
<h2 className="text-2xl font-bold">{safe.name}</h2>

<div className="mt-6 grid gap-5 md:grid-cols-2">
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
      Combination
    </p>
    <p className="mt-3 rounded-lg border border-red-900 bg-zinc-950 px-4 py-4 text-center text-3xl font-black tracking-widest text-red-400">
      {safe.combination}
    </p>
  </div>

  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
      Reward
    </p>
    <p className="mt-2 text-lg text-white">
      {safe.reward}
    </p>
  </div>

  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
      Location
    </p>
    <p className="mt-2 text-lg text-white">
      {safe.location}
    </p>
  </div>

  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
      Scenario
    </p>
    <p className="mt-2 text-lg text-white">
      {safe.scenario}
    </p>
  </div>
</div>

<p className="mt-6 border-t border-zinc-800 pt-5 text-zinc-400">
  {safe.notes}
</p>
</section>
      ))}
    </div>

    <section className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
  <h2 className="text-2xl font-bold">
    Scenario Differences
  </h2>

  <p className="mt-4 text-zinc-400">
    Safe combinations are identical across all four Resident Evil 2 scenarios.
  </p>

  <div className="mt-6 grid gap-3 md:grid-cols-4">
    {["Leon A", "Claire A", "Leon B", "Claire B"].map((scenario) => (
      <div
        key={scenario}
        className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-center text-sm font-semibold text-zinc-200"
      >
        ✓ {scenario}
      </div>
    ))}
  </div>
</section>
<section className="mt-10">
  <h2 className="text-2xl font-bold">
    Continue Exploring
  </h2>

  <div className="mt-6 grid gap-6 md:grid-cols-3">
    <GuideCard
      title="Locker Codes"
      description="Every locker code and reward."
      href="/re2/locker-codes"
    />

    <GuideCard
      title="Portable Safe Solutions"
      description="Unlock every portable safe."
      href="/re2/portable-safe-solutions"
    />

    <GuideCard
      title="Medallion Puzzle"
      description="Complete every medallion puzzle."
      href="/re2/medallion-puzzle"
    />
  </div>
</section>
  </GuideLayout>
    );
}
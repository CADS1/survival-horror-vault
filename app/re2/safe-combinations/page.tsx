import GuideLayout from "@/components/GuideLayout";

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
    <p className="mt-2 text-2xl font-bold text-red-400">
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
  </GuideLayout>
    );
}
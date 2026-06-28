import type { Metadata } from "next";

import GuideLayout from "@/components/GuideLayout";
import GuideCard from "@/components/GuideCard";
import QuickFacts from "@/components/QuickFacts";

export const metadata: Metadata = {
  title: "Resident Evil 2 Medallion Puzzle | Survival Horror Vault",
  description:
    "Complete solutions for every medallion puzzle in Resident Evil 2 Remake.",
};

const medallions = [
  {
    name: "Lion Statue",
    symbols: "Lion • Branch • Bird",
    location: "Main Hall",
    reward: "Lion Medallion",
    scenario: "Same across all scenarios",
    notes:
      "Available immediately after entering the Main Hall.",
  },
  {
    name: "Unicorn Statue",
    symbols: "Fish • Scorpion • Water Jug",
    location: "Lounge",
    reward: "Unicorn Medallion",
    scenario: "Same across all scenarios",
    notes:
      "Located on the second floor near the Library.",
  },
  {
    name: "Maiden Statue",
    symbols: "Woman • Bow • Snake",
    location: "West Storage Room",
    reward: "Maiden Medallion",
    scenario: "Same across all scenarios",
    notes:
      "Requires the Detonator to access the statue.",
  },
];

export default function MedallionPuzzlePage() {
  return (
    <GuideLayout
      game="Resident Evil 2 Remake"
      title="Medallion Puzzle"
      backHref="/re2"
      backText="Back to Resident Evil 2"
    >
      <QuickFacts
        facts={[
          { label: "Area", value: "Police Station" },
          { label: "Puzzles", value: medallions.length.toString() },
          { label: "Scenario", value: "All" },
          { label: "Difficulty", value: "Easy" },
        ]}
      />

      <div className="space-y-6">
        {medallions.map((medallion) => (
          <section
            key={medallion.name}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h2 className="text-2xl font-bold">
              {medallion.name}
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Symbols
                </p>

                <p className="mt-3 rounded-lg border border-red-900 bg-zinc-950 px-4 py-4 text-center text-2xl font-black tracking-wide text-red-400">
                  {medallion.symbols}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Reward
                </p>

                <p className="mt-2 text-lg">
                  {medallion.reward}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Location
                </p>

                <p className="mt-2 text-lg">
                  {medallion.location}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Scenario
                </p>

                <p className="mt-2 text-lg">
                  {medallion.scenario}
                </p>
              </div>
            </div>

            <p className="mt-6 border-t border-zinc-800 pt-5 text-zinc-400">
              {medallion.notes}
            </p>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="text-2xl font-bold">
          Scenario Differences
        </h2>

        <p className="mt-4 text-zinc-400">
          Medallion puzzle solutions are identical across all four Resident Evil 2 scenarios.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">
          Continue Exploring
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <GuideCard
            title="Safe Combinations"
            description="Every safe combination and reward."
            href="/re2/safe-combinations"
          />

          <GuideCard
            title="Locker Codes"
            description="Every locker code and reward."
            href="/re2/locker-codes"
          />

          <GuideCard
            title="Chess Plug Puzzle"
            description="Complete the chess plug puzzle."
            href="/re2/chess-plug-puzzle"
          />
        </div>
      </section>
    </GuideLayout>
  );
}
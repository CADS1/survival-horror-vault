import type { Metadata } from "next";

import GuideLayout from "@/components/GuideLayout";
import GuideCard from "@/components/GuideCard";
import QuickFacts from "@/components/QuickFacts";

export const metadata: Metadata = {
  title: "Resident Evil 2 Portable Safe Solutions | Survival Horror Vault",
  description:
    "Portable Safe solutions, rewards and locations for Resident Evil 2 Remake.",
};

const safes = [
  {
    name: "Portable Safe 1",
    location: "2F Men's Locker Room",
    solution: "Randomised each playthrough",
    reward: "Spare Key",
    scenario: "Same mechanics in all scenarios",
    notes:
      "The button order is random. Match the lights in sequence to unlock it.",
  },
  {
    name: "Portable Safe 2",
    location: "Laundry Room",
    solution: "Randomised each playthrough",
    reward: "Spare Key",
    scenario: "Same mechanics in all scenarios",
    notes:
      "Every player receives a different button sequence, but the puzzle works the same way.",
  },
];

export default function PortableSafeSolutionsPage() {
  return (
    <GuideLayout
      game="Resident Evil 2 Remake"
      title="Portable Safe Solutions"
      backHref="/re2"
      backText="Back to Resident Evil 2"
    >
      <QuickFacts
        facts={[
          { label: "Area", value: "Police Station" },
          { label: "Portable Safes", value: safes.length.toString() },
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
            <h2 className="text-2xl font-bold">
              {safe.name}
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Solution
                </p>

                <p className="mt-3 rounded-lg border border-red-900 bg-zinc-950 px-4 py-4 text-center text-xl font-black text-red-400">
                  {safe.solution}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Reward
                </p>

                <p className="mt-2 text-lg">
                  {safe.reward}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Location
                </p>

                <p className="mt-2 text-lg">
                  {safe.location}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Scenario
                </p>

                <p className="mt-2 text-lg">
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
          The button order is random for every playthrough, but the puzzle mechanics are identical across all scenarios.
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
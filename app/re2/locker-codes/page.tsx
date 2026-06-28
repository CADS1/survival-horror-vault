import type { Metadata } from "next";

import GuideLayout from "@/components/GuideLayout";
import GuideCard from "@/components/GuideCard";
import QuickFacts from "@/components/QuickFacts";

export const metadata: Metadata = {
  title: "Resident Evil 2 Locker Codes | Survival Horror Vault",
  description:
    "All Resident Evil 2 Remake locker codes, rewards and locations.",
};

const lockers = [
  {
    name: "3F Locker",
    location: "Police Station - 3F",
    code: "DCM",
    reward: "Magnum Ammo / SMG Ammo",
    scenario: "Same across all scenarios",
    notes: "Located in the third-floor locker room.",
  },
  {
    name: "2F Shower Room Locker",
    location: "Police Station - Shower Room",
    code: "CAP",
    reward: "Shotgun Shells / Flame Rounds",
    scenario: "Same across all scenarios",
    notes: "Found inside the shower room.",
  },
];

export default function LockerCodesPage() {
  return (
    <GuideLayout
      game="Resident Evil 2 Remake"
      title="Locker Codes"
      backHref="/re2"
      backText="Back to Resident Evil 2"
    >
      <QuickFacts
        facts={[
          { label: "Area", value: "Police Station" },
          { label: "Lockers", value: lockers.length.toString() },
          { label: "Scenario", value: "All" },
          { label: "Difficulty", value: "Easy" },
        ]}
      />

      <div className="space-y-6">
        {lockers.map((locker) => (
          <section
            key={locker.name}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h2 className="text-2xl font-bold">
              {locker.name}
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Code
                </p>

                <p className="mt-3 rounded-lg border border-red-900 bg-zinc-950 px-4 py-4 text-center text-3xl font-black tracking-widest text-red-400">
                  {locker.code}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Reward
                </p>

                <p className="mt-2 text-lg">
                  {locker.reward}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Location
                </p>

                <p className="mt-2 text-lg">
                  {locker.location}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Scenario
                </p>

                <p className="mt-2 text-lg">
                  {locker.scenario}
                </p>
              </div>
            </div>

            <p className="mt-6 border-t border-zinc-800 pt-5 text-zinc-400">
              {locker.notes}
            </p>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="text-2xl font-bold">
          Scenario Differences
        </h2>

        <p className="mt-4 text-zinc-400">
          Locker codes are identical across all four Resident Evil 2 scenarios.
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
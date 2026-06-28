import type { Metadata } from "next";

import GuideLayout from "@/components/GuideLayout";
import GuideCard from "@/components/GuideCard";
import QuickFacts from "@/components/QuickFacts";

export const metadata: Metadata = {
  title: "Resident Evil 2 Chess Plug Puzzle | Survival Horror Vault",
  description:
    "Complete chess plug puzzle solution for Resident Evil 2 Remake, including plug placements and notes.",
};

const plugs = [
  {
    name: "King Plug",
    location: "Supplies Storage Room",
    placement: "Wall socket near the Queen Plug",
    reward: "Required for Sewer puzzle",
    scenario: "Same puzzle structure across scenarios",
    notes:
      "Found in the Supplies Storage Room. Used with the Queen Plug to access the weapon reward and progress.",
  },
  {
    name: "Queen Plug",
    location: "Supplies Storage Room",
    placement: "Wall socket near the King Plug",
    reward: "Required for Sewer puzzle",
    scenario: "Same puzzle structure across scenarios",
    notes:
      "Works together with the King Plug. You need both to leave the storage room with the correct items.",
  },
  {
    name: "Rook Plug",
    location: "Workroom Lift Area",
    placement: "Rook socket",
    reward: "Required for Sewer puzzle",
    scenario: "Same puzzle structure across scenarios",
    notes:
      "Collected after reaching the Workroom area. Needed for the final plug board.",
  },
  {
    name: "Bishop Plug",
    location: "Monitor Room",
    placement: "Bishop socket",
    reward: "Required for Sewer puzzle",
    scenario: "Same puzzle structure across scenarios",
    notes:
      "Already involved in the Monitor Room plug puzzle.",
  },
  {
    name: "Knight Plug",
    location: "Monitor Room",
    placement: "Knight socket",
    reward: "Required for Sewer puzzle",
    scenario: "Same puzzle structure across scenarios",
    notes:
      "Used as part of the final plug arrangement in the Monitor Room.",
  },
  {
    name: "Pawn Plug",
    location: "Monitor Room",
    placement: "Pawn socket",
    reward: "Required for Sewer puzzle",
    scenario: "Same puzzle structure across scenarios",
    notes:
      "One of the plugs already placed in the Monitor Room puzzle setup.",
  },
];

export default function ChessPlugPuzzlePage() {
  return (
    <GuideLayout
      game="Resident Evil 2 Remake"
      title="Chess Plug Puzzle"
      backHref="/re2"
      backText="Back to Resident Evil 2"
    >
      <QuickFacts
        facts={[
          { label: "Area", value: "Sewers" },
          { label: "Plugs", value: plugs.length.toString() },
          { label: "Scenario", value: "All" },
          { label: "Difficulty", value: "Medium" },
        ]}
      />

      <section className="mb-10 rounded-xl border border-red-900 bg-zinc-900 p-6">
        <h2 className="text-2xl font-bold">Quick Answer</h2>

        <p className="mt-4 text-zinc-400">
          Place each chess plug into its matching socket in the Monitor Room.
          Use the clues in the room to confirm the final arrangement.
        </p>
      </section>

      <div className="space-y-6">
        {plugs.map((plug) => (
          <section
            key={plug.name}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h2 className="text-2xl font-bold">{plug.name}</h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Placement
                </p>

                <p className="mt-3 rounded-lg border border-red-900 bg-zinc-950 px-4 py-4 text-center text-xl font-black text-red-400">
                  {plug.placement}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Purpose
                </p>

                <p className="mt-2 text-lg">{plug.reward}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Location
                </p>

                <p className="mt-2 text-lg">{plug.location}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Scenario
                </p>

                <p className="mt-2 text-lg">{plug.scenario}</p>
              </div>
            </div>

            <p className="mt-6 border-t border-zinc-800 pt-5 text-zinc-400">
              {plug.notes}
            </p>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="text-2xl font-bold">Scenario Differences</h2>

        <p className="mt-4 text-zinc-400">
          The chess plug puzzle appears in the sewer section and follows the
          same overall structure across scenarios. We may expand this section
          later if we confirm exact arrangement differences.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Continue Exploring</h2>

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
            title="Portable Safe Solutions"
            description="Unlock every portable safe."
            href="/re2/portable-safe-solutions"
          />
        </div>
      </section>
    </GuideLayout>
  );
}
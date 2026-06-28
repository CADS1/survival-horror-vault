type Fact = {
  label: string;
  value: string;
};

type QuickFactsProps = {
  facts: Fact[];
};

export default function QuickFacts({ facts }: QuickFactsProps) {
  return (
    <section className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-bold">Quick Facts</h2>

      <div className="mt-6 grid gap-5 md:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {fact.label}
            </p>

            <p className="mt-2 text-white">
              {fact.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
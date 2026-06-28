import Navbar from "@/components/Navbar";
const games = [
  {
    title: "Resident Evil 2 Remake",
    description: "Puzzle guides, locker codes, walkthroughs and collectibles.",
    href: "/re2",
    status: "Available",
  },
  {
    title: "Resident Evil 3 Remake",
    description: "Guides coming soon.",
    href: "/re3",
    status: "Coming soon",
  },
  {
    title: "Resident Evil 4 Remake",
    description: "Guides coming soon",
    href: "/re4",
    status: "Coming soon",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
       <Navbar />
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Survival Horror Vault
          </p>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Clean guides for survival horror games.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Fast, spoiler-conscious walkthroughs, puzzle solutions and
            collectible checklists for Resident Evil and beyond.
          </p>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-zinc-500">
            Search guides coming soon...
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Games</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {games.map((game) => (
            <a
              key={game.href}
              href={game.href}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-red-500 hover:bg-zinc-800"
            >
              <div className="mb-6 inline-flex rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wide text-zinc-400">
                {game.status}
              </div>

              <h3 className="text-2xl font-bold group-hover:text-red-400">
                {game.title}
              </h3>

              <p className="mt-3 text-zinc-400">
                {game.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.25em] text-red-500">
          Survival Horror Vault
        </Link>

        <nav className="flex gap-6 text-sm text-zinc-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/re2" className="hover:text-white">RE2</Link>
          <Link href="/re3" className="hover:text-white">RE3</Link>
          <Link href="/re4" className="hover:text-white">RE4</Link>
        </nav>
      </div>
    </header>
  );
}
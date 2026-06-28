import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

type GuideLayoutProps = {
  game: string;
  title: string;
  backHref: string;
  backText: string;
  children: React.ReactNode;
};

export default function GuideLayout({
  game,
  title,
  backHref,
  backText,
  children,
}: GuideLayoutProps) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <BackButton href={backHref}>{backText}</BackButton>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
          {game}
        </p>

        <h1 className="mt-3 text-5xl font-black tracking-tight">
          {title}
        </h1>

        <div className="mt-12">
          {children}
        </div>
      </div>
    </main>
  );
}
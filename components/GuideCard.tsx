import Link from "next/link";

type GuideCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function GuideCard({ title, description, href }: GuideCardProps) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-red-500 hover:bg-zinc-800"
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-zinc-400">{description}</p>
    </Link>
  );
}
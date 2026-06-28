import Link from "next/link";

type BackButtonProps = {
  href: string;
  children: string;
};

export default function BackButton({ href, children }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex text-red-500 transition hover:text-red-400"
    >
      ← {children}
    </Link>
  );
}
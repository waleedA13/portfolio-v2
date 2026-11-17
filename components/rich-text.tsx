import Link from "next/link";
import { asset } from "@/lib/asset";

const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\)|\*[^*]+\*)/g;

export function Rich({ text, accent = false }: { text: string; accent?: boolean }) {
  const parts = text.split(pattern);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className={accent ? "font-semibold text-accent" : "font-semibold text-ink"}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={index} className="rounded bg-raised px-1 py-0.5 font-mono text-[0.85em]">
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const external = link[2].startsWith("http");
          const className = "underline decoration-rule underline-offset-4 hover:text-accent hover:decoration-current";
          if (external) {
            return (
              <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer" className={className}>
                {link[1]}
              </a>
            );
          }
          return (
            <Link key={index} href={link[2]} className={className}>
              {link[1]}
            </Link>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export function OutLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("http") || href.endsWith(".pdf")) {
    return (
      <a href={href.startsWith("http") ? href : asset(href)} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

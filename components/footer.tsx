import { site } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 text-sm text-faint sm:px-8">
      <p>© {new Date().getFullYear()} {site.name}</p>
      <p>San Diego</p>
    </footer>
  );
}

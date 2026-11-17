export type Block =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul" | "ol"; items: string[] }
  | {
      kind: "table";
      headers: string[];
      rows: string[][];
      highlight?: number;
      note?: string;
    }
  | {
      kind: "figure";
      images: { src: string; alt: string; width: number; height: number }[];
      caption: string;
      plate?: boolean;
    };

export type Section = { id: string; title: string; blocks: Block[] };

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  highlight: string;
  context: string;
  meta: string;
  lede: string;
  dates: string;
  team: string;
  tags: string[];
  image: { src: string; alt: string; width: number; height: number };
  links: ProjectLink[];
  facts: { label: string; text: string }[];
  sections: Section[];
  pagerNote: string;
};

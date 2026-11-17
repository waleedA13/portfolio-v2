import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/blocks";
import { Header } from "@/components/header";
import { OutLink, Rich } from "@/components/rich-text";
import { getProject, neighbors, projects } from "@/data/projects";
import { asset } from "@/lib/asset";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = getProject(slug);
    if (!project) return {};
    return {
      title: project.title,
      description: project.summary,
      openGraph: { images: [project.image.src] },
    };
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = neighbors(slug);

  return (
    <main id="content" className="mx-auto max-w-3xl px-5 py-6 sm:px-8">
      <Header />
      <article className="pt-8">
        <a href={asset("/#projects")} className="inline-flex min-h-11 items-center text-sm font-medium text-accent">
          All projects
        </a>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-accent">{project.meta}</p>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-5 text-xl leading-snug text-soft">{project.lede}</p>

        <dl className="mt-8 grid gap-3 sm:grid-cols-2">
          {project.facts.map((fact) => (
            <div key={fact.label} className="rounded-2xl bg-raised p-4">
              <dt className="text-xs font-semibold uppercase tracking-wider text-accent">{fact.label}</dt>
              <dd className="mt-1 text-sm leading-6"><Rich text={fact.text} /></dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium">
          {project.links.map((link) => (
            <OutLink key={link.href} href={link.href} className="text-accent">
              {link.label}
            </OutLink>
          ))}
        </p>

        <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-2">
          {project.sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="inline-flex min-h-10 items-center rounded-full bg-raised px-3 text-sm text-soft hover:text-accent">
              {section.title}
            </a>
          ))}
        </nav>

        {project.sections.map((section) => (
          <section key={section.id} id={section.id} className="mt-12">
            <h2 className="mb-4 font-display text-2xl">{section.title}</h2>
            <Blocks blocks={section.blocks} />
          </section>
        ))}
      </article>

      <nav aria-label="More projects" className="mt-14 grid gap-3 sm:grid-cols-2">
        {prev ? (
          <a href={asset(`/projects/${prev.slug}/`)} className="rounded-2xl bg-raised p-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-faint">Previous</span>
            <span className="mt-1 block font-display text-xl">{prev.title}</span>
          </a>
        ) : <span />}
        {next ? (
          <a href={asset(`/projects/${next.slug}/`)} className="rounded-2xl bg-raised p-4 sm:text-right">
            <span className="text-xs font-semibold uppercase tracking-wider text-faint">Next</span>
            <span className="mt-1 block font-display text-xl">{next.title}</span>
          </a>
        ) : (
          <a href={asset("/#projects")} className="rounded-2xl bg-raised p-4 sm:text-right">
            <span className="text-xs font-semibold uppercase tracking-wider text-faint">Back</span>
            <span className="mt-1 block font-display text-xl">All projects</span>
          </a>
        )}
      </nav>
    </main>
  );
}

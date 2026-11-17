import { about, certification, education, jobs, site, skills } from "@/data/profile";
import { projects } from "@/data/projects";
import { asset } from "@/lib/asset";
import { OutLink, Rich } from "@/components/rich-text";
import { Header } from "@/components/header";

const jumps = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <main id="content" className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="pt-6">
        <Header />
      </div>

      <section id="top" className="grid items-end gap-8 border-b border-rule py-12 lg:grid-cols-[1fr_auto] lg:py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">CS · UC San Diego · Warren College</p>
          <h1 className="mt-3 font-display text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl">
            Waleed<br />Alghaithi
          </h1>
          <p className="mt-5 max-w-xl text-xl text-soft sm:text-2xl">{site.headline}</p>
          <div id="about" className="mt-6 max-w-xl space-y-3 text-soft">
            {about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {jumps.map((jump) => (
              <li key={jump.href}>
                <a href={jump.href} className="inline-flex min-h-11 items-center rounded-full bg-raised px-4 text-sm shadow-sm hover:text-accent">
                  {jump.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <figure className="flex items-center gap-4 lg:flex-col lg:items-end">
          <img src={asset("/profile.webp")} alt="Waleed Alghaithi" width={419} height={419} className="h-28 w-28 rounded-2xl object-cover lg:h-40 lg:w-40" />
          <figcaption className="text-sm text-faint">San Diego, 2026</figcaption>
        </figure>
      </section>

      <section id="projects" className="py-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-medium">Projects</h2>
          <p className="text-sm text-faint">{projects.length} write-ups</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.slug} className={`flex flex-col overflow-hidden rounded-3xl bg-raised shadow-sm ${index < 2 ? "md:min-h-full" : ""}`}>
              <a href={asset(`/projects/${project.slug}/`)}>
                <img
                  src={asset(project.image.src)}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  className="aspect-[16/10] w-full bg-white object-cover object-left-top"
                />
              </a>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{project.context}</p>
                <h3 className="mt-2 font-display text-2xl leading-tight">
                  <a href={asset(`/projects/${project.slug}/`)} className="hover:text-accent">{project.title}</a>
                </h3>
                <p className="mt-2 text-soft">{project.summary}</p>
                <p className="mt-3 text-ink"><Rich text={project.highlight} accent /></p>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tools">
                  {project.tags.slice(0, 5).map((tag) => (
                    <li key={tag} className="rounded-full bg-paper px-2.5 py-1 text-xs text-soft">{tag}</li>
                  ))}
                  {project.tags.length > 5 ? (
                    <li className="rounded-full bg-paper px-2.5 py-1 text-xs text-soft">
                      <span aria-hidden="true">+{project.tags.length - 5}</span>
                      <span className="sr-only">{project.tags.slice(5).join(", ")}</span>
                    </li>
                  ) : null}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5 text-sm font-medium">
                  {project.links.map((link) => (
                    <OutLink key={link.href} href={link.href} className="text-soft hover:text-accent">
                      {link.label}
                    </OutLink>
                  ))}
                  <a href={asset(`/projects/${project.slug}/`)} className="ml-auto text-accent">
                    Read details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-t border-rule py-14">
        <h2 className="font-display text-3xl font-medium">Experience</h2>
        <ol className="mt-8 space-y-0">
          {jobs.map((job) => (
            <li key={job.role} className="grid gap-3 border-b border-rule py-6 md:grid-cols-[11rem_minmax(0,1fr)]">
              <p className="text-sm font-medium text-accent">{job.dates}</p>
              <div>
                <h3 className="font-display text-xl">{job.role}</h3>
                <p className="text-sm text-faint">{job.org} · {job.tools}</p>
                <ul className="mt-3 space-y-2 text-soft">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="pl-4 before:mr-2 before:text-accent before:content-['–']">{bullet}</li>
                  ))}
                </ul>
                {job.writeup ? (
                  <a href={asset(job.writeup.href)} className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-accent">
                    {job.writeup.label}
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="skills" className="border-t border-rule py-14">
        <h2 className="font-display text-3xl font-medium">Skills</h2>
        <div className="mt-8 space-y-6">
          {skills.map((group) => (
            <div key={group.label}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-faint">{group.label}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.split(", ").map((item) => (
                  <li key={item} className="rounded-full bg-raised px-3 py-1.5 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="grid gap-5 border-t border-rule py-14 lg:grid-cols-3">
        <h2 className="font-display text-3xl font-medium lg:col-span-3">Education</h2>
        {education.map((item) => (
          <article key={item.degree} className="rounded-3xl bg-raised p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">{item.dates}</p>
            <h3 className="mt-2 font-display text-xl leading-tight">{item.degree}</h3>
            <p className="mt-2 text-sm text-soft">{item.school}</p>
            <p className="mt-1 text-sm text-faint">{item.detail}</p>
            {item.coursework ? <p className="mt-3 text-sm leading-6 text-soft">{item.coursework}</p> : null}
          </article>
        ))}
        <article className="flex items-center gap-4 rounded-3xl bg-raised p-5">
          <img src={asset(certification.image)} alt="" width={72} height={72} className="h-16 w-16" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">{certification.dates}</p>
            <h3 className="mt-1 font-display text-xl leading-tight">{certification.name}</h3>
            <p className="text-sm text-soft">{certification.issuer}</p>
          </div>
        </article>
      </section>

      <section id="activity" className="border-t border-rule py-14">
        <h2 className="font-display text-3xl font-medium">GitHub</h2>
        <p className="mt-2 text-sm text-faint">Contributions over the past year.</p>
        <img src={`https://ghchart.rshah.org/0c7a62/${site.githubUser}`} alt={`${site.githubUser}'s GitHub contribution chart`} width={663} height={104} className="chart-light mt-5 w-full" />
        <img src={`https://ghchart.rshah.org/3dbea0/${site.githubUser}`} alt="" width={663} height={104} className="chart-dark mt-5 w-full" />
      </section>

      <section id="contact" className="mb-6 rounded-3xl bg-footer px-6 py-10 text-footer-ink sm:px-10">
        <h2 className="font-display text-4xl font-medium leading-tight">Email me.</h2>
        <a href={`mailto:${site.email}`} className="mt-3 inline-block text-lg text-footer-accent">{site.email}</a>
        <ul className="mt-6 flex flex-wrap gap-x-5 text-sm">
          <li><a className="hover:text-footer-accent" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="hover:text-footer-accent" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="hover:text-footer-accent" href={asset(site.resume)}>Resume</a></li>
        </ul>
      </section>
    </main>
  );
}

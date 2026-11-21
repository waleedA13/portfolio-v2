import type { Project } from "./types";

export const projects: Project[] = [
  {
    "slug": "theracheck",
    "title": "TheraCheck",
    "summary": "A therapist finder that ranks Cigna directory listings using public evidence about insurance, new-patient availability, and license status.",
    "highlight": "Collected **300** listings across **6** California cities, with source links and a reason behind each ranking.",
    "context": "SanD Hacks Fall 2026 · Nov 2026",
    "meta": "SanD Hacks Fall 2026 · Team of 3",
    "lede": "Calling down an insurer's therapist directory often means reaching outdated listings. TheraCheck puts listings with evidence of availability first and shows the pages behind each result. We built it at SanD Hacks Fall 2026.",
    "dates": "November 14–15, 2026",
    "team": "Team of 3",
    "tags": [
      "TypeScript",
      "Next.js",
      "Bright Data",
      "Gemini",
      "Neon Postgres",
      "ElevenLabs",
      "Vitest",
      "Playwright"
    ],
    "image": {
      "src": "/img/projects/thumb-theracheck.webp",
      "alt": "TheraCheck results for Cigna in Fresno, showing ranked therapist listings and the evidence behind them.",
      "width": 960,
      "height": 540
    },
    "links": [
      {
        "label": "Live app",
        "href": "https://theracheck.vercel.app"
      },
      {
        "label": "Code",
        "href": "https://github.com/waleedA13/TheraCheck"
      }
    ],
    "facts": [
      {
        "label": "Result",
        "text": "A deployed demo with 300 Cigna listings across 6 California cities. The six-city collection run found web evidence for 104 listings; a repeat directory run inserted no duplicates."
      },
      {
        "label": "What I did",
        "text": "I set up the app, database contract, and scoring, then built the Bright Data directory and evidence collectors, NPI lookups, California license matching, and the queued re-check worker."
      },
      {
        "label": "Stack",
        "text": "Next.js 16, React 19, TypeScript, Bright Data, Gemini, Neon Postgres, ElevenLabs, Vitest, Playwright, Vercel"
      },
      {
        "label": "Team",
        "text": "Waleed Alghaithi, Aditya Jadhav, and Tracy (Qinggin) · November 14–15, 2026"
      }
    ],
    "pagerNote": "300 listings across 6 California cities",
    "sections": [
      {
        "id": "the-problem",
        "title": "The problem",
        "blocks": [
          {
            "kind": "p",
            "text": "An insurance directory can say a therapist is in-network even when the therapist has moved, stopped taking the plan, or closed to new patients. We wanted people to see which listings have supporting evidence before spending time calling."
          }
        ]
      },
      {
        "id": "what-it-does",
        "title": "What it does",
        "blocks": [
          {
            "kind": "ul",
            "items": [
              "Search Cigna listings in six California cities and filter by specialty, language, and video sessions.",
              "Read a one-line explanation, follow evidence links, and check California license status and posted fees.",
              "Open a listing to request a fresh evidence check, follow a booking link, or call the office yourself.",
              "Use the voice assistant to demonstrate an insurance and availability check with a teammate's phone, or share the top results without an account."
            ]
          },
          {
            "kind": "figure",
            "plate": true,
            "images": [
              {
                "src": "/img/projects/thumb-theracheck.webp",
                "alt": "TheraCheck ranks the top three Cigna listings in Fresno, with reasons, source counts, and posted prices.",
                "width": 960,
                "height": 540
              }
            ],
            "caption": "The live demo shows the plan checked, the check date, and the evidence behind each ranked listing."
          }
        ]
      },
      {
        "id": "how-it-works",
        "title": "How it works",
        "blocks": [
          {
            "kind": "p",
            "text": "Bright Data reads the insurer directory and searches for each therapist's own pages. Gemini extracts structured facts about whether the therapist is still practicing, lists the insurer, and accepts new patients. A deterministic score ranks those facts; missing evidence stays unknown. Listings, evidence, verdicts, and call results live in Neon Postgres."
          },
          {
            "kind": "p",
            "text": "Collection and verification run outside page requests. The web app reads stored results and queues re-checks. A worker claims a queued job with PostgreSQL row locking, collects new evidence, and runs verification. If no new evidence is found, it keeps the previous result and marks the job failed rather than presenting stale evidence as a fresh check."
          }
        ]
      },
      {
        "id": "my-part",
        "title": "My part",
        "blocks": [
          {
            "kind": "ul",
            "items": [
              "**App and data contract.** Set up the Next.js app, shared types, database schema, scoring function, and fixtures.",
              "**Directory collection.** Built the Bright Data client and Cigna collector with NPI Registry lookups, then ran it for 50 listings in each of six cities. Added city to the listing identity so a clinician with offices in several cities keeps a separate listing in each.",
              "**Evidence collection.** Built the page collector with checks that a page belongs to the same person, using name, location, and board-confirmed license numbers. The six-city run found evidence for 104 of 300 listings.",
              "**License matching.** Matched California DCA public licensee files using NPI or profile license numbers, with a name-and-location fallback. The recorded run matched 75 of 300 listings; I also hand-checked five records on the DCA site.",
              "**Re-checks.** Built the queued worker, stale-job cleanup, and the failure path that preserves the last result when a new run finds nothing. I also wrote the final project scope and README."
            ]
          }
        ]
      },
      {
        "id": "limits",
        "title": "Limits",
        "blocks": [
          {
            "kind": "p",
            "text": "The ranking has not been validated against real offices. Public pages may be incomplete or old, and a high score does not confirm insurance coverage or an open appointment. At submission, 45 of 50 San Diego listings were Unclear. Assistant calls are staged to allow-listed teammates' phones; they do not verify real offices. The demo covers Cigna in California."
          }
        ]
      }
    ]
  },
  {
    slug: "bayt-qareeb",
    title: "Bayt Qareeb",
    summary:
      "A map-first room and roommate finder for Muslim college students, open only to verified .edu students.",
    highlight:
      "Prize winner, **Track 1**. We built and deployed it in one day with **80** listings across **7** California campuses.",
    context: "MTC x Replit x Manara West Buildathon · Nov 2026",
    meta: "Prize winner, MTC x Replit x Manara West Buildathon (Track 1)",
    lede: "A map-first room and roommate finder for Muslim college students, open only to verified .edu students. We built it on November 6, 2026, for Track 1, Manara Network: Bridging Campuses.",
    dates: "November 6, 2026",
    team: "Team of 3",
    tags: ["Next.js", "TypeScript", "Mapbox GL", "Tailwind", "Prisma", "Supabase", "Clerk", "Claude"],
    image: {
      src: "/img/projects/thumb-bayt-qareeb.webp",
      alt: "Bayt Qareeb map with price pins and a listing card.",
      width: 800,
      height: 500,
    },
    links: [
      { label: "Live app", href: "https://manara-west.vercel.app" },
      { label: "Devpost", href: "https://devpost.com/software/bayt-qareeb" },
      { label: "Demo", href: "https://youtu.be/dgyNZPzzhyE" },
      { label: "Code", href: "https://github.com/waleedA13/Bayt-Qareeb" },
    ],
    facts: [
      { label: "Result", text: "Prize winner. The app is live on Vercel with 80 seed listings across 7 campuses." },
      {
        label: "What I did",
        text: "I set up the first working MVP, then built the map UI and design: price pins, the search bar and filter pills, the price slider, place search, and photo tours. I also hardened CI, fixed the Vercel build, and wrote the README.",
      },
      {
        label: "Stack",
        text: "Next.js 14, React, TypeScript, Tailwind, Mapbox GL / react-map-gl, Prisma, Supabase Postgres, Clerk, Claude Haiku, GitHub Actions, Vercel",
      },
    ],
    pagerNote: "Prize winner · 80 listings across 7 campuses",
    sections: [
      {
        id: "the-problem",
        title: "The problem",
        blocks: [
          {
            kind: "p",
            text: "Moving to a new campus means finding housing in an unfamiliar city, often with strangers and usually through scattered group chats. Transfer students have it worse. Muslim students also need details that generic listing sites don't show: brothers-only or sisters-only houses, a halal kitchen, roommates with a similar routine.",
          },
        ],
      },
      {
        id: "what-it-does",
        title: "What it does",
        blocks: [
          {
            kind: "ol",
            items: [
              "Sign up with a .edu email. Clerk sends a one-time code that proves you own the inbox.",
              "The map opens on your campus: UCLA, USC, UC Riverside, UCSD, UC Irvine, UC Davis, or Stanford.",
              "Filter by household (brothers, sisters, or mixed), home type, price range, private room, halal kitchen, and pets, or type a sentence and let the AI search set the filters.",
              "Open a room to see a photo tour, your share of the rent, utilities, and house rules, then contact the lister.",
              "Post, edit, and delete up to 5 of your own listings.",
            ],
          },
          {
            kind: "figure",
            plate: true,
            images: [
              {
                src: "/img/projects/bayt-landing.webp",
                alt: "Bayt Qareeb landing page: a headline about moving for school, an example search for a sisters' room near UCI with a halal kitchen, and a sample listing card on a map",
                width: 800,
                height: 500,
              },
            ],
            caption: "The landing page uses static sample cards, so signed-out visitors see no real listings.",
          },
        ],
      },
      {
        id: "how-it-works",
        title: "How it works",
        blocks: [
          {
            kind: "p",
            text: "The AI search only fills in filters. The server sends your sentence to Claude Haiku with a fixed JSON schema (max rent, household, room type, home type, pets, halal kitchen, place). A validator drops unknown keys and bad values, and the app applies the result with the same logic the filter pills use. The model never sees listings and can't write to the database.",
          },
          {
            kind: "p",
            text: "The .edu rule is enforced on the server. Middleware requires sign-in for every page except the landing and auth pages, and every page and API route also checks that the verified primary email ends in .edu. Anyone else gets a \"Students only\" screen, and the APIs return 403. Edits are owner-only in the database query, coordinates come from server-side geocoding, and row-level security is on for the listing and user tables.",
          },
        ],
      },
      {
        id: "my-part",
        title: "My part",
        blocks: [
          { kind: "p", text: "From my commits (25 of 61):" },
          {
            kind: "ul",
            items: [
              "**The first MVP.** The initial commit: a Next.js map UI, the Prisma schema and seed data, the listings API, the first .edu signup check, a data validator, and the CI workflow.",
              "**The map.** Mapbox with zoom-based price pins and an accessible mobile sidebar, then a full-bleed muted map with one floating search bar (type to filter, Enter for AI search), pill dropdowns, and a floating results panel.",
              "**Layout and controls.** A split layout from iPad up, compact phone cards with 44px touch targets, a faster listings API, a min/max price slider, full-sentence searches that wait for Enter instead of filtering to zero, and place search that flies the map to a city or campus through Mapbox geocoding.",
              "**Listings.** Streets map, photo tours (4 photos per listing plus a location slide), home types (house, apartment, condo, townhouse) with a filter wired into the AI search, and photos and home types for the NorCal listings. I also made the new SVG logo and favicon.",
              "**CI and deploys.** Least-privilege permissions, SHA-pinned actions, npm ci, audit, secret scan, CodeQL, and Dependabot. I fixed the Vercel build (fonts through the Google Fonts stylesheet, the Mapbox token name) and added a fallback to seed listings when there's no database.",
              "**Docs.** The README for judges (live demo, test sign-in steps, setup), the screenshots, and the MIT license.",
            ],
          },
          {
            kind: "p",
            text: "Teammates moved sign-in to Supabase and Clerk with the server-side .edu gate, and built the natural-language search, the post-a-room pages and API, the 80 seed listings, and the landing page.",
          },
        ],
      },
      {
        id: "open-items",
        title: "Open items",
        blocks: [
          {
            kind: "ul",
            items: [
              "Privacy: rooms that students post show the full matched address and a satellite view of the block. The fix (an approximate pin, no house number, no satellite image) is first on the roadmap.",
              "Geocoding and AI search have no rate limit.",
              "The 5-listing cap is a count-then-insert check, so two requests at the same moment could both get through.",
              "Posting a room only accepts Southern California addresses.",
              "Listing photos are stock images, not the actual buildings.",
            ],
          },
          {
            kind: "p",
            text: "We haven't tested the full sign-up flow on the live site, the \"Students only\" screen, or the AI search from the UI in a real signed-in browser session.",
          },
        ],
      },
      {
        id: "next",
        title: "Next",
        blocks: [
          {
            kind: "ul",
            items: [
              "Rate limits on geocoding, AI search, and posting.",
              "Campuses beyond California.",
              "Saved rooms and in-app messaging.",
              "Real photo uploads by listers.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "coverage-keeper",
    title: "Coverage Keeper",
    summary:
      "A web app that reads a Medicaid letter, in English or Spanish, and tells you what it asks for, when it's due, and who to call.",
    highlight:
      "Prize winner. On **24** held-out test letters it got every deadline right, and its eligibility guardrail fired **0** times.",
    context: "Solix AI Hackathon 2026",
    meta: "Prize winner, Solix AI Hackathon 2026, AI in Healthcare track",
    lede: "Take a photo of a Medicaid renewal letter and Coverage Keeper tells you what the state wants, when it's due, and who to call. We built, tested, and deployed the first version in one day, then kept going: it now reads multi-page letters from 5 states, in English or Spanish.",
    dates: "October 2026",
    team: "Team of 3",
    tags: ["TypeScript", "Next.js", "Claude", "zod", "Playwright", "Vercel"],
    image: {
      src: "/img/projects/thumb-coverage.webp",
      alt: "Coverage Keeper result screen for a Medicaid renewal letter.",
      width: 960,
      height: 600,
    },
    links: [
      { label: "Live app", href: "https://coverage-keeper.vercel.app" },
      { label: "Devpost", href: "https://devpost.com/software/enrollguard" },
      { label: "Code", href: "https://github.com/AdityaJadhav17/coverage-keeper" },
    ],
    facts: [
      {
        label: "Result",
        text: "Prize winner, AI in Healthcare track. On the latest eval (24 held-out test letters, mean of 3 runs) it got every deadline right, named the sending state every time, and the eligibility guardrail never fired.",
      },
      {
        label: "What I did",
        text: "I built the doctor's note, rate-limited the paid model endpoint, fixed a prompt bug that marked readable letters as low confidence, and fixed flaky accessibility tests. After the hackathon I wrote the legal research for a public launch: federal law plus all 5 states, and 10 follow-up issues.",
      },
      {
        label: "Stack",
        text: "Next.js 16, React 19, TypeScript, Claude API, zod, Vitest, Playwright, axe-core, GitHub Actions, Vercel",
      },
    ],
    pagerNote: "24 of 24 deadlines on held-out letters",
    sections: [
      {
        id: "the-problem",
        title: "The problem",
        blocks: [
          {
            kind: "p",
            text: "When states restarted Medicaid renewals after the pandemic, most people who lost coverage lost it over paperwork. [KFF](https://www.kff.org/medicaid/issue-brief/medicaid-enrollment-and-unwinding-tracker/) counted 69% of disenrollments as procedural. Starting January 1, 2027, a 2025 federal law adds work, volunteering, or school requirements for most expansion adults, which means more letters and more deadlines to miss.",
          },
          {
            kind: "p",
            text: "We designed for one user: a delivery driver with a prepaid Android phone who can't sit on hold during a shift.",
          },
        ],
      },
      {
        id: "what-it-does",
        title: "What it does",
        blocks: [
          {
            kind: "ol",
            items: [
              "You photograph or upload the letter: up to 10 photos or one PDF. The browser shrinks photos before they upload.",
              "You get a plain-language summary, the deadline with days left (and the exact line it was read from), a checklist of documents, and a phone number.",
              "For Washington, Oregon, California, Nevada, and Arizona letters, you answer yes/no questions from that state's published exemption list and see which exemptions *may* apply, with a link to the state page.",
              "If you report a health condition, you can draft a note to your doctor, then copy or share it.",
            ],
          },
          {
            kind: "p",
            text: "A call button stays on every screen. If the app can't read the letter, it says so and shows the number from the letter or OHP's line.",
          },
          {
            kind: "figure",
            images: [
              {
                src: "/img/projects/coverage-result.webp",
                alt: "Result screen showing what the letter says, a deadline of Feb 15, 2027 with 5 days left, and the exact sentence the deadline came from.",
                width: 600,
                height: 1006,
              },
              {
                src: "/img/projects/coverage-doctor-note.webp",
                alt: "Doctor note screen showing an editable letter to a doctor about Oregon Health Plan work rules, with a Copy button.",
                width: 600,
                height: 1006,
              },
            ],
            caption:
              "Left: the result screen quotes the line the deadline came from, so you can check it against the paper. Right: the doctor's note, which I built.",
          },
        ],
      },
      {
        id: "how-it-works",
        title: "How it works",
        blocks: [
          {
            kind: "p",
            text: "The model only reads. Claude (`claude-opus-5-5`) returns one fixed JSON shape: notice type, summary, deadline, the quoted deadline line, required action, documents, phone, and confidence. A zod schema validates it. A refusal, a 30-second timeout, or bad output all turn into an \"unsure\" result instead of a guess. Days-left math runs in Pacific time.",
          },
          { kind: "p", text: "A model that makes up an eligibility answer could tell someone they're covered when they aren't. So the app never decides eligibility, and we enforced that three ways:" },
          {
            kind: "ul",
            items: [
              "The schema has no eligibility field, so the model has nowhere to put a verdict.",
              "Exemption screening never calls the model. Oregon's rules live in a JSON file, each with its source URL and the date we checked it.",
              "A guardrail runs on every output string and swaps anything like \"you are eligible\" for a safe fallback and the OHP number. A safety test suite with prompt-injection fixtures blocks the merge if it fails.",
            ],
          },
          {
            kind: "p",
            text: "The server reads each photo in memory and then drops it. There's no database, no accounts, no analytics, and the logs never include letter content.",
          },
        ],
      },
      {
        id: "my-part",
        title: "My part",
        blocks: [
          {
            kind: "ul",
            items: [
              "**Legal research for launch.** After the hackathon I researched which laws could apply before a public launch: federal law plus Washington, Oregon, California, Nevada, and Arizona, 14 topics each (unauthorized practice of law, health-data privacy, breach notice, AI rules, government affiliation, immigration advice, accessibility, and more). Every claim cites a primary source with the date we retrieved it, and anything we could not confirm is marked. I merged the actions into a launch checklist and a ranked list of questions for a lawyer, and filed 10 issues for product changes (#44 to #53), such as an AI label on every result and a guardrail against immigration advice. It is research for a lawyer to review, not legal advice.",
              "**The doctor's note.** A template draft that fills in from your screening answers, with copy and share buttons and a clear message if copying fails. I added it to both the safety suite and the Playwright end-to-end tests.",
              "**Rate limiting.** The letter-reading endpoint is public and every call costs money, so I added a per-IP limit of 10 requests a minute on `/api/read`. Over the limit, it returns a 429 that still shows the OHP phone number, so nobody hits a dead end. Requests that declare a body over the size cap get a 413 before the server reads them. The counter lives in memory on each server instance and tracks at most 10,000 clients, so it stops one client looping but isn't a global limit. The platform firewall and the API spend limit do that job. I added unit tests for the limiter and an integration test on the route.",
              "**A prompt fix.** Our first prompt marked readable letters as \"low confidence\" whenever they had no deadline. Many real notices have no deadline, so I rewrote that rule (prompt v2): a missing deadline no longer lowers confidence, but several possible deadlines still do. The test-set numbers stayed the same, so the fix removed a wrong warning without breaking anything.",
              "**Accessibility tests.** The axe checks were flaky because they ran before fade-in animations finished. I made them wait.",
              "**Wording.** I made the exemption questions say they use Oregon's rules.",
            ],
          },
        ],
      },
      {
        id: "how-we-tested-it",
        title: "How we tested it",
        blocks: [
          {
            kind: "p",
            text: "We had no real letters, and we weren't going to use anyone's. CI rejects any eval file without a `.gov` source. At the hackathon the set was 13 images. It has since grown to 33 labeled letters: public sample notices from Oregon, Washington, California, Vermont, and Nevada, phone photos, full multi-page PDFs, and the agencies' own Spanish versions. 24 are held out for testing, including 4 Nevada letters that no prompt work saw.",
          },
          {
            kind: "table",
            headers: ["Test split, prompt v7, 24 letters (mean of 3 runs)", "Result"],
            rows: [
              ["Deadline correct (printed or none)", "24 of 24"],
              ["Sending state identified", "24 of 24"],
              ["Notice type correct", "22 of 24"],
              ["Required action correct", "22 of 24"],
              ["Eligibility guardrail hits", "0"],
            ],
          },
          {
            kind: "p",
            text: "The set is still small and mostly Vermont, because Oregon publishes only three sample notices and Arizona has published none. Document scores on full PDFs are lower (recall 0.76, precision 0.59). The phone photos show a screen, not paper. The README lists every failure by name.",
          },
          {
            kind: "p",
            text: "Every pull request runs secret scanning, a dependency audit, a license check, lint and type checks, unit and safety tests, integration tests, a build, and Playwright tests with axe on an iPhone 15 and a Pixel 7 profile. Merges to `main` deploy to Vercel.",
          },
        ],
      },
      {
        id: "next",
        title: "Next",
        blocks: [
          {
            kind: "p",
            text: "Before a public launch: a lawyer's review of the legal research, the 10 product changes it called for (an AI label on every result, a line saying we aren't part of the state, a guardrail against immigration advice, and more), a fluent review of the Spanish, tests on phone photos of paper, and a pilot with a community health worker program.",
          },
        ],
      },
    ],
  },
  {
    slug: "tiny-infer",
    title: "Tiny Infer",
    summary:
      "A transformer inference engine in plain C that runs a small language model on a CPU, with no PyTorch and no BLAS.",
    highlight:
      "**188** tokens/s on 2 threads, up from **121** on 1, with matmul split across cores by a pthreads pool.",
    context: "Solo side project · Oct 2026 – now",
    meta: "Solo side project, Oct 2026 to now",
    lede: "A transformer inference engine in plain C, built to run a 15M-parameter TinyStories-format model on a CPU, one token at a time, with no PyTorch and no BLAS.",
    dates: "October 2026 – present",
    team: "Solo",
    tags: ["C", "pthreads", "Make", "GitHub Actions"],
    image: {
      src: "/img/projects/thumb-tiny-infer.svg",
      alt: "Bar chart of Tiny Infer: 121 tokens per second on 1 thread and 188 on 2.",
      width: 960,
      height: 600,
    },
    links: [{ label: "Code", href: "https://github.com/waleedA13/tiny-infer" }],
    facts: [
      {
        label: "Result",
        text: "121 tokens/s on 1 thread, 188 on 2, with about 91% of the time in matmul. Measured on a 2-vCPU cloud VM with synthetic weights. No numbers on real weights yet.",
      },
      {
        label: "What I did",
        text: "Solo. I wrote all of it: the forward pass, BPE encoder, pthreads matmul, int8 path, benchmark mode, self-tests, and CI. File formats follow llama2.c.",
      },
      { label: "Team", text: "Solo" },
      { label: "Stack", text: "C, pthreads, Make, GitHub Actions, AddressSanitizer, UBSan" },
    ],
    pagerNote: "188 vs 121 tokens/s on 2 vs 1 threads",
    sections: [
      {
        id: "why-build-it",
        title: "Why build it",
        blocks: [
          {
            kind: "p",
            text: "I use models all day in research, but PyTorch hides the part I wanted to understand: the work the CPU does to produce the next word. In C, I write every matmul and manage every buffer and thread myself.",
          },
          {
            kind: "p",
            text: "It's also a test bed for an idea from my research. A Mixture-of-Experts model only uses a few experts per token. If you can guess which ones come next, you can load their weights early and keep the CPU busy. The last item on the roadmap is a toy MoE layer to try that.",
          },
        ],
      },
      {
        id: "one-token-start-to-finish",
        title: "One token, start to finish",
        blocks: [
          {
            kind: "ol",
            items: [
              "Look up the token's embedding.",
              "For each layer: RMSNorm, then three matmuls for the query, key, and value vectors.",
              "Rotate the query and key by the token's position (RoPE), and write the key and value into the KV cache so later tokens don't recompute them.",
              "Score the query against every cached key, softmax the scores, and mix the cached values.",
              "Project back, add the residual, then RMSNorm and the SwiGLU feed-forward, and add the residual again.",
              "After the last layer, one more matmul turns the hidden state into a score for every word in the vocabulary, and the sampler picks one (greedy, or with temperature).",
            ],
          },
          {
            kind: "p",
            text: "I `mmap` the model file, so startup is close to instant and the OS pages weights in as they're used. Prompts go through a BPE encoder I wrote against the llama2.c tokenizer format.",
          },
        ],
      },
      {
        id: "where-the-time-goes",
        title: "Where the time goes",
        blocks: [
          {
            kind: "p",
            text: "`make bench` builds a separate `-O3 -march=native -ffast-math` binary (so I can't time a debug build by accident), generates 200 tokens with greedy sampling, throws away a warm-up run, and reports the median of 5. The tokenizer and printing stay off the clock. It splits each token's time into matmul, attention, sampling, and everything else.",
          },
          {
            kind: "p",
            text: "The first measurement ran at 666 tokens per second with 96.5% of the time inside `matmul()`, but that skeleton only had the embedding and the output layer, so it mostly confirmed the timers work.",
          },
          {
            kind: "p",
            text: "Both runs used a 2-vCPU cloud VM (Intel Xeon, 2.8 GHz) and synthetic weights shaped like stories15M. The weight values don't affect speed, but these aren't laptop numbers or the real model. Results with the full forward pass:",
          },
          {
            kind: "table",
            headers: ["Threads", "Tokens/s (median of 5)", "Time in matmul"],
            rows: [
              ["1", "121", "94%"],
              ["2", "188", "91%"],
            ],
            note: "fp32, 200 tokens greedy from BOS. Shared VMs are noisy: the 2-thread min and max in one run were 173 and 204.",
          },
          { kind: "p", text: "Matmul still takes most of the time with attention in, so SIMD matmul is next." },
        ],
      },
      {
        id: "making-matmul-faster",
        title: "Making matmul faster",
        blocks: [
          { kind: "h3", text: "Threads" },
          {
            kind: "p",
            text: "A pthreads pool splits the output rows of each matmul across cores. Rows are independent, so threads never write to the same memory. `-j` sets the thread count. By default it uses every core.",
          },
          { kind: "h3", text: "int8 weights" },
          {
            kind: "p",
            text: "`--int8` stores every weight as an 8-bit integer in groups of 32, with one float scale per group (`scale = max|w| / 127`). Activations get the same treatment just before each matmul, so the inner loop multiplies int8 by int8 and adds up in int32. That's about a quarter of the memory traffic of fp32. `--compare` runs both versions on the same prompt and prints the numeric error, the speed of each, and both stories side by side, so I can see when quantization changes the output.",
          },
        ],
      },
      {
        id: "testing-and-ci",
        title: "Testing and CI",
        blocks: [
          {
            kind: "p",
            text: "Every kernel (matmul, softmax, RMSNorm, the thread pool, int8) has its own self-test, run by `make test`. `make debug` rebuilds with the address and undefined-behavior sanitizers on.",
          },
          {
            kind: "p",
            text: "Two real bugs so far. The loader checks that the weights end exactly where the file does, and that check showed I was skipping twice too many floats for llama2.c's unused legacy RoPE tables, so real checkpoints would have been rejected. And the macOS build broke because macOS hides the constant I use to count cores (`_SC_NPROCESSORS_ONLN`) when only `_POSIX_C_SOURCE` is set. Defining `_DARWIN_C_SOURCE` fixed it.",
          },
          {
            kind: "p",
            text: "One GitHub Actions workflow chains four jobs: `build-and-test → sanitizers → package → release`. Pushes and pull requests run the first two on Linux and macOS. A version tag runs all four jobs and attaches Linux and macOS binaries to a GitHub release, though I haven't tagged one yet.",
          },
        ],
      },
      {
        id: "next",
        title: "Next",
        blocks: [
          {
            kind: "ul",
            items: [
              "Run the benchmark on a laptop with the real stories15M weights for each version: naive, threaded, SIMD, int8.",
              "Hand-written NEON and AVX2 matmul kernels.",
              "A toy MoE layer with expert prefetching.",
            ],
          },
          {
            kind: "p",
            text: "The checkpoint and tokenizer formats follow [llama2.c](https://github.com/karpathy/llama2.c), which I used as a reference for file layout.",
          },
        ],
      },
    ],
  },
  {
    slug: "lego-spatial-reasoning",
    title: "Tracing a 30B vision model's LEGO puzzle failures",
    summary:
      "Why Qwen3-VL-30B gets LEGO spatial puzzles wrong, traced through which of its experts fire on each question.",
    highlight:
      "Logged routing for all **6,144** experts. The best fix (**23.0% → 26.5%**) didn't hold up on the holdout set, so we published a negative result.",
    context: "McNair Scholars research · UC San Diego · 2026",
    meta: "McNair research, Jan to Aug 2026",
    lede: "Qwen3-VL-30B answers about a quarter of LEGO spatial-reasoning questions correctly. We logged which of its 6,144 experts fired on every question, then switched off the layers most tied to wrong answers. It didn't fix the model.",
    dates: "January – August 2026",
    team: "Faculty-mentored. I wrote and ran the experiment code.",
    tags: ["Python", "PyTorch", "Qwen3-VL", "RunPod", "NumPy", "Pandas", "scikit-learn"],
    image: {
      src: "/img/projects/thumb-lego.webp",
      alt: "A LEGO assembly used in the spatial-reasoning benchmark.",
      width: 960,
      height: 600,
    },
    links: [
      { label: "Paper", href: "/papers/mcnair-lego.pdf" },
      { label: "Code", href: "https://github.com/waleedA13/McNairProgramResearch" },
    ],
    facts: [
      {
        label: "Result",
        text: "Test accuracy rose from 23.0% to 26.5% (p = 0.25, no better than switching off random layers), and holdout fell from 29.0% to 27.0%.",
      },
      {
        label: "What I did",
        text: "I wrote and ran the experiment code: the benchmark runs, the routing logger (forward hooks on every router), layer scoring, clustering, ablations, and the stats. My scripts are in `scripts/`; `code/LEGO-Puzzles` is the benchmark's own eval framework.",
      },
      { label: "Role", text: "Research Engineer, McNair Scholars Program" },
      {
        label: "Stack",
        text: "Python, PyTorch, Hugging Face Transformers, RunPod A100s, NumPy, Pandas, scikit-learn",
      },
    ],
    pagerNote: "Test 23.0% to 26.5% (p = 0.25), holdout 29.0% to 27.0%",
    sections: [
      {
        id: "the-question",
        title: "The question",
        blocks: [
          {
            kind: "p",
            text: "Qwen3-VL-30B is a Mixture-of-Experts model. It has 48 decoder layers, each with 128 small \"expert\" networks, and a router picks 8 of them for every token. So every token leaves a record of exactly which experts handled it.",
          },
          {
            kind: "p",
            text: "If the model's spatial mistakes come from a few layers or experts, their routing should look different on questions it gets wrong. Find them, switch them off, and accuracy should go up with no retraining.",
          },
          {
            kind: "p",
            text: "We tested this on LEGOLite, a 400-question slice of the [LEGO-Puzzles](https://arxiv.org/abs/2503.19990) benchmark: 100 questions each on height, position, rotation, and assembly order.",
          },
        ],
      },
      {
        id: "getting-the-data",
        title: "Getting the data",
        blocks: [
          {
            kind: "p",
            text: "Through the Fireworks API the model scored 31% overall, between Gemini-2.0-Flash (44.25%) and GPT-4o Mini (13.75%). Ordering first came back as 0%. That was a bug in our grading harness, not the model. Re-graded by exact match, it was 14%.",
          },
          {
            kind: "p",
            text: "A first check on one 2,768-token question showed image and text tokens use different experts: their top 10 sets shared zero members. That meant image tokens had their own experts, so there was something visual to trace.",
          },
          {
            kind: "p",
            text: "On one A100 with the model in 4-bit NF4, we logged all 48 × 128 routing decisions for all 400 questions, twice. The two runs agreed within one point (24.25% and 25.25%).",
          },
        ],
      },
      {
        id: "finding-suspects",
        title: "Finding suspects",
        blocks: [
          {
            kind: "p",
            text: "We split the 400 questions into a 200-question test set and a 200-question holdout set, balanced by category. Everything in this section only touched the test set.",
          },
          {
            kind: "p",
            text: "For every expert we computed a z-score: how many of the questions it fired on were answered wrong, compared with what the model's overall error rate predicts. The formula shrinks experts that only fire a few times, so a rare expert can't look bad by accident. A layer's score is the average over its 128 experts.",
          },
          {
            kind: "figure",
            plate: true,
            images: [
              {
                src: "/img/projects/lego-layer-scores.webp",
                alt: "Bar chart of average expert z-score for each of the 48 layers. Layers 7, 19, 41, 42 and 43 are highlighted in red as the five worst; the tallest bar is about 0.055.",
                width: 1600,
                height: 600,
              },
            ],
            caption: "Average expert z-score per layer. Red bars are the five worst: 41, 42, 43, 19, and 7. The largest is about 0.055.",
          },
          {
            kind: "p",
            text: "Look at the y-axis. The usual bar for an outlier is a z-score of 2, our worst layer scored 0.055, and no single expert crossed 2.",
          },
          {
            kind: "p",
            text: "We kept going anyway. Inside each of the five worst layers we built a 128 × 200 fingerprint (which experts fired on which questions) and clustered the experts with k-medoids, using Jaccard distance since each fingerprint is about 94% zeros. The best silhouette score was 0.236, so the clusters overlapped a lot.",
          },
        ],
      },
      {
        id: "switching-them-off",
        title: "Switching them off",
        blocks: [
          {
            kind: "p",
            text: "We tried three ways of disabling the worst layer (41): skip the whole decoder block, zero only its MoE output, or zero the flagged experts' gate weights and renormalize the rest. Each one is a PyTorch forward hook that's removed after the run, so the model's weights never change. Accuracy went from 23.0% to 22.0%, 24.0%, and 24.0%. None of those changes were significant under McNemar's test.",
          },
          {
            kind: "p",
            text: "MoE-only did slightly best, so we scaled it to the worst 1, 3, and 5 layers. As a control, we also switched off the same number of random layers, 10 times each.",
          },
          {
            kind: "table",
            headers: ["Layers off", "Targeted", "Random (mean ± sd)", "z vs. random", "McNemar p"],
            highlight: 1,
            rows: [
              ["1", "24.0%", "22.5% ± 1.1%", "1.36", "0.831"],
              ["3", "26.5%", "23.2% ± 2.5%", "1.33", "0.248"],
              ["5", "25.0%", "22.2% ± 2.3%", "1.22", "0.596"],
            ],
          },
          {
            kind: "figure",
            plate: true,
            images: [
              {
                src: "/img/projects/lego-accuracy-vs-layers.webp",
                alt: "Line chart of accuracy against number of layers ablated. The targeted MoE-only line peaks at 26.5% with 3 layers, but stays inside or near the shaded band of random ablations around 22 to 23%.",
                width: 1049,
                height: 703,
              },
            ],
            caption: "Targeted MoE-only ablation (blue) against the random-ablation mean and its ±1 standard deviation band (red).",
          },
          {
            kind: "p",
            text: "Three layers looked best: 23.0% to 26.5%, with 17 questions fixed and 10 broken. But McNemar's test gave p = 0.25, and the targeted run didn't beat random removal by a meaningful margin (z = 1.33, against a bar of 2).",
          },
        ],
      },
      {
        id: "the-holdout-check",
        title: "The holdout check",
        blocks: [
          {
            kind: "p",
            text: "The 200 holdout questions had never been used for scoring or clustering. With the same three layers switched off, holdout accuracy went from 29.0% down to 27.0%, so the test-set bump was most likely noise in a 200-question sample.",
          },
        ],
      },
      {
        id: "what-it-leaves-open",
        title: "What it leaves open",
        blocks: [
          { kind: "p", text: "Two explanations fit, and our data can't tell them apart:" },
          {
            kind: "ul",
            items: [
              "**The failure is spread out.** Spatial reasoning might not live in any small set of experts. That matches [Wang et al. (2026)](https://arxiv.org/abs/2601.03425), who found MoE routing dominated by a \"standing committee\" of experts that fire regardless of task.",
              "**Our method was too blunt.** Z-scores near 0.05 and weak clusters could mean the signal exists and a correlational score can't see it.",
            ],
          },
          {
            kind: "p",
            text: "So we wrote it up as a negative result. The follow-up we proposed is activation patching: corrupt the image, then copy the clean run's hidden state back in one layer at a time and see which layer flips the answer back. That would show which layer causes the error. Our correlational scores can't.",
          },
          {
            kind: "p",
            text: "The routing logs also led to my next project with a research collaborator and our advisor: predicting expert routing early enough to prefetch the weights.",
          },
        ],
      },
    ],
  },
  {
    slug: "watchtower",
    title: "Watchtower",
    summary: "A lightweight tool that shows web teams the errors, slowdowns and user activity on their live site.",
    highlight:
      "Owned data and backend logic: wrote the event schema and API contract **every prototype** used, and designed the backend event flow.",
    context: "UC San Diego course project (CSE 110)",
    meta: "CSE 110 team project, Apr to Jun 2026. My role: data and backend logic owner",
    lede: "Our team built a small error and performance monitor: drop a script into a web app and its errors, slow routes, and clicks show up on a dashboard.",
    dates: "April – June 2026",
    team: "CSE 110 group 9",
    tags: ["JavaScript", "Node.js", "Supabase", "Clerk", "Jest", "Gmail API"],
    image: {
      src: "/img/projects/thumb-watchtower.webp",
      alt: "Watchtower dashboard with health scores and a radar chart.",
      width: 960,
      height: 600,
    },
    links: [
      { label: "Code", href: "https://github.com/cse110-sp26-group09/Watchtower-Course-Project" },
      { label: "Test app", href: "https://cse110-sp26-group09.github.io/Watchtower-test-app/" },
    ],
    facts: [
      {
        label: "Result",
        text: "Backend deployed on Render, with a test app on GitHub Pages sending it events.",
      },
      { label: "Role", text: "Data and backend logic owner" },
      {
        label: "What I did",
        text: "I wrote the shared event schema and API contract and the first version of Gmail error alerts (tested locally, never shipped). I also brought Clerk sign-in into the final prototype, wired up the timezone selector, fixed the profile and lint errors, and rewrote the README setup guide.",
      },
      { label: "Team", text: "CSE 110 group 9" },
      {
        label: "Stack",
        text: "JavaScript, Node.js, Supabase (Postgres), Clerk, Gmail API, Jest, Playwright, Render",
      },
    ],
    pagerNote: "Backend deployed on Render",
    sections: [
      {
        id: "what-it-does",
        title: "What it does",
        blocks: [
          {
            kind: "p",
            text: "A dependency-free browser SDK captures JavaScript errors, clicks and custom events, route changes, and page-load timing, then sends them in batches to a Node.js backend on Render. The backend stores events in Supabase (Postgres) and serves a dashboard behind Clerk sign-in, where each user only sees their own apps' data. Errors and metrics are tagged with a deploy version, so you can tell which release made things worse.",
          },
          {
            kind: "figure",
            plate: true,
            images: [
              {
                src: "/img/projects/watchtower-architecture.webp",
                alt: "Hand-drawn style architecture diagram: a monitored browser app with an embedded SDK posts events to a Node.js server on Render, which stores them in Supabase tables and verifies dashboard users with Clerk.",
                width: 1600,
                height: 900,
              },
            ],
            caption:
              "System architecture, drawn by our team. The SDK posts batches to the Node.js server; the dashboard signs in through Clerk.",
          },
        ],
      },
      {
        id: "one-contract",
        title: "One contract for every prototype",
        blocks: [
          {
            kind: "p",
            text: "Early on, the team split into groups building competing prototypes. They could only be compared fairly if they sent and accepted the same events, so I wrote the shared event schema and API contract (v1) that every prototype followed. The goal was that either team's backend could serve either team's frontend with no changes.",
          },
          {
            kind: "p",
            text: "Every event has the same envelope: three required fields (`type`, `timestamp`, `data`), optional context the SDK fills in (`sessionId`, `userId`, `deployVersion`, `appName`, `url`, `route`), and a `receivedAt` the server adds on ingest. The server normalizes every event to that envelope before it writes to Supabase, so errors, performance timings, and clicks are stored in one shape and queried the same way. Later I audited the SDK and server against the spec field by field. Everything was captured, with two small labeling gaps in feedback and logout events, which I documented.",
          },
          {
            kind: "p",
            text: "I also designed the backend event flow in the contract. `POST /api/events` takes a batch and accepts what it can: events that fail the envelope check are dropped and counted in a `rejected` field, and the valid ones are still stored. Only a body that isn't JSON gets a 400. Reads go through `GET /api/events` (filter by type, deploy version, and limit) and `/api/stats`. v1 also specced a server-sent events stream, but the final prototype's dashboard polls for stats every 3 seconds instead.",
          },
        ],
      },
      {
        id: "sign-in-and-alerts",
        title: "Sign-in and alerts",
        blocks: [
          { kind: "h3", text: "Sign-in" },
          {
            kind: "p",
            text: "I researched Clerk for sign-in, and Resend versus the Gmail API for alert emails. A teammate wrote our first Clerk integration. When we picked the final prototype, I brought Clerk sign-in into it: I repointed the sign-in redirect and config, moved the dashboard auth guard over, and added the signed-in user label and a Logout button. Later I fixed the profile page. It showed a hardcoded name, and now it shows the signed-in user's name and initials, scoped to their user ID.",
          },
          { kind: "h3", text: "Error-spike emails" },
          {
            kind: "p",
            text: "I built the first version of email alerts with the Gmail API (OAuth2 through Nodemailer). When an incoming batch has at least `ERROR_ALERT_THRESHOLD` errors (default 5), the server emails the route, the deploy version, and the first error message. Anyone who can trigger an error in a monitored app controls that message, so I escaped the HTML before it goes into the email.",
          },
          {
            kind: "p",
            text: "The threshold counts errors per batch, not per minute, so it's a rough spike signal. We tested alerts only locally. In September 2026 a teammate's security review removed the mailer from `main`, because a public route for registering alert recipients made a Nodemailer advisory reachable.",
          },
        ],
      },
      {
        id: "smaller-fixes",
        title: "Smaller fixes",
        blocks: [
          {
            kind: "ul",
            items: [
              "Wired the dashboard's timezone selector through to event timestamps and the backend, with unit tests for the event store.",
              "Fixed lint failures that were blocking CI.",
              "Rewrote the README's project structure and setup guide for the final prototype.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "talk-to-robot",
    title: "Talk-to-Robot",
    summary:
      "You tell a simulated robot arm where to push a block in plain English. We measured how often the LLM step gets it wrong.",
    highlight:
      "Gemini hit **100%** on coordinates but only **40–65%** on offsets like \"5 cm to the right,\" where a regex scored 100%.",
    context: "UC San Diego course project (CSE 190) · Team of 5",
    meta: "CSE 190 team of 5, spring 2026",
    lede: "You tell a simulated robot arm where to push a block, in plain English, and Gemini turns that into a target. Five of us measured how often that step goes wrong, and which mistakes the robot can recover from.",
    dates: "Spring 2026",
    team: "Team of 5",
    tags: ["Python", "Gemini", "MuJoCo", "Gymnasium", "Stable-Baselines3"],
    image: {
      src: "/img/projects/thumb-talk-to-robot.webp",
      alt: "Diagram from an instruction, through a Gemini grounder, to a SAC+HER policy that pushes a cube.",
      width: 960,
      height: 600,
    },
    links: [
      { label: "Code", href: "https://github.com/YangLin14/Talk-to-Robot" },
      { label: "Paper", href: "/papers/talk-to-robot.pdf" },
    ],
    facts: [
      {
        label: "Result",
        text: "LLM grounding hit 100% on coordinates and named regions, 40 to 65% on offsets (a regex scored 100%), and 0 to 5% on objects at a 5 cm bar.",
      },
      {
        label: "What I did",
        text: "Fixed two eval-harness bugs that affected the coordinate and offset scores, wrote one of three annotation sets for the intent tier, ran its zero-shot eval, and reorganized the results folder with a STRUCTURE.md guide.",
      },
      { label: "Team", text: "Team of 5" },
      { label: "Stack", text: "Python, Gemini, MuJoCo, Gymnasium, Stable-Baselines3 (SAC + HER)" },
    ],
    pagerNote: "100% on coordinates, 40 to 65% on offsets",
    sections: [
      {
        id: "the-setup",
        title: "The setup",
        blocks: [
          {
            kind: "p",
            text: "The task is FetchPush-v4 in MuJoCo: a 7-joint Fetch arm pushes a block to a target on a table. A language model (`gemini-3.1-flash-lite`, temperature 0) reads the instruction and returns a target coordinate as JSON. A SAC + HER policy pushes the block there.",
          },
          {
            kind: "p",
            text: "We froze the policy after training, so any change in end-to-end success has to come from the language step.",
          },
        ],
      },
      {
        id: "five-kinds-of-instruction",
        title: "Five kinds of instruction",
        blocks: [
          {
            kind: "p",
            text: "We wrote 100 instructions, 20 per tier, ordered by the kind of reasoning they need:",
          },
          {
            kind: "table",
            headers: ["Tier", "Example", "What it tests"],
            rows: [
              ["T0", "“push to (1.30, 0.85)”", "Reading numbers"],
              ["T1", "“upper-left corner”", "Named regions"],
              ["T2", "“push it 5 cm to the right”", "Offsets from the block's current spot"],
              ["T3", "“push it next to the marker”", "Finding a reference object"],
              ["T4", "“get it out of the way”", "Intent with no location"],
            ],
          },
          {
            kind: "p",
            text: "T4 has no single right answer, so three of us each picked a target for every T4 instruction, and the average became ground truth. We locked those picks in before running any model, so the model's answers couldn't sway them.",
          },
        ],
      },
      {
        id: "results",
        title: "Results",
        blocks: [
          {
            kind: "p",
            text: "We compared Gemini (zero-shot, few-shot, chain-of-thought) against a regex baseline that only handles T0 to T2.",
          },
          {
            kind: "table",
            headers: ["Tier", "Regex grounder", "LLM grounder", "LLM end-to-end"],
            highlight: 2,
            rows: [
              ["T0 coordinates", "100%", "100%", "98.3%"],
              ["T1 regions", "100%", "100%", "93.3%"],
              ["T2 offsets", "100%", "40–65%", "60–77%"],
              ["T3 objects, 5 cm", "0%", "0–5%", "n/a"],
              ["T3 objects, 8 cm*", "0%", "100%", "72–78%"],
              ["T4 intent", "n/a", "45–55%", "45–55%"],
            ],
            note: "Ranges span the three prompting styles. *At the 5 cm bar we used for T0 to T2, T3 grounding scored 0 to 5% because of a steady 6 cm offset (see the T3 note below), so we also report T3 at 8 cm, where it hits the object every time.",
          },
          {
            kind: "p",
            text: "T2 end-to-end can beat T2 grounding because an off-table target still makes the robot push the block to the table edge, which is often within tolerance of the true target.",
          },
          {
            kind: "p",
            text: "Accuracy drops as instructions get more abstract, which we expected. We didn't expect each tier to fail in its own way, or that the kind of failure would decide whether the robot could recover.",
          },
          {
            kind: "ul",
            items: [
              "**T2 is where the robot can't recover.** The LLM does worse than a regex at adding 5 cm to a number. Zero-shot and few-shot aim the right way but push targets off the edge of the table. Chain-of-thought keeps targets on the table but sometimes flips the direction, which no controller can fix.",
              "**T3 is a steady bias.** The model picks the right object every time but lands about 6 cm from it, almost the same offset on every instruction. \"Next to\" doesn't say how far.",
              "**T4 isn't a grounding problem.** The gap between the model and our annotators (about 0.2 m) matches how much the annotators disagreed with each other.",
            ],
          },
          {
            kind: "p",
            text: "A second experiment retrained the controller on the grounder's outputs. The policy reached every goal it was given (100% policy success in every tier), and the T3 bias tightened, but it did nothing for T2's off-table goals.",
          },
        ],
      },
      {
        id: "my-part",
        title: "My part",
        blocks: [
          {
            kind: "ul",
            items: [
              "**Two harness bugs.** The instruction file stored a fixed block position, but every sim reset spawns the block somewhere random, so T2 targets were measured against the wrong spot. I made the harness reset the sim first, read the block's live position, and rebuild the T2 target with the same offset. I also made the regex baseline read T0 coordinates written as [x, y] or x=…, y=…, not just (x, y).",
              "**T4 annotations.** I wrote one of the three pre-registered annotation sets, applied all three to the instruction file, and ran the zero-shot T4 evaluation.",
              "**Results and docs.** I reorganized the results folder by experiment, wrote `STRUCTURE.md` so someone new can find the entry points, and edited the proposal and milestone report.",
            ],
          },
          {
            kind: "p",
            text: "Everything here is in simulation with 20 instructions per tier, so we treat gaps under about 10 points as suggestive, not proven.",
          },
        ],
      },
    ],
  },
  {
    slug: "travel-coordinator",
    title: "Multi-Agent Travel Coordinator",
    summary: "A 4-agent travel planner: a LangGraph supervisor sends one plain-English request to flight, hotel, and activity agents and returns a plan that fits together in time.",
    highlight:
      "Prize winner, **Multi-Agent Systems**. Filled **90%+** of plain-English trip requests correctly, and a timing rule removed **100%** of scheduling conflicts.",
    context: "SanD Hacks 2026",
    meta: "Prize winner, Multi-Agent Systems Challenge, SanD Hacks 2026",
    lede: "Describe a trip in plain English and get back flights, hotels, and activities that fit together in time. We built it over a weekend at SanD Hacks.",
    dates: "January 31 – February 2, 2026",
    team: "Team of 3",
    tags: ["Python", "FastAPI", "LangGraph", "AGNTCY", "NATS", "Docker", "React"],
    image: {
      src: "/img/projects/thumb-travel.svg",
      alt: "Diagram of a supervisor talking over NATS to flight, hotel, and activity agents.",
      width: 960,
      height: 600,
    },
    links: [
      { label: "Devpost", href: "https://devpost.com/software/travel-agyntc" },
      { label: "Code", href: "https://github.com/AdityaJadhav17/sandhacks-2026-project" },
    ],
    facts: [
      {
        label: "Result",
        text: "Prize winner, Multi-Agent Systems Challenge. The 4-agent system (a LangGraph supervisor plus flight, hotel, and activity agents over NATS) filled 90%+ of plain-English trip requests correctly, and our timing rule removed 100% of conflicts between flight arrivals and hotel check-ins.",
      },
      {
        label: "What I did",
        text: "I set up the starting codebase from Cisco's CoffeeAGNTCY reference app and configured its environment, then did the initial testing as the team turned it into the travel agents.",
      },
      { label: "When", text: "Jan 31 to Feb 2, 2026" },
      {
        label: "Stack",
        text: "Python, FastAPI, LangGraph, LiteLLM, Cisco AGNTCY (A2A), NATS, SerpAPI, Docker, React 19, TypeScript",
      },
      {
        label: "Links",
        text: "The repo has kept growing since the hackathon. The weekend's version is the history from Jan 31 to Feb 2, 2026.",
      },
    ],
    pagerNote: "Prize winner, Multi-Agent Systems Challenge",
    sections: [
      {
        id: "the-problem",
        title: "The problem",
        blocks: [
          {
            kind: "p",
            text: "Planning a trip with more than one leg means checking flights on one site and hotels on another, then making sure your check-in lines up with when you land. Getting that wrong costs money.",
          },
        ],
      },
      {
        id: "how-a-request-moves",
        title: "How a request moves",
        blocks: [
          {
            kind: "ol",
            items: [
              "The React UI sends your request to a FastAPI **supervisor**.",
              "The supervisor runs a LangGraph workflow: classify what you're asking for, pull out the details (cities, dates, budget), search, then check the results and return.",
              "For the search step, it sends messages over Cisco AGNTCY's agent-to-agent (A2A) protocol, carried by NATS, to three separate agents: **flights** (Google Flights), **hotels** (Google Hotels), and **activities** (Google Local), all through SerpAPI.",
              "Each agent runs its own small LangGraph and returns JSON.",
              "The supervisor drops hotels rated under 3.7 overall or under 4.0 for location. It adds a 2-hour buffer (configurable) to the flight's arrival time and keeps only hotels whose check-in has opened by the time you get there, then picks the cheapest flight plus hotel total. The UI turns that plan into cards.",
            ],
          },
          {
            kind: "p",
            text: "Each search agent is its own service with its own A2A card. The whole stack (UI, supervisor, three agents, NATS, and an optional ClickHouse and Grafana setup) runs with Docker Compose.",
          },
          {
            kind: "p",
            text: "When something is missing, like a check-in date, the supervisor asks for it instead of guessing. If it finds flights and hotels but no pair fits the timing rule, it says so and suggests an earlier departure or a later check-in.",
          },
        ],
      },
      {
        id: "my-part",
        title: "My part",
        blocks: [
          {
            kind: "p",
            text: "I set up the project's starting point. Rather than write the agent plumbing from scratch, I brought in Cisco's open-source CoffeeAGNTCY reference app, which already had A2A agent servers, a LangGraph supervisor, NATS and SLIM transport, a React UI, Docker Compose, and a Grafana and OpenTelemetry setup. I configured its environment (model and API keys) so the stack ran for the team, and we reworked its coffee-trading agents into the flight, hotel, and activity agents.",
          },
          {
            kind: "p",
            text: "I also did the initial testing. As the pieces came together, I ran early trip requests through the supervisor and the three search agents to check that each one answered over A2A and that the plan it returned held together.",
          },
        ],
      },
      {
        id: "next",
        title: "Next",
        blocks: [
          {
            kind: "p",
            text: "We'd let you set your own filters, like nonstop-only or a higher hotel rating, and add booking links so you can buy from the same page.",
          },
        ],
      },
    ],
  },
  {
    slug: "radar-classifier",
    title: "Precipitation classifier on a Raspberry Pi",
    summary: "Turns raw mmWave radar files into precipitation labels on a device small enough to leave out in the field.",
    highlight: "Classifies a reading in **under a second** on the Pi, starting from the radar's raw binary files.",
    context: "Lawrence Berkeley National Lab · Summer 2023",
    meta: "Berkeley Lab machine learning engineering internship, summer 2023",
    lede: "We turned raw mmWave radar files into precipitation labels on a Raspberry Pi, so a remote sensor could classify weather without a bigger computer. It was my first research project. I was still at City College of San Francisco.",
    dates: "June – August 2023",
    team: "Internship. I was the machine learning engineer intern.",
    tags: ["Python", "NumPy", "Pandas", "Linux", "Raspberry Pi"],
    image: {
      src: "/img/projects/thumb-radar.svg",
      alt: "Diagram from raw mmWave radar files, through a decoder and an SVM and K-means classifier, to a Raspberry Pi.",
      width: 960,
      height: 600,
    },
    links: [
      {
        label: "Report",
        href: "https://drive.google.com/file/d/1DSASDEsmYvp6f9jAXwpiorxnNO88CEZq/view?usp=sharing",
      },
    ],
    facts: [
      { label: "Result", text: "The pipeline and its classifiers ran on the Pi and labeled each reading in under a second, fast enough for real-time edge monitoring." },
      { label: "Role", text: "Machine learning engineer intern" },
      { label: "Where", text: "Lawrence Berkeley National Laboratory, Jun to Aug 2023" },
      { label: "Stack", text: "Python, NumPy, Pandas, Linux, Raspberry Pi, Bitbucket" },
    ],
    pagerNote: "Under a second per reading on the Pi",
    sections: [
      {
        id: "the-goal",
        title: "The goal",
        blocks: [
          {
            kind: "p",
            text: "Weather and snowpack sensing in remote places needs hardware that runs on little power with nobody around to watch it. The project used a small mmWave radar, which writes raw binary files.",
          },
        ],
      },
      {
        id: "from-binaries-to-data",
        title: "From binaries to data",
        blocks: [
          {
            kind: "p",
            text: "The radar's files aren't readable on their own. The pipeline decoded each file's header using JSON configuration files that describe the format, then wrote clean, structured CSVs. To make sure the decoding was right, we checked the output against Infineon's own radar visualizations.",
          },
        ],
      },
      {
        id: "the-models",
        title: "The models",
        blocks: [
          {
            kind: "p",
            text: "We trained SVM and K-means models to classify snowpack and precipitation. We picked them because they're small enough to run on a Pi.",
          },
        ],
      },
      {
        id: "code-and-report",
        title: "Code and report",
        blocks: [
          {
            kind: "p",
            text: "The code lived in the lab's private Bitbucket, so the report is the public record. It has the setup, data, and results in more detail.",
          },
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function neighbors(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}

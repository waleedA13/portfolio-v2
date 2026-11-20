export const site = {
  name: "Waleed Alghaithi",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://waleedalghaithi.vercel.app",
  title: "Waleed Alghaithi",
  description:
    "Waleed Alghaithi is a computer science student at UC San Diego. He does research on how large models work inside, and he builds software with other people.",
  email: "waleedalghaithi13@gmail.com",
  github: "https://github.com/waleedA13",
  githubUser: "waleedA13",
  linkedin: "https://www.linkedin.com/in/waleedalghaithi/",
  location: "San Diego, CA",
  headline: "I like figuring out why models get things wrong.",
  resume: "/resume.pdf",
};

export const about = [
  "I started at City College of San Francisco, transferred to UC San Diego, and now I do research on how large models work inside.",
  "When I'm not coding, I'm usually cooking something new or hanging out with my cat.",
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of California San Diego, Warren College",
    detail: "GPA 3.71/4.00",
    dates: "Expected December 2027",
    coursework:
      "Algorithms, Software Engineering, Advanced Data Structures, ML: Learning Algorithms, AI: Search & Reasoning, Deep Reinforcement Learning, Systems Programming, Linear Algebra",
  },
  {
    degree: "Associate of Science in Computer Science & Science and Math",
    school: "City College of San Francisco",
    detail: "GPA 4.00/4.00",
    dates: "August 2022 – May 2025",
  },
];

export const certification = {
  name: "AWS Certified AI Practitioner",
  issuer: "Amazon Web Services Training and Certification",
  dates: "Issued September 2026",
  image: "/img/aws-ai-practitioner-badge.webp",
};

export const skills = [
  {
    label: "Languages",
    items: "Python, C, C++, Java, JavaScript, TypeScript, SQL",
  },
  {
    label: "ML / AI",
    items:
      "PyTorch, Hugging Face Transformers, bitsandbytes 4-bit quantization, LLM APIs (Claude, Gemini), LangGraph, LiteLLM, NumPy, Pandas, scikit-learn",
  },
  {
    label: "Frameworks",
    items: "React, Next.js, Node.js, FastAPI, HTML, CSS",
  },
  {
    label: "Tools",
    items:
      "Git, GitHub, Bitbucket, Jira, Linux/Unix, Docker, Grafana, Jest, Playwright, PostgreSQL, MySQL, Supabase, VS Code, Cursor, JetBrains",
  },
];

export type Job = {
  dates: string;
  role: string;
  org: string;
  tools: string;
  bullets: string[];
  writeup?: { href: string; label: string };
};

export const jobs: Job[] = [
  {
    dates: "Aug 2026 – now",
    role: "Undergraduate Research Engineer",
    org: "UC San Diego",
    tools: "Python · PyTorch · PyArrow · Qwen1.5-MoE",
    bullets: [
      "Studying, with a research collaborator and a faculty advisor, whether expert activations in a sparse Mixture-of-Experts model can be predicted early enough to prefetch weights and cut GPU stalls.",
      "Built the seeded data collection loop and the Parquet storage for routing traces from Qwen1.5-MoE-A2.7B (4 of 60 experts per token), with 25 unit tests.",
      "Early result: with batch noise as the only error, predicting the top 4 experts catches 99.5% of the experts used, and 99.98% with 2 extra.",
    ],
  },
  {
    dates: "Aug – Sep 2026",
    role: "Course Tutor, CSE 6R",
    org: "UC San Diego",
    tools: "Python · Teaching",
    bullets: [
      "Led weekly discussion sections for CSE 6R (Introduction to Programming and Problem Solving: Python) during Summer Session 2.",
      "Held office hours on variables, control flow, functions, and data structures, mostly with students writing their first programs.",
      "Wrote the discussion materials each week and covered for other course staff when they needed it.",
    ],
  },
  {
    dates: "Jan – Aug 2026",
    role: "Undergraduate Research Engineer, McNair Scholars Program",
    org: "UC San Diego",
    tools: "Python · Qwen3-VL · RunPod · NumPy · scikit-learn",
    writeup: { href: "/projects/lego-spatial-reasoning/", label: "Read the write-up" },
    bullets: [
      "Profiled Qwen3-VL-30B's Mixture-of-Experts routing across 48 layers on the LEGO-Puzzles benchmark, ranked layers by z-score, and clustered expert fingerprints with k-medoids (Jaccard distance).",
      "Designed and ran a 40-experiment ablation study on RunPod A100s (layer, MoE-only, and expert-level ablation against random controls).",
      "Checked the result with McNemar's test and a held-out 200-question set. The gain did not hold, so the errors are spread across the model rather than sitting in a few layers.",
    ],
  },
  {
    dates: "Jan 2023 – May 2025",
    role: "Tutor and Teaching Assistant",
    org: "City College of San Francisco",
    tools: "Physics · Java · Python",
    bullets: [
      "Tutored 20+ students a week in physics and CS, from kinematics and circuits to data structures, algorithms, and OOP in Java and Python.",
      "Wrote study materials that could be reused across semesters and checked them against what instructors were teaching.",
      "Students I worked with raised their average exam scores by about 15%, and 90% of my regulars stayed with it.",
    ],
  },
  {
    dates: "Jun – Aug 2023",
    role: "Machine Learning Engineer Intern",
    org: "Lawrence Berkeley National Laboratory",
    tools: "Python · SVM · K-Means · Raspberry Pi · Linux",
    writeup: { href: "/projects/radar-classifier/", label: "Read the write-up" },
    bullets: [
      "Decoded raw mmWave radar binaries into CSVs by reading headers against JSON configs, and checked the output against Infineon's radar visualizations.",
      "Trained SVM and K-means models for snowpack and precipitation classification, chosen because they are small enough to run on a Raspberry Pi.",
      "Deployed the radar processing pipeline and classifiers on a Raspberry Pi running Linux for real-time edge monitoring. It classifies a reading in under a second.",
    ],
  },
];

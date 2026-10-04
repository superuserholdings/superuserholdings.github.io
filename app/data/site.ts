export type Product = {
  code: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  accent: string;
  features: string[];
  includes: string[];
};

export const products: Product[] = [
  {
    code: "01",
    name: "Supercore OS",
    tagline: "The ground your AI stands on.",
    description:
      "A purpose-built operating system for AI infrastructure. It runs your models, agents, containers, and virtual machines on a hardened base — with a hardware-enforced off switch built in, not bolted on.",
    status: "In development",
    accent: "signal",
    features: ["Model-agnostic", "Hardened base", "Off switch built in"],
    includes: [
      "Runs models, agents, containers, and VMs on one box",
      "Bring your own model — swapping it is configuration, not a rebuild",
      "The safeguard ships inside every deployment, not as an add-on",
      "Reproducible builds you can inspect and verify",
    ],
  },
  {
    code: "02",
    name: "AI Hypervisor",
    tagline: "Many machines, one brain.",
    description:
      "Virtualization built for AI workloads: pool hardware across machines, place work where the accelerators are, and keep every workload fenced off from the one thing it must never touch — the off switch.",
    status: "In development",
    accent: "violet",
    features: ["GPU-aware placement", "Multi-machine pooling", "Workload isolation"],
    includes: [
      "Run AI workloads across pooled hardware",
      "Place work where the GPUs actually are",
      "Strict isolation between workloads and the management plane",
      "Built on proven virtualization, fenced by design",
    ],
  },
  {
    code: "03",
    name: "Safeguard",
    tagline: "The off switch nothing can reach.",
    description:
      "A hardware-enforced dead man's switch. It stays on only while a person says so — the moment that stops, the workload shuts down. No AI workload can disable it, reach it, or change its mind.",
    status: "In development",
    accent: "gold",
    features: ["Hardware-enforced", "Human-controlled", "Unreachable by design"],
    includes: [
      "A dead man's switch: silence means shutdown",
      "Only a person can keep it on — never software, never the workload",
      "Architecturally unreachable from anything it governs",
      "Ships inside every Supercore deployment. It is never optional.",
    ],
  },
];

export const principles = [
  {
    number: "01",
    title: "Human authority",
    description:
      "The off switch answers to people, not to software. Nothing consequential happens without a human saying yes.",
  },
  {
    number: "02",
    title: "Trust is the product",
    description:
      "We sell trust, not models. The labs can fight over the smartest model — we build the ground it stands on.",
  },
  {
    number: "03",
    title: "Evidence over theater",
    description:
      "Working systems, real tests, and honest limitations beat impressive-sounding claims.",
  },
  {
    number: "04",
    title: "Built to continue",
    description:
      "Clear design and reproducible builds keep the result useful and verifiable long after launch.",
  },
];

export const nav = [
  { label: "Products", href: "/products" },
  { label: "Company", href: "/company" },
];

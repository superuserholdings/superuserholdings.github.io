export type Product = {
  code: string;
  name: string;
  tagline: string;
  description: string;
  from: string;
  accent: string;
  features: string[];
  includes: string[];
};

export const products: Product[] = [
  {
    code: "01",
    name: "SuperSites",
    tagline: "A website that earns its keep.",
    description:
      "Fast, clear, and built to turn visitors into real work for your business. We handle the structure, the words, and the launch.",
    from: "$1,500",
    accent: "signal",
    features: ["Strategy & copy structure", "Responsive build", "Launch support"],
    includes: [
      "A page map based on what your customers actually search for",
      "Copy that sounds like a person, not a brochure",
      "Forms and calls to action that feed your inbox, not a void",
      "Launch support while the site finds its legs",
    ],
  },
  {
    code: "02",
    name: "SuperApps",
    tagline: "Software for the way your business actually runs.",
    description:
      "Customer portals, internal tools, and small SaaS products built around a specific outcome, not a generic template.",
    from: "$5,000",
    accent: "violet",
    features: ["Product blueprint", "Custom application", "Validated handoff"],
    includes: [
      "A short blueprint that names the workflow we are building for",
      "The smallest complete version first, then steady additions",
      "Real use before we call it done",
      "A handoff your team can run without a translator",
    ],
  },
  {
    code: "03",
    name: "SuperAutomations",
    tagline: "Make the busywork happen without you.",
    description:
      "We connect the tools you already use, cut the repeat entry, and make sure failures show up where someone will see them.",
    from: "$1,250",
    accent: "aqua",
    features: ["Workflow mapping", "Tool integrations", "Failure visibility"],
    includes: [
      "A map of the process before we automate a thing",
      "Integrations with the tools already on your desk",
      "Alerts that name the failure instead of hiding it",
      "A pause button for when a step needs a human",
    ],
  },
  {
    code: "04",
    name: "SuperAgents",
    tagline: "An AI helper that stays in its lane.",
    description:
      "Support, sales, research, and internal-knowledge agents grounded in your own information, with a human keeping an eye on the important stuff.",
    from: "$3,500",
    accent: "gold",
    features: ["Knowledge grounding", "Human approval gates", "Evaluation & monitoring"],
    includes: [
      "Answers grounded in your documents, not guesswork",
      "A clear boundary for what the agent can and cannot do",
      "Breaks in the workflow where a person has to approve",
      "Monitoring so a confident wrong answer cannot linger",
    ],
  },
  {
    code: "05",
    name: "SuperDashboards",
    tagline: "See the numbers before they become surprises.",
    description:
      "Dashboards that pull scattered data into one view you can act on, with alerts that tell you when something needs attention.",
    from: "$2,500",
    accent: "rose",
    features: ["Metric definition", "Data connections", "Decision-ready views"],
    includes: [
      "A short list of the numbers that actually drive decisions",
      "Connections to the systems that hold the data",
      "Views built around decisions, not decoration",
      "Alerts for the things that should not wait for a weekly meeting",
    ],
  },
  {
    code: "06",
    name: "SuperCare",
    tagline: "We stick around after launch.",
    description:
      "Monitoring, maintenance, and small steady improvements so the systems we build stay healthy and get better over time.",
    from: "$300/mo",
    accent: "blue",
    features: ["Monitoring", "Maintenance", "Monthly improvement cycle"],
    includes: [
      "Monitoring that flags a problem before your customers do",
      "Maintenance so nothing quietly rots",
      "A monthly cycle of small, measured improvements",
      "A real person who knows your system and answers when you call",
    ],
  },
];

export const tiers = [
  {
    name: "Starter",
    description: "A focused outcome with a fast path to value.",
    details: "Best for one clear workflow, page, automation, or proof of concept.",
  },
  {
    name: "Professional",
    description: "A complete business solution ready for daily use.",
    details: "Best for connected workflows, multiple roles, and operational handoff.",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "A governed system designed for scale and complexity.",
    details: "Best for advanced integrations, security needs, and phased rollout.",
  },
];

export const process = [
  {
    number: "01",
    title: "Define",
    description:
      "We pin down what has to change in the business before we talk about technology, then turn it into a build plan you can see.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We build the smallest version that does the job, reusing parts we have proven before instead of inventing from scratch.",
  },
  {
    number: "03",
    title: "Prove",
    description:
      "We run the real workflow, show you the working result, and fix what breaks. If it does not hold up, it does not ship.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We hand over something you can run, with clear docs and a path for improvements. You are never left holding a mystery.",
  },
];

export const principles = [
  {
    number: "01",
    title: "Outcome first",
    description: "We agree on what has to change before we pick the technology.",
  },
  {
    number: "02",
    title: "Human authority",
    description:
      "Important commitments stay with the people who own them. Nothing consequential happens without a human saying yes.",
  },
  {
    number: "03",
    title: "Evidence over theater",
    description:
      "Working software, real tests, and honest limitations beat impressive-sounding claims.",
  },
  {
    number: "04",
    title: "Built to continue",
    description:
      "Clear docs and reusable parts keep the result useful long after launch.",
  },
];

export const nav = [
  { label: "Products", href: "/products" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Our work", href: "/work" },
];
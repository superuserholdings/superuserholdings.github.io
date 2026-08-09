import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Reveal } from "../components/reveal";

export const metadata = {
  title: "Our work | Super User Holdings",
  description:
    "Current and past work at Super User Holdings: websites, apps, automations, dashboards, and AI systems for real operations.",
};

const categories = [
  {
    title: "Business websites & lead capture",
    description:
      "Conversion-focused sites, service pages, and lead forms built to turn visitors into conversations.",
    status: "Public demos being prepared",
  },
  {
    title: "Custom apps & portals",
    description:
      "Customer portals and internal tools designed around a specific operational workflow.",
    status: "Scrap Change (mileage & receipts) in preparation",
  },
  {
    title: "Automations & workflows",
    description:
      "Processes that connect the tools a business already uses and cut repeat manual work.",
    status: "Case material being assembled",
  },
  {
    title: "Dashboards & reporting",
    description:
      "Decision-ready views over real operational data, with alerts that surface problems early.",
    status: "Demos being prepared",
  },
  {
    title: "AI assistants with boundaries",
    description:
      "Grounded agents for support, sales, and internal knowledge, with human approval gates.",
    status: "Shown on request",
  },
  {
    title: "Products built for us",
    description:
      "The Super User Holdings sites, automation infrastructure, and internal systems we run on.",
    status: "Live, described in detail on this site",
  },
];

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-hero section-shell">
        <Reveal as="div">
          <p className="section-index">OUR WORK</p>
          <h1>Real systems, honestly shown.</h1>
          <p className="page-lede">
            A lot of what we are building runs on private infrastructure or
            touches customers&apos; own data, so most of it cannot be put on
            public display in full. Where we do show work publicly, it uses
            cleaned-up examples and clearly labeled placeholders. Here is what
            we are working on and what we can show you directly.
          </p>
        </Reveal>
      </section>

      <section className="work-grid section-shell">
        {categories.map((category, index) => (
          <Reveal key={category.title} delay={index * 60} as="article">
            <div className="work-card">
              <p className="section-index">{category.status}</p>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="closing-band">
        <Reveal as="div">
          <p className="section-index">SEE SOMETHING SPECIFIC</p>
          <h2>
            If you want to see work like yours, ask. We can walk you through
            what fits.
          </h2>
          <Link className="button primary" href="/start">
            Ask us <span>↗</span>
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
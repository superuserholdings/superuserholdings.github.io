import Link from "next/link";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { Reveal } from "./components/reveal";
import { products } from "./data/site";

const paths = [
  {
    title: "The products",
    description:
      "Supercore OS, the AI hypervisor, and the Safeguard. Three pieces, one idea: AI infrastructure you can actually trust.",
    href: "/products",
    action: "See the lineup",
  },
  {
    title: "The company",
    description:
      "Why we are building this, why the timing matters, and where the law is headed. The short version of a long bet.",
    href: "/company",
    action: "Read the story",
  },
  {
    title: "Talk to us",
    description:
      "Running AI infrastructure, or funding the people who build it? Either way, the next step is a conversation.",
    href: "/start",
    action: "Get in touch",
  },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero home-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Super User Holdings presents Supercore OS
          </p>
          <h1>
            Give AI a foundation
            <em>you can trust.</em>
          </h1>
          <p className="hero-lede">
            Supercore OS is a purpose-built operating system for AI
            infrastructure. It runs your models, your agents, and your
            workloads — and it carries a hardware-enforced off switch that no
            AI workload can disable or reach. Because the question was never
            whether AI gets powerful. It is whether anyone can still turn it
            off.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/products">
              See the products <span>↗</span>
            </Link>
            <Link className="button quiet" href="/company">
              Why we are building this
            </Link>
          </div>
        </div>

        <div className="home-panel" aria-label="What makes Supercore different">
          <p className="panel-label">THE IDEA IN THIRTY SECONDS</p>
          <ul>
            <li>
              <strong>One trusted foundation.</strong> An OS built for AI
              workloads, not adapted from a desktop.
            </li>
            <li>
              <strong>Your model, your call.</strong> Supercore is
              model-agnostic. Bring your own — swapping it is configuration,
              not a rebuild.
            </li>
            <li>
              <strong>An off switch nothing can reach.</strong> The Safeguard is
              a hardware-enforced dead man&apos;s switch. It answers to people,
              never to software.
            </li>
          </ul>
          <Link className="panel-link" href="/products">
            How the pieces fit <span>→</span>
          </Link>
        </div>
      </section>

      <section className="paths section-shell">
        <Reveal as="div" className="section-heading">
          <div>
            <p className="section-index">START HERE</p>
            <h2>Three ways in.</h2>
          </div>
          <p>Pick the door that matches what you are trying to do today.</p>
        </Reveal>
        <div className="path-grid">
          {paths.map((path, index) => (
            <Reveal key={path.title} delay={index * 70}>
              <Link className="path-card" href={path.href}>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <span>
                  {path.action} <span>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="snapshot section-shell">
        <Reveal as="div" className="section-heading">
          <div>
            <p className="section-index">WHAT WE ARE BUILDING</p>
            <h2>The lineup.</h2>
          </div>
          <p>
            Three pieces, one idea: AI infrastructure with trust built in from
            the start.
          </p>
        </Reveal>
        <div className="snapshot-grid">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 50}>
              <Link className="snapshot-card" href="/products">
                <span className={`snapshot-code ${product.accent}`}>
                  {product.code}
                </span>
                <h3>{product.name}</h3>
                <p>{product.tagline}</p>
                <strong>{product.status}</strong>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="closing-band">
        <Reveal as="div">
          <p className="section-index">THE SHORT VERSION</p>
          <h2>
            We sell trust, not models. If that sounds like your kind of bet,
            talk to us.
          </h2>
          <Link className="button primary" href="/start">
            Get in touch <span>↗</span>
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}

import Link from "next/link";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { Reveal } from "./components/reveal";
import { products } from "./data/site";

const paths = [
  {
    title: "What we build",
    description:
      "Six ways we help: websites, apps, automations, AI assistants, dashboards, and ongoing care. Start with one, grow from there.",
    href: "/products",
    action: "Browse the products",
  },
  {
    title: "How we work",
    description:
      "Four visible stages, no mystery phase, and a person you can get ahold of at each step. See how a project actually moves.",
    href: "/how-we-work",
    action: "See the process",
  },
  {
    title: "Start a project",
    description:
      "Tell us what is stuck. We will be straight with you about whether we can help and what it would take.",
    href: "/start",
    action: "Start the intake",
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
            <span /> A software partner for growing teams
          </p>
          <h1>
            Build what your business
            <em>should already have.</em>
          </h1>
          <p className="hero-lede">
            Most businesses do not need another tool. They need the tools they
            already use to stop fighting each other. We build websites, apps,
            automations, and AI that fit the way you work, and a real person
            stays on the other end of the thread.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/products">
              See what we build <span>↗</span>
            </Link>
            <Link className="button quiet" href="/how-we-work">
              How we work
            </Link>
          </div>
        </div>

        <div className="home-panel" aria-label="What working with us looks like">
          <p className="panel-label">WORKING WITH US</p>
          <ul>
            <li>
              <strong>One accountable partner.</strong> You talk to the same
              people the whole way through.
            </li>
            <li>
              <strong>Clear scope and checkpoints.</strong> You always know what
              is being built and what it costs before it is billed.
            </li>
            <li>
              <strong>Working software, then words.</strong> We show you
              something that runs, not a deck that promises.
            </li>
          </ul>
          <Link className="panel-link" href="/how-we-work">
            How a project moves <span>→</span>
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
            <p className="section-index">WHAT WE BUILD</p>
            <h2>The short list.</h2>
          </div>
          <p>
            One focused outcome, then a connected system as the value shows
            itself.
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
                <strong>{product.from}</strong>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="pricing-note">
            Starting prices are planning ranges, not offers. Final scope and
            pricing are confirmed before paid work begins.
          </p>
        </Reveal>
      </section>

      <section className="closing-band">
        <Reveal as="div">
          <p className="section-index">THE SHORT VERSION</p>
          <h2>
            Tell us what is stuck. We will tell you honestly if we can help.
          </h2>
          <Link className="button primary" href="/start">
            Start a project <span>↗</span>
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
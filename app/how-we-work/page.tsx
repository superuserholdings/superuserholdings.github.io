import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Reveal } from "../components/reveal";
import { process, tiers, principles } from "../data/site";

export const metadata = {
  title: "How we work | Super User Holdings",
  description:
    "Four visible stages, honest checkpoints, and operating rules that keep a project accountable from Define to Launch.",
};

export default function HowWeWorkPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-hero section-shell">
        <Reveal as="div">
          <p className="section-index">HOW WE WORK</p>
          <h1>No mystery phase. No disappearing build.</h1>
          <p className="page-lede">
            Every project moves through four visible stages with working
            evidence at each checkpoint. You always know what is being built,
            what it costs, and who is accountable for it.
          </p>
        </Reveal>
      </section>

      <section className="process section-shell" id="process">
        <Reveal as="div" className="process-intro">
          <p className="section-index">THE DELIVERY SYSTEM</p>
          <h2>Four stages, straight through.</h2>
          <p>
            The stages never skip around. If something is not proven, it does
            not launch.
          </p>
        </Reveal>
        <div className="process-list">
          {process.map((step, index) => (
            <Reveal as="div" className="process-step" key={step.number} delay={index * 60}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="tiers section-shell">
        <Reveal as="div" className="section-heading compact">
          <div>
            <p className="section-index">RIGHT-SIZED DELIVERY</p>
            <h2>A clear level for every stage.</h2>
          </div>
        </Reveal>
        <div className="tier-grid">
          {tiers.map((tier, index) => (
            <Reveal
              key={tier.name}
              delay={index * 70}
              as="article"
            >
              <div className={`tier ${tier.featured ? "featured" : ""}`}>
                {tier.featured && <span className="recommended">MOST COMMON</span>}
                <h3>{tier.name}</h3>
                <p>{tier.description}</p>
                <small>{tier.details}</small>
                <Link href="/start">
                  Discuss this level <span>→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="principles section-shell">
        <div className="principles-card">
          <Reveal as="div">
            <p className="section-index">OUR OPERATING RULES</p>
            <h2>Useful by design. Accountable by default.</h2>
          </Reveal>
          <div className="principle-grid">
            {principles.map((principle) => (
              <div key={principle.number}>
                <strong>{principle.number}</strong>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-band">
        <Reveal as="div">
          <p className="section-index">READY WHEN YOU ARE</p>
          <h2>If the process sounds like it fits, the next step is one form away.</h2>
          <Link className="button primary" href="/start">
            Start a project <span>↗</span>
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
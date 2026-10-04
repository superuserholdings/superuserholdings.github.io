import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Reveal } from "../components/reveal";
import { principles } from "../data/site";

export const metadata = {
  title: "Company | Super User Holdings",
  description:
    "Why Super User Holdings is building Supercore OS: trustworthy AI infrastructure with a hardware-enforced off switch, built for the decade ahead.",
};

export default function CompanyPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-hero section-shell">
        <Reveal as="div">
          <p className="section-index">THE COMPANY</p>
          <h1>AI is about to run everything. Somebody has to build the off switch.</h1>
          <p className="page-lede">
            Super User Holdings is a technology company building the trustworthy
            foundation AI infrastructure needs. Our flagship is Supercore OS —
            a purpose-built operating system for AI workloads with a
            hardware-enforced off switch that no AI workload can disable or
            reach.
          </p>
        </Reveal>
      </section>

      <section className="process section-shell" id="story">
        <Reveal as="div" className="process-intro">
          <p className="section-index">WHY WE EXIST</p>
          <h2>The bet, stated plainly.</h2>
          <p>
            Every AI system on earth runs on infrastructure that was never
            designed for trust. Operating systems built for desktops, clouds
            built for web apps, and no serious answer to the simplest question:
            who can turn it off?
          </p>
        </Reveal>
        <div className="process-list">
          <Reveal as="div" className="process-step">
            <span>01</span>
            <h3>We sell trust, not models.</h3>
            <p>
              The labs can fight over the smartest model. We build the ground
              it stands on — the OS, the hypervisor, and the off switch. That
              ground is the same no matter whose model runs on it.
            </p>
          </Reveal>
          <Reveal as="div" className="process-step" delay={60}>
            <span>02</span>
            <h3>The off switch is the product.</h3>
            <p>
              The Safeguard is a hardware-enforced dead man&apos;s switch. It
              stays on only while a person says so — and no AI workload can
              disable it, reach it, or change its mind. It ships inside every
              deployment. It is never optional.
            </p>
          </Reveal>
          <Reveal as="div" className="process-step" delay={120}>
            <span>03</span>
            <h3>The law is coming this way.</h3>
            <p>
              Lawmakers in the UK have proposed kill switches for rogue AI
              systems. California and the US Congress are having the same
              conversation. Whoever ships compliant, trustworthy AI
              infrastructure first wins the next decade. We intend to be first.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="principles section-shell">
        <div className="principles-card">
          <Reveal as="div">
            <p className="section-index">WHAT WE STAND FOR</p>
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
          <p className="section-index">BUILD WITH US — OR FUND IT</p>
          <h2>
            If you run AI infrastructure, or you fund the people who build it,
            we should talk.
          </h2>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link className="button primary" href="/start?about=investor">
              Talk about investing <span>↗</span>
            </Link>
            <Link className="button quiet" href="/start?about=customer">
              Talk about deploying
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}

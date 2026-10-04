import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Reveal } from "../components/reveal";
import { ProductExplorer } from "../components/product-explorer";

export const metadata = {
  title: "Products | Super User Holdings",
  description:
    "Supercore OS, the AI hypervisor, and the Safeguard: AI infrastructure with trust built in from the start.",
};

const audiences = [
  {
    title: "Running AI workloads?",
    description:
      "Supercore OS is model-agnostic. Bring your own model, run it on infrastructure with a real off switch, and stop worrying about the foundation.",
    href: "/start?about=customer",
    action: "Talk to us about deploying",
  },
  {
    title: "Funding the trust layer?",
    description:
      "We are building the compliant, trustworthy AI infrastructure the next decade runs on. If you fund infrastructure bets, we should talk.",
    href: "/start?about=investor",
    action: "Talk to us about investing",
  },
];

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-hero section-shell">
        <Reveal as="div">
          <p className="section-index">WHAT WE BUILD</p>
          <h1>Three pieces. One idea.</h1>
          <p className="page-lede">
            An operating system for AI infrastructure, a hypervisor that pools
            the hardware, and a hardware-enforced off switch inside every
            deployment. Expand each one to see what it does and what it stands
            for.
          </p>
        </Reveal>
      </section>

      <section className="products section-shell">
        <ProductExplorer />
      </section>

      <section className="quiz-section section-shell">
        <div className="section-heading">
          <Reveal as="div">
            <p className="section-index">TWO WAYS IN</p>
            <h2>Which one are you?</h2>
          </Reveal>
          <p>
            The products serve two kinds of people. Pick yours and we will take
            it from there.
          </p>
        </div>
        <div className="path-grid">
          {audiences.map((audience, index) => (
            <Reveal key={audience.title} delay={index * 70}>
              <Link className="path-card" href={audience.href}>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
                <span>
                  {audience.action} <span>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="closing-band">
        <Reveal as="div">
          <p className="section-index">STILL NOT SURE</p>
          <h2>Just tell us what you are trying to do. We will figure out the rest.</h2>
          <Link className="button primary" href="/start">
            Get in touch <span>↗</span>
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}

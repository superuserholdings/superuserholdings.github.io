import Link from "next/link";
import { Reveal } from "../components/reveal";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { ContactForm } from "../contact-form";

export const metadata = {
  title: "Talk to us | Super User Holdings",
  description:
    "Running AI infrastructure or funding the trust layer? Get in touch with Super User Holdings.",
};

const paths = [
  {
    title: "I want to run AI on Supercore",
    description:
      "Tell us about your workloads and what trustworthy infrastructure would change for you.",
    about: "customer",
  },
  {
    title: "I want to invest",
    description:
      "Tell us who you are and what you fund. We read every note ourselves.",
    about: "investor",
  },
];

export default function StartPage() {
  return (
    <main>
      <SiteHeader />

      <section className="start section-shell">
        <Reveal as="div">
          <p className="section-index">TALK TO US</p>
          <h2>
            Two kinds of conversation.
            <br />
            <span>Pick yours.</span>
          </h2>
          <p className="start-lead">
            Whether you run AI workloads or fund the people building the trust
            layer, the next step is the same: a straight conversation. No pitch
            decks required to say hello.
          </p>
          <div className="path-grid">
            {paths.map((path) => (
              <Link
                key={path.about}
                className="path-card"
                href={`/start?about=${path.about}`}
              >
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <span>
                  Choose this path <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="start-card">
            <p>Fill this in, and it lands in our intake queue for owner review.</p>
            <ContactForm />
            <small>
              We review every intake by hand. Your information is not used for
              marketing lists and is never sold.
            </small>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}

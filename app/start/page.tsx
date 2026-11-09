import { Reveal } from "../components/reveal";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { ContactForm } from "../contact-form";

export const metadata = {
  title: "Start a project | Super User Holdings",
  description:
    "Tell us what is stuck in your business. We will be honest about whether we can help and what it would take.",
};

export default function StartPage() {
  return (
    <main>
      <SiteHeader />

      <section className="start section-shell">
        <Reveal as="div">
          <p className="section-index">START A PROJECT</p>
          <h2>
            Tell us what is stuck.
            <br />
            <span>We will tell you honestly if we can help.</span>
          </h2>
          <p className="start-lead">
            A good first conversation needs only three things. You do not need a
            polished pitch or a spec sheet. No payment or commitment is required
            to define the opportunity.
          </p>
          <ol className="start-list">
            <li>
              <span>01</span>
              <div>
                <strong>The result you want</strong>
                <small>Even a rough description is fine.</small>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>What is slowing you down today</strong>
                <small>The step that eats the most time or costs the most.</small>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Who needs to use the solution</strong>
                <small>Customers, your team, or just you for now.</small>
              </div>
            </li>
          </ol>
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
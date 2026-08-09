import Link from "next/link";
import { Reveal } from "../components/reveal";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata = {
  title: "Responsible Publishing | Super User Holdings",
  description:
    "How Super User Holdings reviews, verifies, and maintains what it publishes.",
};

export default function ResponsiblePublishing() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero section-shell">
        <Reveal as="div">
          <p className="section-index">PUBLISHING STANDARD</p>
          <h1>Clear work. Careful publishing.</h1>
          <p className="page-lede">
            We publish information only after it has been reviewed for
            accuracy, usefulness, and the right audience. If we are not sure it
            is right, we say so before sending it out into the world.
          </p>
        </Reveal>
      </section>

      <section className="section-shell" style={{ paddingTop: 0, maxWidth: 900 }}>
        <Reveal as="div" className="principles-card">
          <h2>What that means in practice.</h2>
          <ul className="publish-list">
            <li>We start with a clear purpose and a bounded scope.</li>
            <li>We review public information before it is released.</li>
            <li>We verify the live result after publication.</li>
            <li>We keep a documented rollback path for significant changes.</li>
            <li>
              Demonstrations use synthetic or clearly labeled placeholder data.
              We do not invent client results.
            </li>
          </ul>
        </Reveal>
        <p className="publish-note">
          Good publishing is not just posting. It is making information
          dependable enough for people to act on.
        </p>
        <p>
          <Link className="nav-cta" href="/">
            Return to Super User Holdings
          </Link>
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
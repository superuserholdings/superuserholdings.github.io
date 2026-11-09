import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Reveal } from "../components/reveal";
import { ProductExplorer } from "../components/product-explorer";
import { ProductQuiz } from "../components/product-quiz";

export const metadata = {
  title: "Products | Super User Holdings",
  description:
    "Six ways we help businesses move: websites, apps, automations, AI assistants, dashboards, and ongoing care.",
};

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-hero section-shell">
        <Reveal as="div">
          <p className="section-index">WHAT WE BUILD</p>
          <h1>Six ways we can help.</h1>
          <p className="page-lede">
            Every product here starts with one focused outcome. Pick the one
            that matches the problem you are staring at, and each card will tell
            you what it includes and where it starts. Prices are planning
            ranges, not quotes.
          </p>
        </Reveal>
      </section>

      <section className="products section-shell">
        <ProductExplorer />
        <Reveal>
          <p className="pricing-note">
            Starting prices are planning ranges, not offers. Final scope and
            pricing are confirmed before paid work begins.
          </p>
        </Reveal>
      </section>

      <section className="quiz-section section-shell">
        <div className="section-heading">
          <Reveal as="div">
            <p className="section-index">NOT SURE WHERE TO START?</p>
            <h2>Answer three questions.</h2>
          </Reveal>
          <p>
            If you are not sure which product fits, this takes thirty seconds.
            It is not a personality test or a lead magnet. It just points you at
            the most useful place to begin.
          </p>
        </div>
        <Reveal>
          <div className="quiz-card">
            <ProductQuiz />
          </div>
        </Reveal>
      </section>

      <section className="closing-band">
        <Reveal as="div">
          <p className="section-index">STILL NOT SURE</p>
          <h2>Just tell us what is stuck. We will figure out the rest.</h2>
          <Link className="button primary" href="/start">
            Start a project <span>↗</span>
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
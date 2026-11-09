import Link from "next/link";
import { Reveal } from "../components/reveal";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata = {
  title: "Privacy Policy | Super User Holdings",
  description:
    "How Super User Holdings handles information collected through its website and approved social publishing tools.",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero section-shell">
        <Reveal as="div">
          <p className="section-index">PRIVACY POLICY</p>
          <h1>Privacy, stated plainly.</h1>
          <p className="page-lede">
            Super User Holdings uses information only to operate our website,
            communicate about our services, and manage approved business social
            publishing. We do not sell personal information.
          </p>
          <p className="publish-note">Last updated: September 5, 2026</p>
        </Reveal>
      </section>

      <section className="section-shell" style={{ paddingTop: 0, maxWidth: 900 }}>
        <Reveal as="div" className="principles-card">
          <h2>Information we handle</h2>
          <p>
            We may receive contact details and messages that you choose to send
            us, basic website analytics, and account data made available when a
            business authorizes one of our approved integrations.
          </p>

          <h2>How we use it</h2>
          <p>
            We use this information to respond to requests, deliver and improve
            services, secure our systems, measure website performance, and
            schedule or publish content that an authorized account has approved.
          </p>

          <h2>Social-platform integrations</h2>
          <p>
            Our approved publishing tools may access only the permissions an
            account owner grants, such as creating scheduled posts, publishing
            content, and reading that account&apos;s own content or analytics. We
            use that access solely to provide the requested publishing and
            reporting functions. Access can be revoked through the applicable
            platform or by contacting us.
          </p>

          <h2>Sharing and retention</h2>
          <p>
            We share information only with service providers needed to operate
            our services, with platforms you authorize, when required by law,
            or as part of a business transfer. We retain information only as
            long as reasonably necessary for these purposes, security, and
            legal recordkeeping.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask about, correct, or request deletion of personal
            information we hold, subject to applicable legal obligations. You
            can also withdraw a social-platform authorization at any time.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions or requests, contact us at
            {" "}
            <a href="mailto:admin@superuserholdings.com">
              admin@superuserholdings.com
            </a>.
          </p>
        </Reveal>
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

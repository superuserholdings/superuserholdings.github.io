import { ContactForm } from "./contact-form";

const products = [
  {
    code: "01",
    name: "SuperSites",
    tagline: "Websites built to earn attention—and action.",
    description:
      "Fast, responsive business websites with clear messaging, conversion paths, analytics readiness, and a maintainable foundation.",
    from: "$1,500",
    accent: "signal",
    features: ["Strategy & copy structure", "Responsive build", "Launch support"],
  },
  {
    code: "02",
    name: "SuperApps",
    tagline: "Purpose-built software for the way your business works.",
    description:
      "Customer portals, internal tools, SaaS MVPs, and workflow applications designed around a real operational outcome.",
    from: "$5,000",
    accent: "violet",
    features: ["Product blueprint", "Custom application", "Validated handoff"],
  },
  {
    code: "03",
    name: "SuperAutomations",
    tagline: "Move the work without moving the busywork.",
    description:
      "Reliable automations that connect the tools you already use, reduce repeat entry, and keep the right people informed.",
    from: "$1,250",
    accent: "aqua",
    features: ["Workflow mapping", "Tool integrations", "Failure visibility"],
  },
  {
    code: "04",
    name: "SuperAgents",
    tagline: "AI agents with a job, a boundary, and an owner.",
    description:
      "Customer support, sales, research, and internal knowledge agents grounded in your information and designed for accountable use.",
    from: "$3,500",
    accent: "gold",
    features: ["Knowledge grounding", "Human approval gates", "Evaluation & monitoring"],
  },
  {
    code: "05",
    name: "SuperDashboards",
    tagline: "See the business clearly enough to act.",
    description:
      "Focused dashboards that turn scattered operational data into decisions, alerts, and a shared view of what matters now.",
    from: "$2,500",
    accent: "rose",
    features: ["Metric definition", "Data connections", "Decision-ready views"],
  },
  {
    code: "06",
    name: "SuperCare",
    tagline: "Keep what you build healthy and improving.",
    description:
      "Ongoing maintenance, monitoring, support, and measured improvements for the systems we deliver together.",
    from: "$300/mo",
    accent: "blue",
    features: ["Monitoring", "Maintenance", "Monthly improvement cycle"],
  },
];

const tiers = [
  {
    name: "Starter",
    description: "A focused outcome with a fast path to value.",
    details: "Best for one clear workflow, page, automation, or proof of concept.",
  },
  {
    name: "Professional",
    description: "A complete business solution ready for daily use.",
    details: "Best for connected workflows, multiple roles, and operational handoff.",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "A governed system designed for scale and complexity.",
    details: "Best for advanced integrations, security needs, and phased rollout.",
  },
];

const process = [
  ["01", "Define", "We turn the business outcome into a bounded, testable build plan."],
  ["02", "Build", "We create the smallest complete version, using reusable foundations where they fit."],
  ["03", "Prove", "We test the real workflow, document the result, and resolve what fails."],
  ["04", "Launch", "We release with a clear handoff, visibility, and an improvement path."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Super User Holdings home">
          <img src="/brand/emblem.png" alt="" />
          <span>
            <strong>SUPER USER</strong>
            <small>HOLDINGS</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#products">Products</a>
          <a href="#process">How we build</a>
          <a href="/responsible-publishing">Publishing standard</a>
          <a href="#start" className="nav-cta">Start a project</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Systems for businesses ready to move</p>
          <h1>
            Build what your business
            <em>should already have.</em>
          </h1>
          <p className="hero-lede">
            Websites, applications, automations, AI agents, and decision systems—designed as one practical product ecosystem and built around measurable work.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#products">Explore the product system <span>↗</span></a>
            <a className="button quiet" href="#process">See how delivery works</a>
          </div>
        </div>
        <div className="hero-console" aria-label="Super User operating system overview">
          <div className="console-top">
            <span className="console-label">SUH / OPERATING SYSTEM</span>
            <span className="live"><i /> READY</span>
          </div>
          <div className="console-core">
            <div className="core-orbit orbit-one" />
            <div className="core-orbit orbit-two" />
            <div className="core-mark">SU</div>
            <div className="node node-a"><b>01</b><span>ATTRACT</span></div>
            <div className="node node-b"><b>02</b><span>OPERATE</span></div>
            <div className="node node-c"><b>03</b><span>UNDERSTAND</span></div>
          </div>
          <div className="console-stats">
            <div><span>PRODUCT FAMILIES</span><strong>06</strong></div>
            <div><span>DELIVERY MODEL</span><strong>END-TO-END</strong></div>
            <div><span>OWNERSHIP</span><strong>YOURS</strong></div>
          </div>
        </div>
        <div className="hero-proof">
          <span>One accountable partner</span>
          <span>Clear scope and checkpoints</span>
          <span>Reusable, maintainable delivery</span>
        </div>
      </section>

      <section className="manifesto section-shell">
        <p className="section-index">00 / WHY</p>
        <div>
          <h2>Technology should make the work <span>more understandable.</span></h2>
          <p>We combine product thinking, software delivery, automation, and accountable AI to replace scattered fixes with systems people can actually operate.</p>
        </div>
      </section>

      <section className="products section-shell" id="products">
        <div className="section-heading">
          <div>
            <p className="section-index">01 / PRODUCT SYSTEM</p>
            <h2>Six ways to move the business forward.</h2>
          </div>
          <p>Start with one focused outcome. Expand into a connected operating system as the value becomes clear.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className={`product-card ${product.accent}`} key={product.name}>
              <div className="product-top">
                <span>{product.code}</span>
                <span className="product-pulse" aria-hidden="true" />
              </div>
              <h3>{product.name}</h3>
              <h4>{product.tagline}</h4>
              <p>{product.description}</p>
              <ul>
                {product.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <div className="product-bottom">
                <span>Starting at</span>
                <strong>{product.from}</strong>
              </div>
            </article>
          ))}
        </div>
        <p className="pricing-note">Starting prices are planning ranges, not offers. Final scope and pricing are confirmed before paid work begins.</p>
      </section>

      <section className="tiers section-shell">
        <div className="section-heading compact">
          <div>
            <p className="section-index">02 / RIGHT-SIZED DELIVERY</p>
            <h2>A clear level for every stage.</h2>
          </div>
        </div>
        <div className="tier-grid">
          {tiers.map((tier) => (
            <article className={tier.featured ? "tier featured" : "tier"} key={tier.name}>
              {tier.featured && <span className="recommended">MOST COMMON</span>}
              <h3>{tier.name}</h3>
              <p>{tier.description}</p>
              <small>{tier.details}</small>
              <a href="#start">Discuss this level <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-shell" id="process">
        <div className="process-intro">
          <p className="section-index">03 / DELIVERY SYSTEM</p>
          <h2>From idea to operating system.</h2>
          <p>No mystery phase. No disappearing build. Every engagement moves through four visible stages with working evidence at each checkpoint.</p>
        </div>
        <div className="process-list">
          {process.map(([number, title, description]) => (
            <div className="process-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="principles section-shell">
        <div className="principles-card">
          <p className="section-index">04 / OUR OPERATING RULES</p>
          <h2>Useful by design.<br />Accountable by default.</h2>
          <div className="principle-grid">
            <div><strong>01</strong><h3>Outcome first</h3><p>We define what must change in the business before choosing the technology.</p></div>
            <div><strong>02</strong><h3>Human authority</h3><p>Important commitments stay visible and accountable to the people who own them.</p></div>
            <div><strong>03</strong><h3>Evidence over theater</h3><p>Working software, clear tests, and honest limitations matter more than impressive claims.</p></div>
            <div><strong>04</strong><h3>Built to continue</h3><p>Documentation, reusable components, and care plans keep the result useful after launch.</p></div>
          </div>
        </div>
      </section>

      <section className="start section-shell" id="start">
        <div>
          <p className="section-index">05 / START</p>
          <h2>Bring us the bottleneck.<br /><span>We’ll shape the system.</span></h2>
        </div>
        <div className="start-card">
          <p>A strong first conversation needs only three things:</p>
          <ol>
            <li><span>01</span>The result you want</li>
            <li><span>02</span>What is slowing it down today</li>
            <li><span>03</span>Who needs to use the solution</li>
          </ol>
          <ContactForm />
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/brand/emblem.png" alt="" />
          <div><strong>SUPER USER HOLDINGS</strong><span>Systems that make capability visible.</span></div>
        </div>
        <div className="footer-links">
          <a href="#products">Products</a>
          <a href="#process">Process</a>
          <a href="/responsible-publishing">Publishing standard</a>
          <a href="#start">Start</a>
        </div>
        <p>© 2026 Super User Holdings. Built with purpose.</p>
      </footer>
    </main>
  );
}

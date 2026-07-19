import Link from "next/link";

export const metadata = {
  title: "Responsible Publishing | Super User Holdings",
  description: "How Super User Holdings reviews, verifies, and maintains public information.",
};

export default function ResponsiblePublishing() {
  return (
    <main className="section-shell" style={{ paddingTop: "8rem", paddingBottom: "8rem", maxWidth: "900px" }}>
      <p className="section-index">PUBLISHING STANDARD</p>
      <h1>Clear work. Careful publishing.</h1>
      <p>
        Super User Holdings publishes information only after it has been reviewed for accuracy, usefulness, and the right audience.
      </p>
      <div className="principles-card" style={{ marginTop: "2.5rem" }}>
        <h2>What that means in practice.</h2>
        <ul>
          <li>We start with a clear purpose and a bounded scope.</li>
          <li>We review public information before it is released.</li>
          <li>We verify the live result after publication.</li>
          <li>We keep a documented rollback path for significant changes.</li>
        </ul>
      </div>
      <p style={{ marginTop: "2.5rem" }}>
        Good publishing is not just posting. It is making information dependable enough for people to act on.
      </p>
      <p><Link href="/">Return to Super User Holdings</Link></p>
    </main>
  );
}

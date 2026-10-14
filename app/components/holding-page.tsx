export function HoldingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        background: "#101218",
        color: "#f4f5f7",
        fontFamily: "Arial, Helvetica, sans-serif",
        textAlign: "center",
      }}
    >
      <section>
        <p
          style={{
            margin: "0 0 1.5rem",
            color: "#aeb5c2",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
          }}
        >
          SUPER USER HOLDINGS
        </p>
        <h1 style={{ margin: "0", fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
          Our website is being updated.
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#aeb5c2", fontSize: "1.1rem" }}>
          Please check back soon.
        </p>
      </section>
    </main>
  );
}

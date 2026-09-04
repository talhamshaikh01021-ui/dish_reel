"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);
  return (
    <main id="content" className="section">
      <div className="container" style={{ maxWidth: "720px" }}>
        <p className="eyebrow">Something went wrong</p>
        <h1>App Error</h1>
        <pre
          style={{
            marginTop: "16px",
            whiteSpace: "pre-wrap",
            fontSize: "13px",
            color: "var(--muted)",
          }}
        >
          {error?.stack || error?.message || String(error)}
        </pre>
        <button className="btn btn-primary" style={{ marginTop: "16px" }} onClick={reset}>
          Try again
        </button>
      </div>
    </main>
  );
}

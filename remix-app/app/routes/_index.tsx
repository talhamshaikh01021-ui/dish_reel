export default function IndexPage() {
  return (
    <>
      <header className="topnav"><div className="container topnav-inner">
  <span className="logo"><span className="mark">C</span>CollabTable</span>
  <span className="meta">Prototype · 2026</span>
</div></header>

<main id="content">
  <section className="section" data-od-id="launcher-hero">
    <div className="container">
      <p className="eyebrow">Product Prototype · Screen Index</p>
      <h1>Where restaurants meet the<br />right creators.</h1>
      <p className="lead" style={{ 'marginTop': '16px' }}>A closed two-sided marketplace for restaurant × influencer collaborations — discovery, negotiation, contracts, escrow payments and performance, with contact details always kept off-platform.</p>
    </div>
  </section>

  <section className="section" data-od-id="flow">
    <div className="container">
      <p className="eyebrow" style={{ 'marginBottom': '24px' }}>The Core Flow</p>
      <div className="grid grid-nav">
        <div className="card"><div className="num" style={{ 'color': 'var(--accent)', 'fontSize': '13px' }}>01</div><h2 style={{ 'marginTop': '10px' }}>Discover</h2><p className="nv">AI match & filtered search on both sides. Identities are masked — no phone, no email, no clickable handles.</p></div>
        <div className="card"><div className="num" style={{ 'color': 'var(--accent)', 'fontSize': '13px' }}>02</div><h2 style={{ 'marginTop': '10px' }}>Negotiate & Contract</h2><p className="nv">Structured offers, counter-offers, and an auto-generated agreement signed in-platform.</p></div>
        <div className="card"><div className="num" style={{ 'color': 'var(--accent)', 'fontSize': '13px' }}>03</div><h2 style={{ 'marginTop': '10px' }}>Pay, Deliver, Review</h2><p className="nv">Escrow-protected payments, in-app messaging with contact interception, and verified reviews.</p></div>
      </div>
    </div>
  </section>

  <section className="section" data-od-id="screens" style={{ 'borderTop': '1px solid var(--border)' }}>
    <div className="container">
      <p className="eyebrow" style={{ 'marginBottom': '24px' }}>Screens</p>
      <div className="grid grid-nav">
        <a className="card" href="landing"><h2 style={{ 'fontSize': '18px' }}>Landing page <span className="arrow">→</span></h2><p className="nv">Hero, value props, how it works, roles</p><span className="tag" style={{ 'marginTop': '12px' }}>Marketing</span></a>
        <a className="card" href="influencer-onboarding"><h2 style={{ 'fontSize': '18px' }}>Influencer onboarding <span className="arrow">→</span></h2><p className="nv">Basic info · social verify · preferences · pricing · availability</p><span className="tag" style={{ 'marginTop': '12px' }}>Flow</span></a>
        <a className="card" href="restaurant-onboarding"><h2 style={{ 'fontSize': '18px' }}>Restaurant onboarding <span className="arrow">→</span></h2><p className="nv">Details · verification · budget</p><span className="tag" style={{ 'marginTop': '12px' }}>Flow</span></a>
        <a className="card" href="restaurant-dashboard"><h2 style={{ 'fontSize': '18px' }}>Restaurant dashboard <span className="arrow">→</span></h2><p className="nv">Campaigns · budget · recommended creators · active campaigns</p><span className="tag" style={{ 'marginTop': '12px' }}>Dashboard</span></a>
        <a className="card" href="influencer-dashboard"><h2 style={{ 'fontSize': '18px' }}>Influencer dashboard <span className="arrow">→</span></h2><p className="nv">Available campaigns · applications · earnings · upcoming</p><span className="tag" style={{ 'marginTop': '12px' }}>Dashboard</span></a>
        <a className="card" href="discover-creators"><h2 style={{ 'fontSize': '18px' }}>Discover creators <span className="arrow">→</span></h2><p className="nv">Restaurant → influencer discovery, filters, AI match</p><span className="tag" style={{ 'marginTop': '12px' }}>Discovery</span></a>
        <a className="card" href="discover-restaurants"><h2 style={{ 'fontSize': '18px' }}>Discover restaurants <span className="arrow">→</span></h2><p className="nv">Influencer → campaign discovery, filters</p><span className="tag" style={{ 'marginTop': '12px' }}>Discovery</span></a>
        <a className="card" href="campaign-detail"><h2 style={{ 'fontSize': '18px' }}>Campaign detail <span className="arrow">→</span></h2><p className="nv">Campaign page, apply, application management</p><span className="tag" style={{ 'marginTop': '12px' }}>Apply</span></a>
        <a className="card" href="deal-room"><h2 style={{ 'fontSize': '18px' }}>Deal room <span className="arrow">→</span></h2><p className="nv">Negotiation, contract, escrow, moderated chat</p><span className="tag" style={{ 'marginTop': '12px' }}>Core</span></a>
      </div>
    </div>
  </section>

  <section className="section" data-od-id="privacy" style={{ 'borderTop': '1px solid var(--border)' }}>
    <div className="container" style={{ 'maxWidth': '720px' }}>
      <p className="eyebrow">Guarding Principle</p>
      <h2 style={{ 'fontSize': '22px' }}>Contact details never leave the platform.</h2>
      <p className="lead" style={{ 'marginTop': '10px' }}>A message safety layer intercepts phone numbers, emails, handles and URLs before they reach the other party, so discovery, negotiation and payment all stay inside CollabTable.</p>
    </div>
  </section>
</main>

<footer className="section" data-od-id="footer" style={{ 'borderTop': '1px solid var(--border)' }}>
  <div className="container" style={{ 'display': 'flex', 'justifyContent': 'space-between', 'color': 'var(--muted)', 'fontSize': '13px', 'flexWrap': 'wrap', 'gap': '12px' }}>
    <span>CollabTable · working prototype, India</span>
    <span className="meta">No direct contact info is surfaced on any screen</span>
  </div>
</footer>

<button className="theme-toggle" id="themeToggle" type="button" aria-label="Toggle colour theme">
  <span id="themeLabel">Dark</span>
</button>
    </>
  );
}
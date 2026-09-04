export default function Landing() {
  return (
    <>
      <header className="topnav" data-od-id="topnav">
  <div className="container topnav-inner">
    <span className="logo"><span className="mark">C</span>CollabTable</span>
    <nav>
      <a href="#how">How it works</a>
      <a href="#protect">Safety</a>
      <a href="#roles">For creators</a>
    </nav>
    <a className="btn btn-ghost" href="#">Login</a>
  </div>
</header>

<main id="content">
  <section className="section hero" data-od-id="hero">
    <div className="container" style={{ 'textAlign': 'center', 'maxWidth': '760px', 'marginInline': 'auto' }}>
      <p className="eyebrow">Restaurant × Creator Marketplace</p>
      <h1>Where Restaurants Meet the Right Creators.</h1>
      <p className="lead" style={{ 'margin': '20px auto 32px' }}>Discover, collaborate, manage campaigns and pay — all in one place. No WhatsApp threads, no manual Instagram hunts, no uncertain payments.</p>
      <div className="hero-cta" style={{ 'justifyContent': 'center' }}>
        <a className="btn btn-primary btn-lg" href="influencer-onboarding">I'm an Influencer</a>
        <a className="btn btn-dark btn-lg" href="restaurant-onboarding">I'm a Restaurant</a>
        <a className="btn btn-ghost" href="#">Login</a>
      </div>
      <p className="meta" style={{ 'marginTop': '24px' }}>Free for creators · initiatives span Mumbai to Bengaluru · payments protected by escrow</p>
    </div>
  </section>

  <section className="section" data-od-id="features" style={{ 'borderTop': '1px solid var(--border)' }}>
    <div className="container stack" style={{ 'gap': '48px' }}>
      <div style={{ 'maxWidth': '42ch' }}>
        <p className="eyebrow">Why CollabTable</p>
        <h2>Discovery with real structure — and real protection.</h2>
      </div>
      <div className="grid-3">
        <div className="feature card">
          <div className="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg></div>
          <h3>Discover the right match</h3>
          <p>Search restaurants and creators by location, cuisine, budget, audience and niche — or let AI match you from your brief.</p>
        </div>
        <div className="feature card">
          <div className="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3v4m0 10v4M3 12h4m10 0h4"></path><circle cx="12" cy="12" r="3"></circle></svg></div>
          <h3>Secure contact, always</h3>
          <p>Messages and deals happen in-platform. Phone numbers, emails and handles are intercepted before either side sees them.</p>
        </div>
        <div className="feature card">
          <div className="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3v18M3 12h18"></path></svg></div>
          <h3>Escrow-protected payouts</h3>
          <p>Fund a campaign, get paid after milestone approval. Both sides are covered by a structured, traceable flow.</p>
        </div>
        <div className="feature card">
          <div className="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 7h16M4 12h10M4 17h16"></path></svg></div>
          <h3>Structured collaboration</h3>
          <p>From offer to counter-offer to a signed agreement, every step is defined — no more scattered WhatsApp negotiations.</p>
        </div>
        <div className="feature card">
          <div className="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 8v4l3 2"></path><circle cx="12" cy="12" r="8"></circle></svg></div>
          <h3>Track performance</h3>
          <p>Follow campaign status, deliverables and approvals in one live deal room per collaboration.</p>
        </div>
        <div className="feature card">
          <div className="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 17l5-5 4 4 7-8"></path></svg></div>
          <h3>Verified reviews</h3>
          <p>Both sides review only after a completed collaboration, so ratings reflect real work.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="section" data-od-id="stats">
    <div className="container">
      <p className="eyebrow" style={{ 'marginBottom': '40px' }}>Two-sided by design · 2026</p>
      <div className="grid-3">
        <div className="stat"><div className="stat-num num">2<span className="stat-unit" style={{ 'fontSize': '0.5em', 'opacity': '.6' }}>sides</span></div><p className="stat-label">Restaurants publish campaigns; creators apply, negotiate and deliver — both inside one closed loop.</p></div>
        <div className="stat"><div className="stat-num num">0<span className="stat-unit" style={{ 'fontSize': '0.5em', 'opacity': '.6' }}>contact</span></div><p className="stat-label">Phone numbers, emails and handles are surfaced. The message safety layer blocks them before delivery.</p></div>
        <div className="stat"><div className="stat-num num">3<span className="stat-unit" style={{ 'fontSize': '0.5em', 'opacity': '.6' }}>steps</span></div><p className="stat-label">Discover → Negotiate & contract → Pay, deliver & review. A clear path end to end.</p></div>
      </div>
    </div>
  </section>

  <section className="section" data-od-id="how" id="how">
    <div className="container">
      <div className="row-between" style={{ 'marginBottom': '44px' }}>
        <div><p className="eyebrow">The Flow</p><h2>How a collaboration happens</h2></div>
      </div>
      <div className="grid-2">
        <div className="stack" style={{ 'gap': '28px' }}>
          <div className="step"><span className="idx">01</span><div><h3>Discover</h3><p style={{ 'color': 'var(--muted)', 'margin': '6px 0 0' }}>Restaurants publish campaigns and shortlist creators; creators search campaigns or get invited. Identities stay masked — no direct contact.</p></div></div>
          <div className="step"><span className="idx">02</span><div><h3>Negotiate & contract</h3><p style={{ 'color': 'var(--muted)', 'margin': '6px 0 0' }}>Structured offers and counter-offers replace open chat. Once agreed, an agreement is generated and signed by both parties in-platform.</p></div></div>
          <div className="step"><span className="idx">03</span><div><h3>Pay, deliver & review</h3><p style={{ 'color': 'var(--muted)', 'margin': '6px 0 0' }}>Restaurant funds the deal, creator delivers, restaurant approves, funds release. Both sides leave a verified review.</p></div></div>
        </div>
        <div className="card" style={{ 'padding': '20px' }}>
          <div className="split" style={{ 'gridTemplateColumns': '1fr auto 1fr', 'gap': '28px', 'display': 'grid' }}>
            <div>
              <p className="eyebrow" style={{ 'marginBottom': '10px' }}>Restaurant</p>
              <div style={{ 'fontSize': '13px', 'lineHeight': '2', 'color': 'var(--fg)' }}>
                <div>Discover → Invite</div><div>→ Negotiate</div><div>→ Contract</div><div>→ Pay</div><div>→ Campaign</div><div>→ Verify</div><div>→ Review</div>
              </div>
            </div>
            <div className="sec-sep"></div>
            <div>
              <p className="eyebrow" style={{ 'marginBottom': '10px' }}>Influencer</p>
              <div style={{ 'fontSize': '13px', 'lineHeight': '2', 'color': 'var(--fg)' }}>
                <div>Discover → Apply</div><div>→ Negotiate</div><div>→ Contract</div><div>→ Complete</div><div>→ Get paid</div><div>→ Review</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section" data-od-id="protect" id="protect">
    <div className="container">
      <div style={{ 'maxWidth': '46ch', 'marginBottom': '40px' }}>
        <p className="eyebrow">Message Safety Layer</p>
        <h2>We keep the conversation on CollabTable.</h2>
        <p className="lead" style={{ 'fontSize': '17px', 'marginTop': '12px' }}>Every message passes a moderation layer that catches PII, social handles and URLs before the other party sees them.</p>
      </div>
      <div className="card" style={{ 'background': 'var(--surface)' }}>
        <div className="row-between" style={{ 'marginBottom': '16px' }}><span className="meta">BLOCKED · WOULD-BE SHARED CONTACT</span><span className="pill">Auto-replaced</span></div>
        <div className="ph-img wide" style={{ 'aspectRatio': 'auto', 'minHeight': '120px', 'justifyContent': 'flex-start', 'padding': '24px', 'textAlign': 'left', 'background': 'var(--accent-soft)', 'border': '1px solid var(--accent)', 'color': 'var(--fg)', 'fontFamily': 'var(--font-body)', 'fontSize': '15px' }}>
          <div>
            <div style={{ 'color': 'var(--muted)', 'fontSize': '12px', 'marginBottom': '6px' }}>Creator tried to send</div>
            <div style={{ 'fontWeight': '600', 'letterSpacing': '-0.01em' }}>"WhatsApp me at 98201 45678"</div>
            <div className="rule" style={{ 'margin': '18px 0' }}></div>
            <div style={{ 'color': 'var(--muted)', 'fontSize': '12px', 'marginBottom': '6px' }}>CollabTable delivered instead</div>
            <div style={{ 'fontWeight': '600', 'color': 'var(--accent)' }}>⚠️ For your security, direct contact information cannot be shared. Please continue the conversation through CollabTable.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section" data-od-id="roles" id="roles" style={{ 'borderTop': '1px solid var(--border)' }}>
    <div className="container">
      <p className="eyebrow" style={{ 'marginBottom': '36px' }}>Who it's for</p>
      <div className="grid-2">
        <div className="card">
          <h3>For creators</h3>
          <p style={{ 'color': 'var(--muted)', 'margin': '10px 0 20px' }}>Showcase your audience and pricing, get discovered and invited, and get paid on time.</p>
          <ul style={{ 'listStyle': 'none', 'padding': '0', 'margin': '0 0 24px', 'fontSize': '14.5px', 'color': 'var(--fg)' }}>
            <li style={{ 'display': 'flex', 'gap': '10px', 'padding': '7px 0' }}>· Discover paid & complimentary campaigns by cuisine, budget and date</li>
            <li style={{ 'display': 'flex', 'gap': '10px', 'padding': '7px 0' }}>· Set your own pricing per deliverable, negotiable or fixed</li>
            <li style={{ 'display': 'flex', 'gap': '10px', 'padding': '7px 0' }}>· Escrow-protected earnings, released after approval</li>
          </ul>
          <a className="btn btn-primary" href="influencer-onboarding">Join as an Influencer</a>
        </div>
        <div className="card">
          <h3>For restaurants</h3>
          <p style={{ 'color': 'var(--muted)', 'margin': '10px 0 20px' }}>Find the right creators for footfall, launches and campaigns — without a manual Instagram hunt.</p>
          <ul style={{ 'listStyle': 'none', 'padding': '0', 'margin': '0 0 24px', 'fontSize': '14.5px', 'color': 'var(--fg)' }}>
            <li style={{ 'display': 'flex', 'gap': '10px', 'padding': '7px 0' }}>· Filter creators by audience, engagement, location and budget</li>
            <li style={{ 'display': 'flex', 'gap': '10px', 'padding': '7px 0' }}>· Run structured offers, counter-offers and signed agreements</li>
            <li style={{ 'display': 'flex', 'gap': '10px', 'padding': '7px 0' }}>· Fund campaigns in escrow — release only after you approve content</li>
          </ul>
          <a className="btn btn-dark" href="restaurant-onboarding">Join as a Restaurant</a>
        </div>
      </div>
    </div>
  </section>

  <section className="section" data-od-id="cta-strip" style={{ 'textAlign': 'center' }}>
    <div className="container" style={{ 'maxWidth': '600px' }}>
      <h2>Start your first collaboration.</h2>
      <p className="lead" style={{ 'margin': '16px auto 32px' }}>Free for creators. Restaurants pay per completed, approved campaign — no booking fee, no uncertainty.</p>
      <div className="hero-cta" style={{ 'justifyContent': 'center' }}>
        <a className="btn btn-primary btn-lg" href="influencer-onboarding">I'm an Influencer</a>
        <a className="btn btn-outline btn-lg" href="restaurant-onboarding">I'm a Restaurant</a>
      </div>
    </div>
  </section>
</main>

<footer className="pagefoot" data-od-id="footer">
  <div className="container row-between">
    <span>© 2026 CollabTable · Working prototype</span>
    <span className="meta">Contact details never surfaced · payments protected</span>
  </div>
</footer>

<button className="theme-toggle" id="themeToggle" type="button" aria-label="Toggle colour theme">
  <span id="themeLabel">Dark</span>
</button>
    </>
  );
}
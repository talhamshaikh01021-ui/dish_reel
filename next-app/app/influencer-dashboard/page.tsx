import ThemeToggle from "@/components/theme-toggle";

export default function InfluencerDashboard() {
  return (
    <>
      <div className="layout">
  <aside className="side" data-od-id="sidebar">
    <div className="logo"><span className="mark">C</span>CollabTable</div>
    <nav className="nav">
      <a className="on" href="#"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>Home</a>
      <a href="discover-restaurants"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>Discover</a>
      <a href="campaign-detail"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 12l2 2 4-4"></path><path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z"></path></svg>Applications <span className="ck">6</span></a>
      <a href="deal-room"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z"></path></svg>Messages</a>
      <a href="deal-room"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h10"></path></svg>Campaigns</a>
      <a href="deal-room"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="18" height="13" rx="2"></rect><path d="M3 10h18"></path></svg>Earnings</a>
      <a href="#"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"></path></svg>Reviews</a>
      <a href="#"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.5-2.3 1a7 7 0 0 0-2-1.2L14 2h-4l-.5 2.6a7 7 0 0 0-2 1.2L5 4.8 3 8.3l2 1.5A7 7 0 0 0 5 12l.1 1.2-2 1.5 2 3.5 2.3-1a7 7 0 0 0 2 1.2L10 22h4l.5-2.6a7 7 0 0 0 2-1.2l2.3 1 2-3.5-2-1.5c.1-.4.2-.8.2-1.2z"></path></svg>Profile</a>
    </nav>
  </aside>

  <main className="main" data-od-id="main">
    <div className="hello">
      <div className="avatar">A</div>
      <div>
        <p className="eyebrow">Welcome back</p>
        <h1>Good afternoon, Ananya</h1>
        <div className="handle">@ananya.eats · Food & Lifestyle · Mumbai</div>
      </div>
    </div>

    <div className="stats" data-od-id="influencer-stats">
      <div className="stat"><div className="lbl">Available campaigns</div><div className="val">24</div><div className="sub">14 match your niche</div></div>
      <div className="stat"><div className="lbl">Applications</div><div className="val">6</div><div className="sub">2 under review</div></div>
      <div className="stat"><div className="lbl">Active collaborations</div><div className="val">3</div><div className="sub">1 deliverable due</div></div>
      <div className="stat"><div className="lbl">Pending payments</div><div className="val">₹18,500</div><div className="sub acc">1 awaiting approval</div></div>
    </div>

    <div className="two">
      <div className="card" data-od-id="recommended-restaurants">
        <div className="hd"><h2>Recommended restaurants</h2><a href="discover-restaurants">View all</a></div>
        <div className="rest">
          <div className="av">SH</div>
          <div><div className="nm">Japanese Fine Dining</div><div className="de">Japanese · Fine dining · ₹20K–₹50K</div></div>
          <span className="budget">92% match</span>
        </div>
        <div className="rest">
          <div className="av">BB</div>
          <div><div className="nm">Premium Cocktail Bar</div><div className="de">Italian · Bar · ₹15K–₹30K</div></div>
          <span className="budget">86% match</span>
        </div>
        <div className="rest">
          <div className="av">CB</div>
          <div><div className="nm">All-day Café</div><div className="de">Café · ₹10K–₹20K</div></div>
          <span className="budget">81% match</span>
        </div>
        <a className="btn btn-outline" style={{ 'width': '100%', 'justifyContent': 'center', 'marginTop': '14px' }} href="discover-restaurants">Browse all campaigns</a>
      </div>

      <div className="card" data-od-id="upcoming">
        <div className="hd"><h2>Upcoming</h2></div>
        <div className="up">
          <div className="d"><div className="dd">07</div><div className="dm">PM</div></div>
          <div style={{ 'flex': '1' }}><div className="nm">Weekend Japanese Experience — Visit</div><div className="st">On-site shoot · address shared after shortlist · tomorrow</div></div>
          <span className="pill">On-site</span>
        </div>
        <div className="up">
          <div className="d"><div className="dd">11</div><div className="dm">AM</div></div>
          <div style={{ 'flex': '1' }}><div className="nm">New Tasting Menu — Reel shoot</div><div className="st">On-site shoot · address shared after shortlist · Sat</div></div>
          <span className="pill">Shoot</span>
        </div>
        <div className="up">
          <div className="d"><div className="dd">—</div><div className="dm">Due</div></div>
          <div style={{ 'flex': '1' }}><div className="nm">Submit 2 stories for delivery</div><div className="st">CollabTable · due in 3 days</div></div>
          <span className="pill">Due</span>
        </div>
      </div>
    </div>

    <div className="rule" data-od-id="trust-line"></div>
    <p className="meta" style={{ 'color': 'var(--muted)', 'fontSize': '12.5px' }}>Your contact details stay private. Restaurant names & exact addresses are revealed only after you're shortlisted — and contact stays in-platform throughout.</p>
  </main>
</div>

<ThemeToggle />
    </>
  );
}
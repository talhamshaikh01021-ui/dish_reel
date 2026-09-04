export default function RestaurantDashboard() {
  return (
    <>
      <div className="layout">
  <aside className="side" data-od-id="sidebar">
    <div className="logo"><span className="mark">C</span>CollabTable</div>
    <nav className="nav">
      <a className="on" href="#"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>Dashboard</a>
      <a href="discover-creators"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>Discover Creators</a>
      <a href="campaign-detail"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h10M4 17h16"></path></svg>Campaigns <span className="ck">5</span></a>
      <a href="deal-room"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z"></path></svg>Messages <span className="ck">4</span></a>
      <a href="deal-room"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h10"></path></svg>Contracts</a>
      <a href="deal-room"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="18" height="13" rx="2"></rect><path d="M3 10h18"></path></svg>Payments</a>
      <a href="#"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 20l12-12M14 5l5 5"></path></svg>Analytics</a>
      <a href="#"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"></path></svg>Reviews</a>
      <a href="#"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.5-2.3 1a7 7 0 0 0-2-1.2L14 2h-4l-.5 2.6a7 7 0 0 0-2 1.2L5 4.8 3 8.3l2 1.5A7 7 0 0 0 5 12l.1 1.2-2 1.5 2 3.5 2.3-1a7 7 0 0 0 2 1.2L10 22h4l.5-2.6a7 7 0 0 0 2-1.2l2.3 1 2-3.5-2-1.5c.1-.4.2-.8.2-1.2z"></path></svg>Settings</a>
    </nav>
  </aside>

  <main className="main" data-od-id="main">
    <div className="hello">
      <div>
        <p className="eyebrow">Welcome back</p>
        <h1>Good afternoon, Sakura House</h1>
      </div>
      <a className="btn btn-primary" href="campaign-detail">+ Create Campaign</a>
    </div>

    <div className="stats" data-od-id="campaign-stats">
      <div className="stat"><div className="lbl">Active campaigns</div><div className="val">5</div><div className="sub">2 launching this week</div></div>
      <div className="stat"><div className="lbl">Applications</div><div className="val">18</div><div className="sub">6 new today</div></div>
      <div className="stat"><div className="lbl">Completed</div><div className="val">12</div><div className="sub">all-time</div></div>
      <div className="stat"><div className="lbl">Avg. rating</div><div className="val">4.8</div><div className="sub">/ 5 across 12 reviews</div></div>
    </div>

    <div className="two">
      <div className="card" data-od-id="budget">
        <div className="hd"><h2>Campaign budget</h2><a href="#">Manage</a></div>
        <div className="row-between">
          <div>
            <div className="lbl" style={{ 'color': 'var(--muted)', 'fontSize': '13px' }}>Available</div>
            <div className="bill" style={{ 'fontSize': '30px', 'fontWeight': '700', 'letterSpacing': '-0.02em' }}>₹85,000</div>
          </div>
          <div style={{ 'textAlign': 'right' }}>
            <div className="lbl" style={{ 'color': 'var(--muted)', 'fontSize': '13px' }}>Allocated</div>
            <div className="bill" style={{ 'fontSize': '30px', 'fontWeight': '700', 'letterSpacing': '-0.02em', 'color': 'var(--accent)' }}>₹42,000</div>
          </div>
        </div>
        <div className="progress"><i style={{ 'width': '42%' }}></i></div>
        <div className="budget-lbl"><span>₹127,000 monthly budget</span><span>42% used</span></div>
      </div>

      <div className="card" data-od-id="recommended-creators">
        <div className="hd"><h2>Recommended creators</h2><a href="discover-creators">View all</a></div>
        <div className="creator">
          <div className="avatar">AK</div>
          <div><div className="nm">Creator Ananya</div><div className="de">Food · Mumbai · 42K followers · 5.8% eng.</div></div>
          <div className="badge"><div className="match">92% match</div></div>
        </div>
        <div className="creator">
          <div className="avatar">RS</div>
          <div><div className="nm">Creator Rohit</div><div className="de">Food · Mumbai · 61K followers · 6.4% eng.</div></div>
          <div className="badge"><div className="match">89% match</div></div>
        </div>
        <div className="creator">
          <div className="avatar">MT</div>
          <div><div className="nm">Creator Megha</div><div className="de">Lifestyle · Bandra · 28K followers · 7.1% eng.</div></div>
          <div className="badge"><div className="match">86% match</div></div>
        </div>
        <a className="btn btn-outline" style={{ 'width': '100%', 'justifyContent': 'center', 'marginTop': '14px' }} href="discover-creators">See all matches</a>
      </div>
    </div>

    <div className="card" style={{ 'marginTop': '16px' }} data-od-id="active-campaigns">
      <div className="hd"><h2>Active campaigns</h2><a href="campaign-detail">Manage applications</a></div>
      <div className="camp">
        <div style={{ 'flex': '1' }}><div className="cm">Weekend Japanese Experience</div><div className="st">Bandra · ₹20K–₹50K · 14 applications</div></div>
        <span className="pill live">Active</span>
      </div>
      <div className="camp">
        <div style={{ 'flex': '1' }}><div className="cm">New Summer Tasting Menu Launch</div><div className="st">Bandra · ₹30K · 6 applications</div></div>
        <span className="pill live">Active</span>
      </div>
      <div className="camp">
        <div style={{ 'flex': '1' }}><div className="cm">Weekday Footfall Boost — Stories</div><div className="st">Bandra · ₹18K · drafting</div></div>
        <span className="pill draft">Draft</span>
      </div>
      <div className="camp">
        <div style={{ 'flex': '1' }}><div className="cm">Sakura Brand Ambassadors</div><div className="st">Ongoing · 3 creators</div></div>
        <span className="pill soft">3 / 5</span>
      </div>
    </div>

    <div className="rule" data-od-id="trust-line"></div>
    <p className="meta" style={{ 'color': 'var(--muted)', 'fontSize': '12.5px' }}>Contact details are never shown on this dashboard. Invite creators, negotiate offers and sign agreements inside CollabTable.</p>
  </main>
</div>

<button className="theme-toggle" id="themeToggle" type="button" aria-label="Toggle colour theme">
  <span id="themeLabel">Dark</span>
</button>
    </>
  );
}
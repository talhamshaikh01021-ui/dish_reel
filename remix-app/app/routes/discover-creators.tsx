export default function DiscoverCreators() {
  return (
    <>
      <div className="layout">
  <aside className="side" data-od-id="sidebar">
    <div className="logo"><span className="mark">C</span>CollabTable</div>
    <nav className="nav">
      <a href="restaurant-dashboard"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>Dashboard</a>
      <a className="on" href="#"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>Discover Creators</a>
      <a href="campaign-detail"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h10M4 17h16"></path></svg>Campaigns</a>
      <a href="deal-room"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z"></path></svg>Messages</a>
      <a href="deal-room"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="18" height="13" rx="2"></rect><path d="M3 10h18"></path></svg>Payments</a>
    </nav>
    <div className="fil" data-od-id="filters">
      <div>
        <h4>Location</h4>
        <select className="select"><option>Mumbai</option><option>Pune</option><option>Delhi</option><option>Bengaluru</option></select>
      </div>
      <div>
        <h4>Followers</h4>
        <div className="chips"><button className="chip">1K–10K</button><button className="chip on">20K–100K</button><button className="chip">100K–500K</button><button className="chip">500K+</button></div>
      </div>
      <div>
        <h4>Engagement</h4>
        <div className="chips"><button className="chip">3%+</button><button className="chip on">5%+</button><button className="chip">8%+</button></div>
      </div>
      <div>
        <h4>Category</h4>
        <div className="chips"><button className="chip on">Food</button><button className="chip">Lifestyle</button><button className="chip">Travel</button><button className="chip">Fashion</button></div>
      </div>
      <div>
        <h4>Rate / campaign</h4>
        <select className="select"><option>₹10K–₹25K</option><option>₹25K–₹50K</option><option>₹50K–₹1L</option></select>
      </div>
      <div>
        <h4>Availability</h4>
        <div className="chips"><button className="chip on" style={{ 'display': 'inline-flex', 'alignItems': 'center', 'gap': '6px' }}><span style={{ 'width': '8px', 'height': '8px', 'borderRadius': '50%', 'background': 'var(--good)', 'display': 'inline-block' }}></span>Available</button><button className="chip">Limited</button></div>
      </div>
      <div>
        <h4>Audience city</h4>
        <div className="chips"><button className="chip on">Mumbai</button><button className="chip">Pune</button><button className="chip">Delhi</button><button className="chip">Bengaluru</button></div>
      </div>
    </div>
  </aside>

  <main className="main" data-od-id="main">
    <p className="eyebrow">Restaurant · Sakura House</p>
    <h1>Discover creators</h1>
    <div className="bar">
      <div className="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg><input value="Food creators · Mumbai audience" /></div>
      <button className="btn btn-primary" style={{ 'flex': 'none', 'paddingInline': '22px' }}>AI Match</button>
    </div>
    <p className="count" data-od-id="count">1,240 creators match your city & niche — showing best matches for your active campaign</p>

    <div style={{ 'background': 'var(--accent-soft)', 'border': '1px solid var(--accent)', 'borderRadius': 'var(--radius-lg)', 'padding': '16px 18px', 'marginBottom': '16px' }} data-od-id="ai-match">
      <div className="row-between" style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
        <div style={{ 'fontWeight': '700', 'fontSize': '14.5px' }}>AI Match · Weekend Japanese Experience</div>
        <span className="tag" style={{ 'fontFamily': 'var(--font-mono)', 'fontSize': '12px', 'color': 'var(--accent)' }}>Food · 20K–150K · Mumbai 50%+</span>
      </div>
      <div style={{ 'fontSize': '13px', 'color': 'var(--muted)', 'marginTop': '4px' }}>Matches your goal of weekend footfall from a 25–40 audience with high-engagement food content.</div>
    </div>

    <div className="grid" data-od-id="creator-grid">
      <div className="card top">
        <div className="cre">
          <div className="avatar">AK</div>
          <div><div className="nm">Creator Ananya</div><div className="de">Food & Lifestyle · Mumbai · 42K followers</div></div>
          <div className="match">92%</div>
        </div>
        <div className="metrics">
          <div className="m"><div className="v">42K</div><div className="l">Followers</div></div>
          <div className="m"><div className="v">5.8%</div><div className="l">Engagement</div></div>
          <div className="m"><div className="v">72%</div><div className="l">Mumbai aud.</div></div>
        </div>
        <div className="tags"><span className="tag">Reels</span><span className="tag">₹18K/reel</span><span className="tag">Mumbai</span><span className="tag">4 restaurants</span></div>
        <div className="row">
          <button className="btn btn-primary">View profile</button>
          <button className="btn btn-outline">Invite</button>
        </div>
        <div className="lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>Real handle hidden — message & negotiate in-platform only</div>
      </div>

      <div className="card">
        <div className="cre">
          <div className="avatar">RS</div>
          <div><div className="nm">Creator Rohit</div><div className="de">Food · Mumbai · 61K followers</div></div>
          <div className="match">89%</div>
        </div>
        <div className="metrics">
          <div className="m"><div className="v">61K</div><div className="l">Followers</div></div>
          <div className="m"><div className="v">6.4%</div><div className="l">Engagement</div></div>
          <div className="m"><div className="v">68%</div><div className="l">Mumbai aud.</div></div>
        </div>
        <div className="tags"><span className="tag">Reels</span><span className="tag">₹22K/reel</span><span className="tag">Mumbai</span><span className="tag">6 restaurants</span></div>
        <div className="row">
          <button className="btn btn-primary">View profile</button>
          <button className="btn btn-outline">Invite</button>
        </div>
        <div className="lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>Real handle hidden — message & negotiate in-platform only</div>
      </div>

      <div className="card">
        <div className="cre">
          <div className="avatar">MT</div>
          <div><div className="nm">Creator Megha</div><div className="de">Lifestyle · Bandra · 28K followers</div></div>
          <div className="match">86%</div>
        </div>
        <div className="metrics">
          <div className="m"><div className="v">28K</div><div className="l">Followers</div></div>
          <div className="m"><div className="v">7.1%</div><div className="l">Engagement</div></div>
          <div className="m"><div className="v">64%</div><div className="l">Mumbai aud.</div></div>
        </div>
        <div className="tags"><span className="tag">Reels</span><span className="tag">₹15K/reel</span><span className="tag">Bandra</span><span className="tag">3 restaurants</span></div>
        <div className="row">
          <button className="btn btn-primary">View profile</button>
          <button className="btn btn-outline">Invite</button>
        </div>
        <div className="lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>Real handle hidden — message & negotiate in-platform only</div>
      </div>

      <div className="card">
        <div className="cre">
          <div className="avatar">SK</div>
          <div><div className="nm">Creator Sana</div><div className="de">Food · Thane · 55K followers</div></div>
          <div className="match">82%</div>
        </div>
        <div className="metrics">
          <div className="m"><div className="v">55K</div><div className="l">Followers</div></div>
          <div className="m"><div className="v">5.2%</div><div className="l">Engagement</div></div>
          <div className="m"><div className="v">58%</div><div className="l">Mumbai aud.</div></div>
        </div>
        <div className="tags"><span className="tag">Stories</span><span className="tag">₹9K/story</span><span className="tag">Thane</span></div>
        <div className="row">
          <button className="btn btn-primary">View profile</button>
          <button className="btn btn-outline">Invite</button>
        </div>
        <div className="lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>Real handle hidden — message & negotiate in-platform only</div>
      </div>
    </div>
  </main>
</div>


<button className="theme-toggle" id="themeToggle" type="button" aria-label="Toggle colour theme">
  <span id="themeLabel">Dark</span>
</button>
    </>
  );
}
export default function InfluencerOnboarding() {
  return (
    <>
      <div className="top"><div className="wrap" style={{ 'display': 'flex', 'width': '100%', 'justifyContent': 'space-between', 'alignItems': 'center', 'padding': '0 28px' }}>
  <span className="logo"><span className="mark">C</span>CollabTable</span>
  <a className="meta" href="index">← Prototype index</a>
</div></div>

<div className="wrap">
  <p className="eyebrow">Creator Onboarding</p>
  <h1>Set up your creator profile</h1>
  <p className="lead">Five short steps. Your contact details stay private — restaurants will never see your phone, email or clickable handle.</p>

  <div className="steps" data-od-id="steps">
    <div className="step" data-s="1"><span className="dot">1</span><span className="lbl">Basics</span></div>
    <div className="step" data-s="2"><span className="dot">2</span><span className="lbl">Social verify</span></div>
    <div className="step" data-s="3"><span className="dot">3</span><span className="lbl">Preferences</span></div>
    <div className="step" data-s="4"><span className="dot">4</span><span className="lbl">Pricing</span></div>
    <div className="step" data-s="5"><span className="dot">5</span><span className="lbl">Availability</span></div>
  </div>

  
  <div className="panel step-panel on" data-p="1" data-od-id="step-basics">
    <h2 style={{ 'marginBottom': '20px' }}>Basics</h2>
    <div className="grid-2">
      <div className="field"><label>Name</label><input className="input" value="Ananya Iyer" /></div>
      <div className="field"><label>Creator handle</label><div style={{ 'position': 'relative' }}><span style={{ 'position': 'absolute', 'left': '14px', 'top': '11px', 'color': 'var(--muted)', 'fontFamily': 'var(--font-mono)' }}>@</span><input className="input" value="ananya.eats" style={{ 'paddingLeft': '28px' }} /></div></div>
      <div className="field"><label>City</label>
        <select className="select"><option>Mumbai</option><option>Bengaluru</option><option>Delhi</option><option>Pune</option><option>Hyderabad</option></select></div>
      <div className="field"><label>Age range</label>
        <select className="select"><option>18–24</option><option>25–34</option><option>35–44</option><option>45+</option></select></div>
      <div className="field"><label>Languages</label>
        <div className="chips"><button type="button" className="chip on">English</button><button type="button" className="chip on">Hindi</button><button type="button" className="chip">Marathi</button><button type="button" className="chip">Tamil</button></div></div>
      <div className="field"><label>Gender — optional</label>
        <div className="chips"><button type="button" className="chip">Female</button><button type="button" className="chip">Male</button><button type="button" className="chip">Prefer not to say</button></div></div>
    </div>
    <div className="field" style={{ 'marginTop': '20px' }}><label>Creator categories</label>
      <div className="chips"><button type="button" className="chip on">Food</button><button type="button" className="chip on">Lifestyle</button><button type="button" className="chip">Fashion</button><button type="button" className="chip">Travel</button><button type="button" className="chip">Fitness</button><button type="button" className="chip">Beauty</button><button type="button" className="chip">Luxury</button><button type="button" className="chip">Parenting</button><button type="button" className="chip">Entertainment</button><button type="button" className="chip">Local Guide</button><button type="button" className="chip">Other</button></div></div>
    <div className="field" style={{ 'marginTop': '20px' }}><label>Profile photo</label><div className="ph-img" style={{ 'width': '88px', 'height': '88px', 'borderRadius': '16px', 'display': 'grid', 'placeItems': 'center', 'fontFamily': 'var(--font-mono)', 'fontSize': '11px', 'color': 'var(--muted)', 'border': '1px dashed var(--border)', 'background': 'var(--surface)' }}>+ photo</div></div>
    <div className="foot">
      <span className="meta">Step 1 of 5</span>
      <button className="btn btn-primary" data-next="1">Continue</button>
    </div>
  </div>

  
  <div className="panel step-panel" data-p="2" data-od-id="step-social">
    <h2 style={{ 'marginBottom': '8px' }}>Connect & verify your social accounts</h2>
    <p className="lead" style={{ 'fontSize': '14px' }}>We use official APIs / OAuth — you never share a password. We store only public audience & performance metrics.</p>
    <div className="stack" style={{ 'marginTop': '24px' }}>
      <div className="conn-card">
        <div style={{ 'display': 'flex', 'gap': '12px', 'alignItems': 'center' }}><div style={{ 'width': '34px', 'height': '34px', 'borderRadius': '9px', 'background': 'linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)', 'display': 'grid', 'placeItems': 'center', 'color': '#fff', 'fontSize': '11px', 'fontWeight': '800' }}>IG</div><div><div style={{ 'fontWeight': '600' }}>Instagram</div><div className="meta">42K followers · 5.8% engagement · 72% Mumbai audience</div></div></div>
        <span className="pill" style={{ 'background': 'var(--accent-soft)', 'color': 'var(--accent)', 'padding': '5px 12px', 'borderRadius': '999px', 'fontFamily': 'var(--font-mono)', 'fontSize': '11px' }}>Connected</span>
      </div>
      <div className="conn-card">
        <div style={{ 'display': 'flex', 'gap': '12px', 'alignItems': 'center' }}><div style={{ 'width': '34px', 'height': '34px', 'borderRadius': '9px', 'background': '#ff0000', 'display': 'grid', 'placeItems': 'center', 'color': '#fff', 'fontSize': '11px', 'fontWeight': '800' }}>▶</div><div><div style={{ 'fontWeight': '600' }}>YouTube</div><div className="meta">18K subscribers · 26K avg views</div></div></div>
        <span className="pill" style={{ 'background': 'var(--accent-soft)', 'color': 'var(--accent)', 'padding': '5px 12px', 'borderRadius': '999px', 'fontFamily': 'var(--font-mono)', 'fontSize': '11px' }}>Connected</span>
      </div>
      <div className="conn-card">
        <div style={{ 'display': 'flex', 'gap': '12px', 'alignItems': 'center' }}><div style={{ 'width': '34px', 'height': '34px', 'borderRadius': '9px', 'background': '#000', 'display': 'grid', 'placeItems': 'center', 'color': '#fff', 'fontSize': '11px', 'fontWeight': '800' }}>TT</div><div><div style={{ 'fontWeight': '600' }}>TikTok</div><div className="meta">Not connected · available where applicable</div></div></div>
        <span className="tag">Optional</span>
      </div>
    </div>
    <div className="foot">
      <span className="meta">Step 2 of 5</span>
      <button className="btn btn-primary" data-next="2">Continue</button>
    </div>
  </div>

  
  <div className="panel step-panel" data-p="3" data-od-id="step-preferences">
    <h2 style={{ 'marginBottom': '8px' }}>Collaboration preferences</h2>
    <p className="lead" style={{ 'fontSize': '14px' }}>Select the collaboration types you're open to.</p>
    <div className="chips" style={{ 'marginTop': '20px' }}>
      <button type="button" className="chip">Paid</button><button type="button" className="chip">Complimentary meal</button><button type="button" className="chip on">Paid + complimentary</button><button type="button" className="chip">Event appearance</button><button type="button" className="chip">Content package</button><button type="button" className="chip">Long-term ambassador</button><button type="button" className="chip">Affiliate</button><button type="button" className="chip">Custom</button>
    </div>
    <div className="field" style={{ 'marginTop': '24px' }}><label>Content niches you create</label>
      <div className="chips"><button type="button" className="chip on">Food reviews</button><button type="button" className="chip on">Restaurant reels</button><button type="button" className="chip">Recipes</button><button type="button" className="chip">Lifestyle</button><button type="button" className="chip">Hygiene & ambience</button></div></div>
    <div className="field" style={{ 'marginTop': '20px' }}><label>Budget range you normally work within (₹/campaign)</label>
      <select className="select"><option>₹7,500 – ₹15,000</option><option>₹15,000 – ₹25,000</option><option>₹25,000 – ₹50,000</option><option>₹50,000+</option></select></div>
    <div className="foot">
      <span className="meta">Step 3 of 5</span>
      <button className="btn btn-primary" data-next="3">Continue</button>
    </div>
  </div>

  
  <div className="panel step-panel" data-p="4" data-od-id="step-pricing">
    <h2 style={{ 'marginBottom': '8px' }}>Your pricing</h2>
    <p className="lead" style={{ 'fontSize': '14px' }}>Set a starting price per deliverable. Mark a row negotiable to invite offers.</p>
    <div className="stack" style={{ 'marginTop': '24px' }}>
      <div className="price-row"><div><div className="name">Instagram Story</div><div className="desc">Single 24h story</div></div><div className="field"><div className="meta">Starting</div><input className="input num" value="₹8,000" /></div><button className="btn btn-outline" style={{ 'padding': '10px 14px', 'fontSize': '13px' }}>Negotiable</button></div>
      <div className="price-row"><div><div className="name">Reel</div><div className="desc">15–30s feed reel</div></div><div className="field"><div className="meta">Starting</div><input className="input num" value="₹18,000" /></div><button className="btn btn-outline" style={{ 'padding': '10px 14px', 'fontSize': '13px' }}>Negotiable</button></div>
      <div className="price-row"><div><div className="name">Feed Post</div><div className="desc">Static image post</div></div><div className="field"><div className="meta">Starting</div><input className="input num" value="₹12,000" /></div><button className="btn btn-outline" style={{ 'padding': '10px 14px', 'fontSize': '13px' }}>Negotiable</button></div>
      <div className="price-row"><div><div className="name">YouTube Short</div><div className="desc">Vertical short</div></div><div className="field"><div className="meta">Starting</div><input className="input num" value="₹15,000" /></div><button className="btn btn-outline" style={{ 'padding': '10px 14px', 'fontSize': '13px' }}>Negotiable</button></div>
      <div className="price-row"><div><div className="name">YouTube Video</div><div className="desc">Long-form review</div></div><div className="field"><div className="meta">Starting</div><input className="input num" value="₹40,000" /></div><button className="btn btn-outline" style={{ 'padding': '10px 14px', 'fontSize': '13px' }}>Negotiable</button></div>
      <div className="price-row"><div><div className="name">Restaurant Visit</div><div className="desc">On-site shoot / tasting</div></div><div className="field"><div className="meta">Starting</div><input className="input num" value="₹6,000" /></div><button className="btn btn-outline" style={{ 'padding': '10px 14px', 'fontSize': '13px' }}>Negotiable</button></div>
      <div className="price-row" style={{ 'borderBottom': '1px solid var(--border)' }}><div><div className="name">Custom package</div><div className="desc">Multi-deliverable bundle</div></div><div className="field"><div className="meta">Starting</div><input className="input num" value="₹25,000" /></div><button className="btn btn-outline" style={{ 'padding': '10px 14px', 'fontSize': '13px' }}>Negotiable</button></div>
    </div>
    <div className="foot">
      <span className="meta">Step 4 of 5</span>
      <button className="btn btn-primary" data-next="4">Continue</button>
    </div>
  </div>

  
  <div className="panel step-panel" data-p="5" data-od-id="step-availability">
    <h2 style={{ 'marginBottom': '8px' }}>Availability</h2>
    <p className="lead" style={{ 'fontSize': '14px' }}>Restaurants will see your status and general availability. You control exact hours.</p>
    <div className="avail"><span className="dotg" style={{ 'background': 'var(--good)' }}></span><div><div style={{ 'fontWeight': '600' }}>Available for collaborations</div><div className="meta">Open to new campaign invites</div></div><span style={{ 'marginLeft': 'auto', 'fontFamily': 'var(--font-mono)', 'fontSize': '12px', 'color': 'var(--good)' }}>🟢 ON</span></div>
    <div className="avail"><span className="dotg" style={{ 'background': 'var(--warn)' }}></span><div><div style={{ 'fontWeight': '600' }}>Limited availability</div><div className="meta">Only weekends & evenings</div></div><span style={{ 'marginLeft': 'auto', 'fontFamily': 'var(--font-mono)', 'fontSize': '12px', 'color': 'var(--warn)' }}>🟡 OFF</span></div>
    <div className="avail"><span className="dotg" style={{ 'background': 'var(--danger)' }}></span><div><div style={{ 'fontWeight': '600' }}>Unavailable</div><div className="meta">Pause all incoming opportunities</div></div><span style={{ 'marginLeft': 'auto', 'fontFamily': 'var(--font-mono)', 'fontSize': '12px', 'color': 'var(--muted)' }}>🔴 OFF</span></div>
    <div className="field" style={{ 'marginTop': '24px' }}><label>Preferred cities for on-site work</label>
      <div className="chips"><button type="button" className="chip on">Mumbai</button><button type="button" className="chip on">Thane</button><button type="button" className="chip">Navi Mumbai</button><button type="button" className="chip">Pune</button></div></div>
    <div className="foot">
      <span className="meta">Step 5 of 5</span>
      <a className="btn btn-primary" href="influencer-dashboard" style={{ 'textDecoration': 'none' }}>Finish → Go to dashboard</a>
    </div>
  </div>
</div>



<button className="theme-toggle" id="themeToggle" type="button" aria-label="Toggle colour theme">
  <span id="themeLabel">Dark</span>
</button>
    </>
  );
}
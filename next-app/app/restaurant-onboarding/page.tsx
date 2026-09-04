import ThemeToggle from "@/components/theme-toggle";

export default function RestaurantOnboarding() {
  return (
    <>
      <div className="top">
  <span className="logo"><span className="mark">C</span>CollabTable</span>
  <a className="meta" href="index">← Prototype index</a>
</div>

<div className="wrap">
  <p className="eyebrow">Restaurant Onboarding</p>
  <h1>Set up your restaurant profile</h1>
  <p className="lead">A few details to verify your business, then set your creator budget. Your direct phone and booking links stay private.</p>

  <div className="steps" data-od-id="steps">
    <div className="step" data-s="1"><span className="dot">1</span><span className="lbl">Business</span></div>
    <div className="step" data-s="2"><span className="dot">2</span><span className="lbl">Type & cuisine</span></div>
    <div className="step" data-s="3"><span className="dot">3</span><span className="lbl">Verification</span></div>
  </div>

  <div className="panel step-panel on" data-p="1" data-od-id="step-business">
    <h2 style={{ 'marginBottom': '20px' }}>Business details</h2>
    <div className="grid-2">
      <div className="field"><label>Restaurant name</label><input className="input" value="Sakura House" /></div>
      <div className="field"><label>Brand / DA handle</label><input className="input" value="@sakurahouse.mum" /></div>
      <div className="field"><label>City</label><select className="select"><option>Mumbai</option><option>Bengaluru</option><option>Delhi</option><option>Pune</option></select></div>
      <div className="field"><label>Area / locality</label><input className="input" value="Bandra West" /></div>
      <div className="field"><label>Cuisine</label><input className="input" value="Japanese" /></div>
      <div className="field"><label>Cost for two (₹)</label><input className="input num" value="₹3,200" /></div>
    </div>
    <div className="foot">
      <span className="meta">Step 1 of 3</span>
      <button className="btn btn-primary" data-next="1">Continue</button>
    </div>
  </div>

  <div className="panel step-panel" data-p="2" data-od-id="step-type">
    <h2 style={{ 'marginBottom': '8px' }}>Restaurant type & positioning</h2>
    <div className="field" style={{ 'marginTop': '20px' }}><label>Category</label>
      <div className="chips"><button type="button" className="chip">Casual</button><button type="button" className="chip">Premium</button><button type="button" className="chip on">Fine dining</button><button type="button" className="chip">Café</button><button type="button" className="chip">Bar</button><button type="button" className="chip">QSR</button><button type="button" className="chip">Cloud kitchen</button><button type="button" className="chip">Bakery</button><button type="button" className="chip">Dessert</button><button type="button" className="chip">Other</button></div></div>
    <div className="grid-2" style={{ 'marginTop': '24px' }}>
      <div className="field"><label>Dietary & service tags</label>
        <div className="chips"><button type="button" className="chip on">Vegetarian options</button><button type="button" className="chip">Vegan</button><button type="button" className="chip">Halal</button><button type="button" className="chip">Family friendly</button><button type="button" className="chip">Pet friendly</button><button type="button" className="chip">Outdoor seating</button></div></div>
      <div className="field"><label>Typical footfall day</label>
        <select className="select"><option>Weekends</option><option>Weekdays</option><option>Both</option></select></div>
    </div>
    <div className="field" style={{ 'marginTop': '20px' }}><label>Short description for creators</label><textarea className="textarea">Modern Japanese fine-dining in Bandra — omakase tasting menus, weekend live-grill counter.</textarea></div>
    <div className="foot">
      <span className="meta">Step 2 of 3</span>
      <button className="btn btn-primary" data-next="2">Continue</button>
    </div>
  </div>

  <div className="panel step-panel" data-p="3" data-od-id="step-verify">
    <h2 style={{ 'marginBottom': '8px' }}>Business verification</h2>
    <p className="lead" style={{ 'fontSize': '14px' }}>We verify your business so creators can trust your campaigns and escrow payouts.</p>
    <div className="verify"><span className="ok">✓</span><div style={{ 'flex': '1' }}><div style={{ 'fontWeight': '600' }}>GST / business documentation</div><div className="meta">27AABCS1234F1Z5 · uploaded</div></div><span className="meta" style={{ 'color': 'var(--good)' }}>Verified</span></div>
    <div className="verify"><span className="ok">✓</span><div style={{ 'flex': '1' }}><div style={{ 'fontWeight': '600' }}>FSSAI / restaurant licence</div><div className="meta">FSSAI 2152XXXXXXXX · uploaded</div></div><span className="meta" style={{ 'color': 'var(--good)' }}>Verified</span></div>
    <div className="verify"><span className="ok" style={{ 'background': 'var(--accent)' }}>+</span><div style={{ 'flex': '1' }}><div style={{ 'fontWeight': '600' }}>Bank account verification</div><div className="meta">For escrow payouts</div></div><button className="btn btn-outline" style={{ 'padding': '8px 14px', 'fontSize': '13px' }}>Connect</button></div>

    <div className="rule" style={{ 'borderTop': '1px solid var(--border)', 'margin': '20px 0' }}></div>
    <h2 style={{ 'marginBottom': '14px' }}>Monthly influencer budget</h2>
    <div className="budget">
      <button type="button" className="budget-opt"><div className="amt">₹25K–₹50K</div><div className="lbl">Curated nights & small launches</div></button>
      <button type="button" className="budget-opt on"><div className="amt">₹50K–₹1L</div><div className="lbl">Weekly content + monthly event</div></button>
      <button type="button" className="budget-opt"><div className="amt">₹1L–₹5L</div><div className="lbl">Ongoing creator program</div></button>
      <button type="button" className="budget-opt"><div className="amt">₹5L+</div><div className="lbl">National / multi-city campaigns</div></button>
    </div>
    <div className="foot">
      <span className="meta">Step 3 of 3</span>
      <a className="btn btn-primary" href="restaurant-dashboard" style={{ 'textDecoration': 'none' }}>Finish → Go to dashboard</a>
    </div>
  </div>
</div>



<ThemeToggle />
    </>
  );
}
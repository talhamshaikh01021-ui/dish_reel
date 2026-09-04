export default function CampaignDetail() {
  return (
    <>
      <div className="layout">
  <aside className="side" data-od-id="sidebar">
    <div className="logo"><span className="mark">C</span>CollabTable</div>
    <nav className="nav" id="sideNav">
      <a href="influencer-dashboard"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>Home</a>
      <a href="discover-restaurants"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>Discover</a>
      <a className="on" href="#"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 12l2 2 4-4"></path><path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z"></path></svg>Applications</a>
      <a href="deal-room"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z"></path></svg>Messages</a>
      <a href="deal-room"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="18" height="13" rx="2"></rect><path d="M3 10h18"></path></svg>Earnings</a>
    </nav>
  </aside>

  <main className="main" data-od-id="main">
    <div className="view-toggle" data-od-id="view-toggle">
      <button className="on" data-role="creator">I'm a creator</button>
      <button data-role="restaurant">I'm a restaurant</button>
    </div>

    
    <div className="camp-head">
      <div className="avatar">SH</div>
      <div>
        <p className="eyebrow">Campaign · Fine-Dining Partner</p>
        <h1>Weekend Japanese Experience</h1>
        <div className="de">Food creators · 20K–150K followers · Mumbai metro · deadline Sep 15</div>
      </div>
      <div className="budget">₹20K–₹50K<span className="l">Campaign budget</span></div>
    </div>

    <div className="cols">
      <div className="card" data-od-id="campaign-details">
        <h2>Campaign details</h2>
        <div className="tags" style={{ 'marginBottom': '12px' }}><span className="pill">Paid collaboration</span><span className="pill">Food</span><span className="tag">On-site visit</span></div>
        <div className="rowl"><span className="k">Deliverables</span><span className="v">1 Reel · 3 Stories</span></div>
        <div className="rowl"><span className="k">Deadline</span><span className="v">Sep 15, 2026</span></div>
        <div className="rowl"><span className="k">Revisions</span><span className="v">1 round</span></div>
        <div className="rowl"><span className="k">Usage rights</span><span className="v">30 days</span></div>
        <div className="rowl"><span className="k">Visit</span><span className="v">On-site shoot + tasting — exact address shared after your application is shortlisted</span></div>
        <div className="rowl"><span className="k">Brief</span><span className="v" style={{ 'fontWeight': '400' }}>Highlight the new autumn tasting menu and the weekend dining experience. Focus on ambience, live-grill counter and signature omakase.</span></div>
      </div>

      
      <div className="card role-creator" data-od-id="apply-panel">
        <h2>Apply to this campaign</h2>
        <div className="req">Structured application · no direct contact</div>
        <p style={{ 'color': 'var(--muted)', 'fontSize': '13.5px', 'margin': '0 0 16px' }}>Tell the restaurant why you're a fit and propose your package. Messages with phone numbers or handles are blocked automatically.</p>
        <button className="btn btn-primary btn-lg" id="applyBtn">Apply Now</button>
        <div className="note"><b>Identity protected:</b> the restaurant's name & address are revealed only after you're shortlisted, and contact stays in-platform throughout.</div>
      </div>

      
      <div className="card role-restaurant" data-od-id="applications" style={{ 'display': 'none' }}>
        <div className="req">24 applications<span style={{ 'color': 'var(--fg)', 'fontFamily': 'var(--font-body)', 'fontWeight': '600' }}>2 shortlisted</span></div>
        <div className="app">
          <div className="av2">AK</div>
          <div><div className="nm">Creator Ananya <span className="ok">★ 92%</span></div><div className="de">42K followers · 5.8% eng</div></div>
          <div className="fee">₹22,000</div>
        </div>
        <div className="app-actions"><button className="btn btn-dark">Shortlist</button><button className="btn btn-outline">Reject</button><button className="btn btn-outline">Message</button><button className="btn btn-primary">Make offer</button></div>
        <div className="app">
          <div className="av2">RS</div>
          <div><div className="nm">Creator Rohit <span className="ok">★ 89%</span></div><div className="de">61K followers · 6.4% eng</div></div>
          <div className="fee">₹30,000</div>
        </div>
        <div className="app-actions"><button className="btn btn-dark">Shortlist</button><button className="btn btn-outline">Reject</button><button className="btn btn-outline">Message</button><button className="btn btn-primary">Make offer</button></div>
        <div className="note"><b>Keep it in-platform:</b> contact details are hidden until you move an application to a deal room.</div>
      </div>
    </div>
  </main>
</div>


<div className="backdrop" id="applyModal">
  <div className="modal">
    <h2>Apply — Weekend Japanese Experience</h2>
    <div className="sub">Propose your package. The restaurant will review and may send a structured offer.</div>
    <div className="field"><label>Why are you a good fit?</label><textarea className="textarea">I create food reels for a Mumbai audience (72% Bandra & South) and have covered 4 Japanese restaurant launches this year.</textarea></div>
    <div className="field"><label>Proposed package</label><div className="chips" style={{ 'marginTop': '4px' }}><button className="chip on">1 Reel</button><button className="chip on">3 Stories</button><button className="chip">Feed post</button><button className="chip">YouTube short</button></div></div>
    <div className="grid-2">
      <div className="field"><label>Your proposed fee (₹)</label><input className="input num" value="₹25,000" /></div>
      <div className="field"><label>On-site visit?</label><select className="select"><option>Included</option><option>Not required</option></select></div>
    </div>
    <div className="field"><label>Optional message</label><textarea className="textarea" style={{ 'minHeight': '64px' }}>I'd love to showcase the tasting menu and weekend ambience in a high-engagement reel.</textarea></div>
    <div className="note" style={{ 'marginTop': '0' }}><b>Heads-up:</b> any phone number, email or handle in your message will be blocked before reaching the restaurant.</div>
    <div className="foot">
      <button className="btn btn-outline">Cancel</button>
      <button className="btn btn-primary">Submit Application</button>
    </div>
  </div>
</div>


<div className="backdrop" id="offerModal">
  <div className="modal">
    <h2>Make an offer</h2>
    <div className="sub">Send a structured offer to Creator Ananya. They can accept, counter or decline.</div>
    <div className="grid-2">
      <div className="field"><label>Deliverables</label><input className="input" value="1 Reel + 3 Stories" /></div>
      <div className="field"><label>Payment (₹)</label><input className="input num" value="₹22,000" /></div>
      <div className="field"><label>Restaurant visit</label><select className="select"><option>Included</option><option>Not included</option></select></div>
      <div className="field"><label>Content deadline</label><input className="input" value="Sep 15" /></div>
      <div className="field"><label>Revisions</label><input className="input num" value="1" /></div>
      <div className="field"><label>Usage rights</label><select className="select"><option>30 days</option><option>90 days</option><option>Perpetual</option></select></div>
    </div>
    <div className="note" style={{ 'marginTop': '0' }}><b>Offer expires in 48 hours.</b> No payment is taken until the creator accepts and you open the deal room.</div>
    <div className="foot">
      <button className="btn btn-outline">Cancel</button>
      <button className="btn btn-primary">Send Offer</button>
    </div>
  </div>
</div>



<button className="theme-toggle" id="themeToggle" type="button" aria-label="Toggle colour theme">
  <span id="themeLabel">Dark</span>
</button>
    </>
  );
}
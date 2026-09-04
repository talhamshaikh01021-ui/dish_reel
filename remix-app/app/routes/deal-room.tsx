export default function DealRoom() {
  return (
    <>
      <div className="top"><div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '14px', 'width': '100%', 'justifyContent': 'space-between' }}>
  <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '12px' }}>
    <span className="logo"><span className="mark">C</span>CollabTable</span>
    <span className="crumb">Deal room · <b>Weekend Japanese Experience</b></span>
  </div>
  <a className="meta" href="index" style={{ 'fontFamily': 'var(--font-mono)', 'fontSize': '12px', 'color': 'var(--muted)' }}>← Prototype index</a>
</div></div>

<div className="wrap">
  <div className="head">
    <div className="avatar">SH</div>
    <div>
      <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px', 'flexWrap': 'wrap' }}><h1>Weekend Japanese Experience</h1><span className="pill">Negotiating</span></div>
      <div className="sub">Sakura House · Bandra × Creator Ananya · Food creator, Mumbai</div>
    </div>
    <span className="status"><span className="dotp"></span>Offer expires in 38h</span>
  </div>

  <div className="tabs" data-od-id="tabs">
    <button className="on" data-t="negotiate">Negotiate</button>
    <button data-t="contract">Contract</button>
    <button data-t="chat">Chat</button>
    <button data-t="content">Content</button>
    <button data-t="payment">Payment</button>
  </div>

  
  <div className="tab on" data-tab="negotiate" data-od-id="tab-negotiate">
    <div className="cols">
      <div className="card">
        <h2>Current offer</h2>
        <div className="hd-sub">From Sakura House · sent 2h ago</div>
        <div className="offer">
          <div className="lbl">Deliverables</div>
          <div className="rowl"><span className="k">1 Reel</span><span className="v">15–30s · feed</span></div>
          <div className="rowl"><span className="k">3 Stories</span><span className="v">sequential</span></div>
          <div className="rule"></div>
          <div className="rowl"><span className="k">Payment</span><span className="v total num">₹20,000</span></div>
          <div className="rowl"><span className="k">Restaurant visit</span><span className="v">Included</span></div>
          <div className="rowl"><span className="k">Content deadline</span><span className="v">Sept 15</span></div>
          <div className="rowl"><span className="k">Revisions</span><span className="v">1</span></div>
          <div className="rowl"><span className="k">Usage rights</span><span className="v">30 days</span></div>
        </div>
        <div className="btn-row">
          <button className="btn btn-primary" style={{ 'flex': '1' }}>Accept</button>
          <button className="btn btn-outline" style={{ 'flex': '1' }}>Counter Offer</button>
          <button className="btn btn-ghost">Decline</button>
        </div>
        <div id="acceptToast" style={{ 'display': 'none', 'background': 'color-mix(in oklch,var(--good) 12%,var(--surface))', 'border': '1px solid var(--good)', 'color': 'var(--fg)', 'borderRadius': 'var(--radius)', 'padding': '12px 14px', 'fontSize': '13.5px', 'marginTop': '14px' }}>Agreement generated — review & sign in the <b>Contract</b> tab.</div>
      </div>

      <div className="card" id="counterPanel" style={{ 'display': 'none' }}>
        <h2>Send counter offer</h2>
        <div className="hd-sub">Adjust the terms Sakura House proposed</div>
        <div className="field" style={{ 'marginBottom': '12px' }}><label>Your proposed fee (₹)</label><input className="input num" value="₹25,000" /></div>
        <div className="field" style={{ 'marginBottom': '12px' }}><label>Deliverables</label><div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '8px' }}>
          <label style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px', 'fontSize': '14px', 'color': 'var(--fg)' }}><input type="checkbox" checked /> 1 Reel</label>
          <label style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px', 'fontSize': '14px', 'color': 'var(--fg)' }}><input type="checkbox" checked /> 3 Stories</label>
          <label style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px', 'fontSize': '14px', 'color': 'var(--fg)' }}><input type="checkbox" /> 1 Feed post</label>
        </div></div>
        <div className="field" style={{ 'marginBottom': '12px' }}><label>Note to Sakura House</label><textarea className="textarea">I can include a feed post and a longer-form reel for the higher fee. Will cover the tasting menu.</textarea></div>
        <div className="btn-row"><button className="btn btn-outline">Cancel</button><button className="btn btn-primary">Send Counter Offer</button></div>
        <div id="counterSent" style={{ 'display': 'none', 'background': 'color-mix(in oklch,var(--good) 12%,var(--surface))', 'border': '1px solid var(--good)', 'borderRadius': 'var(--radius)', 'padding': '12px 14px', 'fontSize': '13.5px', 'marginTop': '12px' }}>Counter offer sent to Sakura House. They must respond within 48h.</div>
      </div>
    </div>
  </div>

  
  <div className="tab" data-tab="contract" data-od-id="tab-contract">
    <div className="cols">
      <div className="card">
        <h2>Collaboration agreement</h2>
        <div className="hd-sub">Auto-generated from the agreed offer · reviewed by both parties</div>
        <div className="agreement">
          <h3>Parties</h3>
          <p><b>Sakura House</b> (Bandra West, Mumbai) and <b>Creator Ananya</b> (Food creator, Mumbai)</p>
          <h3>Campaign</h3>
          <p>Weekend Japanese Experience — 1 Reel + 3 Stories for the new autumn tasting menu campaign.</p>
          <h3>Payment</h3>
          <p>₹20,000 held in escrow. Released to the creator after <b>restaurant approval</b> of all deliverables.</p>
          <h3>Deadlines & revisions</h3>
          <p>Content by Sept 15. One revision round included; further rounds by mutual agreement.</p>
          <h3>Content ownership & usage</h3>
          <p>Creator retains ownership of the raw content. Restaurant receives a 30-day usage licence for the campaign.</p>
          <h3>Disclosure</h3>
          <p>The creator discloses the partnership as a paid collaboration (#ad / partnership) on-publish, as required.</p>
          <h3>Platform rules</h3>
          <p>All communication and payments occur through CollabTable. Direct contact or off-platform deal-making is prohibited and voids protection.</p>
          <h3>Cancellation & disputes</h3>
          <p>Cancellation before content starts is free. Disputes are handled by CollabTable's moderated resolution process while payment remains escrowed.</p>
        </div>
      </div>
      <div className="card">
        <h2>Review & sign</h2>
        <div className="hd-sub">Both parties must sign for the deal to start.</div>
        <div className="sign" id="signBox">
          <div className="field"><label>Your full name or display name</label><input value="Ananya Iyer" /></div>
          <button className="btn btn-primary" style={{ 'flex': 'none' }}>Accept & Sign</button>
        </div>
        <div id="signState" style={{ 'display': 'none', 'marginTop': '16px' }}>
          <div className="signed" style={{ 'background': 'color-mix(in oklch,var(--good) 8%,var(--surface))', 'border': '1px solid var(--good)', 'borderRadius': 'var(--radius)', 'padding': '14px' }}>
            <div style={{ 'fontWeight': '700', 'color': 'var(--good)' }}>✓ Signed by Creator Ananya</div>
            <div className="meta" style={{ 'marginTop': '4px' }}>Awaiting signature from Sakura House · deal won't start until both sign</div>
          </div>
          <div className="note" style={{ 'background': 'var(--fg-soft)', 'border': '1px solid var(--border)', 'borderRadius': 'var(--radius)', 'padding': '12px 14px', 'fontSize': '13px', 'marginTop': '12px' }}>Once both parties sign, escrow funding is enabled in the <b>Payment</b> tab.</div>
        </div>
        <div style={{ 'marginTop': '18px', 'display': 'flex', 'gap': '8px', 'flexWrap': 'wrap' }}>
          <span className="tag" style={{ 'padding': '5px 12px', 'border': '1px solid var(--border)', 'borderRadius': '999px', 'fontSize': '11.5px', 'color': 'var(--muted)' }}>1 revision</span>
          <span className="tag" style={{ 'padding': '5px 12px', 'border': '1px solid var(--border)', 'borderRadius': '999px', 'fontSize': '11.5px', 'color': 'var(--muted)' }}>30-day usage</span>
          <span className="tag" style={{ 'padding': '5px 12px', 'border': '1px solid var(--border)', 'borderRadius': '999px', 'fontSize': '11.5px', 'color': 'var(--muted)' }}>Disclosure required</span>
        </div>
      </div>
    </div>
  </div>

  
  <div className="tab" data-tab="chat" data-od-id="tab-chat">
    <div className="card" style={{ 'maxWidth': '760px', 'margin': '0 auto' }}>
      <div className="chat">
        <div className="msgs" id="msgs">
          <div className="msg them"><div className="who">Sakura House</div>Hi Ananya! We loved your reel for Umami House. Would you be open to our Weekend Japanese Experience campaign?</div>
          <div className="msg me"><div className="who">You</div>Absolutely — it's a great fit for my Bandra audience. I've applied with a proposed package.</div>
          <div className="msg them"><div className="who">Sakura House</div>I've sent you a structured offer. Let me know if you'd like any changes.</div>
          <div className="msg me"><div className="who">You</div>Perfect, reviewing now.</div>
        </div>
        <div className="composer">
          <input id="chatInput" placeholder="Type a message…" />
          <button>Send</button>
        </div>
        <div className="shield">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>
          Message Safety Layer active — phone numbers, emails & handles are blocked before delivery.
        </div>
      </div>
      <div className="count-att" id="countAtt">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v4m0 4h.01"></path><path d="M10.3 3.9 2.2 18a2 2 0 0 0 1.7 3h16.2a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"></path></svg>
        <span><b>Contact blocked.</b> "WhatsApp me at 98XXXXXXXX — find me on Instagram @xyz" can't be shared to protect both parties. Please continue here on CollabTable.</span>
      </div>
    </div>
  </div>

  
  <div className="tab" data-tab="content" data-od-id="tab-content">
    <div className="cols">
      <div className="card">
        <h2>Deliverables</h2>
        <div className="hd-sub">Creator uploads content; restaurant reviews & approves</div>
        <div className="dl">
          <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M7 5V3h10v2M7 5v2M17 5v2"></path></svg></div>
          <div><div className="nm">Reel — tasting menu</div><div className="st done">✓ Uploaded · awaiting review</div></div>
          <div className="thumb"></div>
        </div>
        <div className="dl">
          <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M7 5V3h10v2M7 5v2M17 5v2"></path></svg></div>
          <div><div className="nm">3 Stories sequence</div><div className="st pend">Not yet uploaded</div></div>
        </div>
        <button className="btn btn-outline" style={{ 'width': '100%' }}>Upload deliverable</button>
      </div>
      <div className="card">
        <h2>Approval flow</h2>
        <div className="steps">
          <div className="stepn"><span className="st">✓</span><div><div className="nm">Deliverable uploaded</div><div className="ds">1 of 2 done</div></div></div>
          <div className="stepn"><span className="st pen">2</span><div><div className="nm">Restaurant reviews content</div><div className="ds">Awaiting Sakura House</div></div></div>
          <div className="stepn"><span className="st pen">3</span><div><div className="nm">Approval releases payment</div><div className="ds">Funds held in escrow</div></div></div>
        </div>
        <div className="note" style={{ 'background': 'var(--accent-soft)', 'border': '1px solid var(--accent)', 'borderRadius': 'var(--radius)', 'padding': '12px 14px', 'fontSize': '13px' }}>Payment (₹20,000) stays in escrow until Sakura House approves every deliverable.</div>
      </div>
    </div>
  </div>

  
  <div className="tab" data-tab="payment" data-od-id="tab-payment">
    <div className="cols">
      <div className="card">
        <h2>Escrow & release</h2>
        <div className="hd-sub">Funds are protected until content is approved</div>
        <div className="esc">
          <div><div className="amt num">₹20,000</div><div className="stt">Agreed campaign fee</div></div>
          <span className="tag sec">Secured in escrow</span>
        </div>
        <div className="steps">
          <div className="stepn"><span className="st">✓</span><div><div className="nm">Restaurant funds ₹20,000</div><div className="ds">Held securely by CollabTable's regulated partner</div></div></div>
          <div className="stepn"><span className="st">✓</span><div><div className="nm">Creator completes campaign</div><div className="ds">Content submitted for review</div></div></div>
          <div className="stepn"><span className="st pen">3</span><div><div className="nm">Restaurant approves</div><div className="ds">Pending final content approval</div></div></div>
        </div>
      </div>
      <div className="card">
        <h2>Payout preview</h2>
        <div className="hd-sub">On approval, funds release as follows</div>
        <div className="fee-line"><span>Campaign fee</span><span className="num">₹20,000</span></div>
        <div className="fee-line"><span>Platform fee</span><span className="num" style={{ 'color': 'var(--muted)' }}>− ₹2,000</span></div>
        <div className="rule"></div>
        <div className="fee-line"><span>Creator receives</span><span className="net num">₹18,000</span></div>
        <div className="note" style={{ 'background': 'var(--accent-soft)', 'border': '1px solid var(--accent)', 'borderRadius': 'var(--radius)', 'padding': '12px 14px', 'fontSize': '13px', 'marginTop': '14px' }}>Platform fee is charged on completed, approved campaigns only. No booking fee, no hidden charges.</div>
      </div>
    </div>
  </div>
</div>



<button className="theme-toggle" id="themeToggle" type="button" aria-label="Toggle colour theme">
  <span id="themeLabel">Dark</span>
</button>
    </>
  );
}
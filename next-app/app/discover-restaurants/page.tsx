import ThemeToggle from "@/components/theme-toggle";

export default function DiscoverRestaurants() {
  return (
    <>
      <div className="layout">
  <aside className="side" data-od-id="sidebar">
    <div className="logo"><span className="mark">C</span>CollabTable</div>
    <nav className="nav">
      <a href="influencer-dashboard"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>Home</a>
      <a className="on" href="#"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>Discover</a>
      <a href="campaign-detail"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 12l2 2 4-4"></path><path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z"></path></svg>Applications</a>
      <a href="deal-room"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z"></path></svg>Messages</a>
      <a href="deal-room"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="18" height="13" rx="2"></rect><path d="M3 10h18"></path></svg>Earnings</a>
    </nav>
    <div className="fil" data-od-id="filters">
      <div><h4>Location</h4><select className="select"><option>Mumbai — Bandra</option><option>Mumbai</option><option>Pune</option><option>Bengaluru</option></select></div>
      <div><h4>Cuisine</h4><div className="chips"><button className="chip on">Japanese</button><button className="chip">Italian</button><button className="chip">Café</button><button className="chip">Indian</button><button className="chip">Bakery</button></div></div>
      <div><h4>Budget / campaign</h4><div className="chips"><button className="chip">Under ₹10K</button><button className="chip on">₹10K–₹25K</button><button className="chip">₹25K–₹50K</button><button className="chip">₹50K+</button></div></div>
      <div><h4>Collaboration type</h4><div className="chips"><button className="chip on">Paid</button><button className="chip">Complimentary</button><button className="chip">Paid + comp</button><button className="chip">Event</button></div></div>
      <div><h4>Restaurant type</h4><div className="chips"><button className="chip on">Fine dining</button><button className="chip">Café</button><button className="chip">QSR</button><button className="chip">Bar</button></div></div>
      <div><h4>Amenities</h4><div className="chips"><button className="chip">Vegetarian</button><button className="chip">Vegan</button><button className="chip">Halal</button><button className="chip">Pet friendly</button><button className="chip">Family friendly</button></div></div>
      <div><h4>Deliverables</h4><div className="chips"><button className="chip on">Reel</button><button className="chip">Story</button><button className="chip">Feed post</button><button className="chip">Visit</button></div></div>
    </div>
  </aside>

  <main className="main" data-od-id="main">
    <p className="eyebrow">Creator · @ananya.eats</p>
    <h1>Discover restaurants & campaigns</h1>
    <div className="bar">
      <div className="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg><input value="Restaurants in Bandra · ₹10K–₹25K · Paid collaboration" /></div>
      <button className="btn btn-primary" style={{ 'flex': 'none', 'paddingInline': '22px' }}>Search</button>
    </div>
    <p className="count" data-od-id="count">38 campaigns match your Food & Lifestyle niche · Bandra</p>

    <div className="grid" data-od-id="campaign-grid">
      <div className="card head">
        <div className="rest">
          <div className="avatar">JP</div>
          <div><div className="nm">Japanese Fine Dining</div><div className="de">Fine dining · Japanese · omakase tasting menu</div></div>
          <div className="rate"><span className="stars">★★★★★</span><br /><span style={{ 'fontSize': '12px', 'color': 'var(--muted)' }}>4.8</span></div>
        </div>
        <div className="camp">
          <div className="ct">Weekend Japanese Experience</div>
          <div className="cd">Paid Collaboration · On-site visit · deadline Sep 15</div>
        </div>
        <div className="tags"><span className="tag">1 Reel</span><span className="tag">3 Stories</span><span className="tag">On-site visit</span><span className="tag">20K–100K</span></div>
        <div className="row-between" style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}><span className="pill">₹20K–₹50K</span><a className="btn btn-primary" href="campaign-detail">View campaign</a></div>
        <div className="eye"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>Name & address hidden — location revealed after a deal is agreed</div>
      </div>

      <div className="card">
        <div className="rest">
          <div className="avatar">CB</div>
          <div><div className="nm">Premium Cocktail Bar</div><div className="de">Bar · Italian · weekend cocktail series</div></div>
          <div className="rate"><span className="stars">★★★★★</span><br /><span style={{ 'fontSize': '12px', 'color': 'var(--muted)' }}>4.6</span></div>
        </div>
        <div className="camp">
          <div className="ct">Weekend Cocktail Series Launch</div>
          <div className="cd">Paid · On-site visit · deadline Sep 20</div>
        </div>
        <div className="tags"><span className="tag">2 Reels</span><span className="tag">3 Stories</span><span className="tag">50K–150K</span></div>
        <div className="row-between" style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}><span className="pill">₹25K–₹40K</span><a className="btn btn-primary" href="campaign-detail">View campaign</a></div>
        <div className="eye"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>Name & address hidden — location revealed after a deal is agreed</div>
      </div>

      <div className="card">
        <div className="rest">
          <div className="avatar">CA</div>
          <div><div className="nm">All-day Café</div><div className="de">Café · brunch & dessert menus</div></div>
          <div className="rate"><span className="stars">★★★★☆</span><br /><span style={{ 'fontSize': '12px', 'color': 'var(--muted)' }}>4.4</span></div>
        </div>
        <div className="camp">
          <div className="ct">New Brunch Menu — Food Creator</div>
          <div className="cd">Paid + complimentary · deadline Sep 25</div>
        </div>
        <div className="tags"><span className="tag">1 Reel</span><span className="tag">2 Stories</span><span className="tag">On-site visit</span></div>
        <div className="row-between" style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}><span className="pill">₹12K–₹20K</span><a className="btn btn-primary" href="campaign-detail">View campaign</a></div>
        <div className="eye"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>Name & address hidden — location revealed after a deal is agreed</div>
      </div>
    </div>
  </main>
</div>


<ThemeToggle />
    </>
  );
}
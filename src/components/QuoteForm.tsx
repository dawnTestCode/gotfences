export default function QuoteForm() {
  return (
    <section className="section quote-section" id="quote">
      <div className="wrap">
        <div className="section-head">
          <span className="label-tag">Get Started</span>
          <h2>Request Your Free Estimate</h2>
          <p>Fill out the work order below and we&apos;ll call to schedule a walk of the property.</p>
        </div>

        <div className="ticket">
          <div className="ticket-head">
            <span className="stencil">Work Order Request</span>
            <span className="ticket-no">NO. 0001</span>
          </div>
          <div className="ticket-perf"></div>
          <div className="ticket-body">
            <form>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Jane Rancher" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="(555) 555-0123" />
                </div>
                <div className="field">
                  <label htmlFor="address">Property Address</label>
                  <input type="text" id="address" name="address" placeholder="Street address & city" />
                </div>
                <div className="field">
                  <label htmlFor="fence-type">Fence Type</label>
                  <select id="fence-type" name="fence-type">
                    <option value="">Choose one...</option>
                    <option>Vinyl Fencing</option>
                    <option>Rail Fencing</option>
                    <option>Hog &amp; Livestock Wire</option>
                    <option>Livestock Containment</option>
                    <option>Electric / Hot Wire</option>
                    <option>Privacy Fencing</option>
                    <option>Repair &amp; Replace</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="footage">Approx. Linear Footage (if known)</label>
                  <input type="text" id="footage" name="footage" placeholder="e.g. 400 ft, or leave blank" />
                </div>
                <div className="field full">
                  <label htmlFor="details">Tell Us About The Job</label>
                  <textarea
                    id="details"
                    name="details"
                    placeholder="What animals (if any), terrain, gates needed, timeline..."
                  ></textarea>
                </div>
              </div>
              <div className="ticket-submit">
                <button type="submit" className="btn btn-primary">Submit Work Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

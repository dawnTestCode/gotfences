const reasons = [
  {
    label: "Local",
    title: "We Work This Ground",
    description: "We know the clay, the slope, and the freeze line around here — so your posts go in right the first time.",
  },
  {
    label: "Honest",
    title: "Straight Quotes, No Surprises",
    description: "You get one number up front, walked through on-site, before any post hits the ground.",
  },
  {
    label: "Built To Hold",
    title: "Fence That Actually Contains",
    description: "We build for the animal on the other side of it — rail, wire, or electric hot wire — not just for how it looks from the road.",
  },
];

export default function WhyUs() {
  return (
    <section className="section why-section" id="why">
      <div className="wrap">
        <div className="section-head">
          <span className="label-tag">Why Folks Call Us</span>
          <h2>We Know Fence. We Know Livestock.</h2>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <div className="why-item" key={reason.label}>
              <span className="why-num">{reason.label}</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const services = [
  {
    icon: "🪵",
    title: "Vinyl Fencing",
    description: "Low-maintenance vinyl rail and privacy fence that holds its color and its line for decades.",
  },
  {
    icon: "🐴",
    title: "Rail Fencing",
    description: "Classic 2, 3, and 4-rail wood and vinyl fence for pasture, paddock, and curb appeal.",
  },
  {
    icon: "🐷",
    title: "Hog & Livestock Wire",
    description: "Tight-mesh hog panel and field fence built to contain — not just suggest a boundary.",
  },
  {
    icon: "🌾",
    title: "Livestock Containment",
    description: "Full-property containment systems designed around how your animals actually move.",
  },
  {
    icon: "🏡",
    title: "Privacy Fencing",
    description: "Solid vinyl and wood privacy fence for the homestead — built tight, built straight.",
  },
  {
    icon: "🔧",
    title: "Repair & Replace",
    description: "Storm damage, sagging gates, rotted posts — we fix what's down before it costs you stock.",
  },
];

function Placard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="placard">
      <span className="nail tl"></span>
      <span className="nail tr"></span>
      <span className="nail bl"></span>
      <span className="nail br"></span>
      <span className="placard-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href="#quote" className="more">Get a quote →</Link>
    </div>
  );
}

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="label-tag">What We Build</span>
          <h2>Fencing For Every Acre</h2>
          <p>From the front yard to the back forty — if it needs a fence, we've probably built one like it.</p>
        </div>

        <div className="placard-grid">
          {services.map((service) => (
            <Placard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import "./home.css";
import QuoteFormV2 from "@/components/QuoteFormV2";

const PHONE_DISPLAY = "(252) 550-8551";
const PHONE_HREF = "tel:+12525508551";
const EMAIL = "info@belcinc.com";

const services = [
  {
    img: "/images/gallery/IMG_1486.jpeg",
    alt: "White vinyl three-rail arena fence with horses",
    title: "Vinyl Fencing",
    text: "Low-maintenance vinyl rail and privacy fence that holds its color and its line for decades.",
  },
  {
    img: "/images/gallery/run-in-shed-framing-07.jpeg",
    alt: "Four-rail wood fence running along a pasture",
    title: "Rail Fencing",
    text: "Classic 2, 3, and 4-rail wood and vinyl fence for pasture, paddock, and curb appeal.",
  },
  {
    img: "/photos/crew-wire.jpg",
    alt: "Crew lead holding woven wire fence in place during an install, barn behind him",
    pos: "center 22%",
    title: "Hog & Livestock Wire",
    text: "Tight-mesh hog panel and field fence built to contain — not just suggest a boundary.",
  },
  {
    img: "/images/gallery/field-wire-fence-13.jpeg",
    alt: "Field wire fence line running across an open pasture",
    title: "Livestock Containment",
    text: "Full-property containment systems designed around how your animals actually move — including electric and hot wire where it's the right tool for the job.",
  },
  {
    img: "/images/gallery/privacy-fence-12.jpeg",
    alt: "Board-on-board wood privacy fence",
    title: "Privacy Fencing",
    text: "Solid vinyl and wood privacy fence for the homestead — built tight, built straight.",
  },
  {
    img: "/images/gallery/wire-fence-roadside-10.jpeg",
    alt: "Rail and wire fence with road and building in background",
    title: "Repair & Replace",
    text: "Storm damage, sagging gates, rotted posts — we fix what's down before it costs you stock.",
  },
];

const reasons = [
  {
    label: "Local",
    title: "We Work This Ground",
    text: "We know the clay, the slope, and the freeze line around here — so your posts go in right the first time.",
  },
  {
    label: "Honest",
    title: "Straight Quotes, No Surprises",
    text: "You get one number up front, walked through on-site, before any post hits the ground.",
  },
  {
    label: "Built To Hold",
    title: "Fence That Actually Contains",
    text: "We build for the animal on the other side of it — rail, wire, or electric hot wire — not just for how it looks from the road.",
  },
];

const steps = [
  {
    n: "01",
    title: "Walk It",
    text: "We come out and walk the property with you. Free on-site estimate, no obligation.",
  },
  {
    n: "02",
    title: "Price It Straight",
    text: "One number up front, walked through on-site, before any post hits the ground.",
  },
  {
    n: "03",
    title: "Build It To Hold",
    text: "Posts set right for this ground, lines run straight, gates hung to swing true — built for the animal on the other side of it.",
  },
];

const work = [
  { img: "/images/gallery/ramm.jpg", alt: "RAMM flex fence paddock with horses and run-in shed", cap: "Flex-rail paddock & run-in shed" },
  { img: "/images/gallery/IMG_5335.jpeg", alt: "White vinyl rail fence paddock with horses in shade", cap: "Vinyl rail paddock" },
  { img: "/images/gallery/rail-fence-pasture-01.jpeg", alt: "Dirt lane lined with rail fence on both sides", cap: "Rail fence, both sides of the drive" },
  { img: "/images/gallery/IMG_4933.jpeg", alt: "Black wood rail fence and gate with barn in background", cap: "Rail fence & gate at the barn" },
  { img: "/images/gallery/rail-wire-fence-road-02.jpeg", alt: "Wood rail and wire fence built around a mature tree", cap: "Rail & wire, worked around the tree" },
  { img: "/images/gallery/IMG_4967.jpeg", alt: "Lighted arena with white vinyl rail fence at night", cap: "Vinyl rail arena" },
  { img: "/photos/fence-roll.jpg", alt: "Kubota tractor unrolling field fence while the crew lead guides the roll", cap: "Rolling out field fence" },
  { img: "/photos/wire-fasten.jpg", alt: "Crew member fastening woven wire to a post, tractor holding tension behind him", cap: "Fastening wire on the post line" },
];

export default function Home() {
  return (
    <div className="gf2">
      {/* ===== Header ===== */}
      <header className="gf2-header">
        <div className="gf2-wrap gf2-header-inner">
          <div className="gf2-brand">
            <Image src="/images/logo.png" alt="Got Fences USA logo" width={46} height={46} />
            <span>Got Fences <em>USA</em></span>
          </div>
          <nav className="gf2-nav">
            <a href="#gf2-services">Services</a>
            <a href="#gf2-why">Why Us</a>
            <a href="#gf2-work">Our Work</a>
            <a href="#quote">Get A Quote</a>
          </nav>
          <a href={PHONE_HREF} className="gf2-call-btn">{PHONE_DISPLAY}</a>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="gf2-hero">
        <Image
          src="/images/gallery/rail-fence-pasture-01.jpeg"
          alt="Wood rail fence lining both sides of a farm lane"
          fill
          priority
          sizes="100vw"
          className="gf2-hero-img"
        />
        <div className="gf2-hero-shade" />
        <div className="gf2-wrap gf2-hero-inner">
          <span className="gf2-eyebrow">Got Fences USA · Serving The Region · Free Estimates</span>
          <h1>Fence Built For <span>Livestock.</span><br />Built To Last.</h1>
          <p className="gf2-lead">
            Vinyl, rail, hog wire and privacy fencing installed by a crew that knows
            the difference between a fence that looks good and a fence that holds animals.
          </p>
          <div className="gf2-hero-ctas">
            <a href={PHONE_HREF} className="gf2-btn gf2-btn-gold">Call {PHONE_DISPLAY}</a>
            <a href="#quote" className="gf2-btn gf2-btn-outline">Free On-Site Estimate</a>
          </div>
        </div>
      </section>

      {/* ===== Trust strip ===== */}
      <div className="gf2-trust">
        <div className="gf2-wrap gf2-trust-inner">
          <span>Family Owned &amp; Operated</span>
          <span>Licensed &amp; Insured</span>
          <span>Livestock-Safe Installs</span>
          <span>Free On-Site Estimates</span>
        </div>
      </div>

      {/* ===== Services ===== */}
      <section className="gf2-section" id="gf2-services">
        <div className="gf2-wrap">
          <div className="gf2-head">
            <span className="gf2-tag">What We Build</span>
            <h2>Fencing For Every Acre</h2>
            <p>From the front yard to the back forty — vinyl, rail, hog wire, electric, and everything between. If it needs a fence, we&apos;ve probably built one like it.</p>
          </div>
          <div className="gf2-cards">
            {services.map((s) => (
              <article className="gf2-card" key={s.title}>
                <div className="gf2-card-img">
                  <Image src={s.img} alt={s.alt} fill sizes="(max-width: 900px) 100vw, 380px" style={{ objectPosition: "pos" in s ? s.pos : "center" }} />
                </div>
                <div className="gf2-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <a href="#quote" className="gf2-more">Get a quote →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why us ===== */}
      <section className="gf2-section gf2-why" id="gf2-why">
        <div className="gf2-wrap">
          <div className="gf2-head gf2-head-light">
            <span className="gf2-tag">Why Folks Call Us</span>
            <h2>We Know Fence. We Know Livestock.</h2>
          </div>
          <div className="gf2-why-grid">
            {reasons.map((r) => (
              <div className="gf2-why-item" key={r.label}>
                <span className="gf2-why-label">{r.label}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>

          <div className="gf2-steps">
            {steps.map((s) => (
              <div className="gf2-step" key={s.n}>
                <span className="gf2-step-n">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Recent work ===== */}
      <section className="gf2-section" id="gf2-work">
        <div className="gf2-wrap">
          <div className="gf2-head">
            <span className="gf2-tag">Recent Work</span>
            <h2>Jobs From Around The Region</h2>
            <p>Rail fence, wire fence, privacy fence, and a couple of run-in sheds we&apos;ve built lately — all of it at a glance.</p>
          </div>
          <div className="gf2-work-grid">
            {work.map((w) => (
              <figure className="gf2-work-item" key={w.img}>
                <Image src={w.img} alt={w.alt} fill sizes="(max-width: 900px) 100vw, 380px" />
                <figcaption>{w.cap}</figcaption>
              </figure>
            ))}
          </div>

          <div className="gf2-shed">
            <div className="gf2-shed-img">
              <Image
                src="/images/gallery/rail-wire-fence-tree-03.jpeg"
                alt="Finished two-bay run-in shed exterior with wood plank stalls"
                fill
                sizes="(max-width: 900px) 100vw, 520px"
              />
            </div>
            <div className="gf2-shed-body">
              <span className="gf2-tag">More Than Fence</span>
              <h3>Run-In Sheds, Too</h3>
              <p>
                Shelter matters as much as fence line. We build run-in sheds alongside our
                fencing work — ask about one when we walk your property.
              </p>
              <a href={PHONE_HREF} className="gf2-btn gf2-btn-dark">Ask About A Shed</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA band ===== */}
      <section className="gf2-cta">
        <div className="gf2-wrap gf2-cta-inner">
          <div>
            <h2>Need Fence? Get Your Free Estimate.</h2>
            <p>We&apos;ll call to schedule a walk of the property — one straight number, no surprises.</p>
          </div>
          <div className="gf2-cta-btns">
            <a href={PHONE_HREF} className="gf2-btn gf2-btn-dark">Call {PHONE_DISPLAY}</a>
            <a href="#quote" className="gf2-btn gf2-btn-white">Request A Quote</a>
          </div>
        </div>
      </section>

      <QuoteFormV2 />

      {/* ===== Footer ===== */}
      <footer className="gf2-footer">
        <div className="gf2-wrap gf2-footer-grid">
          <div>
            <div className="gf2-brand gf2-brand-footer">
              <Image src="/images/logo.png" alt="Got Fences USA logo" width={42} height={42} />
              <span>Got Fences <em>USA</em></span>
            </div>
            <p>
              Vinyl, rail, hog wire, and livestock containment fencing, built by a crew
              that&apos;s been around the barn a time or two. Serving the region.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#gf2-services">Vinyl Fencing</a></li>
              <li><a href="#gf2-services">Rail Fencing</a></li>
              <li><a href="#gf2-services">Hog &amp; Livestock Wire</a></li>
              <li><a href="#gf2-services">Privacy Fencing</a></li>
            </ul>
          </div>
          <div>
            <h4>Get In Touch</h4>
            <ul>
              <li><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><a href="#quote">Request a quote</a></li>
            </ul>
          </div>
        </div>
        <div className="gf2-wrap gf2-footer-bottom">
          &copy; 2026 Got Fences USA. Serving the region. All rights reserved.
        </div>
      </footer>

      {/* ===== Sticky mobile call bar ===== */}
      <div className="gf2-callbar">
        <a href={PHONE_HREF} className="gf2-callbar-call">📞 Call Now</a>
        <a href="#quote" className="gf2-callbar-quote">Free Estimate</a>
      </div>
    </div>
  );
}

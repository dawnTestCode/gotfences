import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <span className="hero-eyebrow">Serving the Region · Free Estimates</span>
          <h1>Fence Built<br />For <span>Livestock.</span><br />Built To Last.</h1>
          <p className="lead">
            Vinyl, rail, hog wire and privacy fencing installed by a crew that knows
            the difference between a fence that looks good and a fence that holds animals.
          </p>
          <div className="hero-ctas">
            <Link href="#quote" className="btn btn-primary">Get A Free Quote</Link>
            <Link href="#services" className="btn btn-dark">See Our Work</Link>
          </div>
        </div>
        <div className="hero-badge">
          <Image
            src="/images/logo.png"
            alt="Got Fences USA mascot logo carrying a fence rail"
            width={380}
            height={380}
          />
        </div>
      </div>
    </section>
  );
}

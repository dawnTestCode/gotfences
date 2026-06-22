import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="brand">
          <Image src="/images/logo.png" alt="Got Fences USA logo" width={48} height={48} />
          <span className="brand-name">Got Fences USA</span>
        </div>
        <nav className="links">
          <Link href="#services">Services</Link>
          <Link href="#gallery">Our Work</Link>
          <Link href="#why">Why Us</Link>
          <Link href="#quote">Get A Quote</Link>
        </nav>
        <div className="nav-cta-wrap">
          <a href="tel:+12525508551" className="nav-cta">(252) 550-8551</a>
        </div>
      </div>
    </header>
  );
}

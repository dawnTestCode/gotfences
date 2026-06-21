import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <Image src="/images/logo.png" alt="Got Fences USA logo" width={42} height={42} />
              <span>Got Fences USA</span>
            </div>
            <p>
              Vinyl, rail, hog wire, and livestock containment fencing, built by a crew
              that's been around the barn a time or two. Serving the region.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="#services">Vinyl Fencing</Link></li>
              <li><Link href="#services">Rail Fencing</Link></li>
              <li><Link href="#services">Hog &amp; Livestock Wire</Link></li>
              <li><Link href="#services">Privacy Fencing</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get In Touch</h4>
            <ul>
              <li><a href="tel:+15555550123">(555) 555-0123</a></li>
              <li><a href="mailto:info@gotfencesusa.com">info@gotfencesusa.com</a></li>
              <li><Link href="#quote">Request a quote</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 Got Fences USA. Serving the region. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

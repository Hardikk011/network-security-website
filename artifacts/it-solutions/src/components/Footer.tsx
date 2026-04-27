import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import logoSrc from "@assets/cns-logo.png";

const DARK  = "#0B0F1A";
const AMBER = "#F59E0B";

export function Footer() {
  return (
    <footer style={{ backgroundColor: DARK, borderTop: "1px solid rgba(255,255,255,0.07)" }}
      className="pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-5 group">
              <div className="relative">
                <img
                  src={logoSrc}
                  alt="CNS logo"
                  className="h-16 w-16 object-contain transition-all duration-300 group-hover:scale-105"
                  style={{
                    filter: "drop-shadow(0 3px 12px rgba(245,158,11,0.2)) brightness(1.1) contrast(1.05)",
                    background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
                    borderRadius: "10px",
                    padding: "3px"
                  }}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[14px] tracking-widest text-white uppercase transition-colors group-hover:text-white/95">Cyber Network</span>
                <span className="font-medium text-[11px] tracking-[0.25em] uppercase" style={{ color: AMBER }}>Security</span>
              </div>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed font-light">
              Industrial and corporate IT solutions including networking, server setup,
              security, backup, AMC, and website development since 2015.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase text-white/70 mb-5">Services</h3>
            <ul className="space-y-3 text-sm text-white/45">
              {[
                "Network Design & Implementation",
                "Windows Server AD Setup",
                "Firewall & Antivirus Setup",
                "CCTV, Backup & IT Products",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services"
                    className="hover:text-white transition-colors font-light">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase text-white/70 mb-5">Company</h3>
            <ul className="space-y-3 text-sm text-white/45">
              {[
                { label: "About Us",      href: "/about" },
                { label: "Business IDs",  href: "/about" },
                { label: "Since 2015",    href: "/about" },
                { label: "Contact",       href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}
                    className="hover:text-white transition-colors font-light">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase text-white/70 mb-5">Contact</h3>
            <ul className="space-y-4 text-sm text-white/45 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: AMBER }} />
                <span>Aniruddh Complex, First Floor<br />Near Jalaram Chowk, Gayatri Nagar,<br />Rajkot - 360002</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: AMBER }} />
                <span>+91 63515 53927</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: AMBER }} />
                <a href="mailto:cnsinfo7@gmail.com" className="hover:text-white transition-colors cursor-pointer">
                  cnsinfo7@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 font-light"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p>© {new Date().getFullYear()} Cyber Network Security. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            {[
              { text: "www.cybernetworksecurity.in", href: "https://www.cybernetworksecurity.in" },
              { text: "GSTIN: 24BSBPA9422L1ZV", href: null },
              { text: "CNS", href: null }
            ].map((item) => (
              item.href ? (
                <a
                  key={item.text}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/60 transition-colors cursor-pointer"
                >
                  {item.text}
                </a>
              ) : (
                <span key={item.text} className="hover:text-white/60 transition-colors cursor-pointer">{item.text}</span>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import logoSrc from "@assets/image_1775930021005.png";

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
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <img src={logoSrc} alt="CNS logo" className="h-9 w-9 object-contain brightness-200" />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[13px] tracking-widest text-white uppercase">Cyber Network</span>
                <span className="font-medium text-[10px] tracking-[0.25em] uppercase" style={{ color: AMBER }}>Security</span>
              </div>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed font-light">
              Enterprise-grade IT infrastructure, cloud solutions, and managed services
              for organizations that cannot afford downtime.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase text-white/70 mb-5">Services</h3>
            <ul className="space-y-3 text-sm text-white/45">
              {["Cloud Infrastructure", "Cybersecurity", "Network Solutions", "Managed IT"].map((s) => (
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
                { label: "Leadership",    href: "/about" },
                { label: "Careers",       href: "/about" },
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
                <span>100 Technology Drive, Suite 400<br />San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: AMBER }} />
                <span>+1 (800) 555-0198</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: AMBER }} />
                <span>enterprise@cns.com</span>
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
            {["Privacy Policy", "Terms of Service", "Compliance"].map((t) => (
              <span key={t} className="hover:text-white/60 transition-colors cursor-pointer">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

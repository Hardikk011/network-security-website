import { Link } from "wouter";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoSrc from "@assets/image_1775930021005.png";

/* Navbar is ALWAYS dark regardless of theme */
const NAV_BG   = "#0B0F1A";
const AMBER    = "#F59E0B";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/",         label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about",    label: "About" },
    { href: "/contact",  label: "Contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: NAV_BG,
        boxShadow: "0 1px 0 0 rgba(255,255,255,0.06), 0 4px 24px 0 rgba(0,0,0,0.4)",
      }}
    >
      <div className="container-lg h-[68px] flex items-center justify-between gap-8">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" data-testid="link-home">
          <img src={logoSrc} alt="CNS logo" className="h-8 w-8 object-contain" />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[13px] tracking-widest text-white uppercase">Cyber Network</span>
            <span className="font-medium text-[10px] tracking-[0.25em] uppercase" style={{ color: AMBER }}>Security</span>
          </div>
        </Link>

        {/* ── Desktop nav links ── */}
        <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-wide transition-colors"
              style={{ color: AMBER }}
              data-testid={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Right: theme + two buttons ── */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors text-white/60 hover:text-white"
            data-testid="button-theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Contact — ghost outlined */}
          <Link href="/contact">
            <button
              data-testid="btn-nav-contact"
              className="h-9 px-5 rounded-full text-sm font-semibold text-white border border-white/25 hover:border-white/50 transition-colors"
            >
              Contact Us
            </button>
          </Link>

          {/* Get Started — amber filled pill */}
          <Link href="/contact">
            <button
              data-testid="btn-nav-get-started"
              className="h-9 px-5 rounded-full text-sm font-bold transition-all hover:opacity-90 active:scale-[0.97]"
              style={{ backgroundColor: AMBER, color: NAV_BG }}
            >
              Get Started
            </button>
          </Link>
        </div>

        {/* ── Mobile controls ── */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 text-white/60 hover:text-white transition-colors"
            data-testid="button-theme-toggle-mobile"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-white"
            data-testid="button-mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: NAV_BG, borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-semibold border-b border-white/07 last:border-0"
                  style={{ color: AMBER }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4">
                <Link href="/contact" onClick={() => setOpen(false)} className="flex-1">
                  <button className="w-full h-10 rounded-full text-sm font-semibold text-white border border-white/25">
                    Contact Us
                  </button>
                </Link>
                <Link href="/contact" onClick={() => setOpen(false)} className="flex-1">
                  <button
                    className="w-full h-10 rounded-full text-sm font-bold"
                    style={{ backgroundColor: AMBER, color: NAV_BG }}
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

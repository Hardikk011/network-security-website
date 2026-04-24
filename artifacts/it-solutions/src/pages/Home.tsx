import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle,
  Headphones,
  Cloud,
  Network,
  ServerCog,
  Lock,
  PhoneCall,
} from "lucide-react";
import { PageContainer } from "@/components/PageContainer";

/* ── Brand palette ── */
const AMBER  = "#F59E0B";   /* hsl(38 92% 51%)  — primary accent      */
const AMBER_D = "#D97706";  /* darker amber for hover depth             */
const DARK   = "#0B0F1A";   /* near-black — dark sections / overlay    */

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

const featuredServices = [
  {
    title: "Cloud Infrastructure",
    desc:  "Scalable, resilient cloud architecture deployed across AWS, Azure and private data centers with zero-downtime migration.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    tag: "Cloud", d1: "Multi-region", d2: "99.99% SLA",
  },
  {
    title: "Cybersecurity",
    desc:  "Zero-trust security models, continuous threat hunting, and SOC monitoring for regulated industries.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    tag: "Security", d1: "ISO 27001", d2: "24/7 SOC",
  },
  {
    title: "Network Architecture",
    desc:  "High-throughput, low-latency enterprise networking, SD-WAN, and intelligent traffic management at scale.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    tag: "Network", d1: "SD-WAN", d2: "Sub-5ms",
  },
];

const whyItems = [
  { icon: Headphones, title: "Proactive 24/7 Support",        desc: "Our US-based NOC monitors your environment round the clock. Average incident response time under 8 minutes — before your users notice." },
  { icon: Lock,       title: "Security-First Architecture",   desc: "Every engagement begins with a threat model. Security is structural, not bolt-on. ISO 27001 and SOC 2 Type II certified across all services." },
  { icon: Cloud,      title: "Cloud-Native Expertise",        desc: "From hybrid cloud migrations to fully managed Kubernetes platforms, we build cloud environments designed to scale with your ambitions." },
  { icon: Network,    title: "Enterprise Networking",         desc: "SD-WAN, MPLS, and zero-trust network access delivering high-throughput connectivity with built-in redundancy across every site." },
];

export default function Home() {
  return (
    <div className="w-full">

      {/* ── HERO: dark overlay over data-center photo ──────────── */}
      <section className="relative min-h-[620px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1800&q=85"
          alt="Enterprise data center"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark gradient overlay — same feel as reference */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(105deg, ${DARK}F5 30%, ${DARK}CC 60%, ${DARK}66 85%, transparent 100%)` }}
        />

        <PageContainer className="relative z-10 py-24 md:py-32">
          <div className="max-w-2xl">
            <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="text-xs font-bold uppercase tracking-[0.3em] mb-5"
              style={{ color: AMBER }}>
              Enterprise IT Solutions
            </motion.p>

            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-7 uppercase">
              Build Your<br />
              <span style={{ color: AMBER }}>Digital</span><br />
              Foundation.
            </motion.h1>

            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-base text-white/70 leading-relaxed mb-10 max-w-lg font-light">
              Cyber Network Security delivers uncompromising IT infrastructure,
              cloud architecture, and managed services to organizations that
              cannot afford downtime.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button
                  data-testid="btn-hero-get-started"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full text-sm font-bold tracking-wide transition-all hover:opacity-90 active:scale-[0.97]"
                  style={{ backgroundColor: AMBER, color: DARK }}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link href="/services">
                <button
                  data-testid="btn-hero-learn-more"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full text-sm font-semibold text-white border border-white/30 bg-white/8 hover:bg-white/15 transition-all tracking-wide"
                >
                  Our Services
                </button>
              </Link>
            </motion.div>
          </div>
        </PageContainer>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section className="bg-background py-16 md:py-20">
        <PageContainer>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="relative -mt-10 z-20 bg-background dark:bg-card border border-border rounded-2xl px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-border"
            style={{ boxShadow: `0 8px 40px 0 rgba(245,158,11,0.12), 0 2px 10px 0 rgba(0,0,0,0.10)` }}
          >
            {[
              { value: "500+",  label: "Enterprise Clients" },
              { value: "99.9%", label: "Uptime Guaranteed" },
              { value: "24/7",  label: "US-Based NOC" },
              { value: "15+",   label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <span className="text-3xl font-black tracking-tight" style={{ color: AMBER }}>{stat.value}</span>
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em] mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </PageContainer>
      </section>

      {/* ── FEATURED SERVICES (image left + text right) ───────── */}
      <section className="bg-background py-20 md:py-28">
        <PageContainer>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: AMBER }}>What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">Featured Services</h2>
            </div>
            <Link href="/services"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold hover:underline underline-offset-4"
              style={{ color: AMBER }}>
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="space-y-5">
            {featuredServices.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="rounded-2xl border border-border bg-background dark:bg-card overflow-hidden flex flex-col sm:flex-row transition-shadow"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
                data-testid={`card-service-${i}`}
              >
                <div className="sm:w-56 lg:w-72 flex-shrink-0 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-48 sm:h-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-between p-7 flex-1">
                  <div>
                    <span
                      className="inline-block text-[10px] font-black uppercase tracking-[0.2em] mb-3 px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${AMBER}18`, color: AMBER_D }}
                    >{s.tag}</span>
                    <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">{s.desc}</p>
                  </div>
                  <div className="flex items-center gap-6 mt-5 pt-5 border-t border-border">
                    {[s.d1, s.d2].map((d, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 flex-shrink-0" style={{ color: AMBER }} />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline underline-offset-4" style={{ color: AMBER }}>
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </PageContainer>
      </section>

      {/* ── OUR PROMISE: dark full-width section (like reference) ─ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: DARK }}>
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: bold amber heading + body */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-4" style={{ color: AMBER }}>Our Promise</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white mb-6">
                Always your<br />
                most reliable<br />
                technology partner
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-10 max-w-sm font-light">
                Since 2008, CNS has been the infrastructure backbone for
                enterprises that refuse to compromise on stability, security, or
                scalability. We're measured by your success.
              </p>
              <Link href="/contact">
                <button
                  data-testid="btn-promise-cta"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full text-sm font-bold tracking-wide transition-all hover:opacity-90 active:scale-[0.97]"
                  style={{ backgroundColor: AMBER, color: DARK }}
                >
                  <PhoneCall className="h-4 w-4" />
                  Contact Us
                </button>
              </Link>
            </motion.div>

            {/* Right: feature items */}
            <div className="space-y-7">
              {whyItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div
                    className="flex-shrink-0 h-12 w-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${AMBER}18`, border: `1px solid ${AMBER}30` }}
                  >
                    <item.icon className="h-5 w-5" style={{ color: AMBER }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-white/55 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* ── PORTFOLIO GRID: dark card + 2 photos ──────────────── */}
      <section className="bg-background py-20 md:py-28">
        <PageContainer>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: AMBER }}>Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">Our Infrastructure, In Action</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Dark text card — spans 2 rows */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-8 flex flex-col justify-between min-h-[380px] md:row-span-2"
              style={{ backgroundColor: DARK, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.3)" }}
            >
              <div>
                <div
                  className="h-11 w-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${AMBER}20`, border: `1px solid ${AMBER}35` }}
                >
                  <ServerCog className="h-5 w-5" style={{ color: AMBER }} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 leading-snug tracking-tight">
                  Mission-Critical Infrastructure
                </h3>
                <p className="text-white/55 text-sm leading-relaxed font-light">
                  From co-location facilities to edge computing nodes, CNS
                  designs and manages infrastructure that keeps your business
                  running — no matter what. Explore our case studies and see
                  how we've helped organizations scale with confidence.
                </p>
              </div>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold hover:underline underline-offset-4"
                style={{ color: AMBER }}
              >
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Top-right photo */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2 rounded-2xl overflow-hidden h-[210px] md:h-auto"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
            >
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1000&q=80"
                alt="IT team monitoring" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>

            {/* Bottom-right photo */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 rounded-2xl overflow-hidden h-[210px]"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
            >
              <img src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1000&q=80"
                alt="Network operations center" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          </div>
        </PageContainer>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <PageContainer>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{
              backgroundColor: DARK,
              boxShadow: `0 12px 48px 0 rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)`,
            }}
          >
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-white mb-3 tracking-tight leading-tight">
                Ready to upgrade your<br className="hidden md:block" /> infrastructure?
              </h2>
              <p className="text-white/55 text-sm max-w-lg font-light leading-relaxed">
                Schedule a strategic consultation with our enterprise architects.
                We'll evaluate your environment and map a clear path forward.
              </p>
            </div>
            <Link href="/contact" className="flex-shrink-0">
              <button
                data-testid="btn-cta-contact"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full text-sm font-bold tracking-wide transition-all hover:opacity-90 active:scale-[0.97] whitespace-nowrap"
                style={{ backgroundColor: AMBER, color: DARK }}
              >
                <PhoneCall className="h-4 w-4" />
                Contact Our Team
              </button>
            </Link>
          </motion.div>
        </PageContainer>
      </section>
    </div>
  );
}

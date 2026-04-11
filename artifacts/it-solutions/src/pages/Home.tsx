import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  Shield,
  Cloud,
  Network,
  ServerCog,
  PhoneCall,
  CheckCircle,
  Headphones,
  Lock,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const featuredServices = [
  {
    title: "Cloud Infrastructure",
    desc: "Scalable, resilient cloud architecture deployed across AWS, Azure and private data centers with zero-downtime migration.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
    tag: "Cloud",
    detail1: "Multi-region",
    detail2: "99.99% SLA",
  },
  {
    title: "Cybersecurity",
    desc: "Zero-trust security models, continuous threat hunting, and SOC monitoring for regulated industries.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=80",
    tag: "Security",
    detail1: "ISO 27001",
    detail2: "24/7 SOC",
  },
  {
    title: "Network Architecture",
    desc: "High-throughput, low-latency enterprise networking, SD-WAN, and intelligent traffic management.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80",
    tag: "Network",
    detail1: "SD-WAN",
    detail2: "Sub-5ms",
  },
];

export default function Home() {
  return (
    <div className="w-full">

      {/* ── HERO: Full-bleed background image with text overlay ── */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
          alt="Enterprise data center"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay — left heavy, fading right */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(11,31,58,0.93) 40%, rgba(11,31,58,0.55) 70%, rgba(11,31,58,0.15) 100%)" }}
        />

        {/* Text content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-10 py-24">
          <div className="max-w-xl">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-sm font-semibold uppercase tracking-widest text-accent mb-4"
            >
              Enterprise IT Solutions
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
            >
              Build Your <br />
              <span className="text-accent">Digital</span> Foundation
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base text-white/75 leading-relaxed mb-8 max-w-md"
            >
              NexCore delivers uncompromising IT infrastructure, cloud
              architecture, and managed services to organizations that cannot
              afford downtime.
            </motion.p>
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white border-0"
                  data-testid="btn-hero-get-started"
                >
                  Get Started
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10"
                  data-testid="btn-hero-learn-more"
                >
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── floating card below hero ─────────────── */}
      <section className="bg-background">
        <div className="container mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="relative -mt-10 z-20 bg-background dark:bg-card border border-border rounded-2xl shadow-lg px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-border"
          >
            {[
              { value: "500+", label: "Enterprise Clients" },
              { value: "99.9%", label: "Uptime Guaranteed" },
              { value: "24/7", label: "US-Based NOC" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED SERVICES (cards: left image + right text) ── */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-10"
          >
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-1">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Services</h2>
            </div>
            <Link href="/services" className="hidden md:inline-flex items-center gap-2 text-sm text-accent font-medium hover:underline underline-offset-4">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* 3 horizontal service cards */}
          <div className="space-y-5">
            {featuredServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="rounded-xl border border-border bg-background dark:bg-card shadow-sm overflow-hidden flex flex-col sm:flex-row"
                data-testid={`card-service-${i}`}
              >
                {/* Left: image */}
                <div className="sm:w-56 lg:w-64 flex-shrink-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-44 sm:h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Right: content */}
                <div className="flex flex-col justify-between p-6 flex-1">
                  <div>
                    <span className="inline-block text-xs font-semibold text-accent uppercase tracking-wider mb-2">{service.tag}</span>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-accent" />
                      {service.detail1}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-accent" />
                      {service.detail2}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile view-all link */}
          <div className="mt-8 text-center md:hidden">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:underline underline-offset-4">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY NEXCORE: left bold text + right icon+text list ── */}
      <section className="bg-[#F8FAFC] dark:bg-[#111827] py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — big text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Promise</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Always your<br />
                most reliable<br />
                technology partner
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
                Since 2008, NexCore has been the infrastructure backbone for
                enterprises that refuse to compromise on stability, security, or
                scalability. We're measured by your success.
              </p>
            </motion.div>

            {/* Right — feature items with circle icons */}
            <div className="space-y-8">
              {[
                {
                  icon: Headphones,
                  title: "Proactive Support",
                  desc: "Our US-based NOC monitors your environment 24/7/365, resolving issues before they impact operations. Average incident response under 8 minutes.",
                },
                {
                  icon: Lock,
                  title: "Security-First Architecture",
                  desc: "Every engagement starts with a threat model. We design systems where security is structural, not bolted on — ISO 27001 and SOC 2 Type II certified.",
                },
                {
                  icon: Cloud,
                  title: "Cloud-Native Expertise",
                  desc: "From hybrid cloud migrations to fully managed Kubernetes platforms, we architect cloud environments that scale with your business demands.",
                },
                {
                  icon: Network,
                  title: "Enterprise Networking",
                  desc: "SD-WAN, MPLS, and zero-trust network access solutions delivering high-throughput connectivity with built-in redundancy across all sites.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 h-11 w-11 rounded-full bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM GRID: dark text card + 2 image cards ─────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-1">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Infrastructure, In Action</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Left: dark navy text card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-[#0B1F3A] dark:bg-[#1E293B] p-8 flex flex-col justify-between min-h-[360px] md:row-span-2"
            >
              <div>
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <ServerCog className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                  Mission-Critical Infrastructure
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  From co-location facilities to edge computing nodes, NexCore
                  designs and manages infrastructure that keeps your business
                  running — no matter what. Explore our case studies and see
                  how we've helped organizations scale with confidence.
                </p>
              </div>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline underline-offset-4"
              >
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Top-right image */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2 rounded-2xl overflow-hidden border border-border shadow-sm h-[200px] md:h-auto"
            >
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&q=80"
                alt="IT team monitoring infrastructure"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Bottom-right image (spanning 2 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 rounded-2xl overflow-hidden border border-border shadow-sm h-[200px]"
            >
              <img
                src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=900&q=80"
                alt="Network operations center"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] dark:bg-[#111827] py-20">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="rounded-2xl bg-[#0B1F3A] dark:bg-[#1E293B] px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                Ready to upgrade your infrastructure?
              </h2>
              <p className="text-white/65 text-sm max-w-lg">
                Schedule a strategic consultation with our enterprise architects.
                We'll evaluate your environment and map a path to greater
                stability, security, and scale.
              </p>
            </div>
            <Link href="/contact" className="flex-shrink-0">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white border-0 whitespace-nowrap"
                data-testid="btn-cta-contact"
              >
                <PhoneCall className="h-4 w-4 mr-2" />
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

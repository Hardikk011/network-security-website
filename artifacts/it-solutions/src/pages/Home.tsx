import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const featureCards = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable, resilient cloud architecture deployed across AWS, Azure, and private data centers with zero downtime migration paths.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    alt: "Cloud computing infrastructure"
  },
  {
    title: "Cybersecurity",
    description: "Zero-trust security models, continuous threat hunting, SOC monitoring, and comprehensive compliance frameworks for regulated industries.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    alt: "Cybersecurity operations"
  },
  {
    title: "Managed IT Services",
    description: "Proactive 24/7 monitoring, maintenance, and dedicated US-based support engineers for mission-critical business systems.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
    alt: "IT support team"
  }
];

const gridImages = [
  { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80", alt: "Data center server racks" },
  { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80", alt: "Network monitoring" },
  { src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80", alt: "Network cabling" },
  { src: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=500&q=80", alt: "Cloud infrastructure" }
];

const whyPoints = [
  "99.99% uptime SLA backed by financial guarantees",
  "24/7/365 US-based Network Operations Center",
  "ISO 27001 and SOC 2 Type II certified",
  "Elastic capacity scaling in under 60 seconds",
  "Dedicated senior architect on every engagement",
  "Quarterly strategic technology reviews included"
];

export default function Home() {
  return (
    <div className="w-full">

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="bg-background pt-20 pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground/70 mb-8">
                  <span className="h-2 w-2 rounded-full bg-accent flex-shrink-0"></span>
                  Enterprise IT Solutions
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground mb-6"
              >
                Engineered for{" "}
                <span className="text-accent">Scale.</span>
                <br />
                Secured for{" "}
                <span className="text-accent">Tomorrow.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
              >
                NexCore delivers uncompromising IT infrastructure, cloud
                architecture, and managed services to organizations that cannot
                afford downtime.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" data-testid="btn-hero-get-started">
                    Get Started
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" data-testid="btn-hero-learn-more">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden border border-border shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80"
                alt="Modern server room data center"
                className="w-full h-[420px] lg:h-[520px] object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS (image on top) ────────────────────────── */}
      <section className="bg-[#F8FAFC] dark:bg-card py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Capabilities
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg">
              Comprehensive technology solutions built for performance,
              security, and reliability at enterprise scale.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {featureCards.map((card, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-border bg-background shadow-sm overflow-hidden"
              >
                {/* Image on top */}
                <div className="overflow-hidden h-52">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Content below */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── GRID IMAGE SECTION (left text + right 2×2 grid) ─────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — text block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.p variants={itemVariants} className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Why NexCore
              </motion.p>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                The Infrastructure Your Business Deserves
              </motion.h2>
              <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed mb-8">
                For over 15 years, NexCore has operated with a singular focus:
                delivering stable, secure, and scalable IT foundations for
                organizations that demand excellence. We treat technology as an
                invisible enabler of growth, not a source of friction.
              </motion.p>

              <motion.ul variants={containerVariants} className="space-y-3 mb-10">
                {whyPoints.map((point, i) => (
                  <motion.li key={i} variants={itemVariants} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={itemVariants}>
                <Link href="/about" className="inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4 text-sm">
                  Learn about our approach <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — 2×2 image grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {gridImages.map((img, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="rounded-xl overflow-hidden border border-border shadow-sm"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW / STATS ───────────────────────────────── */}
      <section className="bg-[#F8FAFC] dark:bg-card py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-border shadow-lg order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="NexCore corporate office"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Right — text + stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="order-1 lg:order-2"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built on Precision and Trust
              </motion.h2>
              <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed mb-10">
                Since 2008, NexCore has served Fortune 500 companies and growth-stage
                enterprises with consistent, measurable results. Our team of certified
                architects and engineers are invested in your long-term success.
              </motion.p>

              <div className="grid grid-cols-2 gap-8 mb-10">
                {[
                  { value: "500+", label: "Enterprise Clients" },
                  { value: "15+",  label: "Years Experience" },
                  { value: "99.9%", label: "Historical Uptime" },
                  { value: "24/7", label: "Dedicated Support" }
                ].map((stat, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <div className="text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants}>
                <Link href="/about" className="inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4 text-sm">
                  Read our full story <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0B1F3A] dark:bg-[#111827]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to upgrade your infrastructure?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Schedule a strategic consultation with our enterprise architects
              to evaluate your environment and plan your next phase of growth.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 text-base border-0"
                data-testid="btn-cta-contact"
              >
                Contact Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

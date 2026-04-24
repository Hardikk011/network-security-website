/**
 * EXAMPLE: Properly structured page with centered layout
 *
 * This shows the recommended pattern for building pages with:
 * ✅ Centered max-width content
 * ✅ Consistent spacing
 * ✅ Responsive padding
 * ✅ Component reusability
 */

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export default function ExamplePageStructure() {
  return (
    <>
      {/*
        ═════════════════════════════════════════════════════════════
        PATTERN 1: Hero Section (Full-width background, centered content)
        ═════════════════════════════════════════════════════════════
      */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-r from-primary/10 to-accent/10 overflow-hidden">
        {/* Optional background image */}
        <div className="absolute inset-0 opacity-5" />

        <Container className="relative z-10 py-20 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-widest text-accent mb-4"
            >
              Section subtitle
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground mb-6"
            >
              Build something amazing
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg"
            >
              This example shows how to properly structure a page using the
              Container component for consistent centering and spacing.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="flex gap-4">
              <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-lg border border-border hover:bg-background transition">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/*
        ═════════════════════════════════════════════════════════════
        PATTERN 2: Regular Content Section (Centered, with vertical padding)
        ═════════════════════════════════════════════════════════════
      */}
      <Container as="section" className="py-20 md:py-28 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            Why choose us?
          </h2>
        </motion.div>

        {/* Grid of feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition"
            >
              <div className="h-10 w-10 rounded-lg bg-accent/10 mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">
                Feature {item}
              </h3>
              <p className="text-sm text-muted-foreground">
                Description of what this feature does and why it matters.
              </p>
            </motion.div>
          ))}
        </div>
      </Container>

      {/*
        ═════════════════════════════════════════════════════════════
        PATTERN 3: Dark Section (Full-width color, centered content)
        ═════════════════════════════════════════════════════════════
      */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-3 text-accent">
                Why it matters
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
                The benefits
              </h2>
              <p className="text-base opacity-90 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="inline-flex items-center gap-2 font-semibold hover:underline underline-offset-4">
                Learn more <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Right side - Feature list */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { title: "Benefit 1", desc: "Description of benefit" },
                { title: "Benefit 2", desc: "Description of benefit" },
                { title: "Benefit 3", desc: "Description of benefit" },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{benefit.title}</h4>
                    <p className="text-sm opacity-80">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/*
        ═════════════════════════════════════════════════════════════
        PATTERN 4: CTA Section (Minimal, focused)
        ═════════════════════════════════════════════════════════════
      */}
      <Container as="section" className="py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-primary to-accent p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Join thousands of satisfied customers using our platform.
          </p>
          <button className="px-8 py-3 rounded-lg bg-white text-primary font-semibold hover:opacity-90 transition">
            Start Free Trial
          </button>
        </motion.div>
      </Container>
    </>
  );
}

/**
 * ═══════════════════════════════════════════════════════════════
 * KEY PATTERNS TO REMEMBER:
 * ═══════════════════════════════════════════════════════════════
 *
 * 1. FULL-WIDTH SECTION (like hero):
 *    <section className="py-20 bg-...">
 *      <Container className="...">...</Container>
 *    </section>
 *
 * 2. CENTERED CONTENT SECTION:
 *    <Container as="section" className="py-20 bg-...">
 *      ...
 *    </Container>
 *
 * 3. SPACING:
 *    - Between sections: py-20 (md:py-28 for larger screens)
 *    - Inside grids: gap-6
 *    - Card padding: p-6
 *    - Text hierarchy spacing: mb-4 (headings), mb-6 (sections)
 *
 * 4. RESPONSIVE:
 *    - Use md:, lg: prefixes
 *    - md: = 768px (tablet)
 *    - lg: = 1024px (desktop)
 *    - Always default to mobile, then scale up
 *
 * 5. TEXT SIZING:
 *    - h1: text-3xl md:text-4xl lg:text-5xl
 *    - h2: text-2xl md:text-3xl lg:text-4xl
 *    - h3: text-lg md:text-xl lg:text-2xl
 */

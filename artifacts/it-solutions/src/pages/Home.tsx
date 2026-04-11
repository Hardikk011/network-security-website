import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/Card";
import { Link } from "wouter";
import { Cloud, Shield, Network, ServerCog, CheckCircle2, Clock, Scaling, LineChart, ArrowRight } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 md:pt-24 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-2xl"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium mb-6 text-foreground/80">
                <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                Enterprise IT Solutions
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                Engineered for <span className="text-accent">Scale.</span> <br />
                Secured for <span className="text-accent">Tomorrow.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                NexCore delivers uncompromising IT infrastructure, cloud architecture, and managed services to organizations that cannot afford downtime.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto" data-testid="btn-hero-get-started">
                    Get Started
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto" data-testid="btn-hero-learn-more">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border border-border shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80" 
                alt="Modern server room data center" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground text-lg">Comprehensive technology solutions designed for performance, security, and reliability.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {[
              { icon: Cloud, title: "Cloud Infrastructure", desc: "Scalable, resilient cloud architecture deployed across AWS, Azure, and private environments." },
              { icon: Shield, title: "Cybersecurity", desc: "Zero-trust security models, threat hunting, and comprehensive compliance frameworks." },
              { icon: Network, title: "Network Solutions", desc: "High-throughput, low-latency enterprise networking and SD-WAN implementations." },
              { icon: ServerCog, title: "Managed IT", desc: "Proactive monitoring, maintenance, and 24/7 support for critical business systems." }
            ].map((service, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card hoverEffect className="h-full">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Enterprises Choose NexCore</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We don't just maintain systems; we engineer strategic advantages. Our methodology ensures your technology operates as a reliable engine for growth.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: CheckCircle2, title: "99.99% Uptime SLAs", desc: "Financially backed guarantees for critical system availability." },
                  { icon: Clock, title: "24/7/365 US-Based NOC", desc: "Round-the-clock monitoring and incident response by certified engineers." },
                  { icon: Scaling, title: "Elastic Scalability", desc: "Infrastructure that grows seamlessly alongside your business demands." },
                  { icon: LineChart, title: "Proactive Strategy", desc: "Quarterly technology reviews to align IT investments with business goals." }
                ].map((feature, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden border border-border"
            >
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" 
                alt="Cybersecurity operations center" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden border border-border"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
                alt="NexCore Corporate Office" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built on Precision and Trust</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Since 2008, NexCore has operated with a singular focus: providing stable, secure, and scalable IT foundations for businesses that demand excellence. We believe technology should be an invisible enabler of success, not a source of friction.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <motion.div variants={itemVariants}>
                  <div className="text-4xl font-bold text-primary dark:text-foreground mb-2">500+</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Enterprise Clients</div>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <div className="text-4xl font-bold text-primary dark:text-foreground mb-2">15+</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</div>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <div className="text-4xl font-bold text-primary dark:text-foreground mb-2">99.9%</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Historical Uptime</div>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <div className="text-4xl font-bold text-primary dark:text-foreground mb-2">24/7</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Dedicated Support</div>
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <Link href="/about" className="inline-flex items-center text-accent font-medium hover:underline underline-offset-4">
                  Read our full story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary dark:bg-card text-primary-foreground border-y border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to upgrade your infrastructure?</h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Schedule a strategic consultation with our enterprise architects to evaluate your current environment and discuss scalability.
            </p>
            <Link href="/contact">
              <Button variant="accent" size="lg" className="px-8 text-lg" data-testid="btn-cta-contact">
                Contact Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

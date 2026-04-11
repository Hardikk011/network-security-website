import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/Card";
import { Cloud, Shield, Network, ServerCog, Database, Lightbulb, RefreshCcw, Scale } from "lucide-react";

export default function Services() {
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

  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      desc: "Architect, migrate, and manage scalable cloud environments.",
      features: ["AWS, Azure, GCP Experts", "Hybrid & Private Cloud", "Cloud Cost Optimization", "Infrastructure as Code"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      desc: "Protect critical assets with military-grade security frameworks.",
      features: ["Zero-Trust Architecture", "MDR & Threat Hunting", "Penetration Testing", "Security Awareness Training"]
    },
    {
      icon: Network,
      title: "Network Architecture",
      desc: "Design and implement high-performance, resilient corporate networks.",
      features: ["SD-WAN Deployment", "Wireless Infrastructure", "Network Segmentation", "Global Load Balancing"]
    },
    {
      icon: ServerCog,
      title: "Managed IT Services",
      desc: "Comprehensive outsourced IT management and support.",
      features: ["24/7/365 Helpdesk", "Endpoint Management", "Patch Management", "IT Asset Lifecycle"]
    },
    {
      icon: Database,
      title: "Data Center Solutions",
      desc: "Physical infrastructure management and colocation services.",
      features: ["Server Virtualization", "Storage Area Networks", "Power & Cooling", "Hardware Lifecycle"]
    },
    {
      icon: Lightbulb,
      title: "IT Consulting & CIO",
      desc: "Strategic technology planning aligned with business objectives.",
      features: ["Digital Transformation", "IT Budget Planning", "Vendor Management", "M&A IT Integration"]
    },
    {
      icon: RefreshCcw,
      title: "Disaster Recovery",
      desc: "Ensure business continuity in the face of catastrophic events.",
      features: ["RTO/RPO Planning", "Automated Backups", "Failover Testing", "Geographic Redundancy"]
    },
    {
      icon: Scale,
      title: "Compliance & Governance",
      desc: "Navigate complex regulatory requirements with confidence.",
      features: ["SOC 2 Compliance", "HIPAA/HITRUST", "ISO 27001", "Audit Preparation"]
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-section py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Enterprise IT Services</h1>
            <p className="text-xl text-muted-foreground">
              End-to-end technology solutions designed to secure your data, optimize performance, and drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card hoverEffect className="h-full flex flex-col">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
                  </CardHeader>
                  <CardContent className="mt-auto pt-4 border-t border-border/50">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-center text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

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
      icon: Network,
      title: "Industrial & Corporate Network Design",
      desc: "Design and implementation of stable, scalable business networks.",
      features: ["LAN/WAN Planning", "Structured Deployment", "Performance Tuning", "Secure Segmentation"]
    },
    {
      icon: ServerCog,
      title: "Windows Server Advanced AD Setup",
      desc: "Advanced Active Directory setup for Windows Server environments.",
      features: ["Server 2012 Setup", "Server 2016 Setup", "Server 2019 Setup", "Server 2022 Setup"]
    },
    {
      icon: RefreshCcw,
      title: "Annual Maintenance Contract (AMC)",
      desc: "Preventive and corrective IT maintenance for uninterrupted operations.",
      features: ["Routine Health Checks", "Issue Resolution", "Performance Monitoring", "System Upkeep"]
    },
    {
      icon: Database,
      title: "Data Recovery & Backup Solutions",
      desc: "Corporate backup and recovery with NAS and SAN based strategies.",
      features: ["NAS Backup Setup", "SAN Integration", "Recovery Planning", "Data Protection"]
    },
    {
      icon: Cloud,
      title: "Time & Attendance System Setup",
      desc: "Implementation of attendance and workforce tracking infrastructure.",
      features: ["Device Installation", "Policy Configuration", "Reporting Flow", "Operational Support"]
    },
    {
      icon: Lightbulb,
      title: "Small Business ERP Development",
      desc: "Business-focused ERP software development for operational control.",
      features: ["Requirement Analysis", "Custom Module Build", "Workflow Integration", "Deployment Support"]
    },
    {
      icon: Shield,
      title: "Advanced Firewall Security Setup",
      desc: "Professional firewall deployment and hardening for business security.",
      features: ["Fortinet Setup", "Cisco Setup", "SonicWall Setup", "Policy Hardening"]
    },
    {
      icon: Scale,
      title: "Antivirus Console Setup",
      desc: "Centralized endpoint protection setup for business environments.",
      features: ["ESET Console Setup", "Quick Heal Setup", "Policy Control", "Threat Monitoring"]
    },
    {
      icon: Shield,
      title: "CCTV & Security Setup",
      desc: "Complete surveillance setup using DVR and NVR systems.",
      features: ["Camera Planning", "DVR Setup", "NVR Setup", "Recording Management"]
    },
    {
      icon: Database,
      title: "IT Products Supply",
      desc: "Old/new laptops, printers, and complete business IT product support.",
      features: ["Laptop Solutions", "Printer Solutions", "Hardware Sourcing", "Business Procurement"]
    },
    {
      icon: Cloud,
      title: "Website Development",
      desc: "Professional website development services for business growth.",
      features: ["Business Website Build", "Modern UI Delivery", "Responsive Layouts", "Deployment Support"]
    },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">CNS IT Services</h1>
            <p className="text-xl text-muted-foreground">
              Practical IT solutions for corporate and industrial organizations, delivered by CYBER NETWORK SECURITY.
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

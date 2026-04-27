import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/Card";
import { Target, Users, ShieldCheck, Trophy } from "lucide-react";

export default function About() {
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

  const team = [
    { name: "Vijay Adhiya", role: "Owner", initials: "VA" },
    { name: "CISCO ID: CSCO13130744", role: "Registered Partner ID", initials: "CI" },
    { name: "MICROSOFT ID: 13803808", role: "Registered Partner ID", initials: "MI" },
    { name: "GSTIN: 24BSBPA9422L1ZV", role: "Business Registration", initials: "GS" }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About CYBER NETWORK SECURITY</h1>
            <p className="text-xl text-muted-foreground">
              Trusted corporate and industrial IT service partner since 2015.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden border border-border"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
                alt="CYBER NETWORK SECURITY office space" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h2 className="text-3xl font-bold mb-6">The CNS Story</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                CYBER NETWORK SECURITY (CNS) was founded with a practical mission:
                deliver reliable, secure, and cost-effective IT infrastructure
                services for business environments.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Over the years, CNS has become a trusted service provider for
                industrial and corporate clients by focusing on implementation
                quality, transparent support, and long-term operational stability.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, CNS supports organizations with network design, advanced
                Windows Server AD setup, firewall security, backup and recovery,
                CCTV systems, and complete IT product support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide our technical service delivery.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Target, title: "Precision", desc: "Every deployment is planned and implemented with practical engineering accuracy for business continuity." },
              { icon: ShieldCheck, title: "Security", desc: "We prioritize secure configuration across firewall, server, backup, and endpoint systems." },
              { icon: Users, title: "Trust", desc: "We build long-term client relationships through transparent communication and accountable service." },
              { icon: Trophy, title: "Commitment", desc: "We continuously improve our skills to deliver reliable IT outcomes in real-world environments." }
            ].map((value, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card hoverEffect className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Business Credentials</h2>
            <p className="text-muted-foreground text-lg">Verified business identity and partner registrations for trusted service delivery.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center">
                <div className="mx-auto w-32 h-32 rounded-full bg-section border border-border flex items-center justify-center mb-4 overflow-hidden">
                   <span className="text-2xl font-bold text-muted-foreground">{member.initials}</span>
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-accent">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

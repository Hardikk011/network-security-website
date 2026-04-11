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
    { name: "Robert Chen", role: "Chief Executive Officer", initials: "RC" },
    { name: "Sarah Jenkins", role: "Chief Technology Officer", initials: "SJ" },
    { name: "David Miller", role: "VP of Cloud Architecture", initials: "DM" },
    { name: "Elena Rodriguez", role: "Director of Cybersecurity", initials: "ER" }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About NexCore</h1>
            <p className="text-xl text-muted-foreground">
              Architecting the digital foundation for modern enterprise success since 2008.
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
                alt="NexCore Office Space" 
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
              <h2 className="text-3xl font-bold mb-6">The NexCore Story</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Founded on the principle that enterprise IT should be a strategic asset rather than a cost center, NexCore began as a boutique infrastructure consultancy in San Francisco.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Over the past 15 years, we have evolved into a comprehensive technology services firm, trusted by Fortune 500 companies and mid-market leaders to manage their most critical systems. Our growth has been fueled by a relentless commitment to engineering excellence and client success.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, NexCore manages over $2B in client infrastructure, operates across 4 global data centers, and maintains a team of 150+ certified engineers dedicated to operational perfection.
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
            <p className="text-muted-foreground text-lg">The principles that guide our engineering and service delivery.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Target, title: "Precision", desc: "We measure twice and cut once. Every deployment is architected with meticulous attention to detail." },
              { icon: ShieldCheck, title: "Integrity", desc: "We operate with total transparency and take ownership of the systems we manage." },
              { icon: Users, title: "Partnership", desc: "We align our success directly with the operational success of our clients." },
              { icon: Trophy, title: "Excellence", desc: "We continuously pursue mastery of emerging technologies to deliver superior results." }
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
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground text-lg">Industry veterans dedicated to advancing enterprise technology.</p>
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

import { Link } from "wouter";
import { Server, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary dark:bg-card border-t border-border pt-16 pb-8 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Server className="h-6 w-6 text-accent" />
              <span>NexCore</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Delivering enterprise-grade IT infrastructure, cloud solutions, and managed services to Fortune 500 companies and mid-market leaders.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="/services" className="hover:text-accent transition-colors">Cloud Infrastructure</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Network Solutions</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Managed IT</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">Leadership Team</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>100 Technology Drive, Suite 400<br/>San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+1 (800) 555-0198</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>enterprise@nexcore.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} NexCore IT Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="hover:text-primary-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary-foreground transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-primary-foreground transition-colors cursor-pointer">Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

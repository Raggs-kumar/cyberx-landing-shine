import { Link } from "@tanstack/react-router";
import { Shield, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-mono font-bold tracking-widest">
              CYBER<span className="text-gradient">X</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Next-generation cybersecurity for organizations that refuse to compromise on trust.
          </p>
          <div className="flex gap-3">
            {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="glass p-2 rounded-md hover:text-primary hover:shadow-glow transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase text-muted-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
            <li><Link to="/help" className="hover:text-primary transition">Help</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
            <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase text-muted-foreground">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/clients" className="hover:text-primary transition">Clients</Link></li>
            <li><a href="#" className="hover:text-primary transition">Documentation</a></li>
            <li><a href="#" className="hover:text-primary transition">Security Blog</a></li>
            <li><a href="#" className="hover:text-primary transition">Status</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase text-muted-foreground">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Threat intel & product updates, monthly.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="you@company.com" className="bg-input/60" />
            <Button type="submit" className="bg-gradient-primary text-primary-foreground shadow-glow">Join</Button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CYBERX Security, Inc. All rights reserved.</p>
          <p className="font-mono">[ SOC 2 · ISO 27001 · GDPR · HIPAA ]</p>
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Cpu, Cloud, Zap, Lock, Activity, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ParticleBg } from "@/components/site/ParticleBg";
import heroImg from "@/assets/cyber-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CYBERX — Next-Gen Cybersecurity for a Digital World" },
      { name: "description", content: "AI-powered threat detection, cloud security, and incident response. CYBERX protects modern businesses 24/7." },
      { property: "og:title", content: "CYBERX — Next-Gen Cybersecurity" },
      { property: "og:description", content: "AI-powered threat detection, cloud security, and incident response." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Eye, title: "Threat Monitoring", desc: "24/7 AI-driven monitoring across endpoints, networks, and cloud workloads." },
  { icon: Lock, title: "Data Encryption", desc: "End-to-end encryption with zero-trust key management and HSM-backed vaults." },
  { icon: Cloud, title: "Cloud Security", desc: "Posture management for AWS, Azure & GCP — misconfigurations caught in real time." },
  { icon: Activity, title: "Incident Response", desc: "Battle-tested IR team on standby. Average containment time under 18 minutes." },
];

const stats = [
  { v: "99.99%", l: "Uptime SLA" },
  { v: "<18m", l: "Avg response" },
  { v: "2.4B+", l: "Threats blocked" },
  { v: "500+", l: "Enterprises" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0">
          <ParticleBg />
        </div>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-40 right-0 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs font-mono text-primary mb-6">
              <Sparkles className="h-3 w-3" />
              <span>AI Security · Live Threat Intel</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Next-Gen <span className="text-gradient">Cybersecurity</span> for a Digital World
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              CYBERX combines AI-driven threat detection, zero-trust architecture, and elite incident response to keep your business unbreakable — 24 hours a day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow font-semibold">
                <Link to="/contact">Get Started <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass border-primary/40 hover:border-primary hover:text-primary">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="text-2xl md:text-3xl font-bold text-gradient font-mono">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden glow-border glass-strong shadow-glow">
              <img
                src={heroImg}
                alt="CYBERX security shield with neon network grid"
                width={1536}
                height={1024}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-lg p-4 font-mono text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
                    LIVE THREAT FEED
                  </span>
                  <span className="text-muted-foreground">v4.2.1</span>
                </div>
                <div className="space-y-1 text-muted-foreground">
                  <div>→ Blocked 1,284 intrusion attempts (last 60s)</div>
                  <div className="text-foreground">→ Anomaly resolved · endpoint #4471</div>
                  <div className="text-accent">→ Zero-day signature deployed globally</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 glass rounded-xl p-4 animate-float shadow-glow-purple">
              <ShieldCheck className="h-8 w-8 text-accent" />
            </div>
            <div className="absolute -bottom-4 -left-6 glass rounded-xl p-4 animate-float shadow-glow" style={{ animationDelay: "1.5s" }}>
              <Cpu className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">// Services</p>
            <h2 className="text-3xl md:text-5xl font-bold">Everything you need to stay <span className="text-gradient">unbreakable</span></h2>
            <p className="mt-4 text-muted-foreground">A unified security platform built for the modern, cloud-first enterprise.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-primary/20 grid place-items-center mb-4 group-hover:shadow-glow transition">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="glass border-primary/40 hover:text-primary">
              <Link to="/help">View all services <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-16 border-y border-border glass">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
            Trusted by security teams at
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-16 animate-scroll-x w-max">
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex gap-16 items-center">
                  {["NEXUS", "AURORA", "QUANTUM", "VANTAGE", "STELLAR", "OBSIDIAN", "HELIX", "MERIDIAN"].map((n) => (
                    <span key={n + dup} className="font-mono text-xl tracking-widest text-muted-foreground hover:text-primary transition">
                      {n}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl glass-strong p-12 md:p-16 text-center glow-border">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative">
              <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold">Ready to get <span className="text-gradient">protected?</span></h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                See CYBERX defend a live environment in 20 minutes. No commitment.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow font-semibold">
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="glass border-primary/40 hover:text-primary">
                  <Link to="/clients">See customer stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

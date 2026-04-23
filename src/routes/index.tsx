import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cloud, Lock, Activity, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/cyber-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CYBERX — Thoughtful cybersecurity for modern teams" },
      { name: "description", content: "Calm, reliable threat detection, cloud security, and incident response — built around the people who use it." },
      { property: "og:title", content: "CYBERX — Thoughtful cybersecurity" },
      { property: "og:description", content: "Calm, reliable threat detection, cloud security, and incident response." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Eye, title: "Threat Monitoring", desc: "Quiet, around-the-clock monitoring across your endpoints, networks, and cloud workloads." },
  { icon: Lock, title: "Data Encryption", desc: "Strong encryption and key management — without the friction your team is used to." },
  { icon: Cloud, title: "Cloud Security", desc: "Configuration guardrails for AWS, Azure & GCP, with clear, plain-language guidance." },
  { icon: Activity, title: "Incident Response", desc: "Real humans on call when things go wrong. Average containment under 18 minutes." },
];

const stats = [
  { v: "99.99%", l: "Uptime" },
  { v: "<18m", l: "Avg response" },
  { v: "500+", l: "Teams protected" },
  { v: "24/7", l: "Human support" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-muted-foreground border border-border mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Trusted by 500+ teams
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
              Cybersecurity that feels <span className="text-primary">calm</span>, not chaotic.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              CYBERX protects modern teams with thoughtful threat detection, clear guidance, and real people on the other end of every alert.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">Get Started <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="text-2xl md:text-3xl font-semibold text-foreground">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="rounded-2xl overflow-hidden border border-border shadow-glow">
              <img
                src={heroImg}
                alt="A security analyst working calmly at a desk in natural daylight"
                width={1536}
                height={1024}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">What we do</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Everything your team needs, nothing it doesn't.</h2>
            <p className="mt-4 text-muted-foreground">A focused security platform built for the way modern teams actually work.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="h-10 w-10 rounded-lg bg-secondary grid place-items-center mb-4">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-base mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button asChild variant="outline">
              <Link to="/help">View all services <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-14 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Trusted by security teams at
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-16 animate-scroll-x w-max">
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex gap-16 items-center">
                  {["NEXUS", "AURORA", "QUANTUM", "VANTAGE", "STELLAR", "OBSIDIAN", "HELIX", "MERIDIAN"].map((n) => (
                    <span key={n + dup} className="text-lg tracking-widest text-muted-foreground">
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
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-border bg-card p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Ready when you are.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              See CYBERX in a calm, 20-minute walkthrough. No pressure, no commitment.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/clients">See customer stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

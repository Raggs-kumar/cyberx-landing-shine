import { createFileRoute } from "@tanstack/react-router";
import { Quote, Award, ShieldCheck, BadgeCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients & Testimonials — CYBERX" },
      { name: "description", content: "500+ enterprises across finance, healthcare, and technology trust CYBERX with their security." },
      { property: "og:title", content: "CYBERX Clients & Testimonials" },
      { property: "og:description", content: "500+ enterprises trust CYBERX with their security." },
    ],
  }),
  component: Clients,
});

const logos = ["NEXUS", "AURORA", "QUANTUM", "VANTAGE", "STELLAR", "OBSIDIAN", "HELIX", "MERIDIAN", "ORBITAL", "VERTEX"];

const testimonials = [
  {
    q: "CYBERX caught a sophisticated supply-chain attack within 11 minutes of intrusion. We'd have lost weeks of data without them.",
    n: "Sarah Chen",
    r: "CISO",
    c: "Nexus Financial",
  },
  {
    q: "Our cloud posture went from 312 critical findings to zero in 6 weeks. The platform is genuinely autonomous.",
    n: "Marcus Reyes",
    r: "VP of Security",
    c: "Aurora Health",
  },
  {
    q: "The incident response team is unmatched. They contained, eradicated, and gave us a forensic report before lunch.",
    n: "Dr. Priya Patel",
    r: "Head of InfoSec",
    c: "Quantum Labs",
  },
];

const badges = [
  { icon: ShieldCheck, t: "SOC 2 Type II" },
  { icon: BadgeCheck, t: "ISO 27001" },
  { icon: Award, t: "Gartner Leader 2025" },
  { icon: ShieldCheck, t: "FedRAMP High" },
];

function Clients() {
  return (
    <SiteLayout>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">// Customers</p>
          <h1 className="text-4xl md:text-6xl font-bold">Trusted by the <span className="text-gradient">defenders</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            500+ enterprises across finance, healthcare, government, and SaaS choose CYBERX as their security backbone.
          </p>
        </div>
      </section>

      {/* logos carousel */}
      <section className="py-12 border-y border-border glass overflow-hidden">
        <div className="overflow-hidden">
          <div className="flex gap-16 animate-scroll-x w-max">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex gap-16 items-center">
                {logos.map((n) => (
                  <span key={n + dup} className="font-mono text-2xl tracking-widest text-muted-foreground hover:text-primary transition">
                    {n}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.n}
              className="glass rounded-2xl p-8 hover:shadow-glow hover:-translate-y-1 transition-all animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <blockquote className="text-foreground/90 mb-6 leading-relaxed">"{t.q}"</blockquote>
              <figcaption>
                <div className="font-semibold">{t.n}</div>
                <div className="text-sm text-muted-foreground">{t.r}, {t.c}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* badges */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-center text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
          Compliance & certifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((b) => (
            <div key={b.t} className="glass rounded-xl p-6 flex items-center gap-3 hover:shadow-glow transition">
              <b.icon className="h-6 w-6 text-primary shrink-0" />
              <span className="font-semibold text-sm">{b.t}</span>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

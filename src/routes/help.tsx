import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Lock, Cloud, Activity, Bug, KeyRound, ServerCog, Network, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Services & Help — CYBERX" },
      { name: "description", content: "Threat monitoring, encryption, cloud security, and incident response — every capability you need from CYBERX." },
      { property: "og:title", content: "CYBERX Services" },
      { property: "og:description", content: "Threat monitoring, encryption, cloud security, and incident response." },
    ],
  }),
  component: Help,
});

const services = [
  { icon: Eye, t: "Threat Monitoring", d: "24/7 AI-powered monitoring across all endpoints, networks, identities, and workloads." },
  { icon: Lock, t: "Data Encryption", d: "End-to-end encryption, HSM-backed key vaults, and quantum-resistant cipher suites." },
  { icon: Cloud, t: "Cloud Security", d: "CSPM, CWPP, and CIEM unified — across AWS, Azure, GCP, and Kubernetes." },
  { icon: Activity, t: "Incident Response", d: "Elite IR team on retainer. 18-minute average containment, forensics included." },
  { icon: Bug, t: "Vulnerability Management", d: "Continuous scanning, prioritization, and patch orchestration at scale." },
  { icon: KeyRound, t: "Identity & Access", d: "Zero-trust IAM with passwordless, MFA, and behavioral risk scoring." },
  { icon: ServerCog, t: "Managed SOC", d: "Augment your team with our Tier 1–3 analysts, 24/7/365." },
  { icon: Network, t: "Network Defense", d: "Next-gen firewalls, micro-segmentation, and full network telemetry." },
];

function Help() {
  return (
    <SiteLayout>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">// Services</p>
          <h1 className="text-4xl md:text-6xl font-bold">A complete <span className="text-gradient">defense stack</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            One platform. Every layer of your digital perimeter. Built to work together — and to never sleep.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.t}
              className="glass rounded-2xl p-6 group hover:-translate-y-1 hover:shadow-glow transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-primary/20 grid place-items-center mb-4 group-hover:shadow-glow transition">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="glass-strong rounded-3xl p-10 md:p-14 text-center glow-border">
          <h2 className="text-3xl md:text-4xl font-bold">Need something <span className="text-gradient">custom?</span></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Our solutions architects design tailored programs for regulated industries, governments, and critical infrastructure.
          </p>
          <Button asChild size="lg" className="mt-8 bg-gradient-primary text-primary-foreground shadow-glow font-semibold">
            <Link to="/contact">Talk to an expert <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}

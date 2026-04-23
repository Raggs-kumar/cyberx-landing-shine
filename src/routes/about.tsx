import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Brain, Cloud, ShieldCheck, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CYBERX — Built by security veterans" },
      { name: "description", content: "CYBERX was founded to make enterprise-grade cybersecurity accessible. Meet the mission, vision, and people behind the platform." },
      { property: "og:title", content: "About CYBERX" },
      { property: "og:description", content: "Built by security veterans to make enterprise-grade protection accessible." },
    ],
  }),
  component: About,
});

const pillars = [
  { icon: Brain, t: "AI Security", d: "Models trained on 2.4B+ real-world threat signals, retrained nightly." },
  { icon: ShieldCheck, t: "Threat Detection", d: "Behavior-based detection that catches what signature engines miss." },
  { icon: Cloud, t: "Cloud Protection", d: "Native CSPM, CWPP, and CIEM across every major cloud provider." },
];

function About() {
  return (
    <SiteLayout>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">// About CYBERX</p>
          <h1 className="text-4xl md:text-6xl font-bold">We protect what <span className="text-gradient">matters most</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Founded by veterans of the NSA, Palo Alto Networks, and CrowdStrike, CYBERX exists because security shouldn't be a privilege of the Fortune 100.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-8 hover:shadow-glow transition">
          <Target className="h-8 w-8 text-primary mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-muted-foreground">
            To deliver elite cybersecurity to every organization on earth — autonomous, transparent, and uncompromising. We believe protection should scale with ambition, not budget.
          </p>
        </div>
        <div className="glass rounded-2xl p-8 hover:shadow-glow-purple transition">
          <Eye className="h-8 w-8 text-accent mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="text-muted-foreground">
            A digital world where breaches are obsolete. Where trust is the default, and the defenders move faster than the attackers — always.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our <span className="text-gradient">expertise</span></h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.t} className="glass rounded-2xl p-6 group hover:-translate-y-1 hover:shadow-glow transition">
              <div className="h-12 w-12 rounded-xl bg-primary/15 grid place-items-center mb-4">
                <p.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{p.t}</h3>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="glass-strong rounded-2xl p-10 flex items-center gap-6 flex-col md:flex-row text-center md:text-left">
          <Users className="h-12 w-12 text-primary shrink-0" />
          <div>
            <h3 className="text-2xl font-bold mb-2">220+ engineers. 6 SOCs. One mission.</h3>
            <p className="text-muted-foreground">A global team of analysts, researchers, and operators defending customers across 47 countries.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CYBERX — Talk to security experts" },
      { name: "description", content: "Reach the CYBERX team. Request a demo, get pricing, or chat with our security architects." },
      { property: "og:title", content: "Contact CYBERX" },
      { property: "og:description", content: "Talk to our security architects. Request a demo today." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-10 left-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">// Contact</p>
          <h1 className="text-4xl md:text-6xl font-bold">Let's get you <span className="text-gradient">protected</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your environment. A security architect will reach out within one business hour.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid lg:grid-cols-3 gap-8">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-2 glass-strong rounded-2xl p-8 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required placeholder="Jane Doe" className="mt-2 bg-input/60" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="jane@company.com" className="mt-2 bg-input/60" />
            </div>
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input id="company" placeholder="Acme Corp" className="mt-2 bg-input/60" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" required rows={6} placeholder="Tell us about your security needs..." className="mt-2 bg-input/60" />
          </div>
          <Button type="submit" size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow font-semibold w-full md:w-auto" disabled={sent}>
            {sent ? <><CheckCircle2 className="mr-2 h-4 w-4" />Message sent</> : <>Send message <Send className="ml-2 h-4 w-4" /></>}
          </Button>
        </form>

        <aside className="space-y-4">
          <div className="glass rounded-2xl p-6 flex items-start gap-4 hover:shadow-glow transition">
            <Mail className="h-5 w-5 text-primary mt-1" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
              <a href="mailto:hello@cyberx.io" className="font-medium hover:text-primary">hello@cyberx.io</a>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 flex items-start gap-4 hover:shadow-glow transition">
            <Phone className="h-5 w-5 text-primary mt-1" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
              <a href="tel:+18005551234" className="font-medium hover:text-primary">+1 (800) 555-1234</a>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 flex items-start gap-4 hover:shadow-glow transition">
            <MapPin className="h-5 w-5 text-primary mt-1" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">HQ</div>
              <div className="font-medium">500 Cipher Street<br />San Francisco, CA 94103</div>
            </div>
          </div>

          <div className="relative h-48 rounded-2xl overflow-hidden glass grid-bg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2 animate-glow-pulse" />
                <p className="text-xs font-mono text-muted-foreground">37.7749° N, 122.4194° W</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

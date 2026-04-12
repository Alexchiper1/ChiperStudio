import {
  ArrowRight,
  Code2,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import {
  brandName,
  portfolioProjects,
  pricingPlans,
  services,
  socialLinks,
} from "@/lib/site-data";

const iconMap = {
  code: Code2,
  palette: Palette,
  shield: ShieldCheck,
  sparkles: Sparkles,
};

export function LandingPage() {
  return (
    <div id="top" className="min-h-screen bg-[var(--background)] text-slate-900">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.16),_transparent_22%)]" />
          <div className="bg-grid absolute inset-0 opacity-30" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-cyan-950/40">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Built for ambitious businesses.
              </div>

              <h1 className="mt-7 text-[2.7rem] font-semibold tracking-tight text-white sm:mt-8 sm:text-5xl lg:text-6xl">
                Modern websites and digital systems for businesses that want to grow.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:mt-6 sm:text-xl">
                I help businesses look more professional, save time, and create a
                stronger online presence through fast websites and tailored digital
                systems built around real business needs.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="button-primary">
                  Get a Quote
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/10"
                >
                  View My Work
                </a>
              </div>

              <div className="mt-8 hidden gap-4 text-sm text-slate-300 sm:grid sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">One-time build fee</p>
                  <p className="mt-2">Straightforward pricing without bloated agency overhead.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Business-focused</p>
                  <p className="mt-2">Built to improve credibility, enquiries, and day-to-day efficiency.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Websites + systems</p>
                  <p className="mt-2">From polished websites to more custom tools when your business needs more.</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/90 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-400">Featured setup</p>
                      <p className="mt-1 text-xl font-semibold text-white">
                        {brandName}
                      </p>
                    </div>
                    <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      Ready to launch
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-3xl bg-white p-5 text-slate-900 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-500">Best fit</p>
                          <p className="mt-1 text-lg font-semibold">
                            Local businesses and growing teams
                          </p>
                        </div>
                        <Sparkles className="h-6 w-6 text-cyan-600" />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Professional websites and practical systems designed to
                        make businesses look sharper and run more smoothly.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <p className="text-sm text-slate-400">Typical timeline</p>
                        <p className="mt-2 text-2xl font-semibold text-white">1-3 weeks</p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <p className="text-sm text-slate-400">Best for</p>
                        <p className="mt-2 text-2xl font-semibold text-white">Leads + operations</p>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/15 to-blue-500/10 p-5">
                      <p className="text-sm font-medium text-cyan-300">
                        Built by a software engineer with real product and business project experience
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        A strong fit for businesses that want direct communication,
                        modern execution, and solutions that are practical as well
                        as polished.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-shell scroll-mt-28">
          <SectionHeading
            eyebrow="Services"
            title="What I can help your business with"
            description="From conversion-focused websites to more tailored business systems, the goal is to help your business look stronger, work smarter, and grow with less friction."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon];

              return (
                <article key={service.title} className="surface-card group">
                  <div className="inline-flex rounded-2xl bg-cyan-50 p-3 text-cyan-600 ring-1 ring-cyan-100 transition group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="portfolio" className="section-shell scroll-mt-28 pt-0">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected projects that show the type of work I deliver"
            description="A mix of business websites and more custom operational systems, built to improve credibility, simplify workflows, and support growth."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolioProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-0 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_80px_-45px_rgba(8,145,178,0.35)] sm:rounded-[2rem]"
              >
                <div className="relative min-h-56 overflow-hidden bg-[linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(8,145,178,0.88))] p-6 text-white">
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_30%)]" />
                  <p className="text-sm uppercase tracking-[0.22em] text-cyan-200">
                    {project.businessType}
                  </p>
                  <h3 className="mt-4 max-w-sm text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-slate-200">
                    {project.description}
                  </p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {project.keyPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                      >
                        <Star className="mt-1 h-4 w-4 text-cyan-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition group-hover:text-cyan-700"
                  >
                    {project.cta}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="section-shell scroll-mt-28 pt-0">
          <SectionHeading
            eyebrow="Pricing"
            title="Clear pricing with room to scale"
            description="These packages cover most website projects, while support and monthly improvement options keep things flexible after launch."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan, index) => (
              <article
                key={plan.name}
                className={
                  index === 1
                    ? "relative h-full overflow-hidden rounded-[1.75rem] border border-slate-950 bg-[linear-gradient(160deg,_#020617,_#0f172a_60%,_#164e63)] p-5 text-white shadow-[0_35px_80px_-45px_rgba(8,145,178,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_40px_90px_-45px_rgba(8,145,178,0.55)] sm:rounded-[2rem] sm:p-6"
                    : "relative h-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_80px_-45px_rgba(8,145,178,0.25)] sm:rounded-[2rem] sm:p-6"
                }
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${
                    index === 1 ? "bg-cyan-400" : "bg-gradient-to-r from-cyan-400 to-blue-500"
                  }`}
                />

                {index === 1 ? (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.22),_transparent_28%)]" />
                ) : null}

                <div className="relative mt-2 flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className={`text-xl font-semibold ${
                        index === 1 ? "text-white" : "text-slate-950"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`mt-3 text-[1.85rem] font-semibold leading-tight tracking-tight sm:text-3xl ${
                        index === 1 ? "text-white" : "text-slate-950"
                      }`}
                    >
                      {plan.priceRange}
                    </p>
                  </div>
                  {index === 1 ? (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 ring-1 ring-white/10">
                      Popular
                    </span>
                  ) : null}
                </div>

                <p
                  className={`mt-5 text-sm leading-7 ${
                    index === 1 ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="relative mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm ${
                        index === 1 ? "text-slate-200" : "text-slate-700"
                      }`}
                    >
                      <Star
                        className={`mt-0.5 h-4 w-4 ${
                          index === 1 ? "text-cyan-300" : "text-cyan-600"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`/?plan=${encodeURIComponent(plan.name)}#contact`}
                  className={`relative mt-8 inline-flex items-center gap-2 text-sm font-semibold transition ${
                    index === 1
                      ? "text-cyan-200 hover:text-white"
                      : "text-slate-950 hover:text-cyan-700"
                  }`}
                >
                  Choose this plan
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm font-medium text-slate-500">
            Custom systems, advanced features, and more tailored business tools are quoted separately based on scope.
          </p>
        </section>

        <section id="contact" className="section-shell scroll-mt-28 pt-0">
          <div className="grid gap-8 rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-[0_40px_100px_-50px_rgba(15,23,42,0.75)] sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                If your website is holding your business back, let&apos;s fix that.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                If your business needs a stronger website or a more tailored
                digital solution, send me a message. I&apos;ll reply with a realistic
                quote and the best next step based on what your business actually
                needs.
              </p>

              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <p>Best fit for service businesses, local brands, construction, trades, fitness, hospitality, and operations-focused teams.</p>
                <p className="hidden sm:block">Website packages are fixed-range. More advanced systems and custom features are scoped separately.</p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="rounded-[2rem] border border-cyan-100 bg-gradient-to-r from-cyan-50 to-white px-5 py-8 shadow-[0_30px_80px_-50px_rgba(8,145,178,0.3)] sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-2xl">
              <p className="hidden text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700 sm:block">
                Final Call To Action
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                Better digital tools can help your business look sharper and run smoother.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                If you want a modern website or a more tailored business system
                that supports growth, now is a good time to start the conversation.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-0">
              <a href="#contact" className="button-primary">
                Get a Quote
              </a>
              <a href="#pricing" className="button-secondary">
                See Pricing
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div>
              <p className="text-lg font-semibold text-slate-950">{brandName}</p>
              <p className="mt-2 text-sm text-slate-600">
              Building modern websites and digital systems for businesses that want to look professional, save time, and grow.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-600">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-slate-950">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

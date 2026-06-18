import Link from "next/link";
import { Phone, Hammer, Ruler, Truck, Factory, ShieldCheck, Award, MapPin, ArrowRight, CheckCircle2, Cpu, Wrench } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const MATERIALS = [
  { name: "Black Walnut", swatch: "swatch-walnut", desc: "Rich, dark grain. Premium classic.", href: "/countertops/butcher-block/" },
  { name: "Hard Maple", swatch: "swatch-maple", desc: "Bright, durable, edge-grain ready.", href: "/countertops/butcher-block/" },
  { name: "Red Oak", swatch: "swatch-oak", desc: "Bold open grain, Midwest staple.", href: "/countertops/butcher-block/" },
  { name: "American Cherry", swatch: "swatch-cherry", desc: "Warm tone that ages beautifully.", href: "/countertops/butcher-block/" },
  { name: "Live Edge Slab", swatch: "swatch-liveedge", desc: "Natural edge, one-of-a-kind.", href: "/countertops/live-edge/" },
  { name: "Epoxy Resin", swatch: "swatch-epoxy", desc: "Custom pour, river tables, bar tops.", href: "/countertops/epoxy/" },
  { name: "Plastic Laminate", swatch: "swatch-laminate", desc: "Commercial-grade, fast turnaround.", href: "/countertops/laminate/" },
  { name: "Quartz / Solid Surface", swatch: "swatch-quartz", desc: "Sourced & fabricated to spec.", href: "/countertops/" },
];

const PROCESS = [
  { icon: Ruler, title: "Field Measure", body: "We come to your site, template the space, and verify every dimension before a single saw runs." },
  { icon: Cpu, title: "CAD + CNC Layout", body: "Drawings approved by you. CNC tool paths cut to ±1/32\" — no guesswork." },
  { icon: Factory, title: "Shop Fabrication", body: "Built in our 2,139 Cornhusker shop. Sanded, sealed, finished — ready to install." },
  { icon: Truck, title: "On-Time Delivery", body: "Delivery is included. We commit to a date and we hit it." },
  { icon: Wrench, title: "Install & Sign-Off", body: "Set, scribed, and finished on site. We don't leave until it's right." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative wood-bg grain text-[var(--color-bone)] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-[var(--color-brass)]/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-[var(--color-copper)]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow-light">Family-Owned · Lincoln, NE · Since 1999</div>
              <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
                Counters that get built right.<br/>
                <span className="text-[var(--color-brass)]">And delivered on time.</span>
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-[var(--color-oat)] max-w-2xl leading-relaxed">
                Custom butcher block, live edge, epoxy, and plastic-laminate countertops — plus commercial casework and millwork — fabricated in our Lincoln shop and delivered across Nebraska, Western Iowa, and Northern Kansas.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href="/contact/" className="btn-brass rounded-md px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                  Get a Quote in 24 Hours <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={BUSINESS.phoneHref} className="btn-ghost rounded-md px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" /> {BUSINESS.phone}
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
                <div>
                  <div className="font-display text-4xl font-semibold text-[var(--color-brass)]">{BUSINESS.yearsInBusiness}+</div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-oat)]/70 mt-1">Years in Business</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-semibold text-[var(--color-brass)]">A+</div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-oat)]/70 mt-1">BBB Rated</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-semibold text-[var(--color-brass)]">3</div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-oat)]/70 mt-1">State Service Area</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-[var(--color-brass)]/30 bg-gradient-to-br from-[var(--color-walnut-mid)] to-[var(--color-walnut)] p-1.5 shadow-2xl">
                <div className="rounded-lg aspect-[4/5] grain swatch-walnut relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="eyebrow-light">Featured Build</div>
                    <div className="font-display text-2xl font-semibold mt-1">12-ft Walnut Island Top</div>
                    <div className="text-sm text-[var(--color-oat)]/80 mt-1">Edge-glued, oil finish · Omaha residence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[var(--color-cream)] border-y border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-[var(--color-brass-deep)]" /><span><strong>BBB A+</strong> Rated</span></div>
          <div className="flex items-center gap-2.5"><Award className="w-5 h-5 text-[var(--color-brass-deep)]" /><span><strong>{BUSINESS.yearsInBusiness} Years</strong> Family-Owned</span></div>
          <div className="flex items-center gap-2.5"><Truck className="w-5 h-5 text-[var(--color-brass-deep)]" /><span><strong>Delivery Included</strong> in Quote</span></div>
          <div className="flex items-center gap-2.5"><Cpu className="w-5 h-5 text-[var(--color-brass-deep)]" /><span><strong>CNC Precision</strong> Fabrication</span></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="eyebrow">What We Build</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-[var(--color-walnut)] leading-tight">
              Three things, done <em className="text-[var(--color-brass-deep)] not-italic">obsessively</em> well.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[var(--color-muted)] text-lg leading-relaxed">
              We're not a granite slab yard. We're a wood and laminate shop — that's what we mean by <em>premium</em>. Every counter and casework job goes through the same five-step build process, in the same Lincoln shop, run by the same family that founded it in 1999.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Hammer, title: "Custom Countertops", body: "Butcher block, live edge, epoxy, and plastic laminate. Residential and commercial. Templated, fabricated, and installed by us.", href: "/countertops/" },
            { icon: Factory, title: "Commercial Casework", body: "Reception desks, break rooms, retail fixtures, ADA-compliant millwork. AWI-grade work delivered on schedule.", href: "/commercial-casework/" },
            { icon: Wrench, title: "Custom Millwork", body: "Trim, paneling, built-ins, and architectural one-offs. CNC-cut for fit, hand-finished for feel.", href: "/contact/" },
          ].map((s) => (
            <Link key={s.title} href={s.href} className="group relative rounded-xl border border-[var(--color-line)] bg-white p-7 hover:border-[var(--color-brass)] transition shadow-sm hover:shadow-lg">
              <div className="w-11 h-11 rounded-lg bg-[var(--color-walnut)] text-[var(--color-brass)] flex items-center justify-center">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-[var(--color-walnut)]">{s.title}</h3>
              <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{s.body}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brass-deep)]">
                See details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MATERIALS GALLERY */}
      <section className="bg-[var(--color-cream)] border-y border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="eyebrow">Materials</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-[var(--color-walnut)]">
                Pick your material. We'll <em className="text-[var(--color-brass-deep)] not-italic">build the rest.</em>
              </h2>
            </div>
            <Link href="/countertops/" className="text-sm font-semibold text-[var(--color-brass-deep)] hover:text-[var(--color-walnut)] inline-flex items-center gap-1.5">
              All countertop materials <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {MATERIALS.map((m) => (
              <Link key={m.name} href={m.href} className="group rounded-lg overflow-hidden border border-[var(--color-line)] bg-white hover:shadow-lg hover:border-[var(--color-brass)] transition">
                <div className={`aspect-[4/3] ${m.swatch} grain group-hover:scale-105 transition-transform duration-500 origin-center`} />
                <div className="p-4">
                  <div className="font-display text-lg font-semibold text-[var(--color-walnut)]">{m.name}</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1 leading-snug">{m.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow">How We Work</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-[var(--color-walnut)]">
            From quote to install in <em className="text-[var(--color-brass-deep)] not-italic">five steps.</em>
          </h2>
          <p className="mt-5 text-[var(--color-muted)] text-lg">
            No subcontracted templating, no third-party install crew. The same people who measure your space are the people who cut, finish, and set your top.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[var(--color-brass)] to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {PROCESS.map((p, i) => (
              <div key={p.title} className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-[var(--color-walnut)] text-[var(--color-brass)] flex items-center justify-center border-4 border-[var(--color-bone)] relative z-10">
                  <p.icon className="w-6 h-6" />
                </div>
                <div className="eyebrow mt-4">Step {i + 1}</div>
                <h3 className="mt-1 font-display text-xl font-semibold text-[var(--color-walnut)]">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-[var(--color-walnut)] text-[var(--color-bone)] grain relative">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center relative">
          <div>
            <div className="eyebrow-light">Service Area</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
              We deliver across the <em className="text-[var(--color-brass)] not-italic">tri-state corridor.</em>
            </h2>
            <p className="mt-5 text-[var(--color-oat)] text-lg leading-relaxed max-w-xl">
              From the Lincoln shop we run our own delivery — Nebraska end-to-end, Western Iowa through Sioux City and Council Bluffs, and Northern Kansas down to Manhattan and Topeka.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-xl">
              {BUSINESS.areaServed.slice(0, 12).map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-[var(--color-oat)]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-brass)]" /> {c}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/locations/lincoln-ne/" className="btn-brass rounded-md px-5 py-2.5 text-sm font-semibold">Lincoln</Link>
              <Link href="/locations/omaha-ne/" className="btn-ghost rounded-md px-5 py-2.5 text-sm font-semibold">Omaha</Link>
              <Link href="/locations/council-bluffs-ia/" className="btn-ghost rounded-md px-5 py-2.5 text-sm font-semibold">Council Bluffs</Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl border border-[var(--color-brass)]/30 bg-gradient-to-br from-[var(--color-walnut-mid)] to-[var(--color-walnut)] p-8 grain relative overflow-hidden">
              <div className="absolute inset-0 opacity-40">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="180" cy="190" r="6" fill="#B8894A" />
                  <circle cx="180" cy="190" r="20" fill="#B8894A" opacity="0.2"><animate attributeName="r" values="20;40;20" dur="3s" repeatCount="indefinite"/></circle>
                  <text x="180" y="220" textAnchor="middle" fill="#F7F1E6" fontSize="11" fontFamily="Inter">Lincoln, NE</text>
                  <circle cx="240" cy="170" r="4" fill="#B8894A" />
                  <text x="240" y="160" textAnchor="middle" fill="#EDE3D0" fontSize="9">Omaha</text>
                  <circle cx="260" cy="175" r="3" fill="#B8894A" />
                  <text x="285" y="178" textAnchor="middle" fill="#EDE3D0" fontSize="8">Council Bluffs</text>
                  <circle cx="160" cy="155" r="3" fill="#B8894A" />
                  <text x="160" y="148" textAnchor="middle" fill="#EDE3D0" fontSize="8">Grand Island</text>
                  <circle cx="320" cy="200" r="3" fill="#B8894A" />
                  <text x="320" y="215" textAnchor="middle" fill="#EDE3D0" fontSize="8">Des Moines</text>
                  <circle cx="170" cy="280" r="3" fill="#B8894A" />
                  <text x="170" y="295" textAnchor="middle" fill="#EDE3D0" fontSize="8">Topeka</text>
                  <circle cx="230" cy="280" r="3" fill="#B8894A" />
                  <text x="240" y="295" textAnchor="middle" fill="#EDE3D0" fontSize="8">Kansas City</text>
                </svg>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="eyebrow-light">Shop Location</div>
                <div className="font-display text-xl font-semibold mt-1">2139 Cornhusker Hwy, Lincoln NE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF / TESTIMONIAL */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">Why Contractors Call Us First</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-[var(--color-walnut)] leading-tight">
              The shop your GC <em className="text-[var(--color-brass-deep)] not-italic">already trusts.</em>
            </h2>
            <p className="mt-5 text-[var(--color-muted)] text-lg leading-relaxed">
              When a contractor's reputation rides on a delivery date, they call us. Twenty-seven years in, our calendar is built around hitting yours.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {[
              { title: "We commit to a date.", body: "And we hit it. If we can't, you'll hear it from us before you'd ever guess from a missed milestone." },
              { title: "CNC accuracy, hand-finished feel.", body: "Modern tool paths cut to ±1/32\". Then a finisher who's been here a decade sands and seals it." },
              { title: "Delivery's not a line item.", body: "Our truck. Our crew. Included in the quote. From Lincoln to Council Bluffs to Topeka." },
              { title: "Family-owned since 1999.", body: "Same family, same shop, same number. No call center, no roll-up, no churn." },
            ].map((p) => (
              <div key={p.title} className="flex gap-4 p-5 rounded-lg border border-[var(--color-line)] bg-[var(--color-bone)]">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-brass-deep)] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-display text-lg font-semibold text-[var(--color-walnut)]">{p.title}</div>
                  <div className="text-[var(--color-muted)] mt-1 leading-relaxed">{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
        <div className="rounded-2xl wood-bg grain text-[var(--color-bone)] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-[var(--color-brass)]/20 blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="eyebrow-light">Ready When You Are</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
              Send us the dimensions. <br className="hidden sm:block"/>
              We'll send back a <em className="text-[var(--color-brass)] not-italic">real quote in 24 hours.</em>
            </h2>
            <p className="mt-5 text-[var(--color-oat)] text-lg">
              Drawings, a sketch on a napkin, or just rough sizes — we'll take it from there.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/contact/" className="btn-brass rounded-md px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                Start a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={BUSINESS.phoneHref} className="btn-ghost rounded-md px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

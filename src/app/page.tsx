import Link from "next/link";
import { Phone, Hammer, Ruler, Truck, Factory, ShieldCheck, Award, MapPin, ArrowRight, CheckCircle2, Cpu, Wrench, Quote } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { IMG } from "@/lib/images";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import { AnimatedStat } from "@/components/animated-stat";
import { MapLoader } from "@/components/map-loader";

const MATERIALS = [
  { name: "Black Walnut",   img: IMG.walnutTex,    desc: "Rich, dark grain. Premium classic.",        href: "/countertops/butcher-block/" },
  { name: "Hard Maple",     img: IMG.mapleTex,     desc: "Bright, durable, edge-grain ready.",        href: "/countertops/butcher-block/" },
  { name: "Red Oak",        img: IMG.oakTex,       desc: "Bold open grain, Midwest staple.",          href: "/countertops/butcher-block/" },
  { name: "American Cherry",img: IMG.cherryTex,    desc: "Warm tone that ages beautifully.",          href: "/countertops/butcher-block/" },
  { name: "Live Edge Slab", img: IMG.liveEdgeTex,  desc: "Natural edge, one-of-a-kind.",              href: "/countertops/live-edge/" },
  { name: "Epoxy Resin",    img: IMG.epoxyTex,     desc: "Custom pour, river tables, bar tops.",      href: "/countertops/epoxy/" },
  { name: "Plastic Laminate",img: IMG.laminateTex, desc: "Commercial-grade, fast turnaround.",        href: "/countertops/laminate/" },
  { name: "Quartz / Solid", img: IMG.quartzTex,    desc: "Sourced & fabricated to spec.",             href: "/countertops/" },
];

const PROCESS = [
  { icon: Ruler,   title: "Field Measure",   body: "We come to your site, template the space, and verify every dimension before a single saw runs." },
  { icon: Cpu,     title: "CAD + CNC Layout",body: "Drawings approved by you. CNC tool paths cut to ±1/32\" — no guesswork." },
  { icon: Factory, title: "Shop Fabrication",body: "Built in our Cornhusker Highway shop. Sanded, sealed, finished — ready to install." },
  { icon: Truck,   title: "On-Time Delivery",body: "Delivery is included. We commit to a date and we hit it." },
  { icon: Wrench,  title: "Install & Sign-Off",body: "Set, scribed, and finished on site. We don't leave until it's right." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative wood-bg grain text-[var(--color-bone)] overflow-hidden">
        <img
          src={IMG.hero}
          alt="Live edge walnut conference table — Premium Woods custom build"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-walnut-deep)]/95 via-[var(--color-walnut)]/90 to-[var(--color-walnut)]/70" />
        <div className="absolute top-1/3 -left-32 w-[28rem] h-[28rem] rounded-full bg-[var(--color-amber)]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-[var(--color-amber-deep)]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 lg:pt-36 lg:pb-40">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <FadeUp>
                <div className="eyebrow-light">Family-Owned · Lincoln, NE · Since {BUSINESS.foundingYear}</div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-balance">
                  Counters that get built right.<br/>
                  <span className="text-[var(--color-amber)]">And delivered on time.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="mt-7 text-lg sm:text-xl text-[var(--color-oat)] max-w-2xl leading-relaxed text-pretty">
                  Custom butcher block, live edge, epoxy, and plastic-laminate countertops — plus commercial casework and millwork — fabricated in our Lincoln shop and delivered across Nebraska, Western Iowa, and Northern Kansas.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link href="/contact/" className="btn-amber rounded-md px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                    Get a Quote in 24 Hours <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href={BUSINESS.phoneHref} className="btn-ghost rounded-md px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" /> {BUSINESS.phone}
                  </a>
                </div>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
                  <AnimatedStat end={BUSINESS.yearsInBusiness} suffix="+" label="Years in Business" />
                  <div>
                    <div className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-amber)]">A+</div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-oat)]/70 mt-1.5">BBB Rated</div>
                  </div>
                  <AnimatedStat end={3} label="State Service Area" />
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-5">
              <FadeUp delay={0.3}>
                <div className="relative rounded-xl overflow-hidden border border-[var(--color-amber)]/30 bg-[var(--color-walnut-mid)] p-1.5 shadow-2xl">
                  <div className="img-frame aspect-[4/5]">
                    <img src={IMG.brassKitchen} alt="Custom wood countertop with brass faucet, Omaha residence" />
                    <div className="img-frame-tag">
                      <div className="eyebrow-light">Featured Build</div>
                      <div className="font-display text-2xl font-semibold mt-1 text-balance">Walnut + Brass Kitchen</div>
                      <div className="text-sm text-[var(--color-oat)]/85 mt-1">Custom counter, brass fixture detail · Omaha</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[var(--color-cream)] border-y border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-[var(--color-ink)]">
          <div className="flex items-center gap-2.5"><ShieldCheck className="w-5 h-5 text-[var(--color-amber-deep)]" /><span><strong>BBB A+</strong> Rated</span></div>
          <div className="flex items-center gap-2.5"><Award className="w-5 h-5 text-[var(--color-amber-deep)]" /><span><strong>{BUSINESS.yearsInBusiness} Years</strong> Family-Owned</span></div>
          <div className="flex items-center gap-2.5"><Truck className="w-5 h-5 text-[var(--color-amber-deep)]" /><span><strong>Delivery Included</strong> in Quote</span></div>
          <div className="flex items-center gap-2.5"><Cpu className="w-5 h-5 text-[var(--color-amber-deep)]" /><span><strong>CNC Precision</strong> Fabrication</span></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <FadeUp>
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
            <div className="lg:col-span-7">
              <div className="eyebrow">What We Build</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-[var(--color-walnut)] leading-tight text-balance">
                Three things, done <em className="text-[var(--color-amber-deep)] not-italic">obsessively</em> well.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[var(--color-muted)] text-lg leading-relaxed text-pretty">
                We're not a granite slab yard. We're a wood and laminate shop — that's what we mean by <em>premium</em>. Every counter and casework job goes through the same five-step build process, in the same Lincoln shop, run by the same family that founded it in {BUSINESS.foundingYear}.
              </p>
            </div>
          </div>
        </FadeUp>

        <Stagger className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Hammer,  title: "Custom Countertops",   body: "Butcher block, live edge, epoxy, and plastic laminate. Residential and commercial. Templated, fabricated, and installed by us.", href: "/countertops/",          img: IMG.kitchenIsland },
            { icon: Factory, title: "Commercial Casework",  body: "Reception desks, break rooms, retail fixtures, ADA-compliant millwork. AWI-grade work delivered on schedule.",                  href: "/commercial-casework/", img: IMG.woodShelves },
            { icon: Wrench,  title: "Custom Millwork",      body: "Trim, paneling, built-ins, and architectural one-offs. CNC-cut for fit, hand-finished for feel.",                                href: "/contact/",             img: IMG.tools },
          ].map((s) => (
            <StaggerItem key={s.title}>
              <Link href={s.href} className="group relative block rounded-xl overflow-hidden border border-[var(--color-line)] bg-white hover:border-[var(--color-amber)] transition shadow-sm hover:shadow-2xl h-full">
                <div className="img-frame aspect-[5/3]">
                  <img src={s.img} alt={s.title} />
                </div>
                <div className="p-7">
                  <div className="w-11 h-11 -mt-12 mb-4 rounded-lg bg-[var(--color-walnut)] text-[var(--color-amber)] flex items-center justify-center relative z-10 shadow-lg">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[var(--color-walnut)]">{s.title}</h3>
                  <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{s.body}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-amber-deep)]">
                    See details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* MATERIALS GALLERY */}
      <section className="bg-[var(--color-cream)] border-y border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <FadeUp>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
              <div>
                <div className="eyebrow">Materials</div>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-[var(--color-walnut)] text-balance">
                  Pick your material. We'll <em className="text-[var(--color-amber-deep)] not-italic">build the rest.</em>
                </h2>
              </div>
              <Link href="/countertops/" className="text-sm font-semibold text-[var(--color-amber-deep)] hover:text-[var(--color-walnut)] inline-flex items-center gap-1.5">
                All countertop materials <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>

          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-5" gap={0.05}>
            {MATERIALS.map((m) => (
              <StaggerItem key={m.name}>
                <Link href={m.href} className="group block rounded-lg overflow-hidden border border-[var(--color-line)] bg-white hover:shadow-xl hover:border-[var(--color-amber)] transition">
                  <div className="img-frame aspect-[4/3]">
                    <img src={m.img} alt={m.name} />
                  </div>
                  <div className="p-4">
                    <div className="font-display text-lg font-semibold text-[var(--color-walnut)]">{m.name}</div>
                    <div className="text-xs text-[var(--color-muted)] mt-1 leading-snug">{m.desc}</div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative">
        <img src={IMG.saw} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="eyebrow">How We Work</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-[var(--color-walnut)] text-balance">
                From quote to install in <em className="text-[var(--color-amber-deep)] not-italic">five steps.</em>
              </h2>
              <p className="mt-5 text-[var(--color-muted)] text-lg text-pretty">
                No subcontracted templating, no third-party install crew. The same people who measure your space are the people who cut, finish, and set your top.
              </p>
            </div>
          </FadeUp>

          <div className="relative">
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[var(--color-amber)] to-transparent" />
            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative" gap={0.1}>
              {PROCESS.map((p, i) => (
                <StaggerItem key={p.title} className="text-center">
                  <div className="mx-auto w-14 h-14 rounded-full bg-[var(--color-walnut)] text-[var(--color-amber)] flex items-center justify-center border-4 border-[var(--color-paper)] relative z-10 shadow-lg">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <div className="eyebrow mt-4">Step {i + 1}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold text-[var(--color-walnut)]">{p.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{p.body}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* SERVICE AREA — REAL MAP */}
      <section className="charcoal-bg grain text-[var(--color-bone)] relative">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center relative">
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="eyebrow-light">Service Area</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight text-balance">
                We deliver across the <em className="text-[var(--color-amber)] not-italic">tri-state corridor.</em>
              </h2>
              <p className="mt-5 text-[var(--color-oat)] text-lg leading-relaxed text-pretty max-w-xl">
                From our Lincoln shop we run our own delivery — Nebraska end-to-end, Western Iowa through Sioux City and Council Bluffs, and Northern Kansas down to Manhattan and Topeka.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 max-w-md">
                {BUSINESS.areaServed.slice(0, 10).map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-[var(--color-oat)]/90">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-amber)]" /> {c}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/locations/lincoln-ne/" className="btn-amber rounded-md px-5 py-2.5 text-sm font-semibold">Lincoln</Link>
                <Link href="/locations/omaha-ne/" className="btn-ghost rounded-md px-5 py-2.5 text-sm font-semibold">Omaha</Link>
                <Link href="/locations/council-bluffs-ia/" className="btn-ghost rounded-md px-5 py-2.5 text-sm font-semibold">Council Bluffs</Link>
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-7">
            <FadeUp delay={0.15}>
              <MapLoader />
              <div className="mt-3 text-xs text-[var(--color-oat)]/55 text-center">
                17 cities served · Shop pin shows our Cornhusker Hwy location
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="eyebrow">Why Contractors Call Us First</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-[var(--color-walnut)] leading-tight text-balance">
                The shop your GC <em className="text-[var(--color-amber-deep)] not-italic">already trusts.</em>
              </h2>
              <p className="mt-5 text-[var(--color-muted)] text-lg leading-relaxed text-pretty">
                When a contractor's reputation rides on a delivery date, they call us. {BUSINESS.yearsInBusiness} years in, our calendar is built around hitting yours.
              </p>

              <div className="mt-8 relative pl-10 border-l-2 border-[var(--color-amber)] bg-[var(--color-cream)] rounded-r-lg py-5 pr-5">
                <Quote className="absolute -top-3 -left-3 w-7 h-7 text-[var(--color-amber)] bg-[var(--color-paper)] rounded-full p-1" />
                <p className="font-display text-lg italic text-[var(--color-walnut)] leading-snug">
                  "Twenty-seven years in business and they still pick up the phone every time. That's why our crew sub'd them on every casework job we won last year."
                </p>
                <p className="mt-3 text-xs uppercase tracking-wider text-[var(--color-amber-deep)] font-semibold">
                  Commercial GC · Omaha, NE
                </p>
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-7">
            <Stagger className="space-y-4" gap={0.08}>
              {[
                { title: "We commit to a date.",          body: "And we hit it. If we can't, you'll hear it from us before you'd ever guess from a missed milestone." },
                { title: "CNC accuracy, hand-finished feel.", body: "Modern tool paths cut to ±1/32\". Then a finisher who's been here a decade sands and seals it." },
                { title: "Delivery's not a line item.",   body: "Our truck. Our crew. Included in the quote. From Lincoln to Council Bluffs to Topeka." },
                { title: "Family-owned since 1999.",      body: "Same family, same shop, same number. No call center, no roll-up, no churn." },
              ].map((p) => (
                <StaggerItem key={p.title}>
                  <div className="flex gap-4 p-6 rounded-lg border border-[var(--color-line)] bg-[var(--color-bone)] hover:bg-[var(--color-cream)] transition">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-amber-deep)] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-display text-lg font-semibold text-[var(--color-walnut)]">{p.title}</div>
                      <div className="text-[var(--color-muted)] mt-1 leading-relaxed">{p.body}</div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
        <FadeUp>
          <div className="relative rounded-2xl wood-bg grain text-[var(--color-bone)] p-10 md:p-16 text-center overflow-hidden">
            <img src={IMG.tools} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-walnut-deep)]/70 to-[var(--color-walnut)]/95" />
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-[var(--color-amber)]/20 blur-3xl" />
            </div>
            <div className="relative max-w-3xl mx-auto">
              <div className="eyebrow-light">Ready When You Are</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight text-balance">
                Send us the dimensions. <br className="hidden sm:block"/>
                We'll send back a <em className="text-[var(--color-amber)] not-italic">real quote in 24 hours.</em>
              </h2>
              <p className="mt-5 text-[var(--color-oat)] text-lg text-pretty">
                Drawings, a sketch on a napkin, or just rough sizes — we'll take it from there.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link href="/contact/" className="btn-amber rounded-md px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                  Start a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={BUSINESS.phoneHref} className="btn-ghost rounded-md px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}

interface ServiceCard {
  title: string;
  description: string;
  capabilities: string[];
}

const services: ServiceCard[] = [
  {
    title: "Custom Automation & Machinery",
    description:
      "Mechanical systems built for demanding factory duty cycles, precision throughput, and maintainable field operation.",
    capabilities: [
      "Heavy-duty industrial shredders",
      "Volumetric filling lines",
      "Automated rotary monoblocks",
      "Label pick-and-place systems",
    ],
  },
  {
    title: "Advanced Engineering Simulations",
    description:
      "Validation-led engineering for teams that need confidence before tooling, fabrication, or procurement begins.",
    capabilities: [
      "Computational Fluid Dynamics",
      "FEA stress analysis",
      "Thermal performance validation",
      "Non-conventional geometry testing",
    ],
  },
  {
    title: "Design Optimization & DFM",
    description:
      "Systematic tuning for manufacturable, cost-efficient mechanical products with sharp tolerance control.",
    capabilities: [
      "Production cost reduction",
      "Lightweight structural engineering",
      "Tolerance stack optimization",
      "Manufacturing-ready detailing",
    ],
  },
  {
    title: "Reverse Engineering",
    description:
      "Capture, rebuild, and modernize legacy equipment into accurate CAD, manufacturable assemblies, and validated upgrades.",
    capabilities: [
      "Legacy machine re-engineering",
      "Mine blast attenuation seating",
      "Tractor and grader attachments",
      "High-precision field adaptation",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange-600">Core services</p>
          <h2 className="mt-4 text-4xl font-black tracking-normal text-slate-950 sm:text-5xl">
            Engineering capacity for complex industrial work.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group bg-white p-7 transition hover:bg-slate-50 sm:p-9"
            >
              <h3 className="text-2xl font-black text-slate-950 transition group-hover:text-orange-600">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
              <ul className="mt-7 grid gap-3">
                {service.capabilities.map((capability) => (
                  <li key={capability} className="flex gap-3 text-sm font-semibold text-slate-800">
                    <span className="mt-2 size-1.5 shrink-0 bg-orange-500" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

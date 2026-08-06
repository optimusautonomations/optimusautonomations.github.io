import Link from "next/link";
import { Icon } from "./Icon";

interface Product {
  name: string;
  summary: string;
  tags: string[];
}

const products: Product[] = [
  {
    name: "Single-Shaft Paper Shredder Machine Assembly",
    summary: "Industrial-scale CAD file with assembly-ready mechanical structure and fabrication detail.",
    tags: ["SolidWorks / Inventor / AutoCAD Compatible", "ASME / ISO Compliant", "Instant Download"],
  },
  {
    name: "Single-Stage Helical Gearbox",
    summary: "Precisely engineered gear tooth profiles for compact transmission and smooth torque delivery.",
    tags: ["SolidWorks / Inventor / AutoCAD Compatible", "ASME / ISO Compliant", "Instant Download"],
  },
  {
    name: "Two-Stage Reduction Spur Gearbox",
    summary: "High-precision reduction kinematics with structured assembly references for rapid reuse.",
    tags: ["SolidWorks / Inventor / AutoCAD Compatible", "ASME / ISO Compliant", "Instant Download"],
  },
];

export function CadLibrary() {
  return (
    <section id="cad-library" className="bg-slate-50 py-24 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange-600">
              E-store CAD library
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-normal text-slate-950 sm:text-5xl">
              Pre-verified assets for engineers and builders.
            </h2>
          </div>
          <Link
            href="#contact"
            className="focus-ring inline-flex w-fit items-center justify-center gap-2 border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:border-orange-500 hover:text-orange-600"
          >
            Request library access
            <Icon name="arrowRight" className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="flex min-h-80 flex-col justify-between border border-slate-200 bg-white p-7 shadow-industrial-sm transition hover:-translate-y-1 hover:border-orange-300"
            >
              <div>
                <div className="mb-7 grid size-12 place-items-center bg-slate-900 text-orange-400">
                  <Icon name="file" className="size-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-950">{product.name}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{product.summary}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

interface OutsourcingFeature {
  title: string;
  body: string;
  metric: string;
}

const features: OutsourcingFeature[] = [
  {
    title: "Reorganize & Optimize",
    body:
      "Helping global organizations resize internal drafting overhead by delivering flawless 2D and 3D mechanical detailing at an affordable price point.",
    metric: "Drafting overhead converted into scalable production capacity.",
  },
  {
    title: "Flawless Scalability",
    body:
      "Handling massive industrial layouts, storage tanks, thickeners, flotations, and intricate piping schemes smoothly without structural delays.",
    metric: "Proven delivery across Australia and Asia.",
  },
];

export function Outsourcing() {
  return (
    <section id="outsourcing" className="bg-slate-950 py-24 text-white sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange-400">
            Global outsourcing
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
            Enterprise engineering teams without enterprise drag.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Optimus extends your mechanical engineering bench with disciplined documentation,
            manufacturing-aware modeling, and dependable delivery rhythm for regional and global programs.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.title} className="border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-2xl font-black text-white">{feature.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{feature.body}</p>
              <p className="mt-8 border-l-2 border-orange-500 pl-4 text-sm font-bold uppercase tracking-[0.16em] text-orange-300">
                {feature.metric}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

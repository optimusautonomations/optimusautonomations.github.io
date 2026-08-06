interface ProcessStep {
  step: string;
  title: string;
  detail: string;
}

const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Requirements & DFM Review",
    detail: "Clarify mechanical intent, production method, constraints, materials, and tolerance targets.",
  },
  {
    step: "02",
    title: "3D Parametric Modeling",
    detail: "Build editable assemblies that support iteration, drawing export, BOM control, and downstream reuse.",
  },
  {
    step: "03",
    title: "Validation & Simulation",
    detail: "Run CFD, FEA, and thermal checks where performance risk or operating conditions demand proof.",
  },
  {
    step: "04",
    title: "Compliance Check & Export",
    detail: "Prepare export packages aligned to ASME, ISO, ASTM, SAE, BS, DIN, ANSI, and MIL requirements.",
  },
];

export function Process() {
  return (
    <section id="standards" className="bg-white py-24 sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange-600">
            Standards & quality process
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-normal text-slate-950 sm:text-5xl">
            A disciplined lifecycle from requirement to export.
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 lg:grid-cols-4">
          {steps.map((item) => (
            <li key={item.step} className="relative border-t-4 border-slate-900 bg-slate-50 p-7">
              <span className="text-sm font-black uppercase tracking-[0.24em] text-orange-600">{item.step}</span>
              <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./Icon";

interface ServiceTier {
  label: string;
  value: string;
}

const serviceTiers: ServiceTier[] = [
  { label: "CAD Drafting & Detailing", value: "cad-drafting" },
  { label: "Automation Machinery", value: "automation-machinery" },
  { label: "Simulation & Validation", value: "simulation-validation" },
  { label: "Outsourcing Program", value: "outsourcing-program" },
];

export function ContactForm() {
  const [selectedFile, setSelectedFile] = useState<string>("No blueprint attached");
  const [status, setStatus] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Your engineering desk request is ready for routing.");
  }

  return (
    <section id="contact" className="bg-slate-950 py-24 text-white sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange-400">
            Conversion desk
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
            Send the brief. We will map the engineering path.
          </h2>
          <form onSubmit={handleSubmit} className="mt-10 grid gap-5" aria-label="Request a quote form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="focus-ring border border-white/10 bg-white px-4 py-3 text-base font-medium text-slate-950 placeholder:text-slate-400"
                  placeholder="Project lead"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Enterprise Email
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="focus-ring border border-white/10 bg-white px-4 py-3 text-base font-medium text-slate-950 placeholder:text-slate-400"
                  placeholder="name@company.com"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Service Tier
              <select
                name="serviceTier"
                className="focus-ring border border-white/10 bg-white px-4 py-3 text-base font-medium text-slate-950"
                defaultValue={serviceTiers[0].value}
              >
                {serviceTiers.map((tier) => (
                  <option key={tier.value} value={tier.value}>
                    {tier.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className="focus-ring resize-y border border-white/10 bg-white px-4 py-3 text-base font-medium text-slate-950 placeholder:text-slate-400"
                placeholder="Share machinery type, CAD format, validation needs, timeline, and operating conditions."
              />
            </label>

            <label className="focus-ring flex cursor-pointer items-center justify-between gap-4 border border-dashed border-white/25 bg-white/[0.04] px-4 py-4 text-sm font-bold text-slate-200 transition hover:border-orange-400">
              <span className="flex min-w-0 items-center gap-3">
                <Icon name="file" className="size-5 shrink-0 text-orange-400" />
                <span className="truncate">{selectedFile}</span>
              </span>
              <span className="shrink-0 text-orange-300">Attach</span>
              <input
                type="file"
                name="blueprint"
                className="sr-only"
                accept=".pdf,.dwg,.dxf,.step,.stp,.sldprt,.sldasm,.ipt,.iam,.zip"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  setSelectedFile(file?.name ?? "No blueprint attached");
                }}
              />
            </label>

            <button
              type="submit"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 bg-orange-500 px-6 py-4 text-base font-extrabold text-white transition hover:bg-orange-600 sm:w-fit"
            >
              Request Engineering Review
              <Icon name="arrowRight" className="size-5" />
            </button>
            {status ? <p className="text-sm font-bold text-orange-300">{status}</p> : null}
          </form>
        </div>

        <aside className="border border-white/10 bg-white/[0.04] p-7 sm:p-9">
          <h3 className="text-2xl font-black">Corporate footprint</h3>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Operations across Asia with regional centers in Colombo, Gampaha, Bangalore, and Polonnaruwa.
          </p>
          <div className="mt-8 grid gap-4">
            <a
              href="https://wa.me/94700000000"
              className="focus-ring flex items-center gap-3 border border-white/10 bg-slate-900 px-4 py-4 text-sm font-bold text-white transition hover:border-orange-400"
            >
              <Icon name="message" className="size-5 text-orange-400" />
              WhatsApp Direct Link
            </a>
            <a
              href="mailto:info@optimusautomation.com"
              className="focus-ring flex items-center gap-3 border border-white/10 bg-slate-900 px-4 py-4 text-sm font-bold text-white transition hover:border-orange-400"
            >
              <Icon name="mail" className="size-5 text-orange-400" />
              info@optimusautomation.com
            </a>
            <div className="flex items-center gap-3 border border-white/10 bg-slate-900 px-4 py-4 text-sm font-bold text-white">
              <Icon name="shield" className="size-5 text-orange-400" />
              24/6 Support availability
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

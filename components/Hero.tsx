import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-slate-950 text-white">
      <Image
        src="/images/industrial-automation-hero.png"
        alt="Industrial automation machinery and CAD engineering workstation"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.96)_0%,rgba(15,23,42,0.82)_42%,rgba(15,23,42,0.24)_100%)]" />

      <div className="section-shell relative flex min-h-[calc(100svh-5rem)] items-center py-24">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex border border-[#57c98b]/40 bg-[#2f9138]/15 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-[#82dfa9]">
            Engineering • Automation • Artificial Intelligence
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Transforming Ideas into Intelligent Machines.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            We solve critical manufacturing-floor challenges through industrial machine design, robotics,
            intelligent controls, simulation, and AI-powered engineering.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#services"
              className="focus-ring inline-flex items-center justify-center gap-2 bg-[#2076ad] px-6 py-4 text-base font-extrabold text-white transition hover:bg-[#175d8b]"
            >
              Explore Solutions
              <Icon name="arrowRight" className="size-5" />
            </Link>
            <Link
              href="#cad-library"
              className="focus-ring inline-flex items-center justify-center gap-2 border border-white/40 px-6 py-4 text-base font-extrabold text-white transition hover:border-orange-300 hover:text-orange-200"
            >
              <Icon name="download" className="size-5" />
              Download CAD Catalog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

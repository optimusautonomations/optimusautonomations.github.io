import { Icon } from "./Icon";
import { Logo } from "./Logo";

const specialties = [
  "Industrial Machine Design & Development",
  "Factory Automation & Robotics Integration",
  "CAD Design",
  "PLC Programming & Industrial Control Systems",
  "Reverse Engineering & 3D Scanning",
  "FEA, Simulation & Engineering Analysis",
  "Product Development & Prototyping",
  "AI-Powered Engineering Solutions",
  "Manufacturing Consultancy & Technical Training",
];

export function Mission() {
  return (
    <section id="mission" className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#147b9d]">Our mission</p>
          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
            Solving the most critical pain points on the manufacturing floor.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            We unite engineering, automation, and artificial intelligence to turn ambitious ideas into
            reliable, intelligent machines.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <h3 className="text-xl font-black text-[#147b9d]">We specialize in:</h3>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {specialties.map((specialty) => (
                <li key={specialty} className="flex items-start gap-3 text-base font-semibold text-slate-700">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-sm bg-[#57c98b] text-white shadow-sm">
                    <Icon name="check" className="size-4" />
                  </span>
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-xl rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200 sm:p-12">
            <div className="absolute -right-16 -top-16 size-44 rounded-full bg-[#ffc20e]/10" />
            <div className="absolute -bottom-20 -left-16 size-52 rounded-full bg-[#2f9138]/10" />
            <Logo className="relative h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

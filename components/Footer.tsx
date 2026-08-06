import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-slate-950 pb-10 text-slate-400">
      <div className="section-shell flex flex-col gap-6 border-t border-white/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <Logo className="size-28 rounded bg-white object-contain" />
        <p className="max-w-xl sm:text-right">
          Optimus Autonomations. Engineering and automation for modern manufacturing.
        </p>
      </div>
    </footer>
  );
}

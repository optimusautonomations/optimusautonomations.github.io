"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "CAD Library", href: "#cad-library" },
  { label: "Sourcing", href: "#outsourcing" },
  { label: "Standards", href: "#standards" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur-md">
      <nav className="section-shell flex min-h-20 items-center justify-between" aria-label="Global navigation">
        <Link href="#home" className="focus-ring flex items-center gap-3 rounded-sm">
          <Logo priority className="size-16 object-contain sm:size-[72px]" />
        </Link>

        <div className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm text-sm font-semibold text-slate-700 transition hover:text-[#2076ad]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="#contact"
            className="focus-ring inline-flex items-center justify-center gap-2 bg-[#2076ad] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#175d8b]"
          >
            Request a Quote
            <Icon name="arrowRight" className="size-4" />
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex size-11 items-center justify-center border border-slate-200 bg-white text-slate-900 xl:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <Icon name={isOpen ? "x" : "menu"} className="size-5" />
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white xl:hidden">
          <div className="section-shell grid gap-2 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring px-2 py-3 text-base font-semibold text-slate-800"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="focus-ring mt-2 inline-flex items-center justify-center gap-2 bg-[#2076ad] px-5 py-3 text-sm font-bold text-white"
              onClick={() => setIsOpen(false)}
            >
              Request a Quote
              <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

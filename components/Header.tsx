"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  ["About", "#about"], ["Capabilities", "#capabilities"], ["Sectors", "#sectors"],
  ["Work", "#work"], ["Approach", "#approach"], ["Contact", "#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><nav className="section-shell nav" aria-label="Main navigation">
    <Link href="#home" className="brand" aria-label="Optimus Autonomations home"><Logo priority className="brand-logo" /></Link>
    <div className="desktop-nav">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link href="#contact" className="nav-cta">Discuss a project</Link></div>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav">{open ? "Close" : "Menu"}</button>
  </nav>{open && <div id="mobile-nav" className="mobile-nav section-shell">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</div>}</header>;
}

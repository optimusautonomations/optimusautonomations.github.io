import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return <footer><div className="section-shell footer-inner"><Link href="#home"><Logo className="footer-logo" /></Link><p>Optimus Autonomations International (Pvt) Ltd<br />Engineering consultancy & industrial machine design</p><p>© {new Date().getFullYear()} Optimus Autonomations</p></div></footer>;
}

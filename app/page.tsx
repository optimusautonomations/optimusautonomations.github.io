import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const capabilities = [
  "Industrial machine design & development",
  "Factory automation & robotics integration",
  "PLC programming & control systems",
  "FEA, flow simulation & CFD analysis",
  "3D printing & CNC fabrication",
  "Autonomation (Jidoka)",
  "Human efficiency monitoring systems",
  "Manufacturing consultancy & training",
];

const sectors = [
  { number: "01", title: "Glove & rubber", text: "Robotic dipping plants, dual-chain production systems and dipping-line consultancy." },
  { number: "02", title: "Apparel", text: "Automated cutting, sewing systems and factory efficiency programmes." },
  { number: "03", title: "Consumer goods", text: "Packing automation, conveyors, AGVs and automatic defect detection." },
];

const projects = [
  {
    sector: "Glove & rubber",
    title: "Robotic dipping plant",
    text: "Concept-to-commissioning design for gauntlet glove production, including conveyors, rotating units, ovens, tanks and robot grippers.",
    result: "Multi-million-dollar line · Zero-defect handover",
  },
  {
    sector: "Glove & rubber",
    title: "Dual-chain batch dipping plant",
    text: "A complete household-glove production plant validated through structural and thermal simulation before fabrication.",
    result: "+25% plant capacity",
  },
  {
    sector: "Engineering consultancy",
    title: "Dipping-line optimisation",
    text: "Independent site verification, oven-flow optimisation and CFD-driven tank redesign with documented engineering handover.",
    result: "Material savings · No loss of performance",
  },
  {
    sector: "Industrial utilities",
    title: "Biomass thermal heater",
    text: "Recommissioning support for a 7 Mn kcal/hr biomass thermal heater serving continuous drying-line operations.",
    result: "Critical thermal utility restored",
  },
  {
    sector: "Apparel",
    title: "Cutting & sewing efficiency",
    text: "Automated sewing and marker-drawing systems supported by lean manufacturing, SOPs and CNC workflow optimisation.",
    result: "+15% efficiency · +6% OEE",
  },
  {
    sector: "Consumer goods",
    title: "Factory-wide automation",
    text: "Packing, collecting, stacking, folding, pad-printing, AGV and vibratory-conveyor systems delivered as one programme.",
    result: "Award-winning project · 8-person team led",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="hero">
          <Image src="/images/industrial-automation-hero.png" alt="Industrial automation equipment" fill priority className="hero-image" sizes="100vw" />
          <div className="hero-overlay" />
          <div className="section-shell hero-content">
            <p className="eyebrow light">Engineering consultancy · Sri Lanka</p>
            <h1>Transforming ideas into intelligent machines.</h1>
            <p className="hero-copy">Hands-on machine design, automation, controls and simulation for manufacturing industries.</p>
            <div className="hero-actions">
              <Link href="#contact" className="button button-primary">Discuss a project <span aria-hidden="true">↗</span></Link>
              <Link href="#work" className="button button-ghost">View selected work</Link>
            </div>
            <dl className="metrics">
              <div><dt>10+</dt><dd>Years&apos; experience</dd></div>
              <div><dt>20+</dt><dd>Major projects</dd></div>
              <div><dt>3+</dt><dd>Manufacturing sectors</dd></div>
            </dl>
          </div>
        </section>

        <section id="about" className="section section-intro">
          <div className="section-shell split">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>Your engineering and automation partner on the manufacturing floor.</h2>
            </div>
            <div className="intro-copy">
              <p>Optimus Autonomations International (Pvt) Ltd solves critical production challenges through practical mechanical design, automation, controls and simulation.</p>
              <p>Every engagement is grounded in feasibility, validation and clear documentation, from the first production brief through to final handover.</p>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section section-soft">
          <div className="section-shell">
            <p className="eyebrow">Core capabilities</p>
            <div className="capability-grid">
              {capabilities.map((item, index) => <div className="capability" key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3></div>)}
            </div>
          </div>
        </section>

        <section id="sectors" className="section">
          <div className="section-shell">
            <div className="section-heading"><div><p className="eyebrow">Sector experience</p><h2>Built for real production environments.</h2></div><p>From single-system improvements to complete production lines, our work is shaped by throughput, safety, maintainability and operator needs.</p></div>
            <div className="sector-grid">{sectors.map((sector) => <article key={sector.title}><span>{sector.number}</span><h3>{sector.title}</h3><p>{sector.text}</p></article>)}</div>
          </div>
        </section>

        <section id="work" className="section section-dark">
          <div className="section-shell">
            <div className="section-heading"><div><p className="eyebrow light">Selected work</p><h2>Engineering measured by outcomes.</h2></div><p>Representative projects are anonymised to protect client confidentiality.</p></div>
            <div className="project-grid">{projects.map((project) => <article key={project.title}><p className="project-sector">{project.sector}</p><h3>{project.title}</h3><p>{project.text}</p><strong>{project.result}</strong></article>)}</div>
          </div>
        </section>

        <section id="approach" className="section">
          <div className="section-shell">
            <p className="eyebrow">Our approach</p>
            <h2 className="narrow-title">Reduce uncertainty before fabrication begins.</h2>
            <ol className="approach-grid">
              <li><span>01</span><div><h3>Feasibility first</h3><p>Every project starts with a clear view of cost, risk and delivery timelines.</p></div></li>
              <li><span>02</span><div><h3>Simulate before you build</h3><p>FEA, thermal and CFD validation help resolve performance risk early.</p></div></li>
              <li><span>03</span><div><h3>Documented handover</h3><p>Drawings, BOMs and SOPs equip your team to operate with confidence.</p></div></li>
            </ol>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-shell contact-grid">
            <div className="contact-content">
              <p className="eyebrow light">Start a conversation</p>
              <h2>Let&apos;s build intelligent machines.</h2>
              <p>Share the production problem, performance goal or new-machine brief. We&apos;ll help define the right engineering path.</p>
              <a className="whatsapp-button" href="https://wa.me/94777899187" target="_blank" rel="noreferrer" aria-label="Start a conversation on WhatsApp">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9.04 9.04 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35M12.04 21.5h-.01a9.46 9.46 0 0 1-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36A9.46 9.46 0 0 1 2.55 12c0-5.21 4.25-9.45 9.49-9.45a9.4 9.4 0 0 1 6.71 2.78A9.37 9.37 0 0 1 21.52 12c0 5.21-4.25 9.45-9.48 9.45m8.07-17.48A11.35 11.35 0 0 0 12.05.68C5.77.68.66 5.76.66 12.02c0 2 .52 3.95 1.52 5.67L.56 23.6l6.07-1.59a11.42 11.42 0 0 0 5.42 1.38h.01c6.28 0 11.39-5.09 11.39-11.34 0-3.03-1.19-5.88-3.34-8.02"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

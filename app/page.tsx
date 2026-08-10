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
            <h1>Engineering ideas into intelligent machines.</h1>
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
              <p>Led by Nipun Kosgoda, a Mechanical & Manufacturing Engineer with more than a decade of industrial experience, every engagement is grounded in feasibility, validation and clear documentation.</p>
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
            <div><p className="eyebrow light">Start a conversation</p><h2>Let&apos;s build intelligent machines.</h2><p>Share the production problem, performance goal or new-machine brief. We&apos;ll help define the right engineering path.</p></div>
            <div className="contact-card">
              <p className="contact-name">Nipun Kosgoda</p>
              <p>Director · Mechanical & Manufacturing Engineer</p>
              <p className="credentials">B.Sc. Eng. (Hons) · AMIESL-21890 · TPM</p>
              <a href="tel:+94777899187">+94 77 789 9187</a>
              <a href="mailto:optimusautonomations@gmail.com">optimusautonomations@gmail.com</a>
              <p>Kaduwela · Ratnapura · Sri Lanka</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

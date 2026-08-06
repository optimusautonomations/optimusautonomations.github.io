import { CadLibrary } from "@/components/CadLibrary";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Outsourcing } from "@/components/Outsourcing";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Outsourcing />
        <CadLibrary />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

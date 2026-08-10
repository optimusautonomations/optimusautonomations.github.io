import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/montserrat";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://optimusautonomations.com"),
  title: "Optimus Autonomations | Engineering & Industrial Automation",
  description:
    "Engineering consultancy, industrial machine design, factory automation, PLC controls, FEA and CFD simulation for manufacturing industries.",
  keywords: [
    "Optimus Autonomations",
    "industrial automation outsourcing",
    "mechanical engineering services",
    "CAD drafting",
    "CFD simulation",
    "FEA stress analysis",
    "custom machinery",
  ],
  openGraph: {
    title: "Transforming Ideas into Intelligent Machines",
    description: "Engineering consultancy and industrial machine design solutions for manufacturing industries.",
    images: ["/images/industrial-automation-hero.png"],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

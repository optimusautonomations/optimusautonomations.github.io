import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/montserrat";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://optimusautomation.com"),
  title: "Optimus Autonomations | Intelligent Machines & Industrial Automation",
  description:
    "Industrial machine design, factory automation, robotics, CAD, PLC programming, simulation, prototyping, and AI-powered engineering solutions.",
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
    description:
      "International-standard CAD drafting, custom automation machinery, and scalable engineering outsourcing since 2009.",
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

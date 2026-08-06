import Image from "next/image";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Optimus Autonomations — Transforming Ideas into Intelligent Machines"
      width={1254}
      height={1254}
      priority={priority}
      className={className}
      sizes="(min-width: 1024px) 520px, 90vw"
    />
  );
}

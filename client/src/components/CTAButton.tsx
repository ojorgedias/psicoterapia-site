import { Link } from "wouter";
import { ReactNode } from "react";
import { PSYCHOLOGIST } from "@/../../shared/const";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  whatsapp?: boolean;
  external?: boolean;
}

export default function CTAButton({
  href = "/contato",
  onClick,
  children,
  variant = "primary",
  className = "",
  whatsapp = false,
  external = false,
}: CTAButtonProps) {
  const baseClass = "inline-block px-6 py-3 rounded-lg font-semibold transition-opacity duration-200";
  const variantClass =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : "bg-accent text-accent-foreground hover:opacity-90";

  if (onClick) {
    return (
      <button onClick={onClick} className={`${baseClass} ${variantClass} ${className}`}>
        {children}
      </button>
    );
  }

  const finalHref = whatsapp ? PSYCHOLOGIST.whatsappLink : href;

  if (external || whatsapp) {
    return (
      <a href={finalHref} target="_blank" rel="noopener noreferrer" className={`${baseClass} ${variantClass} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={finalHref} className={`${baseClass} ${variantClass} ${className}`}>
      {children}
    </Link>
  );
}

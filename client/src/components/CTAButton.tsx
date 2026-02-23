import { Link } from "wouter";
import { ReactNode } from "react";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({
  href = "/contato",
  onClick,
  children,
  variant = "primary",
  className = "",
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

  return (
    <Link href={href}>
      <a className={`${baseClass} ${variantClass} ${className}`}>{children}</a>
    </Link>
  );
}

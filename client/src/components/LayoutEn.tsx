import { ReactNode } from "react";
import HeaderEn from "./HeaderEn";
import FooterEn from "./FooterEn";
import FloatingActionButton from "./FloatingActionButton";

interface LayoutEnProps {
  children: ReactNode;
}

export default function LayoutEn({ children }: LayoutEnProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <HeaderEn />
      <main className="flex-1">{children}</main>
      <FooterEn />
      <FloatingActionButton />
    </div>
  );
}

import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumb flex items-center gap-2 text-sm mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href}>
              <a className="text-primary hover:text-accent transition-colors">{item.label}</a>
            </Link>
          ) : (
            <span className="text-muted-foreground">{item.label}</span>
          )}
          {index < items.length - 1 && <ChevronRight size={16} className="text-muted-foreground" />}
        </div>
      ))}
    </nav>
  );
}

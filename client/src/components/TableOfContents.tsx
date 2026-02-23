interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: HeadingItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) return null;

  return (
    <div className="toc-container">
      <h3>Índice de Conteúdo</h3>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}>
            <a href={`#${heading.id}`} className="text-primary hover:text-accent transition-colors">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Content Parser for Service Pages
 * Converts markdown-like content with internal link instructions to React components
 */

export interface ParsedContent {
  title: string;
  sections: Section[];
}

export interface Section {
  type: "heading" | "paragraph" | "list";
  level?: number;
  content: string;
  id?: string;
}

export const parseServiceContent = (rawContent: string): ParsedContent => {
  const lines = rawContent.split("\n");
  const sections: Section[] = [];
  let title = "";
  let currentParagraph = "";

  for (const line of lines) {
    const trimmed = line.trim();

    // Extract title
    if (trimmed.startsWith("H1:")) {
      title = trimmed.replace("H1:", "").trim();
      continue;
    }

    // Handle headings
    if (trimmed.startsWith("H2:")) {
      if (currentParagraph) {
        sections.push({
          type: "paragraph",
          content: currentParagraph,
        });
        currentParagraph = "";
      }
      const headingText = trimmed.replace("H2:", "").trim();
      sections.push({
        type: "heading",
        level: 2,
        content: headingText,
        id: headingText.toLowerCase().replace(/\s+/g, "-"),
      });
      continue;
    }

    // Handle empty lines
    if (!trimmed) {
      if (currentParagraph) {
        sections.push({
          type: "paragraph",
          content: currentParagraph,
        });
        currentParagraph = "";
      }
      continue;
    }

    // Accumulate paragraph content
    currentParagraph += (currentParagraph ? " " : "") + trimmed;
  }

  // Push final paragraph
  if (currentParagraph) {
    sections.push({
      type: "paragraph",
      content: currentParagraph,
    });
  }

  return { title, sections };
};

/**
 * Convert internal link instructions to actual links
 * Format: [Instrução para a Manus IA: Transformar o trecho "X" em um link...]
 */
export const processInternalLinks = (
  text: string,
  linkMap: Record<string, string>
): { text: string; links: Array<{ original: string; route: string }> } => {
  const links: Array<{ original: string; route: string }> = [];
  let processedText = text;

  // Find all link instructions
  const instructionRegex = /\[Instrução para a Manus IA: Transformar o trecho "([^"]+)" em um link[^\]]*\]/g;
  let match;

  while ((match = instructionRegex.exec(text)) !== null) {
    const linkText = match[1];
    const route = linkMap[linkText] || "#";
    links.push({ original: linkText, route });

    // Replace instruction with the actual text (will be converted to link in component)
    processedText = processedText.replace(match[0], linkText);
  }

  return { text: processedText, links };
};

/**
 * Extract headings for Table of Contents
 */
export const extractHeadings = (sections: Section[]) => {
  return sections
    .filter((s) => s.type === "heading")
    .map((s) => ({
      id: s.id || "",
      text: s.content,
      level: s.level || 2,
    }));
};

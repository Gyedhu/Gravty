
// --- Constants ---
export const PARAGRAPH = "PARAGRAPH";
export const LIST = "LIST";

// --- Interfaces ---

// Paragraph
export interface ParagraphTypes {
  contentType: typeof PARAGRAPH;
  header?: string;
  content: string;
};

// List
export interface ListTypes {
  contentType: typeof LIST;
  title?: string;
  listItems: Array<string>;
  type?: "decimal" | "rouded" | "square" | "upper-alpha";
};


// --- Constants ---
export const PARAGRAPH = "PARAGRAPH";
export const LIST = "LIST";
export const IMAGE = "IMAGE";

// --- Interfaces ---

// Paragraph
export interface ParagraphTypes {
  contentType: typeof PARAGRAPH;
  header?: string;
  content: string;
};

// Image
export interface ImageTypes {
  contentType: typeof IMAGE;
  url: string;
  header?: string;
  footer?: string;
}

// List
export interface ListTypes {
  contentType: typeof LIST;
  title?: string;
  listItems: Array<string>;
  type?: "decimal" | "rouded" | "square" | "upper-alpha";
};

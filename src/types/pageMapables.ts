// Types 
import {
  ImageProps,
  ListProps,
  PageTitleProps,
  ParagraphProps,
  SentenceWithColonProps
} from "./pageElements";

// --- Constants ---
export const PARAGRAPH_WITH_HEADER = "PARAGRAPH_WITH_HEADER";
export const PARAGRAPH = "PARAGRAPH";
export const LIST = "LIST";
export const IMAGE = "IMAGE";
export const PAGE_TITLE = "PAGE_TITLE";
export const SETNTENCE_WITH_COLON = "SETNTENCE_WITH_COLON";


// Set of constants
export type mapableConstants =
  typeof PARAGRAPH |
  typeof LIST |
  typeof IMAGE |
  typeof PAGE_TITLE |
  typeof PARAGRAPH_WITH_HEADER |
  typeof SETNTENCE_WITH_COLON |
  null;



// Page title 
export interface PageTitleMapable extends PageTitleProps {
  contentType: typeof PAGE_TITLE;
};


// Paragraph
export interface ParagraphMapable extends ParagraphProps {
  contentType: typeof PARAGRAPH,
};


// Image
export interface ImageMapable extends ImageProps {
  contentType: typeof IMAGE;
};


// List
export interface ListMapable extends ListProps {
  contentType: typeof LIST;
};

// Sentence with colon
export interface SentenceWithColonMapable extends SentenceWithColonProps {
  contentType: typeof SETNTENCE_WITH_COLON;
};

// Set of page mapables interfaces
export type PageMapables =
  PageTitleMapable |
  ParagraphMapable |
  ListMapable |
  ImageMapable |
  SentenceWithColonMapable;


// Mapable data
export type PageData = Array<PageMapables>;

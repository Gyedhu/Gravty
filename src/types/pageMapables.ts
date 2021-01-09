// Types 
import {
  ImageProps,
  ListProps,
  PageTitleProps,
  ParagraphProps
} from "./pageElements";

// --- Constants ---
export const PARAGRAPH = "PARAGRAPH";
export const LIST = "LIST";
export const IMAGE = "IMAGE";
export const PAGE_TITLE = "PAGE_TITLE";


// Set of constants
export type mapableConstants =
  typeof PARAGRAPH |
  typeof LIST |
  typeof IMAGE |
  typeof PAGE_TITLE;



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


// Set of page mapables interfaces
export type PageMapables =
  PageTitleMapable |
  ParagraphMapable |
  ListMapable |
  ImageMapable


// Mapable data
export type PageData = Array<PageMapables>;

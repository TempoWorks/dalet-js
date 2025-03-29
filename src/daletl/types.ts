export type Vec<T> = T[];
export type Text = string;
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type TableRows = { Default: Vec<Tag> } | { Primary: Vec<Tag> };
export type Body = { Text: string } | { Tags: Vec<Tag> };

export type Tag =
  | Partial<{
      El: { body: Body };
      H: { body: Text; heading: HeadingLevel };
      P: { body: Body };
      Ul: { body: Vec<Tag> };
      Ol: { body: Vec<Tag> };
      Row: { body: Vec<Tag> };
      Link: { body: Body | null; dref: Text };
      NavLink: { body: Body | null; dref: Text };
      Button: { body: Body | null; dref: Text };
      NavButton: { body: Body | null; dref: Text };
      Img: { src: Text };
      Table: { body: Vec<TableRows> };
      B: { body: Text };
      I: { body: Text };
      Bq: { body: Body };
      FootLink: { footnote: number };
      FootNote: { body: Text; footnote: number };
      A: { anchor: Text };
      S: { body: Text };
      Sup: { body: Text };
      Sub: { body: Text };
      Disc: { body: Body };
      Carousel: { body: Vec<Tag> };
      Code: { body: Text; language: Text | null };
      Pre: { body: Text };
    }>
  | "LineBreak"
  | "HorizontalBreak";

export interface Page {
  title: Text | null;
  description: Text | null;
  body: Vec<Tag>;
}

export type Vec<T> = T[];
export type Text = string;
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type TextOrNull = { Text: string } | "Null";
export type TextOrNumber = { Text: string } | number;

export type TableRows = { Default: Vec<Tag> } | { Primary: Vec<Tag> };

export type Body = { Text: string } | { Tags: Vec<Tag> };
export type BodyOrNull = Body | "Null";

export type Tag =
  | { El: { body: Body } }
  | { H: { body: Text; heading: HeadingLevel } }
  | { P: { body: Body } }
  | { Ul: { body: Vec<Tag> } }
  | { Ol: { body: Vec<Tag> } }
  | { Row: { body: Vec<Tag> } }
  | { Link: { body: BodyOrNull; dref: Text } }
  | { NavLink: { body: BodyOrNull; dref: Text } }
  | { Button: { body: BodyOrNull; dref: Text } }
  | { NavButton: { body: BodyOrNull; dref: Text } }
  | { Img: { src: Text } }
  | { Table: { body: Vec<TableRows> } }
  | { B: { body: Text } }
  | { I: { body: Text } }
  | { Bq: { body: Body } }
  | { FootLink: { footnote: number } }
  | { FootNote: { body: Text; footnote: number } }
  | { A: { anchor: Text } }
  | { S: { body: Text } }
  | { Sup: { body: Text } }
  | { Sub: { body: Text } }
  | { Disc: { body: Body } }
  | { Carousel: { body: Vec<Tag> } }
  | { Code: { body: Text; language: TextOrNull } }
  | { Pre: { body: Text } }
  | "LineBreak"
  | "HorizontalBreak";

export interface Page {
  title: TextOrNull;
  description: TextOrNull;
  body: Vec<Tag>;
}

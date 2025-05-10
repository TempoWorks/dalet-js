export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Vec<T> = T[];
export type Text = string;
export type u64 = number;
export type Option<T> = T | null;
export type bool = boolean;

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type ListStyle = "Disc" | "Decimal" | "None";
export type Align = "Start" | "Center" | "End";

export type TableRows = AtLeastOne<{ Default: Vec<Tag>; Primary: Vec<Tag> }>;
export type Body = AtLeastOne<{ Text: Text; Tags: Vec<Tag> }>;

export type Tag =
  | AtLeastOne<{
      /// Default element without styles.
      Element: { body: Body };
      /// Heading. Bold, big, with vertical margin.
      Heading: { body: Text; heading: HeadingLevel };
      /// Paragraph with vertical margin.
      Paragraph: { body: Body };

      /// Link to another resource. Open in new tab.
      Link: { body: Option<Body>; dref: Text };
      /// Link to another resource. Open in current tab.
      NavLink: { body: Option<Body>; dref: Text };
      /// Link to another resource with button style. Open in new tab.
      Button: { body: Option<Body>; dref: Text };
      /// Link to another resource with button style. Open in current tab.
      NavButton: { body: Option<Body>; dref: Text };

      /// Image with optional alt.
      Image: { src: Text; alt: Option<Text> };
      /// Table
      Table: { body: Vec<TableRows> };
      /// List with custom marker style.
      List: { body: Vec<Tag>; style: ListStyle };

      /// Bold text
      Bold: { body: Text };
      /// Italic text
      Italic: { body: Text };
      /// Strikethrough text
      Strikethrough: { body: Text };
      /// Superscript text
      Superscript: { body: Text };
      /// Subscript text
      Subscript: { body: Text };

      /// Link to FootNote
      FootLink: { footnote: u64 };
      /// FootNote
      FootNote: { body: Text; footnote: u64 };
      /// Anchor for using in links (Link { dref: "#id" })
      Anchor: { id: Text };

      /// Preformatted block of text.
      Preformatted: { body: Text };
      /// BlockQuote
      BlockQuote: { body: Body };
      /// Block of code. With highlighting.
      Code: { body: Text; language: Option<Text> };

      /// Block with a lighter background and padding.
      Block: { body: Vec<Tag> };
      /// Flex block.
      Flex: {
        body: Vec<Tag>;
        wrap: bool;
        align_x: Option<Align>;
        align_y: Option<Align>;
      };
      /// Grid block.
      Grid: {
        body: Vec<Tag>;
        align_x: Option<Align>;
        align_y: Option<Align>;
      };
      /// Block that can be opened. With optional title.
      Disclosure: { body: Body; title: Option<Text> };
      /// Carousel of blocks with buttons for switching between them.
      Carousel: { body: Vec<Tag> };

      /// Display variable from variables in page by index.
      Variable: { idx: u64 };
    }>
  | "LineBreak"
  | "HorizontalBreak";

export interface Page {
  title: Option<Text>;
  description: Option<Text>;
  body: Vec<Tag>;
  variables: Option<Vec<Text>>;
}

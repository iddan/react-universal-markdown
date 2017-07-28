import React from "react";
import Markdown from "./Markdown";

const LineBreak = () => <br />;

export const DOMComponents = {
  Text: ({ children }) =>
    <span>
      {children}
    </span>,
  LineBreak: LineBreak,
  SoftBreak: LineBreak,
  Em: ({ children }) =>
    <em>
      {children}
    </em>,
  Strong: ({ children }) =>
    <strong>
      {children}
    </strong>,
  Link: ({ title, destination, children }) =>
    <a title={title} href={destination}>
      {children}
    </a>,
  Image: ({ title, destination }) => <img src={destination} title={title} />,
  Code: ({ children }) =>
    <code>
      {children}
    </code>,
  Paragraph: ({ children }) =>
    <p>
      {children}
    </p>,
  BlockQuote: ({ children }) =>
    <blockquote>
      {children}
    </blockquote>,
  Item: ({ children }) =>
    <li>
      {children}
    </li>,
  List: ({ children, listType, listStart }) => {
    switch (listType) {
      case "ordered": {
        return (
          <ol start={listStart}>
            {children}
          </ol>
        );
      }
      default: {
        return (
          <ul>
            {children}
          </ul>
        );
      }
    }
  },
  Heading: ({ children, level }) => {
    const Heading = "h" + level;
    return (
      <Heading>
        {children}
      </Heading>
    );
  },
  CodeBlock: ({ children, info }) =>
    <pre>
      <code>
        {children}
      </code>
    </pre>,
  ThematicBreak: () => <hr />,
  Document: ({ className, children }) =>
    <div className={className}>
      {children}
    </div>
};

const DOMMarkdown = props =>
  <Markdown
    {...props}
    components={{
      ...DOMComponents,
      Document: componentProps =>
        <DOMComponents.Document
          {...componentProps}
          className={props.className}
        />
    }}
  />;

export default DOMMarkdown;

import React from "react";
import Markdown from "./Markdown";

const LineBreak = () => <br />;

const DOM = {
  text: ({ children }) =>
    <span>
      {children}
    </span>,
  linebreak: LineBreak,
  softbreak: LineBreak,
  emph: ({ children }) =>
    <em>
      {children}
    </em>,
  strong: ({ children }) =>
    <strong>
      {children}
    </strong>,
  link: ({ title, destination, children }) =>
    <a title={title} href={destination}>
      {children}
    </a>,
  image: ({ title, destination }) => <img src={destination} title={title} />,
  code: ({ children }) =>
    <code>
      {children}
    </code>,
  paragraph: ({ children }) =>
    <p>
      {children}
    </p>,
  block_quote: ({ children }) =>
    <blockquote>
      {children}
    </blockquote>,
  item: ({ children }) =>
    <li>
      {children}
    </li>,
  list: ({ children, listType, listStart }) => {
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
  heading: ({ children, level }) => {
    const Heading = "h" + level;
    return (
      <Heading>
        {children}
      </Heading>
    );
  },
  code_block: ({ children, info }) =>
    <pre>
      <code>
        {children}
      </code>
    </pre>,
  thematic_break: () => <hr />,
  document: ({ children }) =>
    <div>
      {children}
    </div>
};

const DOMMarkdown = props => <Markdown {...props} components={DOM} />;

export default DOMMarkdown;

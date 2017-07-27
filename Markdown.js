import React from "react";
import { Parser } from "commonmark";

function* getChildren(node) {
  let child = node.firstChild;
  if (!child) {
    return;
  }
  do {
    yield child;
    child = child.next;
  } while (child);
}

const defaultCustomizer = (render, children) => children.map(render);

const render = (components, customizer = defaultCustomizer, node) => {
  const NodeComponent = components[node.type];
  const { info, level, listType, listStart, title, destination } = node;
  const children = [...getChildren(node)];
  return (
    <NodeComponent
      {...{ info, level, listType, listStart, title, destination }}
    >
      {!children.length
        ? node.literal
        : customizer(child => render(components, customizer, child), children)}
    </NodeComponent>
  );
};

const Markdown = ({ components, customizer, children }) =>
  render(components, customizer, new Parser(children).parse(children));

export default Markdown;

import React, { Component } from 'react';
import { Parser } from 'commonmark';
import shallowEqual from 'shallowequal';
import { getChildren } from './util';
import COMPONENT_NAMES from './component-names';

const defaultCustomizer = (render, children) => children.map(render);

const render = (components, customizer = defaultCustomizer, node) => {
  const NodeComponent = components[COMPONENT_NAMES[node.type]];
  const { info, level, listType, listStart, title, destination } = node;
  const children = [...getChildren(node)];
  return (
    <NodeComponent {...{ info, level, listType, listStart, title, destination }}>
      {!children.length
        ? node.literal
        : customizer(
          (child, i) =>
            React.cloneElement(render(components, customizer, child), {
              key: i,
            }),
          children,
        )}
    </NodeComponent>
  );
};

class Markdown extends Component {
  parser = new Parser();

  shouldComponentUpdate(nextProps) {
    const { components, ...rest } = this.props;
    const { components: nextComponents, ...nextRest } = nextProps;
    return !shallowEqual(rest, nextRest) || !shallowEqual(components, nextComponents);
  }

  render() {
    const { components, customizer, children } = this.props;
    return render(components, customizer, this.parser.parse(children));
  }
}

export default Markdown;

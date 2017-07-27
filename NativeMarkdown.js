import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import mapValues from "lodash.mapvalues";
import Markdown from "./Markdown";

const LineBreak = ({ style }) =>
  <Text style={style}>
    {"\n"}
  </Text>;

const Native = {
  text: ({ style, children }) =>
    <Text style={style}>
      {children}
    </Text>,
  linebreak: LineBreak,
  softbreak: LineBreak,
  emph: ({ style, children }) =>
    <Text style={style}>
      {children}
    </Text>,
  strong: ({ style, children }) =>
    <Text style={style}>
      {children}
    </Text>,
  link: ({ style, title, destination, children }) =>
    <Text style={style}>
      {children}
    </Text>,
  image: ({ style, title, destination }) =>
    <Image style={style} source={{ uri: destination }} />, // @TODO handle title
  code: ({ style, children }) =>
    <Text style={style}>
      {children}
    </Text>,
  paragraph: ({ style, children }) =>
    <View style={style}>
      {children}
    </View>,
  block_quote: ({ style, children }) =>
    <View style={style}>
      {children}
    </View>,
  item: ({ style, children }) =>
    <View style={style}>
      {children}
    </View>,
  list: ({ style, children, listType, listStart }) => {
    switch (listType) {
      case "ordered": {
        return (
          <View style={style}>
            {children}
          </View>
        );
      }
      default: {
        return (
          <View style={style}>
            {children}
          </View>
        );
      }
    }
  },
  heading: ({ style, children, level }) => {
    const Heading = "h" + level;
    return (
      <Heading style={style}>
        {children}
      </Heading>
    );
  },
  code_block: ({ style, children, info }) =>
    <View style={style}>
      <Text>
        {children}
      </Text>
    </View>,
  thematic_break: ({ style }) => <View style={style} />,
  document: ({ style, children }) =>
    <View style={style}>
      {children}
    </View>
};

const defaultStyles = {};

const NativeMarkdown = props =>
  <Markdown
    {...props}
    components={mapValues(Native, (Component, name) => componentProps =>
      <Component
        {...componentProps}
        style={[defaultStyles[name], props.styles[name]]}
      />
    )}
  />;

export default NativeMarkdown;

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import mapValues from "lodash.mapvalues";
import Markdown from "./Markdown";

const LineBreak = ({ style }) =>
  <Text style={style}>
    {"\n"}
  </Text>;

export const NativeComponents = {
  Text: ({ style, children }) =>
    <Text style={style}>
      {children}
    </Text>,
  LineBreak: LineBreak,
  SoftBreak: LineBreak,
  Em: ({ style, children }) =>
    <Text style={style}>
      {children}
    </Text>,
  Strong: ({ style, children }) =>
    <Text style={style}>
      {children}
    </Text>,
  Link: ({ style, title, destination, children }) =>
    <Text style={style}>
      {children}
    </Text>,
  Image: ({ style, title, destination }) =>
    <Image style={style} source={{ uri: destination }} />, // @TODO handle title
  Code: ({ style, children }) =>
    <Text style={style}>
      {children}
    </Text>,
  Paragraph: ({ style, children }) =>
    <View style={style}>
      {children}
    </View>,
  BlockQuote: ({ style, children }) =>
    <View style={style}>
      {children}
    </View>,
  Item: ({ style, children }) =>
    <View style={style}>
      {children}
    </View>,
  List: ({ style, children, listType, listStart }) => {
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
  Heading: ({ style, children, level }) => {
    const Heading = "h" + level;
    return (
      <Heading style={style}>
        {children}
      </Heading>
    );
  },
  CodeBlock: ({ style, children, info }) =>
    <View style={style}>
      <Text>
        {children}
      </Text>
    </View>,
  ThematicBreak: ({ style }) => <View style={style} />,
  Document: ({ style, children }) =>
    <View style={style}>
      {children}
    </View>
};

const defaultStyles = {};

const NativeMarkdown = props =>
  <Markdown
    {...props}
    components={mapValues(
      NativeComponents,
      (Component, name) => componentProps =>
        <Component
          {...componentProps}
          style={[defaultStyles[name], props.styles[name]]}
        />
    )}
  />;

export default NativeMarkdown;

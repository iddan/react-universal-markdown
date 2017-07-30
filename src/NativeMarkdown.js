import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import mapValues from 'lodash.mapvalues';
import Markdown from './Markdown';

const LineBreak = ({style}) =>
  <Text style={style}>
    {'\n'}
  </Text>;

export const NativeComponents = {
  Text: ({style, children}) =>
    <Text style={style}>
      {children}
    </Text>,
  LineBreak,
  SoftBreak: LineBreak,
  Em: ({style, children}) =>
    <Text style={style}>
      {children}
    </Text>,
  Strong: ({style, children}) =>
    <Text style={style}>
      {children}
    </Text>,
  Link: ({style, title, destination, children}) =>
    <Text style={style}>
      {children}
    </Text>,
  Image: ({style, title, destination}) => <Image style={style} source={{uri: destination}} />, // @TODO handle title
  Code: ({style, children}) =>
    <Text style={style}>
      {children}
    </Text>,
  Paragraph: ({style, children}) =>
    <View style={style}>
      <Text>
        {children}
      </Text>
    </View>,
  BlockQuote: ({style, children}) =>
    <View style={style}>
      {children}
    </View>,
  Item: ({style, children}) =>
    <View style={style}>
      <Text> • </Text>
      {children}
    </View>,
  List: ({style, children, listType, listStart}) => {
    switch (listType) {
      case 'ordered': {
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
  Heading: ({styles, style, children, level}) => {
    return (
      <View>
        <Text style={[style, styles['H' + level]]}>
          {children}
        </Text>
      </View>
    );
  },
  CodeBlock: ({style, children, info}) =>
    <View>
      <Text style={style}>
        {children}
      </Text>
    </View>,
  ThematicBreak: ({style}) => <View style={style} />,
  Document: ({style, children}) =>
    <View style={style}>
      {children}
    </View>,
};

const defaultStyles = StyleSheet.create({
  Em: {
    fontStyle: 'italic',
  },
  Strong: {
    fontWeight: 'bold',
  },
  Link: {
    textDecorationLine: 'underline',
  },
  Image: {
    // sizing
  },
  Code: {
    fontFamily: 'monospace',
    fontSize: 14,
  },
  Paragraph: {
    marginTop: 16,
    marginBottom: 16,
  },
  BlockQuote: {
    padding: 8,
    borderLeftWidth: 2,
    borderLeftColor: 'grey',
  },
  Item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  List: {},
  Heading: {
    fontWeight: 'bold',
  },
  H1: {fontSize: 32},
  H2: {fontSize: 24},
  H3: {fontSize: 18.72},
  H4: {fontSize: 16},
  H5: {fontSize: 13.28},
  H6: {fontSize: 10.72},
  CodeBlock: {
    fontFamily: 'monospace',
    fontSize: 14,
  },
  ThematicBreak: {
    width: '100%',
    height: 1,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: '#cccccc',
  },
  Document: {
    margin: 8,
  },
});

const NativeMarkdown = props =>
  <Markdown
    {...props}
    components={mapValues(NativeComponents, (Component, name) => componentProps =>
      <Component
        {...componentProps}
        styles={{...defaultStyles, ...props.styles}}
        style={[defaultStyles[name], props.styles[name]]}
      />,
    )}
  />;

export default NativeMarkdown;

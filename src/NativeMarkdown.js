import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Image} from 'react-native';
import mapValues from 'lodash.mapvalues';
import shallowEqual from 'shallowequal';
import Markdown from './Markdown';

const createMarkdownElement = render =>
  class extends Component {
    static displayName = render.name;

    static contextTypes = {
      textStyle: PropTypes.array,
    };

    static childContextTypes = {
      textStyle: PropTypes.array,
    };

    getChildContext() {
      return {
        textStyle: [this.context.textStyle, this.props.textStyle],
      };
    }

    shouldComponentUpdate(nextProps) {
      const {styles, ...rest} = this.props;
      const {nextStyles, ...nextRest} = nextProps;
      return !shallowEqual(styles, nextStyles) || !shallowEqual(rest, nextRest);
    }

    render() {
      const {textStyle} = this.context;
      return render({...this.props, textStyle});
    }
  };

const LineBreak = ({style}) =>
  <Text style={style}>
    {'\n'}
  </Text>;

export const NativeComponents = mapValues(
  {
    Text: ({style, textStyle, children}) =>
      <Text style={[style, textStyle]}>
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
  },
  createMarkdownElement,
);

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

class NativeMarkdown extends Component {
  shouldComponentUpdate(nextProps) {
    const {styles, ...rest} = this.props;
    const {nextStyles, ...nextRest} = nextProps;
    return !shallowEqual(styles, nextStyles) || !shallowEqual(rest, nextRest);
  }

  components = mapValues(NativeComponents, (ElementComponent, name) => props =>
    <ElementComponent
      {...props}
      textStyle={[defaultStyles[name + 'Text'], this.props.styles[name + 'Text']]}
      styles={{...defaultStyles, ...this.props.styles}}
      style={[defaultStyles[name], this.props.styles[name]]}
    />,
  );

  render() {
    return <Markdown {...this.props} components={this.components} />;
  }
}

export default NativeMarkdown;

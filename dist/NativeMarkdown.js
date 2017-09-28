var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text as _Text, StyleSheet, Image as _Image } from 'react-native';
import mapValues from 'lodash.mapvalues';
import shallowEqual from 'shallowequal';
import Markdown from './Markdown';
import NativeLink from './NativeLink';

var createMarkdownElement = function createMarkdownElement(_render) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          textStyle: [this.context.textStyle, this.props.textStyle]
        };
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        var _props = this.props,
            styles = _props.styles,
            rest = _objectWithoutProperties(_props, ['styles']);

        var nextStyles = nextProps.nextStyles,
            nextRest = _objectWithoutProperties(nextProps, ['nextStyles']);

        return !shallowEqual(styles, nextStyles) || !shallowEqual(rest, nextRest);
      }
    }, {
      key: 'render',
      value: function render() {
        var textStyle = this.context.textStyle;

        return _render(Object.assign({}, this.props, { textStyle: textStyle }));
      }
    }]);

    return _class;
  }(Component), _class.displayName = _render.name, _class.contextTypes = {
    textStyle: PropTypes.array
  }, _class.childContextTypes = {
    textStyle: PropTypes.array
  }, _temp;
};

var LineBreak = function LineBreak(_ref) {
  var style = _ref.style;
  return React.createElement(
    _Text,
    { style: style },
    '\n'
  );
};

export var NativeComponents = mapValues({
  Text: function Text(_ref2) {
    var style = _ref2.style,
        textStyle = _ref2.textStyle,
        children = _ref2.children,
        numberOfLines = _ref2.numberOfLines;
    return React.createElement(
      _Text,
      { numberOfLines: numberOfLines, style: [style, textStyle] },
      children
    );
  },
  LineBreak: LineBreak,
  SoftBreak: LineBreak,
  Em: function Em(_ref3) {
    var style = _ref3.style,
        children = _ref3.children;
    return React.createElement(
      _Text,
      { style: style },
      children
    );
  },
  Strong: function Strong(_ref4) {
    var style = _ref4.style,
        children = _ref4.children;
    return React.createElement(
      _Text,
      { style: style },
      children
    );
  },
  Link: function Link(_ref5) {
    var style = _ref5.style,
        title = _ref5.title,
        destination = _ref5.destination,
        children = _ref5.children;
    return React.createElement(
      NativeLink,
      { style: style, title: title, destination: destination },
      children
    );
  },
  Image: function Image(_ref6) {
    var style = _ref6.style,
        title = _ref6.title,
        destination = _ref6.destination;
    return React.createElement(_Image, { style: style, source: { uri: destination } });
  }, // @TODO handle title
  Code: function Code(_ref7) {
    var style = _ref7.style,
        children = _ref7.children;
    return React.createElement(
      _Text,
      { style: style },
      children
    );
  },
  Paragraph: function Paragraph(_ref8) {
    var style = _ref8.style,
        numberOfLines = _ref8.numberOfLines,
        children = _ref8.children;
    return React.createElement(
      View,
      { style: style },
      React.createElement(
        _Text,
        { numberOfLines: numberOfLines },
        children
      )
    );
  },
  BlockQuote: function BlockQuote(_ref9) {
    var style = _ref9.style,
        children = _ref9.children;
    return React.createElement(
      View,
      { style: style },
      children
    );
  },
  Item: function Item(_ref10) {
    var style = _ref10.style,
        children = _ref10.children;
    return React.createElement(
      View,
      { style: style },
      React.createElement(
        _Text,
        null,
        ' \u2022 '
      ),
      children
    );
  },
  List: function List(_ref11) {
    var style = _ref11.style,
        children = _ref11.children,
        listType = _ref11.listType,
        listStart = _ref11.listStart;

    switch (listType) {
      case 'ordered':
        {
          return React.createElement(
            View,
            { style: style },
            children
          );
        }
      default:
        {
          return React.createElement(
            View,
            { style: style },
            children
          );
        }
    }
  },
  Heading: function Heading(_ref12) {
    var styles = _ref12.styles,
        style = _ref12.style,
        children = _ref12.children,
        level = _ref12.level;

    return React.createElement(
      View,
      null,
      React.createElement(
        _Text,
        { style: [style, styles['H' + level]] },
        children
      )
    );
  },
  CodeBlock: function CodeBlock(_ref13) {
    var style = _ref13.style,
        children = _ref13.children,
        info = _ref13.info;
    return React.createElement(
      View,
      null,
      React.createElement(
        _Text,
        { style: style },
        children
      )
    );
  },
  ThematicBreak: function ThematicBreak(_ref14) {
    var style = _ref14.style;
    return React.createElement(View, { style: style });
  },
  Document: function Document(_ref15) {
    var style = _ref15.style,
        children = _ref15.children;
    return React.createElement(
      View,
      { style: style },
      children
    );
  }
}, createMarkdownElement);

var defaultStyles = StyleSheet.create({
  Em: {
    fontStyle: 'italic'
  },
  Strong: {
    fontWeight: 'bold'
  },
  Link: {
    textDecorationLine: 'underline'
  },
  Image: {
    // sizing
  },
  Code: {
    // fontFamily: 'monospace',
    // fontSize: 14,
  },
  Paragraph: {
    marginTop: 16,
    marginBottom: 16
  },
  BlockQuote: {
    padding: 8,
    borderLeftWidth: 2,
    borderLeftColor: 'grey'
  },
  Item: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  List: {},
  Heading: {
    fontWeight: 'bold'
  },
  H1: { fontSize: 32 },
  H2: { fontSize: 24 },
  H3: { fontSize: 18.72 },
  H4: { fontSize: 16 },
  H5: { fontSize: 13.28 },
  H6: { fontSize: 10.72 },
  CodeBlock: {
    // fontFamily: 'monospace',
    // fontSize: 14,
  },
  ThematicBreak: {
    width: '100%',
    height: 1,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: '#cccccc'
  },
  Document: {
    margin: 8
  }
});

var NativeMarkdown = function (_Component2) {
  _inherits(NativeMarkdown, _Component2);

  function NativeMarkdown() {
    var _ref16;

    var _temp2, _this2, _ret;

    _classCallCheck(this, NativeMarkdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref16 = NativeMarkdown.__proto__ || Object.getPrototypeOf(NativeMarkdown)).call.apply(_ref16, [this].concat(args))), _this2), _this2.components = mapValues(NativeComponents, function (ElementComponent, name) {
      return function (elementProps) {
        var _this2$props = _this2.props,
            _this2$props$styles = _this2$props.styles,
            styles = _this2$props$styles === undefined ? {} : _this2$props$styles,
            numberOfLines = _this2$props.numberOfLines;

        return React.createElement(ElementComponent, Object.assign({}, elementProps, {
          textStyle: [defaultStyles[name + 'Text'], styles[name + 'Text'], ElementComponent === NativeComponents.Heading ? styles['H' + elementProps.level + 'Text'] : null],
          styles: Object.assign({}, defaultStyles, styles),
          style: [defaultStyles[name], styles[name]],
          numberOfLines: numberOfLines
        }));
      };
    }), _temp2), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(NativeMarkdown, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props2 = this.props,
          styles = _props2.styles,
          rest = _objectWithoutProperties(_props2, ['styles']);

      var nextStyles = nextProps.nextStyles,
          nextRest = _objectWithoutProperties(nextProps, ['nextStyles']);

      return !shallowEqual(styles, nextStyles) || !shallowEqual(rest, nextRest);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(Markdown, Object.assign({}, this.props, { components: this.components }));
    }
  }]);

  return NativeMarkdown;
}(Component);

export default NativeMarkdown;
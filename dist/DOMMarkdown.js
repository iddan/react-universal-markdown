var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Markdown from './Markdown';

var LineBreak = function LineBreak() {
  return React.createElement('br', null);
};

export var DOMComponents = {
  Text: function Text(_ref) {
    var children = _ref.children;
    return React.createElement(
      'span',
      null,
      children
    );
  },
  LineBreak: LineBreak,
  SoftBreak: LineBreak,
  Em: function Em(_ref2) {
    var children = _ref2.children;
    return React.createElement(
      'em',
      null,
      children
    );
  },
  Strong: function Strong(_ref3) {
    var children = _ref3.children;
    return React.createElement(
      'strong',
      null,
      children
    );
  },
  Link: function Link(_ref4) {
    var title = _ref4.title,
        destination = _ref4.destination,
        children = _ref4.children;
    return React.createElement(
      'a',
      { title: title, href: destination },
      children
    );
  },
  Image: function Image(_ref5) {
    var title = _ref5.title,
        destination = _ref5.destination,
        children = _ref5.children;

    var _children = _slicedToArray(children, 1),
        firstChild = _children[0];

    return React.createElement('img', { src: destination, alt: firstChild.props.children });
  },
  Code: function Code(_ref6) {
    var children = _ref6.children;
    return React.createElement(
      'code',
      null,
      children
    );
  },
  Paragraph: function Paragraph(_ref7) {
    var children = _ref7.children;
    return React.createElement(
      'p',
      null,
      children
    );
  },
  BlockQuote: function BlockQuote(_ref8) {
    var children = _ref8.children;
    return React.createElement(
      'blockquote',
      null,
      children
    );
  },
  Item: function Item(_ref9) {
    var children = _ref9.children;
    return React.createElement(
      'li',
      null,
      children
    );
  },
  List: function List(_ref10) {
    var children = _ref10.children,
        listType = _ref10.listType,
        listStart = _ref10.listStart;

    switch (listType) {
      case 'ordered':
        {
          return React.createElement(
            'ol',
            { start: listStart },
            children
          );
        }
      default:
        {
          return React.createElement(
            'ul',
            null,
            children
          );
        }
    }
  },
  Heading: function Heading(_ref11) {
    var children = _ref11.children,
        level = _ref11.level;

    var Heading = 'h' + level;
    return React.createElement(
      Heading,
      null,
      children
    );
  },
  CodeBlock: function CodeBlock(_ref12) {
    var children = _ref12.children,
        info = _ref12.info;
    return React.createElement(
      'pre',
      null,
      React.createElement(
        'code',
        null,
        children
      )
    );
  },
  ThematicBreak: function ThematicBreak() {
    return React.createElement('hr', null);
  },
  Document: function Document(_ref13) {
    var className = _ref13.className,
        children = _ref13.children;
    return React.createElement(
      'div',
      { className: className },
      children
    );
  }
};

var DOMMarkdown = function (_Component) {
  _inherits(DOMMarkdown, _Component);

  function DOMMarkdown() {
    var _ref14;

    var _temp, _this, _ret;

    _classCallCheck(this, DOMMarkdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref14 = DOMMarkdown.__proto__ || Object.getPrototypeOf(DOMMarkdown)).call.apply(_ref14, [this].concat(args))), _this), _this.Document = function (props) {
      return React.createElement(DOMComponents.Document, Object.assign({}, props, { className: _this.props.className }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DOMMarkdown, [{
    key: 'render',
    value: function render() {
      return React.createElement(Markdown, Object.assign({}, this.props, {
        components: Object.assign({}, DOMComponents, {
          Document: this.Document
        })
      }));
    }
  }]);

  return DOMMarkdown;
}(Component);

export default DOMMarkdown;
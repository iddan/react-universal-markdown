var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React, { Component } from 'react';
import { Parser } from 'commonmark';
import shallowEqual from 'shallowequal';
import { getChildren } from './util';
import COMPONENT_NAMES from './component-names';

var defaultCustomizer = function defaultCustomizer(render, children) {
  return children.map(render);
};

var _render = function _render(components) {
  var customizer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultCustomizer;
  var node = arguments[2];

  var NodeComponent = components[COMPONENT_NAMES[node.type]];
  var info = node.info,
      level = node.level,
      listType = node.listType,
      listStart = node.listStart,
      title = node.title,
      destination = node.destination;

  var children = [].concat(_toConsumableArray(getChildren(node)));
  return React.createElement(
    NodeComponent,
    { info: info, level: level, listType: listType, listStart: listStart, title: title, destination: destination },
    !children.length ? node.literal : customizer(function (child, i) {
      return React.cloneElement(_render(components, customizer, child), {
        key: i
      });
    }, children)
  );
};

var Markdown = function (_Component) {
  _inherits(Markdown, _Component);

  function Markdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Markdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call.apply(_ref, [this].concat(args))), _this), _this.parser = new Parser(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Markdown, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props = this.props,
          components = _props.components,
          rest = _objectWithoutProperties(_props, ['components']);

      var nextComponents = nextProps.components,
          nextRest = _objectWithoutProperties(nextProps, ['components']);

      return !shallowEqual(rest, nextRest) || !shallowEqual(components, nextComponents);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          components = _props2.components,
          customizer = _props2.customizer,
          children = _props2.children;

      return _render(components, customizer, this.parser.parse(children));
    }
  }]);

  return Markdown;
}(Component);

export default Markdown;
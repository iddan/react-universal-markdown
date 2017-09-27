import _regeneratorRuntime from 'babel-runtime/regenerator';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, Linking } from 'react-native';

var NativeLink = function (_PureComponent) {
  _inherits(NativeLink, _PureComponent);

  function NativeLink() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, NativeLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NativeLink.__proto__ || Object.getPrototypeOf(NativeLink)).call.apply(_ref, [this].concat(args))), _this), _this.onPress = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
      var destination, canOpen;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              destination = _this.props.destination;
              _context.next = 3;
              return Linking.canOpenURL(destination);

            case 3:
              canOpen = _context.sent;

              if (!canOpen) {
                _context.next = 9;
                break;
              }

              _context.next = 7;
              return Linking.openURL(destination);

            case 7:
              _context.next = 10;
              break;

            case 9:
              console.warn('URL "' + destination + '" can not be opened.\n        If you\'re running on iOS - double check if scheme is allowed https://facebook.github.io/react-native/docs/linking.html#canopenurl');

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NativeLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          title = _props.title,
          children = _props.children;

      return React.createElement(
        Text,
        { style: style, onPress: this.onPress },
        children
      );
    }
  }]);

  return NativeLink;
}(PureComponent);

NativeLink.propTypes = {
  title: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired
};


export default NativeLink;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('../../css/tab.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 内容组件
var Tab = function (_Component) {
	_inherits(Tab, _Component);

	function Tab() {
		_classCallCheck(this, Tab);

		return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
	}

	_createClass(Tab, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'tabCon' },
				this.props.children
			);
		}
	}]);

	return Tab;
}(_react.Component);

var TabControl = function (_Component2) {
	_inherits(TabControl, _Component2);

	function TabControl(props) {
		_classCallCheck(this, TabControl);

		var _this2 = _possibleConstructorReturn(this, (TabControl.__proto__ || Object.getPrototypeOf(TabControl)).call(this, props));

		_this2.state = {
			currentIndex: 0
		};
		return _this2;
	}

	_createClass(TabControl, [{
		key: 'tabChangeClick',
		value: function tabChangeClick() {
			this.setState({ currentIndex: index });
		}
	}, {
		key: 'getItemIndex',
		value: function getItemIndex(index) {
			return index == this.state.currentIndex ? 'tabText active' : 'tabText';
		}
	}, {
		key: 'getItemConIndex',
		value: function getItemConIndex(index) {
			return index == this.state.currentIndex ? 'tabCon1 active' : 'tabCon1';
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var len = this.props.children.length;
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'nav',
					{ className: 'navBox' },
					_react2.default.createElement(
						'ul',
						{ className: 'clearfix' },
						_react2.default.Children.map(this.props.children, function (el, index) {
							return _react2.default.createElement(
								'li',
								{ className: 'navTab', 'data-len': len, onClick: function onClick() {
										_this3.setState({ currentIndex: index });
									} },
								_react2.default.createElement(
									'span',
									{ className: _this3.getItemIndex(index) },
									el.props.name
								)
							);
						})
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'conList' },
					_react2.default.Children.map(this.props.children, function (el, index) {
						return _react2.default.createElement(
							'div',
							{ className: _this3.getItemConIndex(index) },
							el
						);
					})
				)
			);
		}
	}]);

	return TabControl;
}(_react.Component);

var TabBox = function (_Component3) {
	_inherits(TabBox, _Component3);

	function TabBox(props) {
		_classCallCheck(this, TabBox);

		return _possibleConstructorReturn(this, (TabBox.__proto__ || Object.getPrototypeOf(TabBox)).call(this, props));
	}

	_createClass(TabBox, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					TabControl,
					null,
					_react2.default.createElement(
						Tab,
						{ name: 'first' },
						_react2.default.createElement(
							'div',
							null,
							'first'
						)
					),
					_react2.default.createElement(
						Tab,
						{ name: 'second' },
						_react2.default.createElement(
							'div',
							null,
							'second'
						)
					),
					_react2.default.createElement(
						Tab,
						{ name: 'third' },
						_react2.default.createElement(
							'div',
							null,
							'third'
						)
					)
				)
			);
		}
	}]);

	return TabBox;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(TabBox, null), document.querySelector('#root'));
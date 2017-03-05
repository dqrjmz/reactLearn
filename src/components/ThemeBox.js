'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ThemeBox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('../../css/index');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _platform = require('../lib/platform');

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * react 组件开发页面
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 组件划分
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 1.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 2.数据列表组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// 列表组件
var ThemeList = function (_React$Component) {
    _inherits(ThemeList, _React$Component);

    function ThemeList(porps) {
        _classCallCheck(this, ThemeList);

        var _this = _possibleConstructorReturn(this, (ThemeList.__proto__ || Object.getPrototypeOf(ThemeList)).call(this, porps));

        _this.state = {
            data: []
        };

        _this.loadAajxData = _this.loadAajxData.bind(_this);
        _this.render = _this.render.bind(_this);
        return _this;
    }

    // 当组件插入DOM后发送ajax获取数据，异步的实现方式【好多种】


    _createClass(ThemeList, [{
        key: 'loadAajxData',
        value: function loadAajxData() {
            var that = this;
            _jquery2.default.ajax({
                url: '../data/data.json',
                dataType: 'json',
                type: 'get',
                data: {},
                asnyc: true,
                success: function success(data) {
                    that.setState({ data: data });
                }
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadAajxData();
        }
    }, {
        key: 'render',
        value: function render() {
            var liList = this.state.data.map(function (el) {
                return _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { className: 'track-router-list', 'data-lineid': el.LineId },
                        _react2.default.createElement(
                            'span',
                            { className: 'place-name' },
                            el.CityName
                        ),
                        _react2.default.createElement('img', { src: el.ImageUrl.replace('http:', ''), alt: '' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'place-info limit-text-length' },
                            el.MainTitle
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'place-price' },
                            '\xA5',
                            _react2.default.createElement(
                                'b',
                                null,
                                el.PlatformPrice[0].AmountDirect
                            ),
                            '\u8D77',
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement(
                                    'i',
                                    { className: 'day' },
                                    el.Days
                                ),
                                '\u5929',
                                _react2.default.createElement(
                                    'i',
                                    { className: 'night' },
                                    el.Days - 1
                                ),
                                '\u665A'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'place-act' },
                            '\u9A6C\u4E0A\u62A2\u8D2D',
                            _react2.default.createElement('b', null)
                        )
                    )
                );
            });
            return _react2.default.createElement(
                'ul',
                { className: 'clearfix' },
                liList
            );
        }
    }]);

    return ThemeList;
}(_react2.default.Component);

// 列表容器组件


var ThemeBox = function (_React$Component2) {
    _inherits(ThemeBox, _React$Component2);

    function ThemeBox(porps) {
        _classCallCheck(this, ThemeBox);

        var _this2 = _possibleConstructorReturn(this, (ThemeBox.__proto__ || Object.getPrototypeOf(ThemeBox)).call(this, porps));

        _this2.state = {};
        return _this2;
    }

    _createClass(ThemeBox, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'theme same' },
                _react2.default.createElement(
                    'div',
                    { className: 'same' },
                    _react2.default.createElement(ThemeList, null)
                )
            );
        }
    }]);

    return ThemeBox;
}(_react2.default.Component);

exports.ThemeBox = ThemeBox;
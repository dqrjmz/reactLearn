'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CommentBox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _remarkable = require('remarkable');

var _remarkable2 = _interopRequireDefault(_remarkable);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 评论组件，mark语法
var Comment = function (_React$Component) {
	_inherits(Comment, _React$Component);

	function Comment(props) {
		_classCallCheck(this, Comment);

		var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, props));

		_this.render = _this.render.bind(_this);
		_this.rawMarkup = _this.rawMarkup.bind(_this);
		return _this;
	}

	_createClass(Comment, [{
		key: 'rawMarkup',
		value: function rawMarkup() {
			var md = new _remarkable2.default(),
			    rawMarkup = md.render(this.props.children.toString());
			return { __html: rawMarkup };
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'comment' },
				_react2.default.createElement(
					'h4',
					{ className: 'commentAuthor' },
					this.props.author,
					'\u8BF4\uFF1A',
					_react2.default.createElement('span', { dangerouslySetInnerHTML: this.rawMarkup })
				)
			);
		}
	}]);

	return Comment;
}(_react2.default.Component);

// 评论框组件


var CommentBox = function (_React$Component2) {
	_inherits(CommentBox, _React$Component2);

	function CommentBox(props) {
		_classCallCheck(this, CommentBox);

		var _this2 = _possibleConstructorReturn(this, (CommentBox.__proto__ || Object.getPrototypeOf(CommentBox)).call(this, props));

		_this2.state = {
			data: []
		};

		_this2.loadCommentsFromServer = _this2.loadCommentsFromServer.bind(_this2);

		_this2.handleCommentSubmit = _this2.handleCommentSubmit.bind(_this2);
		_this2.componentWillMount = _this2.componentWillMount.bind(_this2);
		_this2.render = _this2.render.bind(_this2);
		return _this2;
	}

	_createClass(CommentBox, [{
		key: 'loadCommentsFromServer',
		value: function loadCommentsFromServer() {
			var that = this;
			_jquery2.default.ajax({
				url: that.props.url,
				dataType: 'json',
				type: 'get',
				cache: false,
				success: function success(data) {
					console.log(data + '数据');
					that.setState({ data: data });
				},
				error: function error(xhr, status, err) {
					console.log(that.props.url, status, err.toString());
				}
			});
		}
	}, {
		key: 'handleCommentSubmit',
		value: function handleCommentSubmit(comment) {
			var that = this;
			var comments = this.state.data,
			    newComments = comments.concat([comment]);
			this.setState({ data: newComments });

			_jquery2.default.ajax({
				url: that.props.url,
				dataType: 'json',
				type: 'get',
				data: comment,
				success: function success(data) {
					that.setState({ data: data });
				},
				error: function error(xhr, status, err) {
					that.setState({ data: comments });
					console.error(that.props.url, status, err.toString());
				}
			});
		}
		// 组件初始化属性，状态方法等
		// getInitialState(){
		// 	return {data:[]}
		// }
		// 组件插入dom后

	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.loadCommentsFromServer();
			// setInterval(this.loadCommentsFromServer,this.props.pollInterval);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'commentBox' },
				_react2.default.createElement(
					'h1',
					null,
					'comments'
				),
				_react2.default.createElement(CommentList, { data: this.state.data }),
				_react2.default.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
			);
		}
	}]);

	return CommentBox;
}(_react2.default.Component);

// 评论列表组件


var CommentList = function (_React$Component3) {
	_inherits(CommentList, _React$Component3);

	function CommentList(props) {
		_classCallCheck(this, CommentList);

		var _this3 = _possibleConstructorReturn(this, (CommentList.__proto__ || Object.getPrototypeOf(CommentList)).call(this, props));

		_this3.render = _this3.render.bind(_this3);
		return _this3;
	}

	_createClass(CommentList, [{
		key: 'render',
		value: function render() {
			var commentNodes = this.props.data.map(function (el) {
				return _react2.default.createElement(
					Comment,
					{ author: el.author, key: el.id },
					el.text
				);
			});

			return _react2.default.createElement(
				'div',
				{ className: 'commentList' },
				commentNodes
			);
		}
	}]);

	return CommentList;
}(_react2.default.Component);

// 表单框


var CommentForm = function (_React$Component4) {
	_inherits(CommentForm, _React$Component4);

	function CommentForm(props) {
		_classCallCheck(this, CommentForm);

		var _this4 = _possibleConstructorReturn(this, (CommentForm.__proto__ || Object.getPrototypeOf(CommentForm)).call(this, props));

		_this4.state = {
			author: '',
			text: ''
		};

		_this4.handleAuthorChange = _this4.handleAuthorChange.bind(_this4);
		_this4.handleTextChange = _this4.handleTextChange.bind(_this4);
		_this4.handleSubmit = _this4.handleSubmit.bind(_this4);
		_this4.render = _this4.render.bind(_this4);
		return _this4;
	}

	_createClass(CommentForm, [{
		key: 'handleAuthorChange',
		value: function handleAuthorChange(e) {
			this.setState({ author: e.target.value });
		}
	}, {
		key: 'handleTextChange',
		value: function handleTextChange(e) {
			this.setState({ text: e.target.value });
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault(); //阻止默认事件
			var author = this.state.author.trim(),
			    text = this.state.text.trim();
			if (!text || !author) {
				return;
			}
			this.props.onCommentSubmit({ author: author, text: text });
			this.setState({ author: '', text: '' });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				{ className: 'commentForm', onSubmit: this.handleSubmit },
				_react2.default.createElement('input', { type: 'text', placeholder: '\u5185\u5BB9', value: this.state.author, onChange: this.handleAuthorChange }),
				_react2.default.createElement('input', { type: 'text', placeholder: '\u6635\u79F0', value: this.state.text, onChange: this.handleTextChange }),
				_react2.default.createElement('input', { type: 'submit', value: '\u63D0\u4EA4\u8BC4\u8BBA' })
			);
		}
	}]);

	return CommentForm;
}(_react2.default.Component);

exports.CommentBox = CommentBox;
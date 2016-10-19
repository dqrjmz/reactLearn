import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import $ from 'jquery';

// 评论组件，mark语法
class Comment extends React.Component{
	constructor(props){
		super(props);

		this.render=this.render.bind(this);
		this.rawMarkup=this.rawMarkup.bind(this);
	}
	rawMarkup(){
		let md=new Remarkable(),
				rawMarkup=md.render(this.props.children.toString());
				return {__html:rawMarkup};
	}
	render(){
		return(
			<div className="comment">
				<h4 className="commentAuthor">
					{this.props.author}说：<span dangerouslySetInnerHTML={this.rawMarkup}></span>
				</h4>
			</div>
			)
	}
}

// 评论框组件
class CommentBox extends React.Component{

	constructor(props){
		super(props);
		this.state={
			data:[]
		}

		this.loadCommentsFromServer=this.loadCommentsFromServer.bind(this);

		this.handleCommentSubmit=this.handleCommentSubmit.bind(this);
		this.componentWillMount=this.componentWillMount.bind(this);
		this.render=this.render.bind(this);
	}

	loadCommentsFromServer(){
		let that=this;
		$.ajax({
			url:that.props.url,
			dataType:'json',
			type:'get',
			cache:false,
			success(data){
				console.log(data+'数据');
				that.setState({data});
			},
			error(xhr,status,err){
				console.log(that.props.url,status,err.toString());
			}
		});
	}
	handleCommentSubmit(comment){
		let that=this;
		let comments=this.state.data,
				newComments=comments.concat([comment]);
			this.setState({data:newComments});

			$.ajax({
				url:that.props.url,
				dataType:'json',
				type:'get',
				data:comment,
				success(data){
					that.setState({data});
				},
				error(xhr,status,err){
					that.setState({data:comments});
					console.error(that.props.url,status,err.toString());
				}
			});
	}
	// 组件初始化属性，状态方法等
	// getInitialState(){
	// 	return {data:[]}
	// }
	// 组件插入dom后
	componentWillMount(){
		this.loadCommentsFromServer();
		// setInterval(this.loadCommentsFromServer,this.props.pollInterval);
	}
	render(){
		return(
				<div className="commentBox">
					<h1>comments</h1>
					<CommentList data={this.state.data} />
					<CommentForm onCommentSubmit={this.handleCommentSubmit} />
				</div>
			);
	}
}

// 评论列表组件
class CommentList extends React.Component{
	constructor(props){
		super(props);
		this.render=this.render.bind(this);
	}
	render(){
		let commentNodes=this.props.data.map((el)=>{
			return (
				<Comment author={el.author} key={el.id}>
					{el.text}
				</Comment>
				);
		});

		return (
			<div className="commentList">
				{commentNodes}
			</div>
			);
	}
}

// 表单框
class CommentForm extends React.Component{
	constructor(props){
		super(props);

		this.state={
			author:'',
			text:''
		}

		this.handleAuthorChange=this.handleAuthorChange.bind(this);
		this.handleTextChange=this.handleTextChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.render=this.render.bind(this);
	}
	
	handleAuthorChange(e){
		this.setState({author:e.target.value});
	}
	handleTextChange(e){
		this.setState({text:e.target.value});
	}
	handleSubmit(e){
		e.preventDefault();  //阻止默认事件
		let author=this.state.author.trim(),text=this.state.text.trim();
		if(!text || !author){
			return;
		}
		this.props.onCommentSubmit({author,text});
		this.setState({author:'',text:''});
	}
	render(){
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="内容" value={this.state.author} onChange={this.handleAuthorChange}	/>
				<input type="text" placeholder="昵称" value={this.state.text} onChange={this.handleTextChange} />
				<input type="submit" value="提交评论" />
			</form>
			);
	}
}


export {CommentBox};
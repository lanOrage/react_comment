import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class CommentAdd extends Component{
    static propTypes ={
        addComment:PropTypes.func.isRequired
    };
    state = {
      username:"",
      content:""
    };
    handleSubmit = ()=>{
        //收集数据并封装成comment对象
        const comment = this.state;
        //更新状态
        this.props.addComment(comment);
        //数据在哪个组件，更新数据的行为就应该在定义在那个组件！！！！
        //然后接着就是清除输入数据
        this.setState({
            username:"",
            content:""
        })
    };
    handleUsernameChange = (event)=>{
       const username = event.target.value;
       this.setState({username});
    };
    handleContentChange = (event)=>{
        const content = event.target.value;
        this.setState({content});
    };
    render(){
        const {username,content}=this.state;
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" value={username}
                        onChange={this.handleUsernameChange}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" value={content}
                        onChange={this.handleContentChange}/>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

//关于收集输入数据方法二：非受控组件利用refs
/*
* 那么在addComment方法里头可以这样：
在input标签中写上属性：ref="username"

* /*addComment=()=>{
    //收集输入数据，封装comment对象
    const username=this.refs.username.value;
    const content=this.refs.content.value;
    const  comment={
        id:Date.now(),//为了保证id绝对不重复
        username,
        content
    }
    //向comments添加comment
    this.props.addComment(comment)
}*/


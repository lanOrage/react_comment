import React, {Component} from 'react';
import CommentAdd from '../comment-add/comment-add';
import CommentList from '../comment-list/comment-list';

import PubSub from 'pubsub-js'

export default class App extends Component{
    state={
        comments:[
            {username:"一颗星两颗星满天星",content:"林彦俊好帅啊~~！！"},
            {username:"一颗星两颗星满天小橘",content:"林彦俊真是好有趣一男的~~呜呜！"},
            {username:"船帆里的小鱼",content:"哥哥快出来嘛~~！！"},
            {username:"林彦俊的小宝贝",content:"林彦俊再不出来踩你鞋！"},
            {username:"不知道说什么",content:"你在哪！！"},
            {username:"努力学习的兰阿皮",content:"宝贝，等我~"}
        ]
    };
    addComment = (comment) =>{//我要添加comment，所以这里当然要传递参数
        //获取状态内容
        const {comments}=this.state;
        //修改状态
        comments.unshift(comment);
        //更新状态
        this.setState({comments});
    };
    componentDidMount() {
        //订阅消息，订阅消息也是绑定监听，应该也是在一开始就要绑定的
        PubSub.subscribe("deleteComment",(msg,index)=>{
            this.deleteComment(index);
        });
    }
    deleteComment = (index) =>{//我要删除comment，所以这里当然要传递索引比较好删除
        //获取状态内容
        const {comments}=this.state;
        //修改状态
        comments.splice(index,1);
        //更新状态
        this.setState({comments});
    };
    render(){
        //像这样的状态最好是先提前定义：
        const {comments}=this.state;
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h2>请发表对林彦俊的评论</h2>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={comments} />
                </div>
                </div>
        )
    }
}

//实现动态显示数据：
// 1、先定义状态
//2、状态定义完了以后，那就要给需要显示状态的组件传递状态的参数
//3、这样之后，就是那个模块组件的事情了，
//4、同理，我定义一个函数，我哪个组件需要我这个函数我就把函数传递给它，但是记得声明属性，有属性才能传

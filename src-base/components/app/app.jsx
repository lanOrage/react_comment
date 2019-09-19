import React, {Component} from 'react';
import CommentAdd from '../comment-add/comment-add';
import CommentList from '../comment-list/comment-list';

export default class App extends Component{
    state={
        comments:[
        {username:"小明",content:"react太难了！！"},
        {username:"大花",content:"react真是不简单！"}
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
    deleteComment = (index) =>{//我要删除comment，所以这里当然要传递索引比较好删除
        //获取状态内容
        const {comments}=this.state;
        //修改状态
        comments.splice(index,1);
        //方式2：用过滤器来筛选删除的评论
        /*this.setState({
            comments:comments.filter((c,i)=>i!=index)
        })*/
        //方式3：使用reduce方法来累计&筛选评论
        this.setState({
            comments:comments.reduce((pre,comment,i)=>{
                if(i!=index){
                    pre.push(comment)
                }
                return pre
            },[])//【】这里一开始就是空的
        })



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
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={comments} deleteComment={this.deleteComment}/>
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

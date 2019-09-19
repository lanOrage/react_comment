import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addComment,deleteComment} from '../../redux/actions'
import CommentAdd from '../../components/comment-add/comment-add';
import CommentList from '../../components/comment-list/comment-list';

class App extends Component{
    static  propTypes={
        comments:PropTypes.array.isRequired,
        addComment:PropTypes.func.isRequired,
        deleteComment:PropTypes.func.isRequired
    };
    componentDidMount() {

    }
    render(){
        //像这样的状态最好是先提前定义：
        const {comments,addComment,deleteComment}=this.props;
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
                    <CommentAdd addComment={addComment}/>
                    <CommentList comments={comments} deleteComment={deleteComment}/>
                </div>
            </div>
        )
    }
}

export  default  connect(
    state=>({comments: state}),//state就是一个comments数组
    {addComment,deleteComment}
)(App)
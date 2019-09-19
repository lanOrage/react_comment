import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './commentItem.css'

export default class CommentItem extends Component{
    static propTypes={
        comment:PropTypes.object.isRequired,
        index:PropTypes.number.isRequired,
        deleteComment:PropTypes.func.isRequired
    };
    deleteItem = (event)=>{
        const {comment,deleteComment,index}=this.props;
        //提示是否确认删除
        if(window.confirm(`确认删除${comment.uername}的评论吗？`)){
            deleteComment(index);
        }
    };
    render(){
        const {comment}=this.props;

        return (
            <li className={"list-group-item"}>
                <div className={"handle"}>
                    <a href="#" onClick={this.deleteItem}>删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}
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
        const {comment,index}=this.props;
        //提示是否确认删除
        if(window.confirm(`确认删除${comment.username}的评论吗？`)){
            this.props.deleteComment(index);
        }
    };
    render(){
        const {comment}=this.props;
        return (
                <li className="list-group-item">
                    <div className="handle">
                        <a  className="btn btn-sm btn-primary" href="#" onClick={this.deleteItem}>删除</a>
                    </div>
                    <p className="user"> <span className="glyphicon glyphicon-user" style={{"fontSize":15}}></span> {comment.username}说</p>
                   <p>{comment.content}</p>
                </li>
        )
    }
}
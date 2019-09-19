import React, {Component} from 'react';
import PropTypes from 'prop-types'
import CommentItem from '../comment-item/comment-item';
import './commentList.css'
/*
4、刚才从主App组件传来的参数，我们这个模块组件在接收参数之前
首先要先声明要接收的数据类型，这样以后我们才可以安心收值。
*
* */
export default class CommentList extends Component{
    static propTypes={
        comments:PropTypes.array.isRequired,
    };//这样写要注意依然是给组件对象添加属性，而不是给类！！！
    //而我们需要的则是给组件类添加属性，所以这里我们要加上一个static！！！

    render(){
        const {comments}=this.props;//不管怎么样先把组件需要的东西先取出来
        const display = comments.length===0 ? 'block':'none';
        return (
            <div className=" col-md-8 navbar-right panel">
                <h2 className="panel-heading">评论回复：</h2>
                <h4 style={{display}}>暂无评论，点击左侧添加评论！！！</h4>
                <ul className="ul-right  list-group row  .col-md-8">
                    {/*<CommentItem/>*/}
                    {
                        comments.map((comment,index)=><CommentItem comment={comment} key={index} index={index}/>)
                        //这里的key里头li是用不到了，只能父亲自己知道，里头看不见key属性
                        //注意这里的comment一定要传，这是作为item的属性。
                        //以及数组中的标签必须要有key
                    } 
                </ul>
            </div>
        )
    }
}
/*
比较麻烦，简单一点的方式是在类里面写。
CommentList.propTypes={
    comments:PropTypes.array.isRequired,
};*/

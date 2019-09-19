// 包含了所有的action creator（action的工厂函数）
import {ADD_COMMENT,DELETE_COMMENT} from './action-types';
//增加评论
export  const  addComment = (comment)=>({type:ADD_COMMENT,data:comment});
//删除评论
export  const  deleteComment = (index)=>({type:DELETE_COMMENT,data:index});

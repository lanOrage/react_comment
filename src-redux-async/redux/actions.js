// 包含了所有的action creator（action的工厂函数）
import {ADD_COMMENT,DELETE_COMMENT,REQUIRE_COMMENTS} from './action-types';
//增加评论
export  const  addComment = (comment)=>({type:ADD_COMMENT,data:comment});
//删除评论
export  const  deleteComment = (index)=>({type:DELETE_COMMENT,data:index});
//来一个我们的异步获取评论列表
const  requireComments = (comments)=>({type:REQUIRE_COMMENTS,data:comments});

export const  getComments = ()=>{
    return dispatch=> {
        //模拟一下异步获取后台评论列表信息
        setTimeout(() => {
            const comments = [
                {username:"一颗星两颗星满天星",content:"林彦俊好帅啊~~！！"},
                {username:"一颗星两颗星满天小橘",content:"林彦俊真是好有趣一男的~~呜呜！"},
                {username:"船帆里的小鱼",content:"哥哥快出来嘛~~！！"},
                {username:"林彦俊的小宝贝",content:"林彦俊再不出来踩你鞋！"},
                {username:"不知道说什么",content:"你在哪！！"},
                {username:"努力学习的兰阿皮",content:"宝贝，等我~"}
            ];
            dispatch(requireComments(comments));//分发一个action，触发reducer函数，更新状态
        }, 1000);
    }
};

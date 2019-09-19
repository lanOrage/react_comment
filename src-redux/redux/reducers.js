// 包含n个reducer函数，根据老的state和action返回一个新的state
import {ADD_COMMENT,DELETE_COMMENT} from './action-types'
const initComment=[
    {username:"一颗星两颗星满天星",content:"林彦俊好帅啊~~！！"},
    {username:"一颗星两颗星满天小橘",content:"林彦俊真是好有趣一男的~~呜呜！"},
    {username:"船帆里的小鱼",content:"哥哥快出来嘛~~！！"},
    {username:"林彦俊的小宝贝",content:"林彦俊再不出来踩你鞋！"},
    {username:"不知道说什么",content:"你在哪！！"},
    {username:"努力学习的兰阿皮",content:"宝贝，等我~"}
];
export  function comments(state=initComment,action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state];
        case DELETE_COMMENT:
            return state.filter((comment,index)=>index!==action.data);
        default :
            return state;
    }
}
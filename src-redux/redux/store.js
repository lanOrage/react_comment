// redux最核心的管理对象store
//基本固定的写法
import {createStore,applyMiddleware} from 'redux';
import  {comments} from './reducers';
import thunk from 'redux-thunk';//用来操作异步处理的情况时，需要用上

export default createStore(comments);
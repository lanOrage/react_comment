// redux最核心的管理对象store
//基本固定的写法
import {createStore,applyMiddleware} from 'redux';
import  {comments} from './reducers';
import thunk from 'redux-thunk';

export default createStore(comments,applyMiddleware(thunk));
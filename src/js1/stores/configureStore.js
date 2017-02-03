import {createStore} from 'redux';
import rootReducer from '../reducers';
export default function configureStore(initialState){
    /**
     * @param rootReducer reducer纯函数
     * @param initialState 初始化的state
     */
    const store=createStore(rootReducer,initialState);
    
    return store;
}
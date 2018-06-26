// import {query} from '../services/nodes';
export default {

  namespace: 'overall',

  state: {
    user:{
     name:'user'
    }
  },
  //异步处理函数
  effects: {
    * getUserList({payload}, { call, put }) {
      // const response = yield call(query);//这部分是可以直接请求接口进行赋值
      yield put({
        type: 'update',
        payload: payload
      });
    }
  },
  //同步处理函数
  reducers: {
    update( state, action ) {
      return { ...state, user: action.payload};
    }
  },

};

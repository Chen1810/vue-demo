import axios from 'axios';

import * as types from './types';

let actions={
  [types.VIEW_LOADING]:({commit,state},payload)=>{
    commit(types.VIEW_LOADING,payload)
  },
  [types.VIEW_NAV]:({commit,state},payload)=>{
    commit(types.VIEW_NAV,payload)
  },
  [types.VIEW_FOOT]:({commit,state},payload)=>{
    commit(types.VIEW_FOOT,payload)
  },
  [types.CHECK_USER]:({commit,state},payload)=>{
    // payload 对象 payload.username | payload.password | payload.type
    return axios({
      url:'/data/user.json',
      params:{username:payload.username,password:payload.password}
    }).then(
      res=>{
        commit({type:types.CHECK_USER,user:res.data})
        return res.data.data
      }
    )
  },
};
export default actions;
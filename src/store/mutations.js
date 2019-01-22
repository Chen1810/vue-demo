import { VIEW_LOADING,VIEW_FOOT,VIEW_NAV,CHECK_USER} from './types'

let mutations={ 

  [VIEW_LOADING]:(state,payload)=>{
    state.bLoading = payload//突变
  },
  [VIEW_FOOT]:(state,payload)=>{
    state.bFoot = payload//突变
  },
  [VIEW_NAV]:(state,payload)=>{
    state.bNav= payload//突变
  },
  [CHECK_USER]:(state,payload)=>{
    state.user= payload.user
  },

};
export default mutations;

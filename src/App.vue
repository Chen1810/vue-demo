<template>
    <div id="app">
      <transition
      enter-active-class="animated fadeIn"
    >
      <router-view></router-view>
    </transition>
      <loading v-show="bLoading"></loading>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import loading from './components/loading/loading'
import * as types from './store/types'


export default {
  components:{
    loading
  },
  mounted(){
    // console.log('axios',this.$http)
  },
  computed:mapGetters([
    'bLoading'
  ]),
  watch:{
    $route:{//路由监听
      handler:function(to){
        let path = to.path;
        if(/home|follow|column/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,true);
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
        if(/detail|login|reg/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_FOOT,false);
        }
        if(/user/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
      },
      immediate:true
    }
  }
}
</script>

<style>

</style>



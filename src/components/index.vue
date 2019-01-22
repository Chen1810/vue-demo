<template>
    <div id="index">
        <!--html5 nav-->

        <loading v-show="$root.bLoading"></loading>

        <nav class="j-nav navbar index-nav">
          <div class="logo fl">
        <a href="javascript:void(0);"></a>
      </div>
      <div class="city">
        <a id="showSiteBtn" href="javascript:;" target="_self">广州</a>
        <input id="switchGPS" name="switchGPS" type="hidden">
      </div>
      </nav>
      <!--a1轮播图-->
      <div data-am-widget="slider" class="am-slider am-slider-a1" data-am-slider='{"directionNav":false}' >
        <ul class="am-slides cl">
            <li>
              <img src="../assets/images/j-banner02.jpg">
            </li>
            <li>
              <img src="../assets/images/j-banner04.jpg">
            </li>
        </ul>
      </div>
      <div class="j-hint">仅20元起送，24小时内极速达</div>
      <!--导航-->
      <div class="j-component-func" id="m-banner">
          <ul class="list-unstyled" id="categoryMenu">
              <li class="route1 "><router-link to="/register"><span class="glyphicon fdayicon fdayicon-all"></span>新用户</router-link></li>
              <li class="route2 "><router-link to="/meal"><span class="glyphicon fdayicon fdayicon-order"></span>套餐</router-link></li>
              <li class="route3 "><router-link to="/invite"><span class="glyphicon fdayicon fdayicon-contact"></span>邀请红包</router-link></li>
              <li class="route4 "><router-link to="#"><span class="glyphicon fdayicon fdayicon-client"></span>企业团购</router-link></li>
          </ul>
      </div>
      <!--内容-->
      <div class="j-component-bestsell">
        <ul class="list-unstyled">
              <li><a href="javascript:void(0);"><img class="lazy" src="../assets/images/j-c03.jpg"></a></li>
          </ul>
      </div>

      <div id="tuan" class="tuan">
          <div class="tuan_g" data-vtuan="0" data-cat="1" data-num="12058">
              <i></i>
              <router-link to="/detail">
                  <div class="tuan_g_img">
                      <div class="tally_box">
                          <p>3人团</p>
                          <p>2.5折</p>
                      </div>
                      <img src="../assets/images/j-c01.jpg">
                  </div>
                  <div class="tuan_g_info">
                      <p class="tuan_g_name">越南进口火龙果（2粒）【直降2.80元】 </p>
                      <p style="display: black;" class="tuan_g_cx">
                          外皮红艳张扬，果肉绵软白嫩，汁液丰富，富含维生素C，丰富的水溶性膳食纤维，前者美白皮肤，后者有助减肥，降血糖，润肠，预防肠癌，美容瘦身。
                      </p>
                  </div>
                  
                  <div class="tuan_g_core">
                      <div id="triangle-right"></div>
                      <div class="tuan_g_price">
                          <span>3人团只需</span>
                          <b>¥14.00</b>
                      </div>
                      <div class="tuan_g_btn">我要拼</div>
                  </div>
                  <div class="tuan_g_yj"><s>原价:￥16.80</s></div>
              </router-link>
          </div>
      </div>

      <myorder :list="list" dataName="home"></myorder>

      <!--footer begin-->
      <footer class="footer">
          <nav>
              <ul>
                  <li><a href="javascript:void(0);" class="nav-controller active"><div class="fb-home"></div>首页</a></li>
                  <li><router-link to="/groups" class="nav-controller"><div class="fb-group"></div>我的拼团</router-link></li>
                  <li><router-link to="/myorder" class="nav-controller"><div class="fb-list"></div>我的订单</router-link></li>
                  <li><router-link to="/user" class="nav-controller"><div class="fb-user"></div>个人中心</router-link></li>
              </ul>
          </nav>
      </footer>

      <router-view></router-view>
      <!--footer end-->
    </div>
</template>

<script>

import myorder from './myorder'
import loading from './loading/loading'

let top = 0;

export default {
  components:{
      loading,myorder
  },
  data(){
      return{
          list:[],
      }
  },
  mounted(){
    // axios()
    // this.$root.bLoading = true;
    this.$http({
        url:'/data/index.data',
        // url:'http://localhost:3000/index',
        // parmas:{start:0,count:3}
    }).then(
        (res)=>{
            // loading仅执行一次 mounted挂载一次
            // setTimeout(()=>{
                // this.$root.bLoading = false;
                this.list = res.data;
                console.log('res',res.data);
            //   },2000)
        }
    )
  },
  updated(){
    document.documentElement.scrollTop = top
    console.log('updated',top)
  },
  destroyed(){
        top = document.documentElement.scrollTop
        console.log('destroyed',top)
  },

}
</script>


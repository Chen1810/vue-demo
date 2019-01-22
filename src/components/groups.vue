<template>
    <div id="user-b">
        <!--html5 nav-->
        <nav class="j-nav navbar">
            <div class="logo fl">
                <router-link to="/index"></router-link>
            </div>
            <span class="user-title">我的拼团</span>
            <div class="shopping-cart fr">
                <router-link to="/index"></router-link>
            </div>
        </nav>
        <div class="groups-box">
            <!-- 我的拼团列表 -->
            <div class="groups-m mc-sum-box">
                <div>
                    <div class="myorder-sum fl"><img src="../assets/images/pay1.jpg"></div>
                    <div class="myorder-text">
                        <h1>越南进口白肉火龙果 </h1>
                        <h2>规格：2个装</h2>
                        <div class="tuan_g_core">
                            <div class="tuan_g_price">
                                <span>成团价</span>
                                <b>¥14.00</b>
                            </div>
                            <div class="tuan_g_btn"></div>
                        </div>
                    </div>
                </div>
                <div class="groups-dowm-bnt">
                    拼团进行中
                    <router-link to="/groupsdetails" class="btn fr">查看团详情</router-link>
                    <router-link to="/orderdetails" class="btn fr">查看订单详情</router-link>
                </div>
            </div>
            <div class="groups-m mc-sum-box">
                <div>
                    <div class="myorder-sum fl"><img src="../assets/images/pay1.jpg"></div>
                    <div class="myorder-text">
                        <h1>越南进口白肉火龙果 </h1>
                        <h2>规格：2个装</h2>
                        <div class="tuan_g_core">
                            <div class="tuan_g_price">
                                <span>成团价</span>
                                <b>¥14.00</b>
                            </div>
                            <div class="tuan_g_btn"></div>
                        </div>
                    </div>
                </div>
                <div class="groups-dowm-bnt">
                    拼团进行中
                    <router-link to="/groupsdetails" class="btn fr">查看团详情</router-link>
                    <router-link to="/orderdetails" class="btn fr">查看订单详情</router-link>
                </div>
            </div>
        </div>

        <myorder :list="list" :dataName="'follow'"></myorder>

        <!--footer begin-->
        <footer class="footer">
            <nav>
                <ul>
                    <li><router-link to="/index" class="nav-controller"><div class="fb-home"></div>首页</router-link></li>
                    <li><router-link to="/groups" class="nav-controller active"><div class="fb-group"></div>我的拼团</router-link></li>
                    <li><router-link to="/myorder" class="nav-controller"><div class="fb-list"></div>我的订单</router-link></li>
                    <li><a href="javascript:void(0);" class="nav-controller "><div class="fb-user"></div>个人中心</a></li>
                </ul>
            </nav>
        </footer>
        <!--footer end-->
    </div>
</template>

<script>

import myorder from './myorder'

let top = 0;
export default {
    components:{
        myorder
    },
    data(){
      return{
          list:[],
          detail:{}
      }
  },
  mounted(){
    // document.documentElement.scrollTop = top
    // console.log('mounted groups',top)
    // axios()
    this.$http({
        url:'/data/follow.data',
        // url:'http://localhost:3000/index',
        // parmas:{start:0,count:3}
    }).then(
        // res=>this.list = res.data
        (res)=>{
            this.list = res.data;
        }
    )
  },
  updated(){
    document.documentElement.scrollTop = top
    console.log('updated groups',top)
  },
  destroyed(){
    top=document.documentElement.scrollTop
    console.log('destroyed groups',top)
  },
}
</script>


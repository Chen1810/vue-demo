<template>
    <div id="user-b">
		<!--html5 nav-->
		<nav class="j-nav navbar">
	        <div class="logo fl">
				<router-link to="/index"></router-link>
			</div>
			<span class="user-title">个人中心</span>
			<div class="shopping-cart fr">
				<router-link to="/index"></router-link>
			</div>
	    </nav>
		<section class="m-component-user" id="m-user">
	        <div class="m-user-avatar text-center">
	            <span class="avatarPic"><img style="display: inline;" class="lazy img-circle" src="../assets/images/user-img0.jpg"></span>
	            <div class="user_btn">
	            	<router-link to="/login" class="this">昵称</router-link>
	            	<a href="javascript:;" @click="logout">注销</a>
	            </div>
	        </div>
	        
	        <div class="head_list">
	        	<ul class="m-user-list">
	        		<li><span>￥0.00</span><br>账户余额</li>
	        		<li><router-link to="/coupon"><span class="bar"></span><span>4</span><br>优惠卷</router-link></li>
	        		<li><router-link to="/myorder"><span class="bar"></span><span>2</span><br>我的订单</router-link></li>
	        	</ul>
	        </div>
	        <ul class="m-user-content">
	            <li>
	                <div class="m-user-item">
	                   <router-link to="user/orders/index" class="user-order">邀请好友得大礼包</router-link>
	                </div>
	                <div class="m-user-item">
	                   <router-link to="/groups" class="user-coupon">我的团单</router-link>
	                </div>
	            </li>
	            <li>
	            	<div class="m-user-item">
	                   <router-link to="user/coupon/index" class="user-site">管理收货地址</router-link>
	                </div>
	                <div class="m-user-item">
	                   <router-link to="user/coupon/index" class="user-set">设置</router-link>
	                </div>
	                <div class="m-user-item">
	                   <div class="user-score"><span class="pull-right">400-110110</span>联系客服</div>
	                </div>
	            </li>
	            <li class="m-user-footer">
	            粤ICP备8888888 广东·广州
	            </li>
	        </ul>
	    </section>
	    <!--footer begin-->
		<footer class="footer">
	        <nav>
	            <ul>
	                <li><router-link to="/index" class="nav-controller"><div class="fb-home"></div>首页</router-link></li>
	                <li><router-link to="/groups" class="nav-controller"><div class="fb-group"></div>我的拼团</router-link></li>
	                <li><router-link to="/myorder" class="nav-controller"><div class="fb-list"></div>我的订单</router-link></li>
	                <li><a href="javascript:void(0);" class="nav-controller active"><div class="fb-user"></div>个人中心</a></li>
	            </ul>
	        </nav>
	    </footer>
	    <!--footer end-->
	</div>
</template>

<script>
import store from '../store'
export default {
	beforeRouteEnter(to,from,next){
		if(store.state.user.auth){//同步条件
			next()
		}else{
			next('./login')
		}
	},
    methods:{
		logout(){
			this.$store.state.user.auth = false;
			this.$router.push('/index')
		}
	}
}
</script>

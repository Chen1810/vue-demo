<template>
    <div id="user-b" class="od-box">
		<!--html5 nav-->
		<nav class="j-nav navbar">
	        <div class="logo fl">
				<router-link to="/myorder"></router-link>
			</div>
			<span class="user-title">订单详情</span>
			<div class="shopping-cart fr">
				<router-link to="/index"></router-link>
			</div>
	    </nav>
	    <div class="od-details">
	    	<!-- 订单进度，生效追加样式“-cur”即可 -->
	    	<div class="od-express">
	    		<ul>
	    			<li class="place place-cur">
	    				提交订单
	    			</li>
	    			<li class="delivery">
	    				配送中
	    			</li>
	    			<li class="sign">
	    				签收成功
	    			</li>
	    		</ul>
	    	</div>
	    </div>
	    <!-- 订单信息 -->
    	<div class="od-infor">
	    	<table cellpadding="1" cellspacing="0">
				<tr>
					<td width="80px;">订单状态:</td>
					<td class="od-red">已付款</td>
				</tr>
				<tr>
					<td>总额:</td>
					<td class="od-red">14.00 <span>(微信支付)</span></td>
				</tr>
				<tr>
					<td>送至:</td>
					<td>广州市番禺区市桥</td>
				</tr>
				<tr>
					<td>收货人:</td>
					<td>郭小帅 16816816888</td>
				</tr>
				<tr>
					<td>订单编号:</td>
					<td>20151224-714084486</td>
				</tr>
				<tr>
					<td>下单时间:</td>
					<td>2015-12-24 17:05:40</td>
				</tr>
			</table>	
    	</div>
    	<!-- 商品详情 -->
    	<h4>商品详情</h4>
    	<div class="mc-sum-box">
			<div class="myorder-sum fl"><img src="../assets/images/pay1.jpg"></div>
			<div class="myorder-text">
				<h1>越南进口白肉火龙果 </h1>
				<h2>规格：2个装</h2>
				<div class="myorder-cost">
					<span>数量:1</span>
					<span class="mc-t">￥14.00/件</span>
				</div>
			</div>
		</div>
		<!--footer begin-->
		<footer class="footer">
	        <nav>
	            <ul>
	                <li><router-link to="/index" class="nav-controller"><div class="fb-home"></div>首页</router-link></li>
	                <li><router-link to="/groups" class="nav-controller"><div class="fb-group"></div>我的拼团</router-link></li>
	                <li><a href="javascript:void(0);" class="nav-controller active"><div class="fb-list"></div>我的订单</a></li>
	                <li><router-link to="/user" class="nav-controller"><div class="fb-user"></div>个人中心</router-link></li>
	            </ul>
	        </nav>
	    </footer>
	    <!--footer end-->
	</div>
</template>

<script>
export default {

}
</script>

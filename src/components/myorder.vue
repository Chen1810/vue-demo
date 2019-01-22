<template>
    <div id="user-b">
		<!--html5 nav-->
		<nav class="j-nav navbar">
	        <div class="logo fl">
				<router-link to="/user"></router-link>
			</div>
			<span class="user-title">我的订单</span>
			<div class="shopping-cart fr">
				<router-link to="/index"></router-link>
			</div>
	    </nav>
	    <div class="myorder-tab">
	    	<div class="myorder-nav">
		    	<ul id="tab_btn" class="coupon-list">
		    		<li class="pick">全部订单</li>
		    		<li><span class="bar"></span>待付款</li>
		    		<li><span class="bar"></span>待收货</li>
		    	</ul>
		    	<div class="cl"></div>
		    </div>
		    <div class="myorder-content">
		    	<ul>
		    		<li class="mc-all cc-one tab_content show">
		    			<ul>
		    				<li>
		    					<router-link to="/orderdetails">
		    						<div class="mc-sum-box">
			    						<div class="myorder-sum fl"><img src="../assets/images/pay1.jpg"></div>
				    					<div class="myorder-text">
				    						<h1>越南进口白肉火龙果</h1>
				    						<h2>规格：2个装</h2>
				    						<div class="myorder-cost">
				    							<span>数量:1</span>
				    							<span class="mc-t">￥14.00/件</span>
				    						</div>
				    					</div>
			    					</div>
			    					<div class="mc-sum-Am">
			    						共1件商品，免运费<span>实付：<span class="mc-t">￥14.00</span></span>
			    					</div>
			    					<h3>已付款，已发货</h3>
		    					</router-link>
		    				</li>
		    				<li>
		    					<div class="mc-sum-box">
		    						<div class="myorder-sum fl"><img src="../assets/images/myorder2.jpg"></div>
			    					<div class="myorder-text">
			    						<h1>优选越南青皮金煌芒果</h1>
			    						<h2>规格：4斤装</h2>
			    						<div class="myorder-cost">
			    							<span>数量:1</span>
			    							<span class="mc-t">￥49.00/件</span>
			    						</div>
			    					</div>
		    					</div>
		    					<div class="mc-sum-Am">
		    						共1件商品，免运费<span>实付：<span class="mc-t">￥49.00</span></span>
		    					</div>
		    					<h3>未付款</h3>
		    				</li>
		    			</ul>
		    		</li>
		    		<li class="mc-all mc-two tab_content">
		    			<ul>
		    				<li>
		    					<div class="mc-sum-box">
		    						<div class="myorder-sum fl"><img src="../assets/images/myorder2.jpg"></div>
			    					<div class="myorder-text">
			    						<h1>优选越南青皮金煌芒果</h1>
			    						<h2>规格：4斤装</h2>
			    						<div class="myorder-cost">
			    							<span>数量:1</span>
			    							<span class="mc-t">￥49.00/件</span>
			    						</div>
			    					</div>
		    					</div>
		    					<div class="mc-sum-Am">
		    						共1件商品，免运费<span>实付：<span class="mc-t">￥49.00</span></span>
		    					</div>
		    					<h3>未付款</h3>
		    				</li>
		    			</ul>
		    		</li>
		    		<li class="mc-all mc-three tab_content">
		    			<ul>
		    				<li>
		    					<div class="mc-sum-box">
		    						<div class="myorder-sum fl"><img src="../assets/images/pay1.jpg"></div>
			    					<div class="myorder-text">
			    						<h1>越南进口白肉火龙果</h1>
			    						<h2>规格：2个装</h2>
			    						<div class="myorder-cost">
			    							<span>数量:1</span>
			    							<span class="mc-t">￥14.00/件</span>
			    						</div>
			    					</div>
		    					</div>
		    					<div class="mc-sum-Am">
		    						共1件商品，免运费<span>实付：<span class="mc-t">￥14.00</span></span>
		    					</div>
		    					<h3>已付款，已发货</h3>
		    				</li>
		    			</ul>
		    		</li>
		    	</ul>
		    </div>
	    </div>

		<div class="newsList">
			<ul>
			<li
				v-for="item of list"
				:key="item.id"
			>
				<router-link :to="{name:'detail',params:{id:item.id},query:{dataName:dataName}}">
				<h2>{{item.id}}.{{item.title}}</h2>
				<p>{{item.detail}}</p>
				</router-link>
			</li>
			</ul>
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
	data(){
		return {
			detail:{}
		}
	},
	props:['list','dataName'],
	mounted(){
    let id = this.$route.params.id-0;
    let dataName = this.$route.query.dataName;
    this.$http({
        url:'/data/article_'+dataName+'.data',
    }).then(
        (res)=>{
            this.detail = res.data[id-1]
            console.log('res',res.data);
        }
    )
  },
}
</script>


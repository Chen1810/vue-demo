<template>
    <div id="user-b">
        <!--html5 nav-->
        <nav class="j-nav navbar">
        <div class="logo fl">
            <router-link to="/detail.html"></router-link>
        </div>
        <span class="user-title">支付拼团</span>
        <div class="shopping-cart fr">
            <router-link to="/index.html"></router-link>
        </div>
        </nav>
        <!-- 支付拼团 -->
        <div class="pay-box">
        <!-- 收货地址信息 -->
        <div class="pay-m pay-site">
            <a href="javascript:void(0);">
            <div class="pay-site-left fl">送至</div>
            <div class="pay-site-right">
                <p>郭小帅 16816816888</p>
                <p>广州市番禺区市桥</p>
            </div>
            </a>
        </div>
        <!-- 商品详情 -->
        <div class="pay-m mc-sum-box">
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
        <!-- 运费以及总价 -->
        <div class="pay-freight text-right">
            <p>快递:&nbsp;<span>￥0.00</span>&nbsp;总价:&nbsp;&nbsp;<b>14.00</b></p>
        </div>
        <!-- 支付方式 -->
        <div class="pay-m">
            <form class="am-form">
            <div class="am-g">
                <div class="pay-mu">
                <div class="pay-input-group pay-input-group-success">
                    <span class="pay-input-group-label">
                    <input type="radio" name="doc-radio-1" value="option1" checked>
                    </span>
                    <div class="pay-manner">微信支付</div>
                </div>
                </div>
                <div class="pay-mu">
                <div class="pay-input-group pay-input-group-secondary">
                    <span class="pay-input-group-label">
                    <input type="radio" name="doc-radio-1" value="option2">
                    </span>
                    <div class="pay-manner pay-manner2">支付宝支付</div>
                </div>
                </div>
            </div>
            <button class="btn" type="submit">立即支付</button>  
            </form>     
        </div>
        <!--拼团玩法-->
        <div class="step">
            <div class="step_hd">
                拼团玩法<a class="step_more" href="tuan_rule.html">查看详情</a>
            </div>
            <div id="footItem" class="step_list">
                <div class="step_item">
                    <div class="step_num">1</div>
                    <div class="step_detail">
                        <p class="step_tit">选择
                            <br>心仪商品</p>
                    </div>
                </div>
                <div class="step_item step_item_on">
                    <div class="step_num">2</div>
                    <div class="step_detail">
                        <p class="step_tit">支付开团
                            <br>或参团</p>
                    </div>
                </div>
                <div class="step_item ">
                    <div class="step_num">3</div>
                    <div class="step_detail">
                        <p class="step_tit">等待好友
                            <br>参团支付</p>
                    </div>
                </div>
                <div class="step_item">
                    <div class="step_num">4</div>
                    <div class="step_detail">
                        <p class="step_tit">达到人数
                            <br>团购成功</p>
                    </div>
                </div>
            </div>
        </div>

        </div>
  </div>
</template>

<script>
export default {
    
}
</script>

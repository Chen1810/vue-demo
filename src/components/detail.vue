<template>
    <div id="detail">
        <div data-am-widget="slider" class="am-slider am-slider-a1" data-am-slider='{"directionNav":false}' >
            <ul class="am-slides cl">
                <li>
                    <img src="../assets/images/j-d01.jpg">
                </li>
                <li>
                    <img src="../assets/images/j-d02.jpg">
                </li>
            </ul>
        </div>
        <!--介绍-->
        <div class="details-body-box">
            <div class="tm">
                <div class="td2">
                    <div class="td2_price"><span>已售：<b>948</b>件</span></div>
                    <div class="cl"></div>
                    <div class="td2_name"> 越南进口白肉火龙果 </div>
                    <div class="td2_cx">外皮红艳，果肉绵软白嫩，汁液丰富，富含维生素C.</div>
                </div>
            </div>
            <div class="tm2">
                <div class="td2_info">
                    <div class="td2_num">支付开团并邀请<span id="tuan_more_need_number">2</span>人参团，人数不足自动退款</div>
                </div>
                <div style="visibility: visible;" class="kt">
                    <div class="pin"> 
                        <div class="pin_btn_box">
                            <div class="pin_btn">
                                3人团
                            </div>
                        </div>
                        <div class="pin_btn_box">
                            <div class="pin_btn pin_btn_bg2">
                                原价
                            </div>
                        </div>
                        <div class="cl"></div>
                    </div>
                    <div>
                        <a href="javascript:void(0);" class="kt_item kt_item_buy ">
                            <div class="kt_price"><b>￥16.80</b>&nbsp;/&nbsp;700g~800g</div>
                            <div class="kt_btn" id="tuan_one_number">原价购买</div>
                        </a>
                        <router-link to="/pay" class="kt_item">
                            <div class="kt_price"><b>￥14.00</b>&nbsp;/&nbsp;700g~800g</div>
                            <div class="kt_btn">立即拼团<br></div>
                        </router-link>   
                    </div>
                    
                </div> 
            </div>        
            <!--拼团玩法-->
            <div class="step">
                <div class="step_hd">
                    拼团玩法<a class="step_more" href="tuan_rule.html">查看详情</a>
                </div>
                <div id="footItem" class="step_list">
                    <div class="step_item step_item_on">
                        <div class="step_num">1</div>
                        <div class="step_detail">
                            <p class="step_tit">选择
                                <br>心仪商品</p>
                        </div>
                    </div>
                    <div class="step_item ">
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
            <div class="outs-box">
                <h1>商品详情</h1>
                <img src="../assets/images/d1.jpg">
                <img src="../assets/images/d2.jpg">
                <img src="../assets/images/d3.jpg">
                <img src="../assets/images/d4.jpg">
            </div>
        </div>

        <!--detail_footer begin-->
        <div class="detail_footer">
            <div class="return_left_box">
                <router-link to="/index"><div class="return_home fl"></div></router-link>
                <a href="javascript:void(0);"><div class="return_home share_tuan fl"></div></a>    
            </div>  
            <router-link to="/pay"><div class="promptly_tuan fl">立即去拼团</div></router-link>
            
            <div class="cl"></div>

        </div>
    </div>
    <!--detail_footer end-->
</template>

<script>
export default {
    
}
</script>


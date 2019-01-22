<template>
    <div id="user-b">
        <!--html5 nav-->
        <nav class="j-nav navbar">
            <div class="logo fl">
                <router-link to="/user"></router-link>
            </div>
            <span class="user-title">优惠卷</span>
            <div class="shopping-cart fr">
                <router-link to="/index"></router-link>
            </div>
        </nav>
        <div class="coupon-tab">
            <div class="coupon-nav">
                <ul id="tab_btn" class="coupon-list">
                    <li class="pick">未使用</li>
                    <li><span class="bar"></span>已使用</li>
                    <li><span class="bar"></span>已过期</li>
                </ul>
                <div class="cl"></div>
            </div>
            <div class="coupon-content">
                <ul>
                    <li class="cc-all cc-one tab_content show">
                        <ul>
                            <li>
                                <div class="coupon-sum fl"><img src="../assets/images/cou-five.jpg"></div>
                                <div class="coupon-text">满20即可使用<br><span>有效期至：2017-1-1</span></div>
                            </li>
                            <li>
                                <div class="coupon-sum fl"><img src="../assets/images/cou-ten.jpg"></div>
                                <div class="coupon-text">满40即可使用<br><span>有效期至：2017-1-1</span></div>
                            </li>
                        </ul>
                    </li>
                    <li class="cc-all cc-two tab_content">
                        <ul>
                            <li>
                                <div class="coupon-sum fl">
                                    <div class="cc-mask"></div>
                                    <img src="../assets/images/cou-ten.jpg">
                                </div>
                                <div class="coupon-text">购买50元苹果<br><span>已使用</span></div>
                            </li>
                        </ul>
                    </li>
                    <li class="cc-all cc-three tab_content">
                        <ul>
                            <li>
                                <div class="coupon-sum fl"><img src="../assets/images/cou-ten.jpg" class="gray"></div>
                                <div class="coupon-text">满40即可使用【已过期】<br><span>有效期至：2015-11-11</span></div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

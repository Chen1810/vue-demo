  import Vue from 'vue'
  import Router from 'vue-router'

  Vue.use(Router)

  import index from './components/index'
  import coupon from './components/coupon'
  import detail from './components/detail'
  import groups from './components/groups.vue'
  import groupsdetails from './components/groupsdetails'
  import invite from './components/invite'
  import login from './components/login'
  import meal from './components/meal'
  import myorder from './components/myorder'
  import orderdetails from './components/orderdetails'
  import pay from './components/pay'
  import register from './components/register'
  import user from './components/user'

// let follow = () => { return import(组件)} // import() es7 返回就是promise
// const follow = () => import(/* webpackChunkName: "follow" */ './components/follow')

  const routes = [
    {path:'/index',component:index},
    {path:'/coupon',component:coupon},
    {path:'/detail',component:detail},
    {path:'/groups',component:groups},
    {path:'/groupsdetails',component:groupsdetails},
    {path:'/invite',component:invite},
    {path:'/login',component:login},
    {path:'/meal',component:meal},
    {path:'/myorder/:id',component:myorder,name:'detail'},
    {path:'/orderdetails',component:orderdetails},
    {path:'/pay',component:pay},
    {path:'/register',component:register},
    {path:'/user',component:user},
    {path:'/',redirect:'/index'},
  ];

  export default new Router({
    routes
  })
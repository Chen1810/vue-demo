<template>
    <div id="register-b">
		<!--html5 nav-->
		<nav class="j-nav navbar">
	        <div class="logo fl">
				<router-link to="/user"></router-link>
			</div>
			<span class="user-title">登录</span>
			<div class="registerBtn">
				<router-link to="/register">注册</router-link>
			</div>
	    </nav>
		<div class="register-box">
			<form action="" class="am-form" id="doc-vld-msg">
				<fieldset>
				    <div class="am-form-group">
				      	<label for="doc-ipt-3" class="am-u-sm-2 j-form-label">
					    	<span class="registericon registericon-user"></span>
					  	</label>
				      	<input type="text" id="doc-vld-name-2-1" placeholder="用户名/邮箱" data-validation-message="请输入用户名或登录邮箱" v-model="username" required/>
				    </div>

				    <div class="am-form-group">
				      	<label for="doc-vld-pwd-1" class="am-u-sm-2 j-form-label">
			    	  		<span class="registericon registericon-password"></span>
			    	  	</label>
				      	<input type="password" id="doc-vld-pwd-1" data-validation-message="请输入密码" placeholder="请输入密码" v-model="password" required/>
				    </div>
				    <button class="btn am-btn am-btn-secondary" type="submit" @click="checkLogin">登 录</button>
					<!-- <button class="btn am-btn am-btn-secondary" type="submit" @click="$store.dispatch({type:types.CHECK_USER,username:this.username,password:this.password})">登 录</button> -->
				</fieldset>
			</form>
			<div class="text-right">
	            <a href="login/forgetps/index.html" class="m-login-link">忘记密码？</a>
	        </div>	
		</div>
	</div>
</template>

<script>
import * as types from '../store/types'
export default {
    data(){
		return {
			username:'bmw',
			password:'bmw123'
		}
	},
	methods:{
		checkLogin(){
			// this.$store.dispatch('类型',负载)
			// this.$store.dispatch({type:类型,负载key:value})	//actions -> payload
			 this.$store.dispatch({
				 type:types.CHECK_USER,
				 username:this.username,
				 password:this.password
			}).then(
				(res)=>{
					//抓state仓库 提取res结果
					if(res.username == this.username){
						// this.$store.state.user.auth = true;
						this.$router.push('/user')
					}else{
						this.$store.state.user.auth = false;
						// this.$router.push('/login')
						console.log(res.username)
					}
				}
			)
		}
	}
}
</script>

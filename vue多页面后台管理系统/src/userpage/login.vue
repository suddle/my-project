<template>
	<div class="login">
		<div class="login-box">
			<div class="title"></div>
			<div class="login-content">
				<div class="user">
					<span class="">账号</span>
					<span class="input-content">
						<el-input v-model="msg.nickname" placeholder="请输入账号"></el-input>
					</span>
				</div>
				<div class="password">
					<span>密码</span>
					<span class="input-content">
						<el-input v-model="msg.credentials" placeholder="请输入密码"></el-input>
					</span>
				</div>
				<div class="login-btn"><el-button type="primary" @click="login" class="go-login">登录</el-button></div>
			</div>
		</div>
	</div>
</template>
<script>
import * as aTypes from '../vuex/action-types';
import {mapGetters} from 'vuex'
export default {
	data() {
		return {
			msg:{
				nickname:"",
				credentials:""
			},
			backData:"",

		}
	},
	methods:{
		login(){
			var _this = this;
			//window.location.href="/#/index";
			if(!this.msg.nickname||!this.msg.credentials){
				alert("用户名或密码不能为空");
				return false;

			}


			this.$store.dispatch(aTypes.USER_LOGIN, this.msg).then(function(res){
				if(res.code == "200"){
					_this.$router.push("/index");
				}
			});
		}
	},
	watch:{
		"backData"(){

		}
	},
	mounted(){
		
	},
	computed:{
		...mapGetters({
			isLogin: "IsLogin",
			saveRouter: "SaveRouter",
		}),
	}
}
</script>
<style scoped lang="scss">
	.login{
		width:100%;
		height:100%;
		background-color: #e5e9f2;
		position: relative;
	}
	.login-box{
		width:5rem;
		height:3rem;
		background: #fff;
		position: absolute;
		left: 50%;
		top:25%;
		margin-left: -2.5rem;
		border:1px solid #e5e9f2;
		border-radius: .1rem;

	}
	.go-login{
		width:60%;
	}
	.title{
		height:.4rem;
		text-align: center;
		line-height: .4rem;
		
		color:#fff;
		font-size:.2rem;
	}
	.login-content{
		width:4rem;
		margin-left: .5rem;
	}
	.user,.password{
		height:1rem;
		line-height:1rem;

	}
	.input-content{
		display: inline-block;
		width:3rem;
		margin-left: .3rem;

	}
	.login-btn{
		width:100%;
		
		.el-button--primary{
			margin-left: 1rem
		}
	}
</style>
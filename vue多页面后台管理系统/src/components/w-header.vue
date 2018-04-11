<template>
    <div class="header-msg flexLine">
		<div class="csj-manage">
			<p>穿商甲</p>
			<em>chuanshangjia</em>
		</div>
		<div class="login-register">
				<div class="login-on"><img src="../images/close.png" alt=""><a href="/logout" class="tuichu"><span class="headtxt">退出</span></a></div>
				<div class="login-out"><img src="../images/head.png" alt=""><em class="headtxt">admin</em></div>
				<div class="login-on" @click="tiaozhuan"><img src="../images/main.png" alt=""><span class="headtxt">首页</span></div>
		</div>
    </div>
</template>
<script>
import * as aTypes from '../vuex/action-types';
export default {
	name:'w-header',
	data() {
		return {
			msg: "header"
		}
	},
	methods:{	
		exit(){
			this.$store.dispatch(aTypes.USER_EXIT);
			this.$router.push('/login');
		},
		tiaozhuan(){
			this.$store.dispatch(aTypes.USER_EXIT);
			this.$router.push('/index');
		}
	}
}
</script>
<style lang="scss" scoped>
.header-msg{
  height:100px;
  width:100%;
}
.csj-manage{
	flex:2;
	height:100%;
	background:#ff5555;
	color:#fff;
	font-weight: bold;
	text-align: center;
	align-item:center;
}
.csj-manage p{
margin-top:.2rem;
	font-size: 25px;
}
.csj-manage em{
	list-style:none;
   font-size:12px;
   font-style:normal;
}
.login-register{
	flex:17;
	background: #fff;
	border-bottom:1px solid #EFEFF2;
}

.login-on img{
	width:.2rem;
	vertical-align: middle;
	margin-right:.05rem;
	margin-bottom:.1rem;
}
.login-out,.login-on{
	font-size: .15rem;
	font-weight: bold;
	float:right;
	margin-right:.5rem;
	margin-top: .3rem;
	height:.62rem;
	line-height: .62rem;
	text-align: center;
	cursor: pointer;
	margin-bottom: .2rem;
	display:inline-block;
}
.login-out img{
	width:.62rem;
	height:.62rem;
	vertical-align: middle;
}
.login-out em{
	 font-style:normal;
}
.tuichu{
	text-decoration: none;
	color: #656565;
}
.headtxt{
	margin-left: 0.1rem;
	padding-bottom: 0.08rem;
}
</style>
<template>
    <!-- 组件副导航栏 -->
<div class="list">
	<!--<li class="item " @click="goToIndex">首页</li>
	<li class="item active">{{msg}}</li>-->
</div>
   
</template>
<script>
export default {
	name:'w-subnav',
	data() {
		return {
			msg: ""
		}
	},
	methods:{
		goToIndex(){
			this.$router.push('/index');
		}
	}
}
</script>
<style lang="scss" scoped>

  
	.list{
		
		display:inline-block;
		width:100%;
		background: #fff;
		
		.item{
			height:100%;
			width:1.4rem;
			text-align: center;
			
			float:left;
			cursor: pointer;

		}
		.active{
			background:#ff5555;
			color:#fff;
		}

	}


	
</style>
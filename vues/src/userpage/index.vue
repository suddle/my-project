<template>
	<div class="msg-all">
		<div class="user-msg-detail">
			<div class="user-num">
				<div class="num-statistics"><i class="el-icon-minus"></i>&nbsp;数据统计</div>
				<div class="user-news-all flexLine">
					<img src="../images/user.png" alt="">
					<div class="user-news flex1 flexColumn">
						<span>{{newUsers}}</span>
						<span>新增用户</span>
					</div>
					<div class="user-all flex1 flexColumn">
						<span>{{allUsers}}</span>
						<span>总用户</span>
					</div>
				</div>
			</div>
			<div class="user-supplier">
				<div class="user-news-all flexLine">
					<img src="../images/shop.png" alt="">
					<div class="user-news flex1 flexColumn">
						<span>{{newShops}}</span>
						<span>新增商户</span>
					</div>
					<div class="user-all flex1 flexColumn">
						<span>{{allShops}}</span>
						<span>总商户</span>
					</div>
				</div>
			</div>
		</div>
		<div class="need-finish-event">
			<div class="num-statistics"><i class="el-icon-minus"></i>&nbsp;处理事项</div>
			<div class="need-finish-box">
				<div class="need-finish-item flexLine">
				 <a href="http://120.55.119.112:8088/#/applicationIn">
					<img src="../images/application.png" alt="">
					<div class="user-all flex1 flexColumn">
						<span>{{payedShops}}</span><br/>
						<span>入驻申请</span>
					</div>
				 </a>
				</div>
				<div class="need-finish-item flexLine">
				 <a href="http://120.55.119.112:8088/#/certification">
					<img src="../images/autonym.png" alt="">
					<div class="user-all flex1 flexColumn">
						<span>{{realNames}}</span><br/>
						<span>实名认证</span>
					</div>
				  </a>
				</div>
				<div class="need-finish-item flexLine">
				 <a href="http://120.55.119.112:8088/#/report">
					<img src="../images/report.png" alt="">
					<div class="user-all flex1 flexColumn">
						<span>{{reportAlls}}</span><br/>
						<span>举报处理</span>
					</div>
				  </a>
				</div>
				<!-- <div class="need-finish-item flexLine">
				  <a href="http://120.55.119.112:8088/#/withdraw">
					<img src="../images/deposit.png" alt="">
					<div class="user-all flex1 flexColumn">
						<span>88</span><br/>
						<span>商家提现</span>
					</div>
					</a>
				</div> -->
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
			msg: "login"
		}
	},
	created(){
      this.$store.dispatch(aTypes.GETUSERAMOUNT, null).then(function(res){

      });
      this.$store.dispatch(aTypes.GETSHOPAMOUNT, null).then(function(res){

      });
      this.$store.dispatch(aTypes.GETAUDITUSERAMOUT, null).then(function(res){
     
      });
      this.$store.dispatch(aTypes.GETREPORTAMOUNT, null).then(function(res){
    
      });
    },
    computed:{
     ...mapGetters({
      allUsers:'AllUser',
 	  newUsers:'NewUser',
 	  allShops:'AllShop',
	  newShops:'NewShop',
	  payedShops:'PayedShop',
	  realNames:'RealName',
	  reportAlls:'ReportAll'
    }),
    },
    mounted(){

    },
}
</script>
<style lang="scss" scoped>
.msg-all{
	background: #f1f2f7;
	width:100%;
	height:100%;
	overflow: hidden;
	padding-bottom: .3rem;
	.user-msg-detail{

		margin-top: 1rem;
		margin-left: 1rem;
		width:12rem;
	}
	.user-num{
		vertical-align: middle;
		float: left;
		/*background:#fff;*/
		width:5.6rem;
		
	}
	.user-supplier{
		float: left;
		width:5.6rem;
		margin-top: .27rem;
		vertical-align: middle;
		margin-left: .2rem;
	}
	.user-num span{
		margin:.2rem 0;
	}
	.user-num span:nth-of-type(1){
		font-size: .3rem;
	}
	.user-supplier span{
		margin:.2rem 0;
	}
	.user-supplier span:nth-of-type(1){
		font-size: .3rem;
	}
	.user-news-all{
		margin-bottom:.1rem;
		display: flex;
		background-color: #fff;
		img{
		   height:1.5rem;
		}
		.user-news,.user-all{
			/*height:1rem;*/
		}
	}
	.num-statistics{
		font-size: 13px;
		background-color: #F1F2F7;
		padding-bottom: .1rem;
	}
	.num-statistics i{
		transform: rotate(90deg);
		color:#ff5555;
	}
	.need-finish-event{
		clear:both;
		margin-top:1rem;
		margin-left: 1rem;
		.need-finish-title{
			
		}

	}
	.need-finish-title{
		height:1rem;
		line-height: 1rem;
		font-size:.2rem;
		color:#aaa;
	}
	.need-finish-box{
		display:flex;
		justify-content: space-between;
		width:11.4rem;
		height:1rem;
		.need-finish-item{
			width:2.6rem;
			float: left;
			background: white;
			text-align: center;
			display:flex;
			overflow:hidden;
			a{
				width:100%;
			}
			img{
				float:left;
					width:1rem;
				}
			.user-all{
				display:table-cell;
				float:left;
				margin-top: .3rem;
				margin-left:.3rem;
				color:#333;
				span{
					vertical-align: top;
					margin-bottom: .1rem;
				}
			}
		}
		
	}
}
</style>
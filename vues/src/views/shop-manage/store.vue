<template>
  <div>
    <w-subnav ref="subNav"></w-subnav>
    <el-table :data="shopManages" stripe style="width: 100%" height="600">
	    <el-table-column label="排序"  type="index" width="100">
        <template scope="scope">
          <el-button
            size="small"
            @click="">{{scope.$index+1}}</el-button>
        </template>
      </el-table-column>
	    <el-table-column prop="name" label="店铺名称" ></el-table-column>
	    <el-table-column prop="real_name" label="店铺负责人" ></el-table-column>
	    <el-table-column prop="total_product" label="商品数量" ></el-table-column>
	    <el-table-column prop="create_time" label="开店时间" ></el-table-column>
	    <el-table-column prop="status" label="店铺状态" ></el-table-column>
	    <el-table-column label="操作">
	      <template scope="scope">
	        <el-button type="text" @click="handleClose(scope.row.id)">关闭店铺</el-button>
	        <el-button type="text" @click="handleStart(scope.row.id)">开启店铺</el-button>
	        <el-button type="text" @click="handleDelete(scope.row.id,scope.$index, scope.row)">删除店铺</el-button>
	      </template>
	    </el-table-column>
    </el-table>
    	<div class="bottom-msg flexLine">
        	<div class="block flex4">
          	<el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync=this.storeStarts
            :page-size='15'
            layout="total, prev, pager, next"
            :total=this.totalCounts>
          </el-pagination>
            <!-- current-page 当前页 -->
            <!-- total 总条目数 -->
            <!-- page-count 总页数 -->
            <!-- page-size 每页显示条目个数 -->
        	</div>
    	</div>
  </div>
</template>
<script>
import * as aTypes from '../../vuex/action-types';
import {mapGetters} from 'vuex'
export default {
 
  data () {
    return {
    	  //页面数据初始化
        disData:null,
        currentPage:this.storeStarts,
        dataSize:this.storePageSizes,
        total:this.totalCounts
    }
  },//方法模块
  methods:{
  	 handleStart(_id) {//开启店铺
  	  	var params = {
          id:_id,
  	  		status:"NORMAL_OPEN"
  	  	}
  	  	this.$store.dispatch(aTypes.STARTSHOP_URL, params).then(function(res){
			  }); 
         window.location.reload();
      },
  	  handleClose(_id) {//关闭店铺
  	  	var params = {
          id:_id,
  	  		status:"BUSINESS_STOP"
  	  	}
  	  	this.$store.dispatch(aTypes.CLOSESHOP_URL, params).then(function(res){

        });
         window.location.reload();
      },
      handleDelete(_id,index, row) {//删除店铺
            var params = {
              id:_id,
              status:"PERMANENT_CLOSE"
            }
            this.$store.dispatch(aTypes.DELETESHOP_URL, params).then(function(res){
            }); 
        var _index = (this.currentPage-1)*this.dataSize + index;
        this.shopManages.splice(_index,1);
          window.location.reload();
      },
      handleCurrentChange(val) {//分页
        this.storeStarts = val;
        var params = {
          start:val,  
          pageSize:this.storePageSizes
        }
        this.$store.dispatch(aTypes.GETSHOP_URL, params).then(function(res){
        });
      },
  },
  created(){//页面初始化
      this.$store.dispatch(aTypes.GETSHOP_URL, null).then(function(res){
      });
    },
    computed:{//后代拿回数据
    ...mapGetters({
     shopManages:'ShopManage',
     storeStarts:'StoreStart',
     storePageSizes:'StorePageSize',
     totalCounts:'TotalCount',
     storeTimes:'StoreTime'
    }),
    },
  mounted(){//页面名字
  	this.$refs.subNav.msg="店铺管理";
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.el-dialog__wrapper{
		left: 10px;
	}
/*	.add-msg-content{
		height:2rem;
		padding:.1rem;
		.title{
			height: .4rem;
			line-height:.4rem;
			font-style:.2rem;
			text-indent:2em;
		}
		.input-content{
			height: .4rem;
			width:50%;
			margin-left: .2rem;
			border:none;
			border:1px solid #ccc;
			font-size:16px;
		}

	}*/
	.bottom-msg{
      margin-top: .3rem;
      /*position:absolute;
      bottom:.1rem;*/
    }
	 .to-right{
	    float:right;
	    margin-right: 1rem;
	  }
	.to-left{
	  float:left;
	  margin-left: 1rem;
	}
.el-table .cell {
    text-align: center;
}
.store_img{
  height:1rem;
}
.el-form-item{
width:3rem;
height:1rem;
text-align: center;
line-height: 100px;
/*border: 1px solid #ccc;*/
}
.el-form-item span{
  display:block;
  color:#ff4110;
  line-height: 100px;
}

</style>


<template>
  <div>
    <w-subnav ref="subNav"></w-subnav>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    	<el-tab-pane label="举报列表" name="report" class="report-wrap">
	    	<el-table :data="reportLists" border style="width: 100%" stripe>
			    <el-table-column label="排序" type="index" width="100">
                <template scope="scope">
                  <el-button
                    size="small"
                    @click="">{{scope.$index+1}}</el-button>
                </template>
            </el-table-column>
			    <el-table-column prop="reporterNickName" label="举报用户"></el-table-column>
			    <el-table-column prop="reporterRealName" label="用户名"></el-table-column>
			    <el-table-column prop="receiverNickName" label="被举报用户"></el-table-column>
			    <el-table-column prop="receiverRealName" label="用户名"></el-table-column>
			    <el-table-column prop="content" label="举报内容"></el-table-column>
			    <el-table-column prop="createTime" label="创建时间"></el-table-column>
			    <el-table-column label="操作">
			   <template scope="scope">
			     <el-button type="text" @click="Ignore(scope.row.id)">忽略</el-button>
			     <el-button type="text" @click="judge(scope.row.receiverId,scope.row.id)">受理</el-button>
			   </template>
			   </el-table-column>
	    	</el-table>
	    </el-tab-pane> 
	    <el-tab-pane label="已处理举报" name="judged" class="report-wrap">
	    	<el-table :data="dealtLists" border style="width: 100%" stripe>
			   <el-table-column label="排序" type="index" width="100">
                <template scope="scope">
                  <el-button
                    size="small"
                   >{{scope.$index+1}}</el-button>
                </template>
            </el-table-column>
			 	<el-table-column prop="reporterNickName" label="举报用户" ></el-table-column>
			 	<el-table-column prop="reporterRealName" label="用户名"></el-table-column>
			 	<el-table-column prop="receiverNickName" label="被举报用户"></el-table-column>
			 	<el-table-column prop="receiverRealName" label="用户名"></el-table-column>
			 	<el-table-column prop="content" label="举报内容"></el-table-column>
			 	<el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column prop="modifyTime" label="创建时间"></el-table-column>
			 	<el-table-column label="操作">
			   		<template scope="scope">
			     	<el-button type="text" @click="handleDelete(scope.row.id)">删除</el-button>
			   		</template>
			 	</el-table-column>
	    	</el-table>
	    </el-tab-pane>
    </el-tabs>
    <div class="count_handle">{{'注：用户若在穿商甲平台发现垃圾信息，可疑网址，恶意文件，或者在购买，交易业务中发现不良信息可向平台举报'}}</div>
     <div class="bottom-msg flexLine">
         <div class="block flex4">
           <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync=this.reportStarts
            :page-size='15'
            layout="total, prev, pager, next"
            :total=this.reportTotals>
          </el-pagination>
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
    	dialogFormVisible:false,
    	activeName:'report',
      disData:null,
      currentPage:this.reportStarts,
      dataSize:this.reportPagesizes,
      total:this.reportTotals,
    }
  },
  methods:{
    handleClick(){
      if(this.activeName=="report"){
           var params = {
         }
          this.$store.dispatch(aTypes.GETREPORTLIST1, null).then(function(res){
            console.log(res)
          });
      }
      if(this.activeName=="judged"){
          this.$store.dispatch(aTypes.GETREPORTLIST2, null).then(function(res){
            console.log(res)
          });
      }
    },
    handleDelete(_id) {//删除
      this.$confirm('此操作将删除记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var params = {
          id:_id,
          is_del:0,
        };
        this.$store.dispatch(aTypes.DELETEREPORT,params).then(function(res){
          window.location.reload();
        });
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
  	Ignore(_id){
  		this.$prompt('请输入原因', '备注', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /\S/,
          inputErrorMessage: '备注不能为空'
        }).then(({ value }) => {
          var time = new Date()/1000;
        	var params = {
        		id:_id,
        		status:"ignore",
     			  memo:value,
     			  modify_time:time,
         	};
         	this.$store.dispatch(aTypes.JUDGEREPORT, params).then(function(res){
              window.location.reload();
    			});
          this.$message({
            type: 'success',
            message: '提交成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
  	},
    judge(_id,id){
      var _this = this;
      this.$prompt('请输入原因', '备注', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /\S/,
          inputErrorMessage: '备注不能为空'
        }).then(({ value }) => {
          var time = new Date()/1000;
           var params = {
             id:id,
             receiverId:_id,
             status:"receive",
             memo:value,
             modify_time:time,
             userStatus:0
             };
             this.$store.dispatch(aTypes.JUDGEREPORT, params).then(function(res){
              window.location.reload();
              res = JSON.parse(res)
              if(res.code==400){
                _this.$message('提交失败')
                return false;
              }
            });
          this.$message({
            type: 'success',
            message: '提交成功'
          });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
    },
  	
   //  deleteReport() {
   //      this.$confirm('确认删除?', '提示', {
   //        confirmButtonText: '确定',
   //        cancelButtonText: '取消',
   //        type: 'warning'
   //      }).then(() => {
   //      	var params  = {
   //      		id:1,
   //   			is_delete:1
   //   	};
   //   	this.$store.dispatch(aTypes.DELETE_REPORT, params).then(function(res){

			// });
   //        this.$message({
   //          type: 'success',
   //          message: '删除成功!'
   //        });
   //      }).catch(() => {
   //        this.$message({
   //          type: 'info',
   //          message: '已取消删除'
   //        });
   //      });
   //    },
    handleSizeChange(val) {//切换tab
       
        this.dataSize = val;
        this.calculateRow();
      },
    handleCurrentChange(val) {//分页
        var _page = this.reportPagesizes
        this.reportStarts = val;
       if(this.activeName=="report"){
          var params = {
          start:val,  
          pageSize:_page
        }
        this.$store.dispatch(aTypes.GETREPORTLIST1, params).then(function(res){

        });
       }
       if(this.activeName=="judged"){
          var params = {
          start:val,  
          pageSize:_page
        }
        this.$store.dispatch(aTypes.GETREPORTLIST2, params).then(function(res){

        }); 
       }
        
      },
    calculateRow(){
      	var _arr = [];
	  	for(var i = (this.currentPage-1)*this.dataSize,_len = (this.currentPage*this.dataSize>this.dealtLists.length)?this.dealtLists.length:this.currentPage*this.dataSize;i<_len;i++){
	  		_arr.push(this.dealtLists[i]);
	  	}
	  	this.disData = _arr;
      }
  },
  created(){//初始化
      this.$store.dispatch(aTypes.GETREPORTLIST1, null).then(function(res){
     
      }); 
    },
    computed:{
    ...mapGetters({
      reportLists:'ReportList',
      dealtLists:'DealtList',
      reportStarts:'ReportStart',
      reportPagesizes:'ReportPagesize',
      reportTotals:'ReportTotal'
    }),
    },
  mounted(){
  	this.$refs.subNav.msg="举报处理",
  	this.calculateRow();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-tabs__header{
  border:1px solid #ddd;
 }
	.el-dialog__wrapper{
		left: 10px;
	}
	.add-msg-content{
		height:2rem;
		padding:.1rem;
		.title{
			height: .4rem;
			line-height: .4rem;
			font-style: .2rem;
			text-indent: 2em;
		}
		.input-content{
			height: .4rem;
			width:50%;
			margin-left: .2rem;
			border:none;
			border:1px solid #ccc;
			font-size:16px;
		}

	}
	.bottom-msg{
      margin-top: .3rem;
     /* position:absolute;
      bottom:.1rem;
      margin-left: .3rem;*/
   }
	 .to-right{
	    float:right;
	    margin-right: 1rem;
	  }
	.to-left{
	  float:left;
	  margin-left: 1rem;
	}
  .report-wrap{
    min-height: 6.5rem;
  }
  .count_handle{
  margin-top:.1rem;
}

</style>
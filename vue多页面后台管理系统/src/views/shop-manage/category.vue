<template>
  <div>
  	  <!-- <div class="add-industry flex2"><el-button class="to-left" type="primary" @click="addIndustry">添加行业</el-button></div> -->
    <el-table :data="shopGods" stripe style="width: 100%" class="category" @row-click="addParent">
	     <el-table-column type="expand">
	     <template scope="props">
	     	<el-table :data="parentDataObj[props.row.id]" stripe style="width: 100%" class="list-2" @row-click="addSub">
	     		<el-table-column type="expand">
					<template scope="propsThird">
						<el-table :data="subDataObj[propsThird.row.id]" stripe style="width:100%" class="list-2" >
							<el-table-column prop="props.$index" width="58"></el-table-column>
				     	 	<el-table-column  prop="name" width="400"></el-table-column>
				     	 	<el-table-column prop="createTime" label="修改时间" width="360">
				  		  </el-table-column>
				  		  <el-table-column label="操作">
					      <template scope="scope">
					        <el-button size="small" @click="handleEdit(scope.row.id, scope.row)">编辑</el-button>
					       <!--  <el-button
					          size="small"
					          type="danger"
					          @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
					      </template>
					     </el-table-column>
						</el-table>
					</template>
	     		</el-table-column>
	     		<el-table-column prop="props.$index" width="60"></el-table-column>
	     	 	<el-table-column  prop="time" width="400" >
					<template scope="scope">
						<span>{{scope.row.name}}</span>
			      <!-- <el-button
           size="small"
           
           @click="dropdownFun(scope.$index)" ></el-button>  -->
					</template>
					 
	     	 	</el-table-column>
	     	 	
	     	 	<el-table-column prop="createTime" label="修改时间" width="360"></el-table-column>
          <el-table-column prop="" label="行业类目" width="360" ref='goods'></el-table-column>
	  		  <el-table-column label="操作">
		      <template scope="scope">
		        <el-button
		          size="small"
		          @click="handleEdit(scope.id, scope.row)">编辑</el-button>
              <el-button
            size="small"
            @click="addTwo(scope.id, scope.row)">增加</el-button>
		        <!-- <el-button
		          size="small"
		          type="danger"
		          @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
		      </template>
		     </el-table-column>
	     	</el-table>
	      
	     </template>
	   </el-table-column>
	    <el-table-column label="排序" type="index" width="110">
	  	  <template scope="scope">
	        <el-button
	          size="small"
	          @click="">{{scope.$index+1}}</el-button>
	      </template>
	    </el-table-column>
	    </el-table-column>
       <el-table-column prop="name" label="行业类目" width="360" ref='goods'></el-table-column>
       <el-table-column prop="" label="更新时间" width="360" ref='goods'></el-table-column>
	    <el-table-column label="操作">
	      <template scope="scope">
	        <!-- <el-button
	          size="small"
	          @click="handleEdit(scope.id, scope.row)">编辑1</el-button> -->
	        <el-button
            size="small"
            @click="addOne(scope.id, scope.row)">增加</el-button>
	      </template>
	    </el-table-column>
    </el-table>
    <div class="count_handle">注：点击>可以展开二级类目和三级类目</div>
    <div class="bottom-msg flexLine">
         <div class="block flex4">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync=this.categoryStart
            :page-size='15'
            layout="total, prev, pager, next"
            :total=this.categoryTotal>
          </el-pagination>
        </div>
    </div>
		<el-dialog title="信息编辑" v-model="dialogFormVisible">
		 <div class="add-msg-content">
			<div class="title">分类名称</div>
			<input type="text" class="input-content" v-model="biaodan">
		 </div>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="addCategory">确 定</el-button>
		  </div>
		</el-dialog>
    <div class="cover-addone" v-show="isShow">
       <div class="cover-head">请输入内容<em @click="closeCover">x</em></div>
       <div class="cover-input"><input type="text" v-model="addClass"/></div>
       <div class="cover-query"><button @click="okCoverOne">确定</button><span @click="closeCover">取消</span></div>
    </div>
    <div class="cover-addone" v-show="isTrue">
       <div class="cover-head">请输入内容<em @click="closetcover">x</em></div>
       <div class="cover-input"><input type="text" v-model="addClass"/></div>
       <div class="cover-query"><button @click="okCoverTwo">确定</button><span @click="closetcover">取消</span></div>
    </div>
  </div>
</template>

<script>
import * as aTypes from '../../vuex/action-types';
import {mapGetters} from 'vuex'
export default {
 
  data () {
    return {
      parentDataObj:{},
      subDataObj:{},
      value:"",
      isTrue:false,
      isShow:false,
      reserveParentId:0,
      reserveSubId:0,
      password:'',
      biaodan:'',
      name:'',
      addId:[],
      arrId:[],
      parentId:[],
    	addFlag:[true,true],
    	dialogFormVisible:false,
        disData:null,
        currentPage:this.categoryStart,
        dataSize:this.categoryPagesize,
        total:this.categoryTotal
    }
  },
  methods:{
     addOne(index,row){//点击一级增加
      this.isShow = !this.isShow;
      this.addId.splice(0,this.addId.length)
      this.addId.push(row.id)
     },
     addTwo(index,row){//点击二级增加
      this.isTrue = !this.isTrue;
      this.addId.splice(0,this.addId.length)
      this.addId.push(row.industryId)
      this.parentId.push(row.id)
     },
     closeCover(){//点击关闭一级弹出框
      this.isShow = !this.isShow;
     },
     closetcover(){//点击关闭二级弹出框
        this.isTrue = !this.isTrue;
     },
okCoverOne(event){//点击一级弹出框确定
      event.stopPropagation();
      var time = new Date()/1000;
      time = parseInt(time);
      var _id = this.addId[0];
          var params = {
              industryId:_id,
              name:this.addClass,
              parentId:0,
              level:1,
              pic:'',
              createTime:time
          };
          this.$store.dispatch(aTypes.QUERYCATEGORY, params).then(function(res){
          });
          // alert(11111);
          this.isShow = !this.isShow;
     },
     okCoverTwo(){//点击二级弹出框确定
      var time = new Date()/1000;
      time = parseInt(time);
      var _id = this.addId[0];
      var _idp = this.parentId[0];
          var params = {
              industryId:_id,
              name:this.addClass,
              parentId:_idp,
              level:2,
              pic:'',
              createTime:time
          };
          this.$store.dispatch(aTypes.QUERYCATEGORY, params).then(function(res){
          });
          this.isTrue = !this.isTrue;
     },
     addParent(event){
      var _id = event.id;
      this.reserveParentId = event.id;
      var params = {
              industryId:_id,
          };
          this.$store.dispatch(aTypes.GET_PARENT_CATEGORY, params).then(function(res){

          });
     },
     addSub(event){
        var _ids = event.id;
        this.reserveSubId = _ids;
        var datas = {
            parentId:_ids,
        };
        this.$store.dispatch(aTypes.GET_SUB_CATEGORY, datas).then(function(res){
           
        });
     },
  	 addCategory(event){
      var time = new Date()/1000;
      time = parseInt(time);
      this.dialogFormVisible = false;
      var _id = this.arrId[0];
  	 	var params = {
         id:_id,
  	 		 name:this.biaodan,
         createTime:time
  	 	};
  	 	this.$store.dispatch(aTypes.EDITCATEGORY_URL, params).then(function(res){
   
      });
  	 },
  	 //编辑函数处理
  	handleEdit(index, row) {
      this.arrId.splice(0,this.arrId.length)
      this.arrId.push(row.id)
      this.dialogFormVisible = true
    },
   //  handleDelete(index, row) {
   //  	var params = {
   //  		id:2
   //  	};
   //  	this.$store.dispatch(aTypes.DELETE_CATAGORY, params).then(function(res){
			// 	//_this.backData = res;
			// 	//_this.$router.push("/index");
			// });
  
   //    this.disData.splice(index,1);
   //    var _index = (this.currentPage-1)*this.dataSize + index;
   //    this.tableData.splice(_index,1);
   //  },
    //分页的数据处理
    //  handleSizeChange(val) {
  
    //   this.dataSize = val;
    //   this.calculateRow();
    // },
    handleCurrentChange(val) {
      this.categoryStart = val;
      var _arr = [];
      var params = {
        start:val,
        pageSize:15
      }
      this.$store.dispatch(aTypes.GETINDUSTRY_URL, params).then(function(res){
      });
    },
  },
  created(){
        this.$store.dispatch(aTypes.GETINDUSTRY_URL, null).then(function(res){
 
        });
    },
    computed:{
    ...mapGetters({
      shopSubs:'ShopSub',
      shopPars:'ShopPar',
      shopGods:'ShopGods',
      categoryStart:'CategoryStart',
      categoryPagesize:'CategoryPagesize',
      categoryTotal:'CategoryTotal'
    }),
    },
    watch:{
      "shopGods":function(){
    
        for(let i=0,_len=this.shopGods.length;i<_len;i++){
          this.parentDataObj[this.shopGods[i].id] = [];
        }
      },
      "shopPars":function(){
        this.parentDataObj[this.reserveParentId] = this.shopPars;
        for(var i=0,_len=this.parentDataObj.length;i<_len;i++){
          subDataObj[this.parentDataObj[i].id] = [];
        }
        
        this.parentDataObj = Object.assign({},this.parentDataObj);
      },
      "shopSubs":function(){
        this.subDataObj[this.reserveSubId] = this.shopSubs;
        this.subDataObj = Object.assign({},this.subDataObj);
      }
    },
  mounted(){
  	// this.calculateRow();
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
  .dialog__footer{
    padding:0px!important;
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
	.dropdown{
		margin-left: .7rem;
		font-size:14px;
		padding:0;
		width:20px;
		height:20px;
	}
	
  	.list-2 .el-table__header-wrapper{
  		display: none;
  	}
  	.bottom-msg{
      margin-top: .3rem;
    }
	.to-right{
	    float:right;
	    margin-right: 1rem;
	  }
	.to-left{
    vertical-align:middle;
    display:inline-block;
	  float:left;
	  margin-left:0.5rem;
    margin-top:.3rem;
	}
  .add-industry{
    overflow:hidden;
    background-color: #F6F3EE;
    height:86px;
    line-height: 86px;
  }
  .cover-addone{
    position: fixed;
    left:30%;
    top:30%;
    width:5.6rem;
    height:3.5rem;
    background-color: #fff;
    border:1px solid #ddd;
    z-index: 100000;
  }
  .cover-head{
    height:30px;
    padding:10px 20px;
  }
  .cover-head em{
    width: 20px;
    float: right;
    font-style: normal;
    cursor: pointer;
    height: 20px;
    text-align: center;
    line-height: 20px;
    background-color: #F1F1F1;
    border:1px solid transparent;
  }
  .cover-head em:hover{
    border:1px solid #ddd;
    color: #FF7125;
  }
  .cover-input{
    width:100%;
    height:50px;
    margin:20px;
  }
  .cover-input input{
    width:50%;
    height:40px;
  }
  .cover-query{
    position:absolute;
    bottom:10px;
    margin:30px;
  }
  .cover-query button{
    width:64px;
    height:36px;
    background-color: #FF7125;
    color:#fff;
    text-align: center;
    line-height: 36px;
    outline: none;
    border-style: none;
    margin-right: 20px;
    cursor: pointer;
  }
  .cover-query span{
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 64px;
    height: 36px;
    display: inline-block;
    vertical-align: middle;
    line-height: 36px;
    text-align: center;
    cursor: pointer;
  }
  .el-table{
    height:auto!important;
  }
  .count_handle{
  margin-top:.1rem;
}
.el-icon-arrow-right:before{
  content: "\e61c"!important;
}
</style>


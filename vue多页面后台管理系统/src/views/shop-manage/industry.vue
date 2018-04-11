<template>
  <div>
    <w-subnav ref="subNav"></w-subnav>
    <el-table :data="disData" stripe style="width: 100%" height="600">
	    <el-table-column label="序号" type="index" width="360">
	    </el-table-column>
	    <el-table-column prop="name" label="行业" width="360">
	    </el-table-column>
	    
	    <el-table-column label="操作">
	      <template scope="scope">
	        <el-button
	          size="small"
	          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
	        <el-button
	          size="small"
	          type="danger"
	          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
	      </template>
	    </el-table-column>
    </el-table>
   <!--  <div class="block">
         
         <el-pagination
           @size-change="handleSizeChange"
           @current-change="handleCurrentChange"
           :current-page="currentPage"
           :page-sizes="[1, 2, 3, 4]"
           :page-size="dataSize"
           layout="total, sizes, prev, pager, next, jumper"
           :total="tableData.length">
         </el-pagination>
       </div> -->
    <div class="bottom-msg flexLine">
         <div class="add-industry flex2"><el-button class="to-left" type="primary" @click="addIndustry">添加行业</el-button></div>
         <div class="block flex4">
          <el-pagination
          class="to-right"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[4,5,6,7]"
            :page-size="dataSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length">
          </el-pagination>
        </div>
    </div>
  
	
		<el-dialog title="信息编辑" v-model="dialogFormVisible">
		 
		 <div class="add-msg-content">
			<div class="title">行业名称</div>
			<input type="text" class="input-content">
		 </div>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		  </div>
		</el-dialog>
	
  </div>
</template>

<script>
export default {
 
  data () {
    return {
    	dialogFormVisible:false,
    	 tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎s',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎ss',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎xsw',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎sfe',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎seffwe',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        disData:null,
        currentPage:1,
        dataSize:3,
       
    }
  },
  methods:{
      //增加行业模态框弹出
      addIndustry(){
        this.dialogFormVisible = true
      },
      //编辑信息处理
  	  handleEdit(index, row) {
   
        this.dialogFormVisible = true
      },
      //删除函数处理
      handleDelete(index, row) {
 
        this.disData.splice(index,1);
        var _index = (this.currentPage-1)*this.dataSize + index;
        this.tableData.splice(_index,1);
      },
      //分页管理
       handleSizeChange(val) {
    
        this.dataSize = val;
        this.calculateRow();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        var _arr = [];
      
        this.calculateRow();
 
      },
      calculateRow(){
      	var _arr = [];
	  	for(var i = (this.currentPage-1)*this.dataSize,_len = (this.currentPage*this.dataSize>this.tableData.length)?this.tableData.length:this.currentPage*this.dataSize;i<_len;i++){
	  		_arr.push(this.tableData[i]);
	  	}
	  	this.disData = _arr;
      }
  },
  mounted(){
  	this.$refs.subNav.msg="行业管理",
  	this.calculateRow();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
    }
 .to-right{
    float:right;
    margin-right: 1rem;
  }
.to-left{
  float:left;
  margin-left: 1rem;
}

</style>


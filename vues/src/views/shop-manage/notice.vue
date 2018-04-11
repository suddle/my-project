<template>
  <div>
    <w-subnav ref="subNav"></w-subnav>
    <el-tabs v-model="activeName" @tab-click="handleClick" >
	    <el-tab-pane label="公告列表" name="application">
			<el-table :data="disData" stripe style="width: 100%"  height="600">
			     <el-table-column type="index" label="序号" width="90" >
            
          </el-table-column>
			    <el-table-column prop="title" label="标题" width="200">
			    </el-table-column>
			    <el-table-column prop="content" label="内容" width="200">
			    </el-table-column>
			    <el-table-column prop="date" label="时间" width="360">
			    </el-table-column>
			    <el-table-column prop="state" label="状态" width="360">
             <template scope="scope">
                  <el-checkbox v-model="scope.row.state">发布</el-checkbox>
             </template>
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
	    </el-tab-pane>
	    <el-tab-pane label="已删公告" name="settledSuccess">
	    	<el-table :data="disData" stripe style="width: 100%"  height="600">
           <el-table-column type="index" label="序号" width="90" >
            
          </el-table-column>
          <el-table-column prop="title" label="标题" width="200">
          </el-table-column>
          <el-table-column prop="content" label="内容" width="200">
          </el-table-column>
          <el-table-column prop="date" label="时间" width="360">
          </el-table-column>
          <el-table-column prop="state" label="状态" width="360">
             <template scope="scope">
                  <el-checkbox v-model="scope.row.state">已删除</el-checkbox>
             </template>
          </el-table-column>
          
         
          <el-table-column label="操作">
            <template scope="scope">
              <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)">撤销</el-button>
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">清空</el-button>
            </template>
          </el-table-column>
        </el-table>
	    </el-tab-pane>
	  
	    
	</el-tabs>
     <div class="bottom-msg flexLine">
         <div class="add-notice flex2"><el-button class="to-left" type="primary" @click="addNotice">添加公告</el-button></div>
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
   <!--  <el-dialog title="信息编辑" v-model="dialogFormVisible">
    
    <div class="add-msg-content">
     <div class="title">行业名称</div>
     <input type="text" class="input-content">
    </div>
     <div slot="footer" class="dialog-footer">
       <el-button @click="dialogFormVisible = false">取 消</el-button>
       <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
     </div>
   </el-dialog> -->

    <el-dialog title="信息编辑" v-model="addNoticeFlag"  class="add-notice-msg">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="序号">
              <el-input v-model="formLabelAlign.number"></el-input>
            </el-form-item>
            <el-form-item label="标题">
              <el-input v-model="formLabelAlign.title"></el-input>
            </el-form-item>
            <el-form-item label="内容">
             <el-input type="textarea" v-model="formLabelAlign.content" class="text-content"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addNoticeFlag = false">取 消</el-button>
          <el-button type="primary" @click="addNoticeFlag = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
 
  data () {

    return {
      formLabelAlign:{
        number:"",
        title:"",
        content:"",

      },
      addNoticeFlag:false,
      labelPosition:'top',
    	activeName:'application',
    	 tableData: [{
          date: '2016-05-02',
          title: '王小虎住址',
          content: '上海市普陀区金沙江路 1518 弄',
          state: true
        }],

        disData:null,
        currentPage:1,
        dataSize:4,
        dialogFormVisible:false,

    }
  },
  mounted(){
  	this.$refs.subNav.msg="公告管理";
  	this.calculateRow();
  },
  methods:{
    //添加公告
    addNotice(){
       this.addNoticeFlag = true
    },
    //编辑
    handleEdit(index, row) {
      
       this.addNoticeFlag = true
    },
    //删除
    handleDelete(index, row) {
    
      this.disData.splice(index,1);
      var _index = (this.currentPage-1)*this.dataSize + index;
      this.tableData.splice(_index,1);
    },
    //导航条的点击
  	handleClick(_value, _event){
  
  	},
    //每页几条记录
  	handleSizeChange(val) {
    
        this.dataSize = val;
        this.calculateRow();
    },
    //当前页
    handleCurrentChange(val) {
      this.currentPage = val;
      var _arr = [];
    
      this.calculateRow();
   
    },
    //计算每行的值
    calculateRow(){
    	var _arr = [];
	  for(var i = (this.currentPage-1)*this.dataSize,_len = (this.currentPage*this.dataSize>this.tableData.length)?this.tableData.length:this.currentPage*this.dataSize;i<_len;i++){
	  	_arr.push(this.tableData[i]);
	  }
	  this.disData = _arr;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bottom-msg{
      margin-top: .3rem;
    }
    .add-notice{

    }
    .to-right{
        float:right;
        margin-right: 1rem;
      }
    .to-left{
      float:left;
      margin-left: 1rem;
    }
    .add-notice-msg{
      height: 8rem;
    }
</style>


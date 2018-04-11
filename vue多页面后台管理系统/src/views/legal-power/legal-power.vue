<template>
  <div>
    <w-subnav ref="subNav"></w-subnav>
    <el-tabs v-model="activeName" @tab-click="handleClick">
	    <el-tab-pane label="新建" name="news">
			<el-table :data="disData" border style="width: 100%"  height="600" class="application-page">
			    <el-table-column prop="date" label="序号" width="90" fixed>
			    </el-table-column>
			    <el-table-column prop="name" label="订单号" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="发起人" width="90">
			    </el-table-column>
			    <el-table-column prop="address" label="被诉人" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="时间" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="状态" width="180">
			    </el-table-column>
			    <el-table-column prop="address" label="处理人" width="180">
			    </el-table-column>
			    <el-table-column prop="address" label="操作" width="180">
			    </el-table-column>
	    	</el-table>
	    </el-tab-pane>
	    <el-tab-pane label="平台判决" name="platformDecision">
	    	<el-table :data="disData" border style="width: 100%"  height="600" class="application-page">
			    <el-table-column prop="date" label="序号" width="90" fixed>
			    </el-table-column>
			    <el-table-column prop="name" label="订单号" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="发起人" width="90">
			    </el-table-column>
			    <el-table-column prop="address" label="被诉人" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="时间" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="状态" width="180">
			    </el-table-column>
			    <el-table-column prop="address" label="处理人" width="180">
			    </el-table-column>
			    <el-table-column prop="address" label="操作" width="180">
			    </el-table-column>
	    	</el-table>
	    </el-tab-pane>
	    <el-tab-pane label="待定" name="undetermined">
	    	<el-table :data="disData" border style="width: 100%"  height="600" class="application-page">
			    <el-table-column prop="date" label="序号" width="90" fixed>
			    </el-table-column>
			    <el-table-column prop="name" label="订单号" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="发起人" width="90">
			    </el-table-column>
			    <el-table-column prop="address" label="被诉人" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="时间" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="状态" width="180">
			    </el-table-column>
			    <el-table-column prop="address" label="处理人" width="180">
			    </el-table-column>
			    <el-table-column prop="address" label="操作" width="180">
			    </el-table-column>
	    	</el-table>
	    </el-tab-pane>
	     <el-tab-pane label="发起/被诉人同意" name="originator">
	    	<el-table :data="disData" border style="width: 100%"  height="600" class="application-page">
			    <el-table-column prop="date" label="序号" width="90" fixed>
			    </el-table-column>
			    <el-table-column prop="name" label="订单号" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="发起人" width="90">
			    </el-table-column>
			    <el-table-column prop="address" label="被诉人" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="时间" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="状态" width="180">
			    </el-table-column>
			    <el-table-column prop="address" label="处理人" width="180">
			    </el-table-column>
			    <el-table-column prop="address" label="操作" width="180">
			    </el-table-column>
	    	</el-table>
	    </el-tab-pane>
	     <el-tab-pane label="已撤销/关闭" name="revoked">
	    	<el-table :data="disData" border style="width: 100%"  height="600" class="application-page">
			    <el-table-column prop="date" label="序号" width="90" fixed>
			    </el-table-column>
			    <el-table-column prop="name" label="订单号" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="发起人" width="90">
			    </el-table-column>
			    <el-table-column prop="address" label="被诉人" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="时间" width="360">
			    </el-table-column>
			    <el-table-column prop="address" label="状态" width="180">
			    </el-table-column>
			    <el-table-column prop="address" label="处理人" width="180">
			    </el-table-column>
			    <el-table-column prop="address" label="操作" width="180">
			    </el-table-column>
	    	</el-table>
	    </el-tab-pane>
	    
	</el-tabs>
  	 <div class="block">
	    
	    <el-pagination
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
</template>

<script>
export default {
 
  data () {
    return {
    	activeName:'news',
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
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],

         disData:null,
        currentPage:1,
        dataSize:4,

    }
  },
  mounted(){
  	this.$refs.subNav.msg="维权";
  	this.calculateRow();
  },
  methods:{
  	handleClick(_value, _event){
  	
  	},
  	//分页的数据处理
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


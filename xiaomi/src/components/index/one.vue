<template>
  <div class="hello">
    <el-table
    :data="tableData4"
    style="width: 100%"
    max-height="1000">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          移除
        </el-button>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="cover" v-for="data1 in datas">
    <input type="text" name="date" v-model="data1.date"/><br /><br />
    <input type="text" name="name" v-model="data1.name"/><br /><br />
    <input type="text" name="province" v-model="data1.province"/><br /><br />
    <input type="text" name="city" v-model="data1.city"/><br /><br />
    <input type="text" name="address" v-model="data1.address"/><br /><br />
    <input type="text" name="zip" v-model="data1.zip"/><br /><br />
    <button @click="sure_input">确定</button>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        datas:[{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        tableData4: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleEdit(index,rows){
        rows.date = '2019-06-09';
        rows.name = '张浚宇';
        rows.province = '内蒙古';
        rows.city = '呼和浩特';
        rows.address = '锦绣园';
        rows.zip = '0986';
      },
      sure_input(){
        this.tableData4[1]=this.datas[0]
      }
    }
  }
</script>
<style scoped>
.hello{
  padding-top:10px;
  width:79%;
  display:inline-block;
}
.cover{
  position: fixed;
  top:50%;
  left:50%;
  width:200px;
  min-height:200px;
  border:1px solid #333;
  padding:10px;
}
</style>

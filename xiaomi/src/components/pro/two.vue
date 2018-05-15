<template>
  <div class="hello">
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini" v-show="is_true">
      <el-form-item label="活动名称">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="sizeForm.type">
          <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
          <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
          <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="sizeForm.resource" size="medium">
          <el-radio border label="线上品牌商赞助"></el-radio>
          <el-radio border label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="qualitative"
        label="性质">
      </el-table-column>
      <el-table-column
        prop="resource"
        label="资源">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        is_true:false,
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: [{
            date: '',
            name: '',
            address: '',
            qualitative:'',
            resource:'',
          }]
      };
    },
    methods: {
      onSubmit() {
        this.is_true = false
        this.tableData[0].date = this.sizeForm.date1+this.sizeForm.date2
        this.tableData[0].name = this.sizeForm.name
        this.tableData[0].address = this.sizeForm.region
        this.tableData[0].qualitative = this.sizeForm.type
        this.tableData[0].resource = this.sizeForm.resource
      }
    },
    mounted(){
         this.is_true = true
    },
    updated(){
      
    }
  };
</script>
<style scoped>
.hello{
  width:79%;
  display:inline-block;
  padding-top:10px;
}
</style>

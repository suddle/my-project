<template>
  <div>
    <w-subnav ref="subNav"></w-subnav>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="待审核" name="news">
      <el-table :data="checkPends" border>
          <el-table-column label="排序" type="index" width="100">
                <template scope="scope">
                  <el-button
                    size="small"
                    @click="">{{scope.$index+1}}</el-button>
                </template>
            </el-table-column>
          <el-table-column prop="bizOrderId" label="订单号">
          </el-table-column>
          <el-table-column prop="refundAccountUserName" label="需退款账户">
          </el-table-column>
          <el-table-column prop="payAccountUserName" label="支付退款账户">
          </el-table-column>
          <el-table-column prop="caption" label="标题">
          </el-table-column>
          <el-table-column prop="amount" label="金额">
          </el-table-column>
          <el-table-column prop="integral" label="积分">
          </el-table-column>
          <el-table-column prop="refundType" label="退款订单类型">
          </el-table-column>
          <el-table-column prop="transMethodName" label="退款方向">
          </el-table-column>
          <el-table-column prop="status" label="退款状态">
          </el-table-column>
          <el-table-column prop="revoke" label="退款撤销状态">
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间">
          </el-table-column>
          <el-table-column prop="deleteTime" label="删除时间">
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template scope="scope">
                  <el-button
                    size="small"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  
                </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待打款" name="undetermined">
        <el-table :data="playWiths" border>
          <el-table-column label="排序" type="index" width="100">
                <template scope="scope">
                  <el-button
                    size="small"
                    @click="">{{scope.$index+1}}</el-button>
                </template>
            </el-table-column>
          <el-table-column prop="bizOrderId" label="订单号">
          </el-table-column>
          <el-table-column prop="refundAccountUserName" label="需退款账户">
          </el-table-column>
          <el-table-column prop="payAccountUserName" label="支付退款账户">
          </el-table-column>
          <el-table-column prop="caption" label="标题">
          </el-table-column>
          <el-table-column prop="amount" label="金额">
          </el-table-column>
          <el-table-column prop="integral" label="积分">
          </el-table-column>
          <el-table-column prop="refundType" label="退款订单类型">
          </el-table-column>
          <el-table-column prop="transMethodName" label="退款方向">
          </el-table-column>
          <el-table-column prop="status" label="退款状态">
          </el-table-column>
          <el-table-column prop="revoke" label="退款撤销状态">
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间">
          </el-table-column>
          <el-table-column prop="deleteTime" label="删除时间">
          </el-table-column>
          <el-table-column prop="note" label="备注">
          </el-table-column>
          <el-table-column prop="address" label="操作" width="140">
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
       <el-tab-pane label="已打款" name="originator">
        <el-table :data="haveMoneys" border>
          <el-table-column label="排序" type="index" width="100">
                <template scope="scope">
                  <el-button
                    size="small"
                    @click="">{{scope.$index+1}}</el-button>
                </template>
            </el-table-column>
          <el-table-column prop="bizOrderId" label="订单号">
          </el-table-column>
          <el-table-column prop="refundAccountUserName" label="需退款账户">
          </el-table-column>
          <el-table-column prop="payAccountUserName" label="支付退款账户">
          </el-table-column>
          <el-table-column prop="caption" label="标题">
          </el-table-column>
          <el-table-column prop="amount" label="金额">
          </el-table-column>
          <el-table-column prop="integral" label="积分">
          </el-table-column>
          <el-table-column prop="refundType" label="退款订单类型">
          </el-table-column>
          <el-table-column prop="transMethodName" label="退款方向">
          </el-table-column>
          <el-table-column prop="status" label="退款状态">
          </el-table-column>
          <el-table-column prop="revoke" label="退款撤销状态">
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间">
          </el-table-column>
          <el-table-column prop="deleteTime" label="删除时间">
          </el-table-column>
          <el-table-column prop="note" label="备注">
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template scope="scope">
                  <el-button
                    size="small"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button><br />
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
  </el-tabs>
     <div class="block">
      <!-- <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[15]"
        :page-size="dataSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination> -->
      <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync=this.refunStarts
            :page-size=this.refunPagesizes
            layout="total, prev, pager, next"
            :total=this.refunTotals>
          </el-pagination>
    </div>
     <el-dialog title="信息编辑" v-model="addNoticeFlag"  class="add-notice-msg">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="理由">
              <el-input v-model="formLabelAlign.title"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addNoticeFlag = false">取 消</el-button>
          <el-button type="primary" @click="ensure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import * as aTypes from '../../vuex/action-types';
import {mapGetters} from 'vuex';
export default {
  data () {
    return {//初始化数据
      activeName:'news',
      labelPosition: 'right',
      ids:1,
      arrId:[],
      // total:this.refunTotals,
      formLabelAlign:{
        title:""
      },
      addNoticeFlag:false,
      disData:null,
      // currentPage:this.refunStarts,
      // dataSize:this.refunPagesizes,
    }
  },
  mounted(){
    this.$refs.subNav.msg="维权";
  },//vue方法
  methods:{
    ensure(){
      if(this.activeName=="news"){
        var _id = this.arrId[0];
        this.addNoticeFlag = false;
        var params = {
          id:_id,
          status:'REFUND_FAIL',
          note:this.formLabelAlign.title
        }
        this.$store.dispatch(aTypes.JUDGEREFUNDORDER, params).then(function(res){

        });
      }else{
         var _id = this.arrId[0];
        this.addNoticeFlag = false;
        var params = {
          id:_id,
          status:'REFUND_SUCCESS',
          note:this.formLabelAlign.title
        }
        this.$store.dispatch(aTypes.JUDGEREFUNDORDER, params).then(function(res){
 
        });
      }
    },
    //编辑处理
    handleEdit(index, row) {
        this.arrId.splice(0,this.arrId.length)
        this.arrId.push(row.id)
        this.addNoticeFlag = true
    },
    //删除处理
    handleDelete(index, row) {
      this.arrId.splice(0,this.arrId.length)
      this.arrId.push(row.id)
      var _id = this.arrId[0];
      var time = new Date()/1000;
      time = parseInt(time);
      var params = {
        id:_id,
        deleteTime:time,
      }
      this.$store.dispatch(aTypes.DELETEREFUNDORDER, params).then(function(res){

        });
      if(this.activeName=="originator"){
          var _index = (this.currentPage-1)*this.dataSize + index;
          this.haveMoneys.splice(_index,1);
      }
      if(this.activeName=="undetermined"){
          var _index = (this.currentPage-1)*this.dataSize + index;
          this.playWiths.splice(_index,1);
      }
      
    },
    //点击切换tab
    handleClick(_value, _event){
        if(this.activeName=='news'){
        var params = {
        status: "REFUND_WAIT"
        };
        this.$store.dispatch(aTypes.GETREFUNDORDERSSHENHE, null).then(function(res){
          
        });
      }
      if(this.activeName=='undetermined'){
        var params = {
        status: "REFUND_FAIL"
        };
        this.$store.dispatch(aTypes.GETREFUNDORDERSDAIDAKUAN, null).then(function(res){
        });
      }
      if(this.activeName=='originator'){
        var params = {
        status: "REFUND_SUCCESS"
        };
        this.$store.dispatch(aTypes.GETREFUNDORDERSYIDAKUAN, null).then(function(res){
       
        });
      }
    },
    // 处理分页
    handleCurrentChange(val) {
      var _page = this.refunPagesizes
      this.currentPage = val;
        var params = {
          start:val,  
          pageSize:_page
        }
        this.$store.dispatch(aTypes.GETREFUNDORDERSSHENHE, params).then(function(res){
        });
    },
    // calculateRow(){
    //   var _arr = [];
    // for(var i = (this.currentPage-1)*this.dataSize,_len = (this.currentPage*this.dataSize>this.tableData.length)?this.tableData.length:this.currentPage*this.dataSize;i<_len;i++){
    //   _arr.push(this.tableData[i]);
    // }
    // this.disData = _arr;
    // }
  },
  //页面初始化
  created(){

    var params = {
      status: "REFUND_WAIT"
      };
      this.$store.dispatch(aTypes.GETREFUNDORDERSSHENHE, null).then(function(res){

      });
  },
  //拿回数据
  computed:{
    ...mapGetters({
      playWiths:'PlayWith',
      haveMoneys:'HaveMoney',
      checkPends:'CheckPend',
      refunStarts:'RefunStart',
      refunPagesizes:'RefunPagesize',
      refunTotals:'RefunTotal'
    }),
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-table .cell{
  width:140px;
}
.el-table_1_column_27 .cell ..el-button{
    display:block;
}
</style>


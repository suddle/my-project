<template>
  <div>
    <w-subnav ref="subNav"></w-subnav>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="待审核" name="report" class="withdraw-wrap">
        <el-table :data="disData" border style="width: 100%">
        <el-table-column label="序号" type="index" width="100">
              <template scope="scope">
                <el-button
                  size="small"
                  @click="">{{scope.$index+1}}</el-button>
              </template>
          </el-table-column>
          <el-table-column prop="type" label="提现类型">
          </el-table-column>
          <el-table-column prop="apply_name" label="提现人">
          </el-table-column>
          <el-table-column prop="bankId" label="收款账号">
          </el-table-column>
          <el-table-column prop="receive_name" label="收款用户名">
          </el-table-column>
          <el-table-column prop="time" label="时间">
          </el-table-column>
          <el-table-column prop="limit" label="提现金额(元)">
          </el-table-column>
          <el-table-column prop="status" label="提现状态">
          </el-table-column>
          <el-table-column prop="" label="操作">
            <template scope="scope">
              <div
                size="small"
                @click="handleEdit(scope.$index, scope.row)">编辑</div>
                   <!-- <el-button @click="touch" prop="scope.row">{{scope.row.id}}</el-button> -->
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane> 
      <el-tab-pane label="已审核" name="platformDecision" class="withdraw-wrap">
        <el-table :data="disData" border style="width: 100%">
          <el-table-column label="序号" type="index" width="100">
           <template scope="scope">
            <el-button
              size="small"
              @click="">{{scope.$index+1}}</el-button>
           </template>
          </el-table-column>
          <el-table-column prop="type" label="提现类型">
          </el-table-column>
          <el-table-column prop="apply_name" label="提现人">
          </el-table-column>
          <el-table-column prop="bankId" label="收款账号">
          </el-table-column>
          <el-table-column prop="receive_name" label="收款用户名">
          </el-table-column>
          <el-table-column prop="time" label="时间">
          </el-table-column>
          <el-table-column prop="limit" label="提现金额(元)">
          </el-table-column>
           <el-table-column prop="status" label="提现状态">
          </el-table-column>
          <!-- <el-table-column prop="" label="操作">
              <template scope="scope">
                  <div
                    size="small"
                    @click="handleEdit(scope.$index, scope.row)">编辑</div>
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
          </el-table-column> -->
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待打款" name="undetermined" class="withdraw-wrap">
        <el-table :data="disData" border style="width: 100%">
          <el-table-column label="序号" type="index" width="100">
           <template scope="scope">
            <el-button
              size="small"
              @click="">{{scope.$index+1}}</el-button>
           </template>
          </el-table-column>
          <el-table-column prop="type" label="提现类型">
          </el-table-column>
          <el-table-column prop="apply_name" label="提现人">
          </el-table-column>
          <el-table-column prop="bankId" label="收款账号">
          </el-table-column>
          <el-table-column prop="receive_name" label="收款用户名">
          </el-table-column>
          <el-table-column prop="time" label="时间">
          </el-table-column>
          <el-table-column prop="limit" label="提现金额(元)">
          </el-table-column>
          <el-table-column prop="status" label="提现状态">
          </el-table-column>
         <!--  <el-table-column prop="" label="操作">
            <template scope="scope">
                  <div
                    size="small"
                    @click="handleEdit(scope.$index, scope.row)">编辑</div>
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
          </el-table-column> -->
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已打款" name="originator" class="withdraw-wrap">
        <el-table :data="disData" border style="width: 100%">
          <el-table-column label="序号" type="index" width="100">
           <template scope="scope">
            <el-button
              size="small"
              @click="">{{scope.$index+1}}</el-button>
           </template>
          </el-table-column>
          <el-table-column prop="type" label="提现类型">
          </el-table-column>
          <el-table-column prop="apply_name" label="提现人">
          </el-table-column>
          <el-table-column prop="bankId" label="收款账号">
          </el-table-column>
          <el-table-column prop="receive_name" label="收款用户名">
          </el-table-column>
          <el-table-column prop="time" label="时间">
          </el-table-column>
          <el-table-column prop="limit" label="提现金额(元)">
          </el-table-column>
           <el-table-column prop="status" label="提现状态">
          </el-table-column>
         <!--  <el-table-column prop="" label="操作">
            <template scope="scope">
                  <div
                    size="small"
                    @click="handleEdit(scope.$index, scope.row)">编辑</div>
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
          </el-table-column> -->
        </el-table>
      </el-tab-pane>
       <el-tab-pane label="已打回" name="revoked" class="withdraw-wrap">
        <el-table :data="disData" border style="width: 100%">
          <el-table-column label="序号" type="index" width="100">
           <template scope="scope">
            <el-button
              size="small"
              @click="">{{scope.$index+1}}</el-button>
           </template>
          </el-table-column>
          <el-table-column prop="type" label="提现类型">
          </el-table-column>
          <el-table-column prop="apply_name" label="提现人">
          </el-table-column>
          <el-table-column prop="bankId" label="收款账号">
          </el-table-column>
          <el-table-column prop="receive_name" label="收款用户名">
          </el-table-column>
          <el-table-column prop="time" label="时间">
          </el-table-column>
          <el-table-column prop="limit" label="提现金额(元)">
          </el-table-column>
          <el-table-column prop="status" label="提现状态">
          </el-table-column>
          <!-- <el-table-column prop="" label="操作">
              <template scope="scope">
                  <div
                    size="small"
                    @click="handleEdit(scope.$index, scope.row)">编辑</div>
                </template>
          </el-table-column> -->
        </el-table>
      </el-tab-pane>
    </el-tabs>
     <div class="bottom-msg flexLine">
         <div class="block flex4">
           <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync=this.dataSize
            :page-size='15'
            layout="total, prev, pager, next"
            :total=total>
          </el-pagination>
        </div>
    </div>
    <!-- <el-dialog title="信息编辑" v-model="addNoticeFlag"  class="add-notice-msg">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="序号" class="add-notice-number">
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
    </el-dialog> -->
    <div class="msg-editor" v-show="addNoticeFlag">
       <div class="msg-wrap">
          <div class="msg-head">
             <span>提现处理</span><span class="el-icon-close close-msg" @click="addNoticeFlag = false"></span>
          </div>
          <div class="msg-content">
               <ul class="kiting">
                 <li>提现申请人 : <strong v-model="apply_name">{{apply_name}}</strong></li>
                 <li>&nbsp;申请金额 : <em v-model="limit">{{limit}}</em></li>
                 <li>&nbsp;申请时间 : <strong v-model="time">{{time}}</strong></li>
                 <li>&nbsp;受理状态 : <em v-model="status">{{status}}</em></li>
                 <li>&nbsp;收款方式 : <strong v-model="bank">{{bank}}</strong></li>
                 <li>&nbsp;收款账号 : <strong v-model="bankId">{{bankId}}</strong></li>
                 <li>收款人姓名 : <em v-model="receive_name">{{receive_name}}</em></li>
                 <hr />
                 <li>&nbsp;&nbsp;&nbsp;操作:
                 <select v-model="selected" class="operate-msg">
                  <option v-for="option in options" v-bind:value="option.value">
                    {{ option.text }}
                  </option>
                </select>
                 </li>
               </ul>
               <div>
                  <span class="ensure" @click="ensure">确定</span><span class="abolish" @click="abolish">取消</span>
               </div>
          </div>
       </div>
    </div>
  </div>
</template>

<script>
import * as aTypes from '../../vuex/action-types';
import {mapGetters} from 'vuex';
export default {
 
  data () {
    return {
      dialogFormVisible:false,
      activeName:'report',
      apply_name:'zjy',
      limit:'',
      time:'',
      status:'',
      bank:'',
      bankId:'',
      receive_name:'',
      selected: '0',
      options: [
        { text: '请选择', value: '0' },
        { text: '待处理', value: '1' },
        { text: '已处理', value: '2' },
      ],
      disData:[{
        type:'true',
        apply_name:'李玉波',
        bankId:'646546875468443464',
        receive_name:'皮皮虾',
        time:'2017-03-05',
        limit:'200',
        status:'待处理',
        bank:'农业银行'
      },
      {
        type:'true',
        apply_name:'李红兵',
        bankId:'646546875468443464',
        receive_name:'皮皮虾',
        time:'2017-03-05',
        limit:'200',
        status:'待处理',
        bank:'农业银行'
      }],
      dataSize:1,
      total:50,
      addNoticeFlag:false,
      labelPosition: 'right',
      pageSize:15,
      formLabelAlign:{
        number:1,
        title:"wwb",
        content:"weffe"
      },
    }
  },
  methods:{
     handleEdit(index, row) {
       this.addNoticeFlag = true;
        this.apply_name = row.apply_name;
        this.bankId = row.bankId;
        this.receive_name = row.receive_name;
        this.time = row.time;
        this.limit = row.limit;
        this.status = row.status;
        this.bank = row.bank;
    },
    ensure(){
        if(this.selected==0){
          this.$message('请选择提现状态')
          return false;
        }
          var params = {
          apply_name:this.apply_name,  
          bankId:this.bankId,
          receive_name:this.receive_name,
          time:this.time,
          limit:this.limit,
          status:this.selected.name,
          bank:this.bank,
          sel:this.selected
        }
        console.log(params)
        // this.$store.dispatch(aTypes.GETREPORTLIST1, params).then(function(res){

        // });
        this.addNoticeFlag = false;
    },
    abolish(){
         this.addNoticeFlag = false;
    },
    handleClick(){
     
    },
    // handleDelete(_id) {
    //   this.$confirm('此操作将删除记录, 是否继续?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     var params = {
    //       id:_id,
    //       is_del:0,
    //     };
    //     this.$store.dispatch(aTypes.DELETEREPORT,params).then(function(res){
    //       window.location.reload();
    //     });
    //     this.$message({
    //       type: 'success',
    //       message: '删除成功!'
    //     });
    //   }).catch(() => {
    //     this.$message({
    //       type: 'info',
    //       message: '已取消删除'
    //     });
    //   });
    // },
    handleCurrentChange(val) {
        var _page = this.reportPagesizes
      this.currentPage = val;
      if(this.activeName=='report'){
          var params = {
          start:val,  
          pageSize:_page
        }
        this.$store.dispatch(aTypes.GETREPORTLIST1, params).then(function(res){

        });
      }
      if(this.activeName=='platformDecision'){
          var params = {
          start:val,  
          pageSize:_page
        }
        this.$store.dispatch(aTypes.GETREPORTLIST1, params).then(function(res){

        });
      }
      if(this.activeName=='undetermined'){
          var params = {
          start:val,  
          pageSize:_page
        }
        this.$store.dispatch(aTypes.GETREPORTLIST1, params).then(function(res){

        });
      }
      if(this.activeName=='originator'){
          var params = {
          start:val,  
          pageSize:_page
        }
        this.$store.dispatch(aTypes.GETREPORTLIST1, params).then(function(res){

        });
      }
      if(this.activeName=='revoked'){
          var params = {
          start:val,  
          pageSize:_page
        }
        this.$store.dispatch(aTypes.GETREPORTLIST1, params).then(function(res){

        });
      }
        
      },
    // calculateRow(){
    //     var _arr = [];
    //   for(var i = (this.currentPage-1)*this.dataSize,_len = (this.currentPage*this.dataSize>this.dealtLists.length)?this.dealtLists.length:this.currentPage*this.dataSize;i<_len;i++){
    //     _arr.push(this.dealtLists[i]);
    //   }
    //   this.disData = _arr;
    //   }
  },
  created(){
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
    this.$refs.subNav.msg="举报处理"
    
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
      height:.4rem;
      line-height:.4rem;
      font-style:.2rem;
      text-indent:2rem;

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
   text-align: center;
    margin-top:.3rem;

    }
   .to-right{
      float:right;
      margin-right: 1rem;
    }
  .to-left{
    float:left;
    margin-left: 1rem;
  }
  .el-button{
    
  }
  .el-tabs__nav-scroll{
    border:1px solid #ddd;
    background:blue;
  }
  .msg-editor{
     position:fixed;
     top:0;
     left:0;
     bottom:0;
     right:0;
     background-color: rgba(0,0,0,.5);
     z-index: 10;
  }
  .msg-wrap{
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-4.2rem;
    margin-top:-2.5rem;
    width:8.4rem;
    height:5rem;
  }
  .msg-head{
    padding:0 .1rem;
    background-color:#E6E6E6;
    height:.4rem;
    line-height: .4rem;
    .close-msg{
      font-size: .12rem;
      float:right;
      line-height: .4rem;
      cursor:pointer;
    }
  }
  .msg-content{
    padding-top:.3rem;
    padding-bottom:1rem;
    background: #fff;
    padding-left: .2rem;
    padding-right: .2rem;
    .kiting{
      margin-bottom: .1rem;
      li{
        font-size: .15rem;
        height:.34rem;
        line-height:.34rem;
        em{
          color:#fe1b46;
          font-style: normal;
        }
        strong{
          color:#000;
        }
        .operate-msg{
          margin-top:.2rem;
          width:1.6rem;
          height:.3rem;
        }
      }
    }
  }
  .ensure{
    width:1rem;
    height:.4rem;
    line-height: .4rem;
    text-align: center;
    background-color: #fe1b46;
    border:1px solid transparent;
    display:inline-block;
    margin-left: .8rem;
    color:#fff;
    font-weight: bold;
    margin-top:.6rem;
    cursor: pointer;
  }
  .abolish{
    width:.7rem;
    height:.4rem;
    line-height: .4rem;
    text-align: center;
    border:1px solid #ddd;
    display:inline-block;
    margin-left: .2rem;
    font-weight: bold;
    cursor: pointer;
  }
  .withdraw-wrap{
  min-height:6.6rem!important;
  }
</style>
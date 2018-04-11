<template>
  <div>
  <el-tabs v-model="activeName" @tab-click="handleClick()">
    <el-tab-pane label="待认证" name="first">
        <template>
          <el-table
            :data="appliIns"
            style="width: 100%" stripe>
            <el-table-column type="expand">
              <template scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="">
                   <div  class="pic-wrap">
                     <img class="companyPic" :src="props.row.business_image" alt="" /><em>{{'身份证正面'}}</em> 
                      <img class="companyPic" :src="props.row.confirmation" alt="" /><em>{{'身份证反面'}}</em>
                      <img class="companyPic" :src="props.row.idcardback_image" alt="" /><em>{{'公司营业执照'}}</em>
                      <img class="companyPic" :src="props.row.idcardfront_image" alt="" /><em>{{'店铺/负责人确认函'}}</em>
                   </div>
                </el-form-item> 
              </el-form>
              </template>
            </el-table-column>
            <el-table-column label="排序" type="index" width="100">
                <template scope="scope">
                  <el-button
                    size="small"
                    @click="">{{scope.$index+1}}</el-button>
                </template>
            </el-table-column>
            <el-table-column label="用户名" prop="name"></el-table-column>
            <el-table-column label="负责人姓名" prop="real_name"></el-table-column>
            <el-table-column label="负责人身份证号" prop="idcard_no"></el-table-column>
            <el-table-column label="法人姓名" prop="corporation"></el-table-column>
            <el-table-column label="公司名称" prop="name"></el-table-column>
            <el-table-column label="公司注册地址" prop="address"></el-table-column>
            <el-table-column label="申请时间" prop="create_time"></el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button type="text" @click="open(scope.row.id,scope.row.user_id)">通过</el-button>
                 <el-button type="text" @click="dialogFormVisible = true">驳回</el-button>
                <el-dialog title="审核不通过" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
                    <el-form-item label="驳回理由" :label-width="formLabelWidth">
                      <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addCategory(scope.row.id,scope.row.user_id)">确 定</el-button>
                  </div>
                </el-dialog>
              </template>
             </el-table-column>
            </el-table>

        </template>
        <div class="count_handle" v-if="this.realnameTotal>0">注：共有{{this.realnameTotal}}项入驻申请需要操作</div>
        <div class="count_handle" v-else>注：共有0项入驻申请需要操作</div>
    </el-tab-pane>
    <el-tab-pane label="认证通过" name="second">
        <template>
          <el-table
            :data="appliIns"
            style="width: 100%" stripe>
            <el-table-column type="expand">
              <template scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="">
                  <div  class="pic-wrap">
                      <img class="companyPic" :src="props.row.business_image" alt="" /><em>{{'身份证正面'}}</em> 
                      <img class="companyPic" :src="props.row.confirmation" alt="" /><em>{{'身份证反面'}}</em>
                      <img class="companyPic" :src="props.row.idcardback_image" alt="" /><em>{{'公司营业执照'}}</em>
                      <img class="companyPic" :src="props.row.idcardfront_image" alt="" /><em>{{'店铺/负责人确认函'}}</em>
                  </div>
                </el-form-item>
              </el-form>
              </template>
                </el-table-column>
                      <el-table-column label="排序" type="index" width="100">
                      <template scope="scope">
                        <el-button
                          size="small"
                          @click="">{{scope.$index+1}}</el-button>
                      </template>
                  </el-table-column>
                  <el-table-column label="用户名" prop="name"></el-table-column>
                  <el-table-column label="负责人姓名" prop="real_name"></el-table-column>
                 <el-table-column label="负责人身份证号" prop="idcard_no"></el-table-column>
                  <el-table-column label="法人姓名" prop="corporation"></el-table-column>
                  <el-table-column label="公司名称" prop="name"></el-table-column>
                  <el-table-column label="公司注册地址" prop="address"></el-table-column>
                  <el-table-column label="申请时间" prop="create_time"></el-table-column>
                  </el-table-column>
                </el-table>
        
        </template>
    </el-tab-pane>
    <el-tab-pane label="认证驳回" name="third">
        <template>
          <el-table
            :data="appliIns"
            style="width: 100%" stripe>
            <el-table-column type="expand">
              <template scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="">
                   <div  class="pic-wrap">
                      <img class="companyPic" :src="props.row.business_image" alt="" /><em>{{'身份证正面'}}</em> 
                      <img class="companyPic" :src="props.row.confirmation" alt="" /><em>{{'身份证反面'}}</em>
                      <img class="companyPic" :src="props.row.idcardback_image" alt="" /><em>{{'公司营业执照'}}</em>
                      <img class="companyPic" :src="props.row.idcardfront_image" alt="" /><em>{{'店铺/负责人确认函'}}</em>
                  </div>
                </el-form-item>
              </el-form>
              </template>
                </el-table-column>
                 <el-table-column label="排序" type="index" width="100">
                  <template scope="scope">
                    <el-button
                      size="small"
                      @click="">{{scope.$index+1}}</el-button>
                  </template>
                  </el-table-column>
                  <el-table-column label="用户名" prop="name"></el-table-column>
                  <el-table-column label="负责人姓名" prop="real_name"></el-table-column>
                  <el-table-column label="负责人身份证号" prop="idcard_no"></el-table-column>
                  <el-table-column label="法人姓名" prop="corporation"></el-table-column>
                  <el-table-column label="公司名称" prop="name"></el-table-column>
                  <el-table-column label="公司注册地址" prop="address"></el-table-column>
                  <el-table-column label="申请时间" prop="create_time"></el-table-column>
                  <el-table-column label="驳回理由" prop="message"></el-table-column>
                  </el-table-column>
                </el-table>
        </template>
    </el-tab-pane>
  </el-tabs>
  <!-- <div class="count_handle">注：共有{{this.realnameTotal}}项入驻申请需要操作</div> -->
  
     <div class="bottom-msg flexLine">
      <div class="block flex4">
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync=this.realnameStart
            :page-size='15'
            layout="total, prev, pager, next"
            :total=this.realnameTotal>
          </el-pagination>
        <!-- current-page 当前页 -->
        <!-- total 总条目数 -->
        <!-- page-count 总页数 -->
        <!-- page-size 每页显示条目个数 -->
      </div>
    </div>
    <div class="cover">
        <div class="cover-wrap">
            <img src="" alt="" />
        </div>      
    </div>
  </div>
</template>

<script>
import * as aTypes from '../../vuex/action-types';
import {mapGetters} from 'vuex';
  export default {
    data() {
      return {
        activeName: 'first',
        dialogImageUrl: '',
        dialogVisible: false,
        dialogFormVisible:false,
        dialogFormVisible: false,
        currentPage:15,
        dataSize:15,
        total:this.realnameTotal,
        form: {
          name: '',
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
       addCategory(_id,_uId){//点击弹出框的确定
        if(this.form.name==''){
            this.$message('请输入驳回理由')
            return false;
          }
          this.dialogFormVisible = false;
          var datas = {
            id:_id,
            status:'AUDIT_FAIL',
            message: this.form.name,
            userId:_uId
          }
          this.$store.dispatch(aTypes.STARTSHOP_URL,datas).then(function(res){
            window.location.reload();
         })
          },
        handleClick() {//点击切换页面的tab
            
            if(this.activeName=="first"){
              var params = {
                status: "AUDIT"
              }
              this.$store.dispatch(aTypes.GETPAYEDSHOP,params).then(function(res){

              });
            };
            if(this.activeName=="second"){
              var params = {
              status: "ENTER_FEE_SUCCESS"
              }
              this.$store.dispatch(aTypes.GETPAYEDSHOP,params).then(function(res){

              })
            }
            if(this.activeName=="third"){
              var params = {
              status: "AUDIT_FAIL"
              }
              this.$store.dispatch(aTypes.GETPAYEDSHOP,params).then(function(res){

              })
            }
        },
        open(_id,_uId) {//点击通过
        this.$alert('您的信息已审核通过', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            var datas = {
            id:_id,
            status:'ENTER_FEE_SUCCESS',
            message: '通过',
            userId:_uId
            }
            this.$store.dispatch(aTypes.STARTSHOP_URL,datas).then(function(res){
              window.location.reload();
           });
          }
        });
      },
       handleCurrentChange(val) {
       this.realnameStart= val;
        //分页的请求
        if(this.activeName=="first"){
          var params = {
            start:val,
            pageSize:15,
            status: "AUDIT"
          }
          this.$store.dispatch(aTypes.GETPAYEDSHOP, params).then(function(res){
           
          });
        }
        if(this.activeName=="second"){
          var params = {
            start:val,
            pageSize:15,
            status: "ENTER_FEE_SUCCESS"
          }
          this.$store.dispatch(aTypes.GETPAYEDSHOP, params).then(function(res){
           
          });
        }
        if(this.activeName=="third"){
          var params = {
            start:val,
            pageSize:15,
            status: "AUDIT_FAIL"
          }
          this.$store.dispatch(aTypes.GETPAYEDSHOP, params).then(function(res){

          });
        }
      },
     },
    created(){//页面的初始化
      var params = {
        status: "AUDIT"
      }
      this.$store.dispatch(aTypes.GETPAYEDSHOP,params).then(function(res){
     
      })
    },
     computed:{//后台拿取数据
    ...mapGetters({
      appliIns:'AppliIn',
      realnameStart:'RealnameStart',
      realnameTotal:'RealnameTotal'
    }),
    },
    mounted(){
        $(document).on('click',".companyPic",function(e){
          $('.cover-wrap').find('img').attr('src','');
          e.stopPropagation();
          var img = $(this).attr('src')
             $('.cover').show();
            $('.cover-wrap').find('img').attr('src',img);
        });
        $(document).on('click',function(){
          $('.cover').hide();
        })
  }
}
</script>
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-bottom: 0;
    width: 100%;
    overflow:hidden;
    min-height:2rem;
  }
  .el-table__expanded-cell{
    background-color: #999999;
  }
  .el-table__expanded-cell:hover{
    background-color: #999999;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
   .el-form-item__content img{
    width:3.2rem;
    height:2rem;
  }
 .cover{
  display:none;
  position:fixed;
  top:0px;
  left:0px;
  bottom:0px;
  right:0px;
  z-index: 1000;
  background-color: rgba(0,0,0,.5);
}
.cover-wrap{
  width:500px;
  height:500px;
  background-color: #fff;
  position:absolute;
  top:50%;
  left:50%;
  margin-top:-250px;
  margin-left:-250px;
  line-height: 500px;
  text-align: center;
}
.cover-wrap img{
  width:100%;
  max-height:100%;
  vertical-align: middle;
}
.el-tabs__header{
  border:1px solid #ddd;
}
.bottom-msg{
      margin-top: .3rem;

}
.el-tabs__content{
    min-height:6.6rem;
  }
.pic-wrap{
  position:relative;
}
.pic-wrap em{
    position:absolute;
    bottom:0rem;
    font-style: normal;
    margin-left: -2rem;
}
.pic-wrap i{
    position:absolute;
    bottom:2.3rem;
    font-style: normal;
    margin-left: -2rem;
}
.pic-wrap img{
    margin-bottom: .2rem;
}
.el-form-item{
  height:auto!important;
  border:0px;
}
.count_handle{
  margin-top:.1rem;
}
</style>
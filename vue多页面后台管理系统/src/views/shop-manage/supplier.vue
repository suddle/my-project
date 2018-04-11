<template>
 <div>
 <w-subnav ref="subNav"></w-subnav>
  <el-table
    :data="bussinManagers"
    stripe
    style="width: 100%">
      <el-table-column label="排序" type="index" width="100">
          <template scope="scope">
            <el-button
              size="small"
              @click="">{{scope.$index+1}}</el-button>
          </template>
      </el-table-column>
      <el-table-column prop="real_name" label="负责人姓名"></el-table-column>
      <el-table-column prop="name" label="公司名称"></el-table-column>
      <el-table-column prop="shop_count" label="店铺数量"></el-table-column>
      <el-table-column prop="fav_count" label="收藏数量"></el-table-column>
  </el-table>
  <div class="bottom-msg1 flexLine">
   <div class="block flex4">
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync=this.suppliStarts
      :page-size='15'
      layout="total, prev, pager, next"
      :total=this.suppliTotals>
    </el-pagination>
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
import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
         disData:null,
        currentPage:this.suppliStarts,
        dataSize:this.suppliPageSizes,
        total:this.suppliTotals,
      
      }
    },
    methods:{
      handleCurrentChange(val) {
        this.suppliStarts = val;
        var _arr = [];
        var params = {
          start:val,
          pageSize:this.suppliPageSizes
        }
        this.$store.dispatch(aTypes.BUSINESSMANAGER, params).then(function(res){
       
        });
      },
   
    },
    created(){
      var params ={

      }
      this.$store.dispatch(aTypes.BUSINESSMANAGER, null).then(function(res){
    
      });
    },
    computed:{
     ...mapGetters({
      bussinManagers:'BussinManager',
      suppliStarts:'SuppliStart',
      suppliPageSizes:'SuppliPageSize',
      suppliTotals:'SuppliTotal'
    }),
    },
    mounted(){
      this.$refs.subNav.msg="商家管理";
        $(document).on('click',".shopPic",function(e){
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
<style type="text/css">
  .el-pagination{
    margin:.3rem 0;
  }
  
  .el-form-item{
    height:.5rem;
    display:flex;
    justify-content: center;
    border:1px solid #ccc;
    align-items: center;
    padding:.5rem;
  }
  .el-form-item__content img{
     color:red;
      height:.5rem;

  }
  .el-form-item__content div{
    color:red;
    display:flex;
    text-align: center;
  }
  .wrap-text .el-form-item{
    height:auto;
    padding:.1rem;
    background-color:#F6F3EE;
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
}
.cover-wrap img{
  width:500px;
  max-height: 500px;
  vertical-align: middle;
}
.el-tabs__content{
    min-height:6.6rem;
  }
.bottom-msg1{
      margin-top: .3rem;
      position:absolute;
      bottom:.1rem;
      margin-left: .3rem;
      text-align: center;
      left:50%;
}
</style>
<template>
  <div>
    <w-subnav ref="subNav"></w-subnav>
    <!-- <el-tabs  @tab-click="handleClick"></el-tabs> -->
      <div style="margin: 0px 0 20px .3rem;"> <el-button class="flex1" @click="updateMethod">保存</el-button></div>
      <template>
      <div class="friend-wrap">
          <div class="wrap-table">
            <el-form :label-position="labelPosition" label-width="80px" :model="matchPoster">
            <!-- <div class="size-require">撮合广告图</div> -->
            <br>
             <div class="flexLine item table-colum">
              <span>尺寸要求 : </span>
              <span class="size-ask">242X92 PX</span>
            </div>
            <div class="flexLine item table-colum">
              <span>标&nbsp;&nbsp;题</span>
              <span><el-input placeholder="我要撮合" v-model="matchPoster.describe"></el-input></span>
            </div>
            </el-form>
              <div @click="uploadMatch($event,index)" class="uploads"><img :src="matchPoster.pic" alt="我要撮合广告图" class="avatar"/></div>
        </div>
        <div class="wrap-table">
            <el-form :label-position="labelPosition" label-width="80px" :model="supplierPoster">
            <!-- <div class="size-require">供应商广告图</div> -->
            <br>
             <div class="flexLine item table-colum">
              <span>尺寸要求 : </span>
              <span class="size-ask">242X92 PX</span>
            </div>
            <div class="flexLine item table-colum">
              <span>标&nbsp;&nbsp;题</span>
              <span><el-input placeholder="成为供应商" v-model="supplierPoster.describe"></el-input></span>
            </div>
              </el-form>
              <div @click="uploadSupplier($event,index)" class="uploads"><img :src="supplierPoster.pic" alt="成为供应商广告图" class="avatar"/></div>
        </div>
      </div>
      
    </template>

  </div>
</template>
<script>
import * as aTypes from '../../vuex/action-types';
import {mapGetters} from 'vuex';
import {UploaderBuilder,Uploader} from 'qiniu4js';

export default {
     data () {
    return {
        imageUrl: '',
        labelPosition: 'right',
        arr1:[
        {
          picName:'',
          ready:true,
        }
        ],
        arr2:[
        {
          picName:'',
          ready:true,
        }
        ]
    }
  },
  computed:{
    ...mapGetters({
      matchPoster: "MatchPoster",
      supplierPoster: "SupplierPoster",
      snsPosterIds:"SnsPosterId"

    }),
  },
  mounted(){
    this.$refs.subNav.msg="广告管理";
    var _this = this;
    this.$store.dispatch(aTypes.GETSNSPOSTER, null).then(function(res){

     });
  },
  methods:{
    handleClick(_value, _event){
   
    },
    imgUpload(_this,_index){
          let uploadImg = new UploaderBuilder()
            .debug(false)//开启debug，默认false
            .retry(10)//设置重传次数，默认0，不重传
            .compress(0.5)//默认为1,范围0-1
            .scale([242,92]) //第一个参数是宽度，第二个是高度,[200,0],限定高度，宽度等比缩放.[0,100]限定宽度,高度等比缩放.[200,100]固定长宽
            .size(1024*1024)//分片大小，最多为4MB,单位为字节,默认1MB
            .chunk(true)//是否分块上传，默认true，当chunk=true并且文件大于4MB才会进行分块上传
            .auto(true)//选中文件后立即上传，默认true
            .multiple(true)//是否支持多文件选中，默认true
            .accept(['image/jpg,image/jpeg,image/png'])//过滤文件，默认无，详细配置见http://www.w3schools.com/tags/att_input_accept.asp
            // 如果saveKey中有需要在客户端解析的变量，则忽略该值。
            .tokenShare(false)
            // 设置token获取函数，token获取完成后，必须调用`setToken(token);`不然上传任务不会执行。
            .tokenFunc(function (setToken,task) {
                  var params = {
                    key:_this.picName
                  };
                _this.$store.dispatch(aTypes.QUERY_QINIU_UPLOADTOKEN,params).then((res)=>{
                  res = JSON.parse(res);
                    setToken(res.token);

                });
            })
            //任务拦截器
            .interceptor(

            )
            .listener({
                    onReady(tasks) {
                    },onStart(tasks){
                    },onTaskProgress: function (task) {
                    },onTaskSuccess(task){
                        _this.pic = task.file.name;
                        let url = "https://img.chuanshangjia.com/"+task.result.key;
                        if (_index == 0) {_this.matchPoster.pic = url;}
                        if (_index == 1) {_this.supplierPoster.pic = url;}
                    },onTaskFail(task) {

                        //一个任务在经历重传后依然失败后回调此函数
                        Toast({
                            message: task.error,
                            duration: 1000
                        });
                    },onTaskRetry(task) {
                        //开始重传
                    },onFinish(tasks){
                        //所有任务结束后回调，注意，结束不等于都成功，该函数会在所有HTTP上传请求响应后回调(包括重传请求)。
                        _this.ready = true;
                    }
            });
          return uploadImg.build();
    },
    updateMethod(){
      var _this = this;
      var time = new Date()/1000;
      time = parseInt(time);
      var _matchPoster = JSON.stringify(this.matchPoster);
      var _supplierPoster = JSON.stringify(this.supplierPoster);
      if (this.snsPosterIds == null) {
        var params = {
          id:1,
          matchPoster:_matchPoster,
          supplierPoster:_supplierPoster,
          uploadTime:time
        };
      }else{
        var params = {
          id:this.snsPosterIds,
          matchPoster:_matchPoster,
          supplierPoster:_supplierPoster,
          uploadTime:time
        };
      }
      
        this.$store.dispatch(aTypes.UPDATESNSPOSTER, params).then(function(res){

           if(res.code==200){
            _this.$message ('更新成功')
           }
           if(res.code==400){
            _this.$message ('更新失败')
           }
        });
    },
    uploadMatch(e,i){//上传撮合图片
      i = 0;
      var img={
          picName:'',
          ready:true,
      }
      this.ready = true;
      this.arr1.push(img)
      var _index = i;

      this.arr1[0].picName = this.imgUpload(this,_index);
       this.pic = this.imgUpload(this,_index);
      if(this.arr1[0].picName  && this.arr1[0].ready){
         this.ready = false;
         this.arr1[0].picName.chooseFile();
      }
    },
    uploadSupplier(e,i){//上传供应商图片
      i = 1;
      var img={
          picName:'',
          ready:true,
      }
      this.ready = true;
      this.arr2.push(img)
      var _index = i;
   
      this.arr2[0].picName = this.imgUpload(this,_index);
       this.pic = this.imgUpload(this,_index);
      if(this.arr2[0].picName  && this.arr2[0].ready){
         this.ready = false;
         this.arr2[0].picName.chooseFile();
      }
    }

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .router-box{
        padding:.2rem;
    }
    .el-form--label-right{
        width:80%;
    padding-right: .5rem;
    .size-require{
        display:inline-block;
        color: rgb(106, 88, 72);
        font-size: 14px;
        margin-left: .13rem;
        margin-bottom: .1rem;
        em{
            font-style: normal;
            color:#fe1b46;
        }
    }
   }
   .el-tabs__content{
    display:inline-block;
   }
   .cu{
    margin-left: .15rem;
    width:1.6rem;
    height:.6rem;
    background-color: #F8F9FC;
    text-align: center;
    line-height: .6rem;
    font-size: 12px;
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
    text-align: center;
  }
  .avatar {
    width: 242px;
    height: 92px;
    display: block;
    line-height: 92px;
    text-align: center;
  }
  .wrap-table{
    margin-left: .2rem;
    margin-right: 1rem;
    width:30%;
    float: left;
  }
  .size-ask{
  color:#fe1b46;
  font-size:.18rem;
  font-weight: bold;
}
.form-circle{
  margin-top:.2rem;
  width:2.4rem;
  height:.9rem;
  img{
    width:100%;
    height:100%;
    line-height: .9rem;
    text-align: center;
  }
}
.table-colum{
    margin-bottom: .1rem;
    height:.4rem;
    line-height: .4rem;
    span{
      width:1rem;
      white-space: nowrap;
    }
    .el-input{
      width:4rem;
      border-radius: 0px;
    }
    em{
      color:#fe1b46;
      font-style: normal;
    }
  }
  .uploads{
    margin-top:.4rem;
  }
  .friend-wrap{
    border:1px solid #ddd;
    padding:1rem;
    overflow:hidden;
    background-color: #fff;
  }
  .el-input__inner{
    border-radius: 0px!important;
  }
</style>

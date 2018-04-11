<template>
  <div>
    <w-subnav ref="subNav"></w-subnav>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-select v-model="value" placeholder="请选择"  @visible-change="addObj(value)"  @change="addNew(value)">
        <el-option
          v-for="item in OptionSels"
          :key="item.label"
          :label="item.label"
          :value="item.label">
        </el-option>
      </el-select>
      <el-button type="primary" @click="tijiao"  ref="tijiao">提交</el-button>
        <el-tab-pane label="商品库" name="Poster" ref="shopGoods">
            <div style="margin:20px;"></div>
            <div v-for="(item,index) in allIndustry" class="nav-upload">
            <div class="clothes-class nav-upload-head"  v-model="value">{{item.title}}(品类图3-5个；广告图三选一形式)<el-button type="text" @click="delPoster(index)">删除</el-button></div>
               <el-form :label-position="labelPosition" label-width="80px" v-for="(item,index) in item.data">
                <div class="size-require"> <el-button type="primary" class="btn-save" @click="addOptimization" >增加</el-button></div>
              <el-form-item label="标题">
                <el-input v-model="item.title" placeholder="请输入内容"></el-input>
              </el-form-item>
              <el-form-item label="链接地址">
                <el-input v-model="item.url" placeholder="请输入内容"></el-input>
              </el-form-item>
              <!-- div class="image-box img-size"><w-image-upload width="100" height="100" :cb="getImageMsg" :imgUrl="item.pic"></w-image-upload></div> -->
              <div @click="uploaderBusiness($event)"  class="uploads"><img :src="item.pic" alt="" /><input type="hidden" value="" /></div>
            </el-form> 
            </div>
        </el-tab-pane>
        <el-tab-pane label="全部分类" name="optimization" ref="allClass">
            <div class="flex1 to-save">
                <!--<el-button type="primary" class="btn-save" @click="addOptimization">增加</el-button>
                <el-button type="primary" class="btn-save" @click="savePoster">保存</el-button>-->
            </div>
            <div class="set-overflow">
             <div v-for="(item,index) in allCurrent" class="nav-upload">
              <div class="clothes-class nav-upload-head"  v-model="value">{{item.title}}(品类图3-5个；广告图三选一形式)<el-button type="text" @click="delPoster(index)">删除</el-button></div>
               <div class="banner-list flexLine" v-for="(item, index) in item.data" ref="navbar">
                <!-- <div class="image-box flex1"><w-image-upload width="68" height="68" :cb="getImageMsg" :imgUrl="item.pic"></w-image-upload></div> -->
                
                    <div class="flex1 banner-brief">
                        <div class="flexLine item">
                            <span class="">标　　题</span>
                            <span class="flex4"><el-input v-model="item.title" placeholder="请输入内容"></el-input></span>
                        </div>
                        <div class="flexLine item">
                            <span class="">链接地址</span>
                            <span class="flex4"><el-input v-model="item.url" placeholder="请输入内容"></el-input></span>
                        </div>
                        <div @click="allClass($event)"  class="uploads active"  :id="bucketName" :imgUrl="item.pic">上传图片<input type="hidden" value="" /></div>
                    </div>
                </div>
                </div>
            </div> 
        </el-tab-pane>
    </el-tabs>
   
  </div>
</template>

<script>
import * as aTypes from '../../vuex/action-types';
import {mapGetters} from 'vuex';
import {UploaderBuilder,Uploader} from 'qiniu4js';

export default {
  data () {
    return {
        picName:'',
        bucketName:'upload',
        index1:0,
        index2:0,
        imageUrl: '',
        uploaderBusinessImg:'',
        labelPosition: 'right',
        allIndustry:[],
        allCurrent:[],
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        //banner的模拟数据
        sortList:[{urlLink:"",imgUrl:""},{urlLink:"",imgUrl:""}],
        urlLink:"",
        activeName:'Poster',
        disData:null,
    }
  },
  mounted(){
    // this.$refs.subNav.msg="广告管理";
    this.calculateRow();
  },
  watch:{
    "imageUrl":function(){
        this.logoList[this.index1][this.index2].imgUrl = this.imageUrl;
    }
  },
  computed:{
    ...mapGetters({
      OptionSels:'OptionSel',
      ShopStorages:'ShopStorage',
      ShopCategorys:'ShopCategory',
    }),
  },
  mounted(){
    this.$refs.subNav.msg="广告管理";
    this.calculateRow();
     var params = {
      data: "data2"
    };
    var _this = this;
    this.$store.dispatch(aTypes.GETGOODSSORT, params).then(function(res){
            // console.log(res)
    });
  },
  created(event){
            /* var _this = this;
           if(!this.uploaderBusinessImg){
            let uploaderBusinessImg = new UploaderBuilder()
            .debug(false)//开启debug，默认false
            .retry(10)//设置重传次数，默认0，不重传
            .compress(0.5)//默认为1,范围0-1
            .scale([300,120]) //第一个参数是宽度，第二个是高度,[200,0],限定高度，宽度等比缩放.[0,100]限定宽度,高度等比缩放.[200,100]固定长宽
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
                  console.log(res.token)
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
                        _this.picName = task.file.name;
                        let url = "http://static.chuanshangjia.com/"+task.result.key;
                         let upObj = task.file.name;
                         if(_this.activeName=='Poster'){
                          _this.posterLists[0].pic = url;
                         }
                         if(_this.activeName=='optimization'){
                          _this.PostYouxuans[0].pic = url;
                         }  
                         if(_this.activeName=='sort'){
                          // _this.allIndustry[0].pic = url;
                         }
                    },onTaskFail(task) {
                       console.log(task)
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
            this.uploaderBusinessImg = uploaderBusinessImg.build();
          }   */
  },
  methods:{
    uploaderBusiness(e){
      if(this.uploaderBusinessImg && this.ready){
           console.log(this.uploaderBusinessImg);
        this.ready = false;
        this.uploaderBusinessImg.chooseFile();
      }
    },
    allClass(e){
      if(this.uploaderBusinessImg && this.ready){
           console.log(this.uploaderBusinessImg);
        this.ready = false;
        this.uploaderBusinessImg.chooseFile();
      }
    },
    tijiao(){
      if(this.activeName=="Poster"){
            var  _data1 = JSON.stringify(this.allIndustry);
            console.log(this.itemId)

            var params = {
             id:1,
             data: 'data2',
             content:_data1
            };
            var _this = this;
            this.$store.dispatch(aTypes.UPDATEGOODS, params).then(function(res){
                 console.log(res)
            });
        }
        if(this.activeName=="optimization"){
                var _data2 = JSON.stringify(this.allCurrent);
                var params = {
                 id:1,   
                 data: "data3",
                 content:_data2
                };
                 var _this = this;
                 this.$store.dispatch(aTypes.UPDATEGOODS, params).then(function(res){
                         console.log(res)
                });

        }
    },
    addObj(value){
      var params = {
      status: "SUCCESS"
      };
      var _this = this;
      this.$store.dispatch(aTypes.GETOPTION_URL, null).then(function(res){
          
      });
    },
    delPoster(index){

        if(this.activeName=="Poster"){
            // this.$refs.shopGoods.remove();
            this.ShopStorages.splice(index,1);
        }
        if(this.activeName=="optimization"){
            // this.$refs.allClass.remove();
            this.ShopCategorys.splice(index,1);
        }
    },
    addOptimization(){
        var _obj = {
            title:"",
            urlLink:"",
            imgLink:""
        },
        ShopStorages = this.ShopStorages.unshift(_obj);
    },
    delOptimization(index){
        this.optimizationList.splice(index,1);
    },
    addNew(value){
         if(this.activeName=="Poster"){
            var arr = [];
            var data = {
              title:value,
              data:this.ShopStorages
            }
            arr.push(data);
            this.allIndustry = this.allIndustry.concat(arr);
         }
         if(this.activeName=="optimization"){
            var arr = [];
            var data = {
              title:value,
              data:this.ShopCategorys
            }
            arr.push(data);
            this.allCurrent = this.allCurrent.concat(arr);
         }
      
    },
   //获取图片的上传信息
    getImageMsg(_value){
        let _img = _value;
        console.log(this._img)
    },
    //保存上传的logo的索引值
    handleChangeIndex(_index1,_index2){
        var e = e||window.event;
        e.stopPropagation();
        console.log(_index1,_index2);
        this.index1 = _index1;
        this.index2 = _index2;
    },
    //点击事件的处理
    handleClick(_value, _event){
            if(this.activeName=="Poster"){
              var params = {
              data: "data2"
            };
            this.$store.dispatch(aTypes.GETGOODSSORT, params).then(function(res){
                    // console.log(res)
            });
            }
            if(this.activeName=="optimization"){
               var params = {   
                data: "data3"
                };
                var _this = this;
                this.$store.dispatch(aTypes.GETGOODSSORTS, params).then(function(res){
                        // console.log(res)
                });
            }
    },

    //处理分页函数
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.dataSize = val;
        this.calculateRow();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        var _arr = [];
      
        this.calculateRow();
        console.log(`当前页: ${val}`);
      },
      //计算分页后的数据排序
      calculateRow(){
        var _arr = [];
        /*for(var i = (this.currentPage-1)*this.dataSize,_len = (this.currentPage*this.dataSize>this.tableData.length)?this.tableData.length:this.currentPage*this.dataSize;i<_len;i++){
            _arr.push(this.tableData[i]);
        }*/
        this.disData = _arr;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.img-size{
    width:1rem;
    height:1rem;
}
.img-size .image-upload-box{
    width:1rem!important;
    height:1rem!important;
}
    .el-tabs{
       padding:.3rem;
    }
    .el-select{
        margin:.2rem 0;
    }
    .el-tabs__nav-scroll{
        margin-bottom:.3rem;
    }
    .set-overflow{
        overflow:visible;
        width:100%;
        margin-top: .3rem;
    }
    .el-tab-pane{   
        overflow-y:scroll;
    }
    .image-box{
       display:inline-block;
       margin-right: .2rem;
    }
    .banner-list{
        margin-bottom:1.3rem;
        display:inline-block;
        width:50%;
        .banner-brief{
            display:inline-block;
            height:100%;
            vertical-align: top;
            .flex1{

                text-align: right;
                margin-right: .2rem;
            }
            .flex4{
                flex:9;
                margin-left: .2rem;
            }
          .flexLine{
            display:flex;
            justify-content: space-around;
           
            em{
                color:#fe1b46;
                font-style: normal;
            }
          }
        }
        .item{
            margin-top: .3rem;
        }
        .to-save{
            height:100%;
        }
        .btn-save{
            width:1.4rem;
            height:.4rem;
            margin-top:.5rem;
            margin-left:.1rem;
            background-color: #fe1b46;
        }
    }
    .grops-upload-logo{
        height:3rem;
        width:10rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-left: 1rem;
        margin-top: .5rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        vertical-align: center;
    }
    .upload-logo-box{
        width:25%;
        height:50%;
    }
    .save-box{
        height: 1rem;
    }
    .imgLink{
        height: .2rem;
    }
    .el-button--primary{
        background-color: #20a0ff;
        border:0px;
        display: block;
        font-size: 12px;
    }
    .btn-save{
        background-color:#fe1b46;
     }
    .clothes-class{
        display:flex;
        height:.4rem;
        line-height: .4rem;
        justify-content: space-between;
        border-bottom:1px solid #ccc;
        margin-bottom: .2rem;
        font-size: 12px;
        color:#ccc;
        .el-button{
            padding-right:.2rem;
            color: #20a0ff;
        }
    }
   .el-form--label-right{
    float:left;
    width:30%;
    display:inline-block;
    padding-right: 2.5rem;
    margin-bottom:.3rem;
    .size-require{
        color: rgb(106, 88, 72);
        display:flex;
        font-size: 14px;
        margin-left: .13rem;
        justify-content: space-between;
        margin-bottom: .1rem;
    }
   }
   .uploads{
    cursor: pointer;
    width:1rem;
    height:1rem;
    background-color: #F8F9FC;
    text-align: center;
    line-height: 1rem;
    font-size:14px;
    color: #ccc;
  }
  .uploads.active{
    margin-top:.2rem;
  }
  .uploads.cur{
    width:4rem;
    height:4rem;
    line-height:4rem;
    margin:0 2rem 0 .3rem;
  }
  .nav-upload{
      overflow:hidden;
    }
    .nav-upload-head{
      margin-bottom: .2rem;
      height:.3rem;
      line-height: .3rem;
      padding-left: .5rem;
      background-color: #ddd;
    }
</style>


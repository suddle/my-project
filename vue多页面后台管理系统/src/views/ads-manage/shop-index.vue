<template>
  <div>
  <w-subnav ref="subNav"></w-subnav>
    <div class="flex1 to-save-reload" v-model="ProgramIds">
          <el-button type="primary" class="btn-save" @click="publishPoster">发布</el-button>
          <el-button type="primary" class="btn-save" @click="savePoster()">保存</el-button>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="首页海报设置" name="Poster">
        <div class="flex1 to-save poster-btn">
          <el-button type="primary" class="btn-save" @click="addKong" v-show="firstShow">增加</el-button>
        </div>
        <div class="set-overflow">
           <div class="banner-list flexLine" v-for="(item, index) in posterLists">
              <div @click="uploadPic($event,index)"  class="uploads cur"><img :src="item.pic" alt="首页海报图" /><input type="hidden" value="" /></div>
                <div class="flex1 banner-brief poster-slide-right">
                  <div class="flexLine item" style="height:.4rem;">
                    <span class="flex1">尺寸要求</span>
                    <span class="flex4 size-ask">400X1200 PX</span>
                  </div>
                  <div class="flexLine item" style="height:.5rem;">　
                    <span class="flex1">标　　题</span>
                    <span class="flex4"><el-input v-model="item.title" placeholder="请输入内容" class="poster-index required"></el-input></span>
                  </div>
                  <div class="flexLine item" style="height:.5rem;">
                    <span class="flex1">链接地址</span>
                    <span class="flex4"><el-input v-model="item.url" placeholder="请输入内容" class="poster-index required"></el-input></span>
                  </div>
                </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="优选区" name="optimization">
        <div class="set-overflow">
              <div class="icon-table" v-for="(item, index) in PostYouxuans">
                <div v-if="index<flagnum+2" class="youxuan-wrap">
                  <el-button type="primary" class="btn-save youxuan-btn" @click="addYouxuan" v-if="index<1" v-show="youxuanShow1"
>增加</el-button> 
                  <div class="flexLine item table-colum">
                  <!-- <el-button type="primary" class="btn-save youxuan-btn" @click="addYouxuan">增加</el-button> -->
                    <span>尺寸要求　</span>
                    <span class="size-ask">90X90 PX</span>
                  </div>
                  <div class="flexLine item table-colum">
                    <span>标　　题</span>
                    <span><el-input placeholder="请输入内容" v-model="item.url" class="required"></el-input></span>
                  </div>
                  <div class="flexLine item table-colum">
                    <span>链接地址</span>
                    <span><el-input  placeholder="请输入内容" v-model="item.title" class="required"></el-input></span>
                  </div>
                  <div @click="uploadYouXuna($event,index)" class="uploads youxuna-img1"><img :src="item.pic" alt="品类小图"/><input type="hidden" value="" /></div>
                </div>
              <div v-if="index>flagnum+1&&index<flagnum+4" class="youxuan-wrap">
                <div class="flexLine item table-colum">
                  <span>尺寸要求　</span>
                  <span class="size-ask">570X370 PX</span>
                </div>
                <div class="flexLine item table-colum">
                  <span>标　　题</span>
                  <span><el-input placeholder="请输入内容" v-model="item.url" class="required"></el-input></span>
                </div>
                <div class="flexLine item table-colum">
                  <span>链接地址</span>
                  <span><el-input  placeholder="请输入内容" v-model="item.title" class="required"></el-input></span>
                </div>
                <div @click="uploadYouXuna($event,index)"  class="uploads youxuna-img2"><img :src="item.pic" alt="优选品背景大图" /><input type="hidden" value="" /></div>
              </div>
              <div v-if="index<flagnum+flagnum2+6&&index>flagnum+3"  class="youxuan-wrap">
                <el-button type="primary" class="btn-save youxuan-btn" @click="addYouxuan2" v-if="index<flagnum+5" v-show="youxuanShow2">增加</el-button>
                <div class="flexLine item table-colum">
                  <span>尺寸要求　</span>
                  <span class="size-ask">130X130 PX</span>
                </div>
                <div class="flexLine item table-colum">
                  <span>标　　题</span>
                  <span><el-input placeholder="请输入内容" v-model="item.url" class="required"></el-input></span>
                </div>
                <div class="flexLine item table-colum">
                  <span>链接地址</span>
                  <span><el-input  placeholder="请输入内容" v-model="item.title" class="required"></el-input></span>
                </div>
                <div @click="uploadYouXuna($event,index)"  class="uploads youxuna-img3"><img :src="item.pic" alt="优选商品" /><input type="hidden" value="" /></div>
              </div>   
            </div>
          </div> 
      </el-tab-pane>
      <el-tab-pane label="各品类区" name="sort" class="upload-logo">
        <el-select v-model="value" placeholder="添加行业"  @visible-change="addObj"  @change="addNew(value)" class="add-industry">
            <el-option v-for="item in OptionSels" :key="item.label" :label="item.label" :value="item.label"></el-option>
        </el-select>
        <div class="set-overflow">
         <div v-for="(item,count) in PostEverys" class="nav-upload clearfix">
           <div class="nav-upload-head-text">{{item.itemName}}<div  @click="delPoster(count)" class=" float-right">删除</div></div>
           <div class="banner-list flexLine every-class  class-wrap"  v-for="(option,index) in item.dataList">
              <div class="flex1 banner-brief class-wrap1" v-if="index<1">
                <div class="every-right1">
                  <div class="flexLine item table-colum">
                      <span class="flex1">尺寸要求</span>
                      <span class="size-ask">1170X330 PX</span>
                  </div>
                  <div class="flexLine item">
                    <span class="flex1">价　　格</span>
                    <span class="flex4"><el-input v-model="option.price" placeholder="请输入内容"></el-input></span>
                  </div>
                  <div class="flexLine item">
                    <span class="flex1">标　　题</span>
                    <span class="flex4"><el-input v-model="option.title" placeholder="请输入内容"></el-input></span>
                  </div>
                  <div class="flexLine item">
                    <span class="flex1">链接地址</span>
                    <span class="flex4"><el-input v-model="option.url" placeholder="请输入内容"></el-input></span>
                  </div>
                </div>
                <div @click="uploaderBusiness($event,index,count)"  class="uploads everyPic2"><img :src="option.pic" alt="品类广告" /><input type="hidden" value="" /></div>
              </div>
              <div class="flex1 banner-brief class-wrap2" v-if="index>0">
                <div class="every-right2">
                  <div class="flexLine item table-colum">
                    <span class="flex1">尺寸要求</span>
                    <span class="size-ask">282X282 PX</span>
                  </div>
                  <div class="flexLine item">
                    <span class="flex1">价　　格</span>
                    <span class="flex4"><el-input v-model="option.price" placeholder="请输入内容"></el-input></span>
                  </div>
                  <div class="flexLine item">
                      <span class="flex1">标　　题</span>
                      <span class="flex4"><el-input v-model="option.title" placeholder="请输入内容"></el-input></span>
                  </div>
                  <div class="flexLine item">
                      <span class="flex1">链接地址</span>
                      <span class="flex4"><el-input v-model="option.url" placeholder="请输入内容"></el-input></span>
                  </div>
                </div>
                <div @click="uploaderBusiness($event,index,count)"  class="uploads everyPic1"><img :src="option.pic" alt="单个商品广告" /><input type="hidden" value="" /></div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
        <el-tab-pane label="商品库" name="Posters" ref="shopGoods"  class="upload-logo">
            <el-select v-model="value" placeholder="添加行业"  @visible-change="addObj(value)"  @change="addShopGood(value)" class="add-industry">
              <el-option v-for="item in OptionSels" :key="item.label" :label="item.label" :value="item.label"></el-option>
            </el-select>
            <div ref="eles">
            <div>
            <div class="set-overflow">
             <div v-for="(item,count) in ShopCategorys" class="nav-upload clearfix">
              <div class="clothes-class nav-upload-head-text"  v-model="value">{{item.itemName}}(品类图3-5个；广告图三选一形式)<div  @click="delPoster(count)" class="float-right">删除</div></div>

                   <div class="banner-list flexLine goodsList clearfix" v-for="(option, index) in item.dataList" ref="navbar" id="spk">
                        <div class="flex1 banner-brief goodsListItem" v-if="index<1+flagnum">
                          <p class="size-wrap">尺寸要求　<span class="size-ask chicun">90X90 PX</span>
                          <el-button type="primary" class="shop_btn" @click="addShangPin" v-if="index<1" v-show="shangpinShow">增加</el-button></p>
                          <div class="flexLine item all-class-input">
                              <span class="flex1 title-shop">标　　题</span>
                              <span class="flex4"><el-input v-model="option.title" placeholder="请输入内容" class="required"></el-input></span>
                          </div>
                          <div class="flexLine item all-class-input">
                              <span class="flex1 title-shop">链接地址</span>
                              <span class="flex4"><el-input v-model="option.url" placeholder="请输入内容" class="required"></el-input></span>
                          </div>
                          <div @click="uploadStoreGoods($event,index,count)"  class="uploads tubox chicun1"   :id="bucketName"><img :src="option.pic" alt="分类图" /><input type="hidden" value="" />
                          </div>
                        </div>
                        <div class="flex1 banner-brief goodsListItem" v-if="index>0+flagnum&&index<2+flagnum2+flagnum">
                          <p class="size-wrap">尺寸要求　<span class="size-ask chicun">160X78 PX</span>
                          <el-button type="primary" class="shop_btn shop_btn2" @click="addShangPin2" v-if="index>flagnum&&index<2+flagnum" v-show="shangpinShow">增加</el-button></p>
                          <div class="flexLine item all-class-input">
                              <span class="flex1 title-shop">标　　题</span>
                              <span class="flex4"><el-input v-model="option.title" placeholder="请输入内容" class="required"></el-input></span>
                          </div>
                          <div class="flexLine item all-class-input">
                              <span class="flex1 title-shop">链接地址</span>
                              <span class="flex4"><el-input v-model="option.url" placeholder="请输入内容" class="required"></el-input></span>
                          </div>
                          <div @click="uploadStoreGoods($event,index,count)"  class="uploads tubox chicun2"   :id="bucketName"><img :src="option.pic" alt="企业Logo" /><input type="hidden" value="" />
                          </div>
                        </div>
                        <div class="flex1 banner-brief goodsListItem" v-if="index>1+flagnum+flagnum2&&index<3+flagnum+flagnum2">
                          <p class="size-wrap">尺寸要求　<span class="size-ask chicun">330X190 PX</span>
                          </p>
                          <div class="flexLine item all-class-input">
                              <span class="flex1 title-shop">标　　题</span>
                              <span class="flex4"><el-input v-model="option.title" placeholder="请输入内容"></el-input></span>
                          </div>
                          <div class="flexLine item all-class-input">
                              <span class="flex1 title-shop">链接地址</span>
                              <span class="flex4"><el-input v-model="option.url" placeholder="请输入内容"></el-input></span>
                          </div>
                          <div @click="uploadStoreGoods($event,index,count)"  class="uploads tubox chicun3"  :id="bucketName"><img :src="option.pic" alt="广告1" /><input type="hidden" value="" />
                          </div>
                        </div>
                        <div class="flex1 banner-brief goodsListItem" v-if="index>2+flagnum+flagnum2&&index<4+flagnum+flagnum2">
                          <p class="size-wrap">尺寸要求　<span class="size-ask chicun">330X330 PX</span></p>
                          <div class="flexLine item all-class-input">
                              <span class="flex1 title-shop">标　　题</span>
                              <span class="flex4"><el-input v-model="option.title" placeholder="请输入内容"></el-input></span>
                          </div>
                          <div class="flexLine item all-class-input">
                              <span class="flex1 title-shop">链接地址</span>
                              <span class="flex4"><el-input v-model="option.url" placeholder="请输入内容"></el-input></span>
                          </div>
                          <div @click="uploadStoreGoods($event,index,count)"  class="uploads tubox chicun4"  :id="bucketName"><img :src="option.pic" alt="广告1" /><input type="hidden" value="" />
                          </div>
                        </div>
                        <div class="flex1 banner-brief goodsListItem" v-if="index>3+flagnum+flagnum2">
                          <p class="size-wrap">尺寸要求　<span class="size-ask chicun">330X530 PX</span></p>
                          <div class="flexLine item all-class-input">
                              <span class="flex1 title-shop">标　　题</span>
                              <span class="flex4"><el-input v-model="option.title" placeholder="请输入内容"></el-input></span>
                          </div>
                          <div class="flexLine item all-class-input">
                              <span class="flex1 title-shop">链接地址</span>
                              <span class="flex4"><el-input v-model="option.url" placeholder="请输入内容"></el-input></span>
                          </div>
                          <div @click="uploadStoreGoods($event,index,count)"  class="uploads tubox chicun5"  :id="bucketName"><img :src="option.pic" alt="广告2" /><input type="hidden" value="" />
                          </div>
                        </div>
                  </div>
                </div>
              </div>
             </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="全部分类" name="allClass" ref="allClass"  class="upload-logo">
            <el-select v-model="value" placeholder="添加行业"  @visible-change="addObj(value)"  @change="addAllClass(value)" class="add-industry">
              <el-option
                v-for="item in OptionSels"
                :key="item.label"
                :label="item.label"
                :value="item.label">
              </el-option>
            </el-select>
            <div ref="eleq">
            <div>
            <div class="set-overflow">
             <div v-for="(item,count) in ShopStorages" class="nav-upload clearfix">
              <div class="clothes-class nav-upload-head-text"  v-model="value">{{item.itemName}}(品类图3-5个；广告图三选一形式)<div  @click="delPoster(count)" class="float-right">删除</div></div>
               <div class="banner-list flexLine" v-for="(option, index) in item.dataList" ref="navbar">
                    <div class="flex1 banner-brief">
                     <p class="size-wrap">尺寸要求　<span class="size-ask chicun">{{fenlei[index].siz}}</span></p>
                        <div class="flexLine item all-class-input">
                            <span class="flex1 title-shop">标　　题</span>
                            <span class="flex4"><el-input v-model="option.title" placeholder="请输入内容" class="required"></el-input></span>
                        </div>
                        <div class="flexLine item all-class-input">
                            <span class="flex1 title-shop">链接地址</span>
                            <span class="flex4"><el-input v-model="option.url" placeholder="请输入内容" class="required"></el-input></span>
                        </div>
                        <div @click="allClass($event,index,count)"  class="uploads active" v-bind:class="fenlei[index].cla" :id="bucketName"><img :src="option.pic" v-bind:alt="fenlei[index].txt" /><input type="hidden" value="" /></div>
                    </div>
                  </div>
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
import VeeValidate from 'vee-validate';

export default {
  data () {
    return {
        firstShow:true,
        youxuan1:1,
        youxuan2:1,
        youxuanShow1:true,
        youxuanShow2:true,
        shangpins:1,
        shangpinShow:true,
        flagnum:0,
        flagnum2:0,
        flagItem:1,
        allClassName:[],
        allCurrent:[],
        picUrl:"",
        picName:'',
        ready:true,
        bucketName:'abc',
        everyPic1:'everyPic1',
        everyPic2:'everyPic2',
        uploaderBusinessImg:'',
        isShow:false,
        index1:0,
        index2:0,
        rules : {
          title : [
            { required: true, message: '请输入标题', trigger: 'blur' }
          ],
          urlink : [
            { required: true, message: '请输入网址', trigger: 'blur' }
          ]
        },
        arr:[
        {
          postImg:"",
          ready:true,
        }
        ],
        arr1:[
        {
          youxuanImg:'',
          ready:true,
        }
        ],
        arr2:[
        {
          pinleiImg:'',
          ready:true,
        }
        ],
        arr3:[
          {
          shangpinImg:'',
          ready:true,
          }
        ],
        arr4:[
          {
          quanbuImg:'',
          ready:true,
          }
        ],
        everyPinlei:[
        {
          "itemName": "",
         "dataList": [
         {"pic": "", "url": "", "title": ""},
         {"pic": "", "url": "", "title": ""},
         {"pic": "", "url": "", "title": ""},
         {"pic": "", "url": "", "title": ""},
         {"pic": "", "url": "", "title": ""},
         ]
         }
        ],
        shangpinKu:[
        {
          "itemName": "",
         "dataList": [
         {"pic": "", "url": "", "title": ""},
         {"pic": "", "url": "", "title": ""},
         {"pic": "", "url": "", "title": ""},
         {"pic": "", "url": "", "title": ""},
         {"pic": "", "url": "", "title": ""}
         ]
         }
        ],
        quanbuFenlei:[
        {
          "itemName": "",
         "dataList": [
         {"pic": "", "url": "", "title": ""},
         {"pic": "", "url": "", "title": ""},
         {"pic": "", "url": "", "title": ""},
         {"pic": "", "url": "", "title": ""},
         {"pic": "", "url": "", "title": ""},
         ]
         }
        ],fenlei:[
          {cla:"fenlei1",siz:"68X68 PX",txt:"分类图"},
          {cla:"fenlei2",siz:"68X68 PX",txt:"分类图"},
          {cla:"fenlei3",siz:"68X68 PX",txt:"分类图"},
          {cla:"fenlei4",siz:"68X68 PX",txt:"分类图"},
          {cla:"fenlei5",siz:"200X240 PX",txt:"广告1"},
          {cla:"fenlei6",siz:"90X90 PX",txt:"分类图"}
        ],
        tok:[],
        imageUrl:'',
        labelPosition: 'right',
        currentIndustry:[],
        allIndustry:[],
        formLabelAlign: [{//首页海设置
          name: '',
          region: '',
          type: ''
        }],
        urlLink:"",
        activeName:'Poster',
        disData:null,
    }
  },
  computed:{
    ...mapGetters({
      posterLists: "PosterList",
      PostYouxuans: "PostYouxuan",//优选区
      PostEverys: "PostEvery",//各品类区
      ProgramIds:'ProgramId',
      ProgreNames:'ProgreName',
      ProgranStetuss:'ProgranStetus',
      OptionSels:'OptionSel',
      ShopStorages:'ShopStorage',//全部分类
      ShopCategorys:'ShopCategory',// 商品库
    }),
  },
  mounted(){
   this.flagnum = 0;
   this.flagItem=1;
    this.$refs.subNav.msg="广告管理";
     var params ={
      status: "SUCCESS"
    };
    // $(".required").each(function(){
    //     if(this.value==""){
    //     flagItem=0;
    // }
    //     $(this).parent().append($required); //然后将它追加到文档中
    // });
    var _this = this;
    this.$store.dispatch(aTypes.GETPLATFORORMHOMEFITMENT, null).then(function(res){  });
  },
  watch:{
    "imageUrl":function(){
      this.logoList[this.index1][this.index2].imgUrl = this.imageUrl;
    }
  },
  methods:{
    imgUpload(_this,_index,_count){
          let uploadImg = new UploaderBuilder()
            .debug(false)//开启debug，默认false
            .retry(10)//设置重传次数，默认0，不重传
            .compress(0.5)//默认为1,范围0-1
            .scale([440,1200]) //第一个参数是宽度，第二个是高度,[200,0],限定高度，宽度等比缩放.[0,100]限定宽度,高度等比缩放.[200,100]固定长宽
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
                        _this.picName = task.file.name;
                        let url = "https://img.chuanshangjia.com/"+task.result.key;
                         if(_this.activeName=='Poster'){
                          _this.posterLists[_index].pic = url;
                         }
                         if(_this.activeName=='optimization'){
                          _this.PostYouxuans[_index].pic = url;
                         }
                         if(_this.activeName=='sort'){
                            _this.PostEverys[_count].dataList[_index].pic = url;
                         }
                         if(_this.activeName=='Posters'){ 
                             _this.ShopCategorys[_count].dataList[_index].pic = url;
                         }
                         if(_this.activeName=='allClass'){
                            _this.ShopStorages[_count].dataList[_index].pic = url;

                         }
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
                        _this.arr[0].ready = true;
                    }
            });
          return uploadImg.build();
    },
    uploaderBusiness(e,i,c){//各品类区
     var img={
          pinleiImg:'',
          ready:true,
      }
      
      this.arr2.push(img)
      var _index = i;
      var _count = c;
       this.arr2[i].pinleiImg = this.imgUpload(this,_index,_count);
      if(this.arr2[i].pinleiImg  && this.arr2[i].ready){
         this.ready = false;
         this.arr2[i].pinleiImg.chooseFile();
      }
    },
    uploadPic(e,i){//首页海报设置
      var img={
          postImg:'',
          ready:true,
      }
      this.arr.push(img)
      var _index = i;
       this.arr[i].postImg = this.imgUpload(this,_index);
      if(this.arr[i].postImg  && this.arr[i].ready){
         this.ready = false;
         this.arr[i].postImg.chooseFile();
      }
    },
    uploadYouXuna(e,i){//优选区
      var img={
          youxuanImg:'',
          ready:true,
      }
      this.arr1.push(img)
      var _index = i;
       this.arr1[i].youxuanImg = this.imgUpload(this,_index);
      if(this.arr1[i].youxuanImg  && this.arr1[i].ready){
         this.ready = false;
         this.arr1[i].youxuanImg.chooseFile();
      }
    },
    uploadStoreGoods(e,i,c){//商品库 
        var img={
          shangpinImg:'',
          ready:true,
      }
      this.arr3.push(img)
      var _index = i;
      var _count = c;
       this.arr3[i].shangpinImg = this.imgUpload(this,_index,_count);
      if(this.arr3[i].shangpinImg  && this.arr3[i].ready){
         this.ready = false;
         this.arr3[i].shangpinImg.chooseFile();
      }
    },
    allClass(e,i,c){//全部分类 
      var img={
          quanbuImg:'',
          ready:true,
      }
      this.arr4.push(img)
      var _index = i;
      var _count = c;
       this.arr4[i].quanbuImg = this.imgUpload(this,_index,_count);
      if(this.arr4[i].quanbuImg  && this.arr4[i].ready){
         this.ready = false;
         this.arr4[i].quanbuImg.chooseFile();
      }
    },
    //点击增加
    addKong(){
      this.isShow = true;
      var _obj = {
        title:"",
        url:"",
        pic:""
      },
      posterLists = this.posterLists.unshift(_obj);
      if(posterLists>5){
          this.firstShow = false;
      }
    },
    additem(){
      this.isShow = true;
      var _obj = {
        title:"",
        url:"",
        pic:""
      },
      posterLists = this.posterLists.push(_obj);
    },
    //点击发布
    publishPoster(){
      var price_type = /^[0-9]+(.[0-9]{2})?$/;
      for(var i=0,_len= this.PostEverys.length;i<_len;i++){
          if(this.PostEverys[i].title==''){
            this.$message('请输入首页海报标题')
            return false;
          }
           if(this.posterLists[i].url==''){
            this.$message('请输入首页海报链接地址')
            return false;
          }
          if(this.posterLists[i].pic==''){
            this.$message('请上传海报区图片')
            return false;
          }
        }
        for(var i=0,_len= this.PostYouxuans.length;i<_len;i++){
          if(this.PostYouxuans[i].title==''){
            this.$message('请输入优选区图片标题')
            return false;
          }
          if(this.PostYouxuans[i].url==''){
            this.$message('请输入优选区图片链接地址')
            return false;
          }
          if(this.PostYouxuans[i].pic==''){
            this.$message('请上传优选区图片')
            return false;
          }
        }
        for(var i=0,_len= this.PostEverys.length;i<_len;i++){
          if(this.PostEverys[i].title==''){
            this.$message('请输入各品类区图片标题')
            return false;
          }
          if(this.PostEverys[i].url==''){
            this.$message('请输入各品类区图片链接地址')
            return false;
          }
           if(this.PostEverys[i].price==''){
            this.$message('请输入商品库价格')
            return false;
          }
          if(this.PostEverys[i].pic==''){
            this.$message('请上传各品类区图片')
            return false;
          }
        }
        for(var i=0,_len= this.ShopCategorys.length-3;i<_len;i++){
          if(this.ShopCategorys[i].url==''){
            this.$message('请输入商品库图片标题')
            return false;
          }
          if(this.ShopCategorys[i].title==''){
            this.$message('请输入商品库图片链接地址')
            return false;
          }
          if(this.ShopCategorys[i].pic==''){
            this.$message('请上传商品库图片')
            return false;
          }
        }
        for(var i=0,_len= this.ShopStorages.length;i<_len;i++){
          if(this.ShopStorages[i].title==''){
            this.$message('请输入全部分类区图片标题')
            return false;
          }
          if(this.ShopStorages[i].url==''){
            this.$message('请输入全部分类区图片链接地址')
            return false;
          }
          if(this.ShopStorages[i].pic==''){
            this.$message('请上传全部分类区图片')
            return false;
          }
        }
        var _this = this;
        var time = new Date()/1000;
        time = parseInt(time);
        var params={
          status:1,
          fitmentType:1,
          createTime:time
        }
        this.$store.dispatch(aTypes.PUBLISHPLANT, params).then(function(res){
            if(res.code==200){
              _this.$message ('发布成功')
            }
            if(res.code==400){
              _this.$message (res.message)
            }
        });
    },
    addPoster(){
      var _obj = {
        title:"",
        urlLink:"",
        imgLink:""
      },
      posterLists = this.posterLists.unshift(_obj);

    },
    //优选增加
    addYouxuan(){
      this.youxuan1++;
      this.flagnum++;
      var _obj = {
        title:"",
        url:"",
        pic:""
      },
      PostYouxuans = this.PostYouxuans.unshift(_obj);
      if(this.youxuan1>5){
        this.youxuanShow1=false;
      }
    },
    addYouxuan2(){
      this.youxuan2++;
      this.flagnum2++;
      var _obj = {
        title:"",
        url:"",
        pic:""
      },
      PostYouxuans = this.PostYouxuans.splice(this.flagnum+4,0,_obj);
      if(this.youxuan2>4){
         this.youxuanShow2=false;
      }
    },
    //商品库增加
    addShangPin(){
      this.shangpins++;
      if(this.shangpins>3){
        this.shangpinShow = false;
      }
      this.flagnum++;
      var _obj = {
        title:"",
        url:"",
        pic:""
      }
      
      let ShopCategorys = this.ShopCategorys[0].dataList.unshift(_obj);
    },addShangPin2(){
      this.shangpins++;
      if(this.shangpins>3){
        this.shangpinShow = false;
      }
      this.flagnum2++;
      var _obj = {
        title:"",
        url:"",
        pic:""
      }
      let ShopCategorys = this.ShopCategorys[0].dataList.splice(this.flagnum+1,0,_obj);
    },
    //点击
    addWork(){
      var _obj = {
        title:"1",
        text:"1"
      },
      goods = this.goods.unshift(_obj);
    },
    //更新
    savePoster(){
      var price_type = /^[0-9]+(.[0-9]{2})?$/;
      for(var i=0,_len= this.PostEverys[0].dataList.length;i<_len;i++){
        console.log(this.PostEverys[0].dataList[i].price)
          if(!price_type.test(this.PostEverys[0].dataList[i].price)){
              this.$message('请输入正确价格');
              return false;
          }
        }
      var _this = this;
      var time = new Date()/1000;
      time = parseInt(time);
      if(this.ProgramIds==null){
          var _data1 = JSON.stringify(this.posterLists);
          var _data2 = JSON.stringify(this.PostYouxuans);
          var _data3 = JSON.stringify(this.PostEverys);
          var _data4 = JSON.stringify(this.ShopCategorys);
          var _data5 = JSON.stringify(this.ShopStorages);
          var params = {
            id:0,
            fullScreenPost:_data1,
            optimization:_data2,
            goodsSort:_data3,
            goodsLibrary:_data4,
            allSort:_data5,
            name: this.ProgreNames,
            status:0,
            fitmentType:0,
            updateTime:time
          };
           this.$store.dispatch(aTypes.CHANGEPLANTFORMHOMEFITMENT, params).then(function(res){
           });
      }else{
        var price_type = /^[0-9]+(.[0-9]{2})?$/;
        // for(var i=0,_len= this.posterLists.length;i<_len;i++){
        //   if(this.posterLists[i].title==''){
        //     this.$message('请输入首页海报标题')
        //     return false;
        //   }
        //    if(this.posterLists[i].url==''){
        //     this.$message('请输入首页海报链接地址')
        //     return false;
        //   }
        //   if(this.posterLists[i].pic==''){
        //     this.$message('请上传海报区图片')
        //     return false;
        //   }
        // }
        // for(var i=0,_len= this.PostYouxuans.length;i<_len;i++){
        //   if(this.PostYouxuans[i].title==''){
        //     this.$message('请输入优选区图片标题')
        //     return false;
        //   }
        //   if(this.PostYouxuans[i].url==''){
        //     this.$message('请输入优选区图片链接地址')
        //     return false;
        //   }
        //   if(this.PostYouxuans[i].pic==''){
        //     this.$message('请上传优选区图片')
        //     return false;
        //   }
        // }
        for(var i=0,_len= this.PostEverys[0].dataList.length;i<_len;i++){
          // if(this.PostEverys[i].title==''){
          //   this.$message('请输入各品类区图片标题')
          //   return false;
          // }
          // if(this.PostEverys[i].url==''){
          //   this.$message('请输入各品类区图片链接地址')
          //   return false;
          // }
          // if(this.PostEverys[i].price==''){
          //     this.$message('请输入各品类区图片价格')
          //     return false;
          // }
          if(!price_type.test(this.PostEverys[0].dataList[i].price)){

              this.$message('请输入正确价格')
              return false;
          }
          // if(this.PostEverys[i].pic==''){
          //   this.$message('请上传各品类区图片')
          //   return false;
          // }
        }
        // for(var i=0,_len= this.ShopCategorys.length-3;i<_len;i++){
        //   if(this.ShopCategorys[i].url==''){
        //     this.$message('请输入商品库图片标题')
        //     return false;
        //   }
        //   if(this.ShopCategorys[i].title==''){
        //     this.$message('请输入商品库图片链接地址')
        //     return false;
        //   }
        //   if(this.ShopCategorys[i].pic==''){
        //     this.$message('请上传商品库图片')
        //     return false;
        //   }
        // }
        // for(var i=0,_len= this.ShopStorages.length;i<_len;i++){
        //   if(this.ShopStorages[i].title==''){
        //     this.$message('请输入全部分类区图片标题')
        //     return false;
        //   }
        //   if(this.ShopStorages[i].url==''){
        //     this.$message('请输入全部分类区图片链接地址')
        //     return false;
        //   }
        //   if(this.ShopStorages[i].pic==''){
        //     this.$message('请上传全部分类区图片')
        //     return false;
        //   }
        // }
        var _data1 = JSON.stringify(this.posterLists);
        var _data2 = JSON.stringify(this.PostYouxuans);
        var _data3 = JSON.stringify(this.PostEverys);
        var _data4 = JSON.stringify(this.ShopCategorys);
        var _data5 = JSON.stringify(this.ShopStorages);

        var params = {
          id:this.ProgramIds,
          fullScreenPost:_data1,
          optimization:_data2,
          goodsSort:_data3,
          goodsLibrary:_data4,
          allSort:_data5,
          name: this.ProgreNames,
          status:0,
          fitmentType:0,
          updateTime:time
        };
        this.$store.dispatch(aTypes.CHANGEPLANTFORMHOMEFITMENT, params).then(function(res){
           if(res.code==200){
            _this.$message ('保存成功')
           }
        });
      }
    },
  //点击删除
  delPoster(index){
    const sort = 'sort';
    const  Posters = 'Posters';
    const  allClass = 'allClass';
     if(this.activeName==sort){
       this.PostEverys.splice(index,1);
     }
     if(this.activeName==Posters){
        this.ShopCategorys.splice(index,1);
     }
     if(this.activeName==allClass){
        this.ShopStorages.splice(index,1);
     }
    },
  //点击下拉列表行业
  addNew(value){
        const sort = 'sort';
        if(this.activeName==sort){
            var itemName = this.everyPinlei[0].itemName
            var dataList = this.everyPinlei[0].dataList
            var arr = [];
            var data = {
              itemName:value,
              dataList:[
                   {"pic": "", "url": "", "title": ""},
                   {"pic": "", "url": "", "title": ""},
                   {"pic": "", "url": "", "title": ""},
                   {"pic": "", "url": "", "title": ""},
                   {"pic": "", "url": "", "title": ""},
                   ]
            }
            arr.push(data)
            this.PostEverys = this.PostEverys.unshift(data);
            // return false;
         }
    },
    addShopGood(value){
       const  Posters = 'Posters';
        if(this.activeName==Posters){
          var itemName = this.shangpinKu[0].itemName
          var dataList = this.shangpinKu[0].dataList
            var arr = [];
            var data = {
              itemName:value,
              dataList:[
                   {"pic": "", "url": "", "title": ""},
                   {"pic": "", "url": "", "title": ""},
                   {"pic": "", "url": "", "title": ""},
                   {"pic": "", "url": "", "title": ""},
                   {"pic": "", "url": "", "title": ""}
                   ]
            }
            arr.push(data);
            this.ShopCategorys = this.ShopCategorys.unshift(data);
            // return false;
         }
    },
    addAllClass(value){
         const  allClass = 'allClass';
         if(this.activeName==allClass){
          var itemName = this.quanbuFenlei[0].itemName
          var dataList = this.quanbuFenlei[0].dataList
            var arr = [];
            var data = {
              itemName:value,
              dataList:[
                   {"pic": "", "url": "", "title": ""},
                   {"pic": "", "url": "", "title": ""},
                   {"pic": "", "url": "", "title": ""},
                   {"pic": "", "url": "", "title": ""},
                   {"pic": "", "url": "", "title": ""}
                   ]
            }
            arr.push(data);
             this.ShopStorages = this.ShopStorages.unshift(data);
            //return false;

         }
    },
    addObj(){//点击下拉列表
      var params = {
      status: "SUCCESS"
      };
      var _this = this;
      this.$store.dispatch(aTypes.GETOPTION_URL, null).then(function(res){
      });
    },
    //点击事件的处理
    handleClick(){

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-button--primary{
  width:1.4rem;
  height:.4rem;
  line-height: .1rem;
  background-color: #fe1b46;
  border-radius:0;
}
.goods-class{
  margin-bottom: .2rem;
  font-size:14px;
  color:#bbb;
}
.el-dropdown{
  margin:.2rem 0;
}
.to-save-reload{
  margin-left:.3rem;
  button{
    background-color:#ddd;
  }
}
  .icon-table{
    position:relative;
    display:inline-block;
    width:35%;
    vertical-align: top;
    margin-right: 2rem;
    margin-top:.3rem;
    padding-left: .3rem;
    margin-bottom:.5rem;
  }
  .size-reuqire{
    display:inline-block;
    padding-left: .9rem;
    margin-top: .3rem;
    width:30%;
  } 
  .avatar-uploader{
    vertical-align: top;
    line-height: 1.8rem;
    text-align: center;
    height:1.8rem;
    background-color: #F8F9FC;
    width:2rem;
    display:inline-block;
  }
  .el-form--label-right{
    display:inline-block;
    margin-right: 3rem;
    margin-bottom: .3rem;
  }
  .table-colum{
    margin-bottom: .1rem;
    height:.4rem;
    line-height: .4rem;
    font-weight: 100;
    span{
      width:1rem;
      white-space: nowrap;
    }
    .el-input{
      width:4rem;
    }
    em{
      color:#fe1b46;
      font-style: normal;
    }
  }
  
  .poster-btn{
    margin:.2rem 0;
    position: absolute;
    top:0rem;
    right:5.35rem;
    .btn-save{
      font-size:.18rem;
    }
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
    overflow-y:auto;
    height: 6.5rem;
  }
  .image-box{
    width:auto;
    height:auto;
  }
  .list-nav{
     // display:flex;
     // justify-content: space-around;
  }
  .zengjia{
    position:relative;
    right:-.5rem;
    width: 1rem;
    color: #fff;
    text-align: center;
    height: .4rem;
    font-size: 0.18rem;
    line-height: 0.2rem;
    float:right;
    background: red;
    margin-right: 2rem;
    border: 0;
  }
  .every-class{
    float:left;
    width:43%; 
    margin-right:1rem;
    justify-content: space-between;
    .banner-brief{
      margin-left:.2rem;
      width:1rem;
      p{
        line-height: 0.2rem;
        font-size: 0.18rem;
      }
    }
    .item{
      margin-top: .1rem!important ;
    }
  }
  .banner-list{
    margin-top:.2rem;
    margin-bottom:1.3rem;
    margin-left:.2rem;
    float: left;
        /*display:flex;
        justify-content: space-between;*/
    .banner-brief{
      float: left;
      height:100%;
            .flex1{
                text-align: right;
                margin-right: .2rem;
            }
            .flex4{
                flex:9;
                 margin-right: .2rem;
            }
          .flexLine{
            display:block;
            font-weight: 100;
            color:#000;
            em{
                color:#fe1b46;
                font-style: normal;
            }
          }
    }
    .item{
      margin-top: 0.04rem;
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
      display:block;
    }
  }
  .el-tab-pane{
    overflow-y: hidden;
    overflow:visible;
  }
  .upload-logo{
    height:auto;
    overflow:visible;
    overflow-y:hidden;
    margin-top:.3rem;
  }
  .el-tabs__content{
    overflow:visible;
  }
  .upload-logo .avatar-uploader .el-upload{
    border:0px;
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
    vertical-align: middle;
  }
  .upload-logo-box{
    width:25%;
    height:50%;
  }
  .save-box{
    height: 1rem;
  }
  .uploads{
    margin-top:.1rem;
    cursor: pointer;
    background-color: #F8F9FC;
    text-align: center;
  }
  .uploads img{
    width:2rem;
    height:2rem;
  }
  .uploads.cur{
    width:8rem;
    height:3rem;
    line-height:3rem;
    margin:0 .7rem 0 0rem;
  }
  .uploads.cur img{
    width:8rem;
    height:3rem;
  }
  .imgLink{
    height: .2rem;
  }
.set-overflow{
        height:100%;
        overflow:visible;
        width:100%;
        margin-top: .3rem;
    }
    .nav-upload-head-text{
      margin-bottom: .2rem;
      height:.4rem;
      line-height: .4rem;
      padding-left: .2rem;
      border-bottom:1px solid #ddd;
      font-size:14px;
    }
    .nav-upload{
      overflow:visible;
      width:99%;
      .banner-list{
        margin-top:.2rem;
        width: 45%;
        float: left;
        margin-right: 1%;
        margin-left:.3rem;
      }
    }
    .clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
}
.clearfix {
    zoom: 1;
}
.all-class-input{
  width:80%;
  height:.5rem;
  .el-input{
   width:80%;
  }
}
.float-right{
  color:#2F63CF;
  text-decoration: underline;
  float:right;
  margin-bottom:.1rem;
  cursor:pointer;
  padding-right: .1rem;
}
.poster-index{
  width:4rem;
  height:.4rem;
}
.poster-slide-right{
  margin-left:.3rem;
}
.size-ask{
  color:#fe1b46;
  font-size:.18rem;
  font-weight: 100;

}
.youxuan-wrap{
  display:block;
}
.youxuan-btn{
  position:absolute;
  top:0rem;
  right:.5rem;
}
.youxuna-img1{
  margin-top:.1rem;
  width:.95rem!important;
  height:.95rem!important;
  overflow:hidden;
   img{
    width:.95rem;
    max-height:.95rem;
    line-height: .95rem;
    text-align: center;
  }
}
.youxuna-img2{
  margin-top:.1rem;
  width:3.85rem!important;
  height:1.85rem!important;
  overflow:hidden;
  img{
    width:3.85rem;
    max-height:1.85rem;
    line-height: 1.85rem;
    text-align: center;
  }
}
.youxuna-img3{
  margin-top:.1rem;
  width:1.3rem!important;
  height:1.3rem!important;
  overflow:hidden;
  img{
    width:1.3rem;
    max-height:1.3rem;
    line-height: 1.3rem;
    text-align: center;
  }
}
.add-industry{
  margin-left:0rem;
  margin-left:.3rem;
}
.everyPic1{
  float:left;
  width:2.4rem!important;
  height:1.8rem!important;
  line-height: 1.8rem!important;
  display:inline-block;
  img{
    width:100%;
    height:100%;
    vertical-align: middle;
    border:0px!important;
  }
}
.everyPic2{
  float:left;
  width:8rem!important;
  height:2.3rem!important;
  line-height: 2.3rem!important;
  display:inline-block;
  img{
    width:100%;
    height:100%;
    vertical-align: middle;
    border:0px!important;
  }
}
.every-right1{
  margin-top: .2rem;
  margin-left:.4rem;
  display:inline-block;
  vertical-align: middle;
  .el-input{
    width:59%!important;
  }
}
.every-right2{
  margin-left:.4rem;
  display:inline-block;
  vertical-align: middle;
  .el-input{
    width:59%!important;
  }
}
.nav-upload{
  border:1px solid #ddd;
  border-bottom:0px;
}
.nav-upload:last-child{
  border-bottom:1px solid #ddd;
}
.chicun1{
  width:0.9rem;
  height: 0.9rem;
  img{
    line-height: 0.9rem;
    text-align: center;
    width: 100%;height: 100%;
  }
}
.chicun2{
  width:1.6rem;
  height: 0.78rem;
  img{
    line-height: 0.78rem;
    text-align: center;
    width: 100%;height: 100%;
  }
}
.chicun3{
  float: left;
  width:2rem;
  height: 2rem;
  overflow:hidden;
  img{
    line-height: 2rem;
    text-align: center;
    vertical-align: middle;
  }
}
.chicun4{
  width:2rem;
  height: 2rem;
  overflow:hidden;
  img{
    line-height: 2rem;
    text-align: center;
    vertical-align: middle;
  }
}
.chicun5{
  width:2rem;
  height: 2rem;
  overflow:hidden;
  img{
    line-height: 2rem;
    text-align: center;
    vertical-align: middle;
  }
}
.tubox{
  position: relative;
}
.fenlei1, .fenlei2, .fenlei3, .fenlei4{
  width: 1rem;height: 1rem;
  img{
    line-height: 1rem;
    text-align: center;
    width: 100%;height: 100%;
  }
}
.fenlei5{
  width: 2rem;height: 2.4rem;
  img{
    line-height: 2.4rem;
    text-align: center;
    width: 100%;height: 100%;
  }
}
.size-wrap{
  height:.5rem;
  line-height: .4rem;
  .chicun{
    margin-left: .1rem;
  }
}
.title-shop{
  display:inline-block;
  margin:.1rem 0;
  font-weight: 100;
}
.goodsList{
  float: left;
  .goodsListItem{
    float: left;
  }
}
.manage-part .router-page{
  background:#fff!important;
}
.white{
  background:#fff;
}
.shop_btn{
  position:relative;
  left:.46rem;
}
.shop_btn2{
  position:relative;
  left:.33rem;
}
#spk{
  float:left;
  width:5.8rem;
  min-height:4rem;
  .banner-brief{
    float:left;
    .all-class-input{
      width: 100%;
      .title-shop{
        float: left;
      }
      .flex4{
        float: left;
        width: 60%;
      }
    }
  }
}
.class-wrap{
 width:auto!important;
}
.class-wrap1{
  width:80%!important;
}
.class-wrap2{
  width:60%!important;
  display:inline-block;
}
</style>
import * as aTypes from '../action-types';
import * as mTypes from '../mutation-types';
import Services from './../../util/Services';
import {local, session} from './../../util/Storage'
const state = {
	isLogin: false,
  snsPosterId:[],//商友圈广告id
  cuohePoster:[],//撮合图
  gongyingshangPoster:[],//供应商图
  appliIn:[],//入驻申请
  posterList:[],//海报认证
  postYouxuan:[],//海报认证
  postEvery:[],//海报认证
  programId:[],//商城首页
  progreName:[],//商城首页
  progranStetus:[],//商城首页
  companyMan:[],//公司管理
  companyCer:[],//公司管理
  shopPar:[],//行业管理
  shopSub:[],//行业管理
  shopGods:[],//行业管理
  optionSel:[],//商城首页下拉菜单
  shopStorage:[],//商品品类
  shopCategory:[],//商品品类
  realName:[],//实名认证
  headAvent:[],//头像认证
  postAvent:[],//头像认证通过
  reportList:[],//举报处理
  reportStart:[],//举报处理的当前页面
  reportPagesize:[],//举报处理的每页条数
  reportTotal:[],//举报处理的总条数
  dealtList:[],//举报列表
  shopManage:[],//管理店铺方法
  // storeTime:[],
  bussinManager:[],//商家管理
  allUser:[],//index页用户统计
  newUser:[],//新增用户
  allShop:[],//店铺统计
  newShop:[],//店铺统计
  payedShop:[],//入驻申请
  reportAll:[],//举报统计
  checkPend:[],//退款处理待审核
  playWith:[],//退款待打款处理
  haveMoney:[],//退款已打款处理
  refunPagesize:[],//退款处理每页条数
  refunStart:[],//退款处理当前页
  refunTotal:[],//退款处理总条数
  storeStart:[],//store当前页
  storePageSize:[],//store每页多少条
  totalCount:[],//store总条数
  suppliStart:[],//supplier页当前页
  suppliPageSize:[],//supplier 每页多少条
  suppliTotal:[],//supplier总条数
  categoryStart:[],//category当前页
  categoryPagesize:[],//每页条数
  categoryTotal:[],//总条数
  companyStart:[],//公司认证当前页
  conpanyTotal:[],//公司认证总条数
  certiadStart:[],//实名认证当前页
  certiadTotal:[],//实名认证总条数
  postAventStart:[],//头像认证当前页
  postAventTotal:[],//头像认证总条数
  personStart:[],//海报当前页
  personTotal:[],//海报总条数
  realnameStart:[],//入驻申请当前页
  realnameTotal:[]//入驻申请总条数
}
const getters = {
	IsLogin: state => {
    return state.isLogin;//登录
  },
  SnsPosterId:state => {
    return state.snsPosterId;//商友圈广告id
  },
  MatchPoster:state => {
    return state.cuohePoster;//撮合广告
  },
  SupplierPoster:state => {
    return state.gongyingshangPoster;//供应商广告
  },
  PosterList:state => {
    return state.posterList;//海报认证
  },
  PostYouxuan:state=>{
    return state.postYouxuan;//海报认证
  },
  PostEvery:state=>{
    return state.postEvery;//海报认证
  },
  ProgramId:state=>{
    return state.programId;//商城首页
  },
  ProgreName:state=>{
    return state.progreName;//商城首页
  },
  ProgranStetus:state=>{
    return state.progranStetus;//商城首页
  },
  CompanyMan:state=>{
    return state.companyMan//公司管理
  },
  CompanyCer:state=>{
    return state.companyCer//公司管理
  },
  AppliIn:state=>{
    return state.appliIn//公司管理
  },
  ShopPar:state=>{
    return state.shopPar//行业管理
  },
  ShopSub:state=>{
    return state.shopSub//行业管理
  },
  ShopGods:state=>{
    return state.shopGods//行业管理
  },
  OptionSel:state=>{
    return state.optionSel//商城首页下拉菜单
  },
  ShopStorage:state=>{
    return state.shopStorage//商品品类
  },
  ShopCategory:state=>{
    return state.shopCategory//商品品类
  },
  RealName:state=>{
    return state.realName//实名认证
  },
  HeadAvent:state=>{
    return state.headAvent//头像认证
  },
  PostAvent:state=>{
    return state.postAvent//头像认证通过
  },
  ReportList:state=>{
    return state.reportList//举报处理
  },
  DealtList:state=>{
    return state.dealtList//举报列表
  },
  ShopManage:state=>{
    return state.shopManage//管理店铺方法
  },
  // StoreTime:state=>{
  //   return state.storeTime
  // },
  BussinManager:state=>{
    return state.bussinManager//商家管理
  },
  AllUser:state=>{
    return state.allUser//index页用户统计
  },
  NewUser:state=>{
    return state.newUser//新增用户
  },
  AllShop:state=>{
    return state.allShop//店铺统计
  },
  NewShop:state=>{
    return state.newShop//店铺统计
  },
  PayedShop:state=>{
    return state.payedShop//入驻申请
  },
  RealName:state=>{
    return state.realName//举报统计
  },
  ReportAll:state=>{
    return state.reportAll//退款处理待审核
  },
  CheckPend:state=>{
    return state.checkPend//退款处理待审核
  },
  PlayWith:state=>{
    return state.playWith//退款待打款
  },
  HaveMoney:state=>{
    return state.haveMoney//退款已打款
  },
  StoreStart:state=>{//store当前页
    return state.storeStart
  },
  StorePageSize:state=>{//store每页多少条
    return state.storePageSize
  },
  TotalCount:state=>{//store 总页数
    return state.totalCount
  },
  SuppliStart:state=>{//supplier 当前页
    return state.suppliStart
  },
  SuppliPageSize:state=>{//store 每页多少
    return state.suppliPageSize
  },
  SuppliTotal:state=>{//store 总页数
    return state.suppliTotal
  },
  CategoryStart:state=>{//category 当前页
    return state.categoryStart
  },
  CategoryPagesize:state=>{//category 每页多少
    return state.categoryPagesize
  },
  CategoryTotal:state=>{//category 总页数
    return state.categoryTotal
  },
  CompanyStart:state=>{//company 当前页
    return state.companyStart
  },
  ConpanyTotal:state=>{//company 每页多少
    return state.conpanyTotal
  },
  PostAventStart:state=>{//post-avert 总页数
    return state.postAventStart
  },
  PostAventTotal:state=>{//post-avert 当前页
    return state.postAventTotal
  },
  PersonStart:state=>{//person-poster 每页多少
    return state.personStart
  },
  PersonTotal:state=>{//person-poster 总页数
    return state.personTotal
  },
  RefunStart:state=>{//refundorder 当前页
    return state.refunStart
  },
  RefunPagesize:state=>{//refundorder 每页多少
    return state.refunPagesize
  },
  RefunTotal:state=>{//refundorder 总页数
    return state.refunTotal
  },
  ReportStart:state=>{//refundorder 当前页
    return state.reportStart
  },
  ReportPagesize:state=>{//refundorder 每页多少
    return state.reportPagesize
  },
  ReportTotal:state=>{//refundorder 总页数
    return state.reportTotal
  },
  CertiadStart:state=>{//refundorder 总页数
    return state.certiadStart
  },
  CertiadTotal:state=>{//refundorder 总页数
    return state.certiadTotal
  },
  RealnameStart:state=>{//入驻申请 总页数
    return state.realnameStart
  },
  RealnameTotal:state=>{//入驻申请 总页数
    return state.realnameTotal
  },
}
const actions = {
  [aTypes.USER_LOGIN]({commit, state}, params){
     return new Promise((resolve, reject) => {
      Services.userLogin(params,(res) => {
       // commit(mTypes.SOME_MUTATION);
          state.isLogin = true;
           session.setData("user", {loginState:true});
         res = JSON.parse(res) ;
         resolve(res);

       });
    });
  
  },
  [aTypes.USER_EXIT]({commit, state}, params){
  	state.isLogin = false;
  	session.remove("user");
  	
  },
  //图片上传
  [aTypes.QUERY_QINIU_UPLOADTOKEN]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getToken(params,(res) => {

        resolve(res)
      });
    });
  },
   [aTypes.GETIMAGEPATH]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getImagePath(params,(res) => {
        res = JSON.parse(res)

        resolve(res)
      });
    });
  },
  
  //首页index 用户统计
  [aTypes.GETUSERAMOUNT]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getUserAmount(params,(res) => {
         res = JSON.parse(res);
          if(res.code==400){

          }else{
           state.allUser = res.allUser;
           state.newUser = res.newUser;
          }
        resolve(res)
      });
    });
  },
  //首页index 店铺统计
  [aTypes.GETSHOPAMOUNT]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getShopAmount(params,(res) => {
        res = JSON.parse(res);
          if(res.code==400){
            
          }else{
           state.allShop = res.allShop;
           state.newShop = res.newShop;
           state.payedShop = res.payedShop;
        }
       
        resolve(res)
      });
    });
  },
  
  [aTypes.GETPAYEDSHOP]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getPayedShop(params,(res) => {
        res = JSON.parse(res);
          if(res.code==400){
            state.appliIn = res.datas;
            state.realnameTotal = 0;
          }else{
             for(var i=0,_len=res.datas.length;i<_len;i++){
              if(res.datas[i].region=="null"){
                res.datas[i].region = '';
              }
            var place = res.datas[i].country +res.datas[i].province + res.datas[i].city + res.datas[i].region + res.datas[i].address;
            res.datas[i].address = place;
          var unixTimestamp = new Date( res.datas[i].create_time*1000 ) ;
          var commonTime = unixTimestamp.toLocaleString();
          res.datas[i].create_time = commonTime.slice(0,9);
          }
          state.appliIn = res.datas;
          state.realnameStart =  res.start;
          state.realnameTotal = res.totalCount;
        }
       
        resolve(res)
      });
    });
  },
   //首页index 负责人认证
  [aTypes.GETCOMPANYAMOUNT]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getCompanyAmount(params,(res) => {
        res = JSON.parse(res);
          if(res.code==400){
            
          }else{
         
          state.applyAmount = res;
        }
       
        resolve(res)
      });
    });
  },
    //首页index 实名认证
  [aTypes.GETAUDITUSERAMOUT]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getAuditUserAmount(params,(res) => {
         res = JSON.parse(res);
        if(res.code==400){
            
          }else{
           
            state.realName = res;
        }
       
        resolve(res)
      });
    });
  },
   //首页index 举报统计
  [aTypes.GETREPORTAMOUNT]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getReportAmount(params,(res) => {
         res = JSON.parse(res);
          if(res.code==400){
            
          }else{
           
            state.reportAll = res;

        }
       
        resolve(res)
      });
    });
  },
  //商城首页
   [aTypes.GETPLATFORORMHOMEFITMENT]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getPlatformHomeFitment(params,(res) => {
         res = JSON.parse(res);
         
      if(res.code==400){
            
        }else{
         
          state.programId = res.id
          state.progreName = res.name
          state.progranStetus = res.status
          state.posterList = JSON.parse(res.fullScreenPost)//大海报
          state.postYouxuan = JSON.parse(res.optimization)//优选区
          state.postEvery = JSON.parse(res.goodsSort)//各品类区
          state.shopStorage = JSON.parse(res.allSort)//全部分类
          state.shopCategory = JSON.parse(res.goodsLibrary)//商品库
         for(var i=0,_len=state.postYouxuan.length;i<_len;i++){
         }
         
      }
      resolve(res)
      });
    });
  },
  //商城首页的修改
  [aTypes.CHANGEPLANTFORMHOMEFITMENT]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.changePlatformHomeFitment(params,(res) => {
        res = JSON.parse(res);
        if(res.code==400){
            
          }else{
       
     }
        resolve(res)
      });
    });
  },
  //商城首页下拉菜单
  [aTypes.GETOPTION_URL]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getParentItemForOption(params,(res) => {
        if(res.code==400){
            
          }else{
          state.optionSel = JSON.parse(res);
      }
      
        resolve(res)
      });
    });
  },
  //商友圈广告图
  [aTypes.GETSNSPOSTER]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.querySNSPoster(params,(res) => {
        res = JSON.parse(res);
        
          if(res.code==400){
            
          }else{
          state.snsPosterId = res.id;
          state.cuohePoster = JSON.parse(res.matchPoster);
          state.gongyingshangPoster = JSON.parse(res.supplierPoster)
        }
       
        resolve(res)
      });
    });
  },
  //更新商友圈广告图
  [aTypes.UPDATESNSPOSTER]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.updateSNSPoster(params,(res) => {
        res = JSON.parse(res);
        if(res.code==400){
            
          }else{
       
     }
        resolve(res)
      });
    });
  },
  //获取行业管理
  [aTypes.GETINDUSTRY_URL]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.queryIndustry(params,(res) => {
        res = JSON.parse(res)
        if(res.code==400){
            
          }else{
          
         state.shopGods =res.datas
         state.categoryStart = res.start
         state.categoryPagesize= res.pageSize
         state.categoryTotal = res. totalCount

      }
        
        resolve(res)
      });
    });
  },
  //父类目
   [aTypes.GET_PARENT_CATEGORY]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.queryParentItem(params,(res) => {
         res = JSON.parse(res)
       if(res.code==400){

          }else{
         state.shopPar = res;
          for(var i=0,_len=res.length;i<_len;i++){
          var unixTimestamp = new Date( res[i].createTime*1000 ) ;
          var commonTime = unixTimestamp.toLocaleString();
          res[i].createTime = commonTime.slice(0,9);
          }

      }
        resolve(res)
      });
    });
  },
  //子类目
  [aTypes.GET_SUB_CATEGORY]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.querySubItem(params,(res) => {
        res = JSON.parse(res)
      if(res.code==400){
          }else{
         state.shopSub = res;
         for(var i=0,_len=res.length;i<_len;i++){
          var unixTimestamp = new Date( res[i].createTime*1000 ) ;
          var commonTime = unixTimestamp.toLocaleString();
          res[i].createTime = commonTime.slice(0,9);
          }
        }
        resolve(res)
      });
    });
  },
  [aTypes.QUERYCATEGORY]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.queryCategory(params,(res) => {
        res = JSON.parse(res)
        resolve(res)
      });
    });
  },
  //编辑类目
  [aTypes.EDITCATEGORY_URL]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.editCategory(params,(res) => {
        res = JSON.parse(res)

        resolve(res)
      });
    });
  },
  //店铺管理的方法
  [aTypes.GETSHOP_URL]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getShop(params,(res) => {
        res = JSON.parse(res)
          if(res.code==400){
            state.shopManage = "";
          }else{
            for(var i=0,_len=res.datas.length;i<_len;i++){
              var unixTimestamp = new Date( res.datas[i].create_time*1000 ) ;
              var commonTime = unixTimestamp.toLocaleString();
              res.datas[i].create_time = commonTime.slice(0,9);
            }
            for(var j=0,_jlen=res.datas.length;j<_jlen;j++){
              var stu = res.datas[j].status;
              if(stu=='NORMAL_OPEN'){
                stu='营业'
              }
              if(stu=='PERMANENT_CLOSE'){
                stu='删除'
              }
              if(stu=='BUSINESS_STOP'){
                stu='暂停营业'
              }
              res.datas[j].status = stu;
            }
            // status
            state.shopManage = res.datas 
            state.storeStart = res.start;
            state.storePageSize = res.pageSize;
            state.totalCount = res.totalCount;
        }
        resolve(res)
      });
    });
  },
  //店铺开启
  [aTypes.STARTSHOP_URL]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.operateShop(params,(res) => {
        res = JSON.parse(res)
        if(res.code==400){
            
          }else{
        state.shopManage = res.datas 
       }
        resolve(res)
      });
    });
  },
  //店铺关闭
  [aTypes.CLOSESHOP_URL]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.operateShop(params,(res) => {
         res = JSON.parse(res)
        if(res.code==400){
            
          }else{
           
        state.shopManage = res.datas 
      }
        resolve(res)
      });
    });
  },
  //店铺删除
  [aTypes.DELETESHOP_URL]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.operateShop(params,(res) => {
         res = JSON.parse(res)
        if(res.code==400){
            
          }else{
          state.shopManage = res.datas 
        }
        resolve(res)
      });
    });
  },
  //商城平台发布
  [aTypes.PUBLISHPLANT]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.publishPlatform(params,(res) => {
        res = JSON.parse(res)
        resolve(res)
      });
    });
  },
  //商家管理---------
  [aTypes.BUSINESSMANAGER]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getSuccessCompany(params,(res) => {
            res = JSON.parse(res)
            if(res.code==400){
          }else{
            for(var i=0,_len=res.datas.length;i<_len;i++){
              var unixTimestamp = new Date( res.datas[i].setup_time*1000 ) ;
              var commonTime = unixTimestamp.toLocaleString();
              res.datas[i].setup_time = commonTime.slice(0,9);
            }
            for(var i=0,_len=res.datas.length;i<_len;i++){
              var unixTimestamp = new Date( res.datas[i].update_time*1000 ) ;
              var commonTime = unixTimestamp.toLocaleString();
              res.datas[i].update_time = commonTime.slice(0,9);
            }
             state.bussinManager = res.datas
             state.suppliStart = res.start;
             state.suppliPageSize = res.pageSize;
             state.suppliTotal = res.totalCount;
        }
        resolve(res)
      });
    });
  },
  //公司认证的信息----------------------------
  [aTypes.GETCOMPANYBASIC_URL]({commit, state}, params){
      
    return new Promise((resolve, reject) => {
      Services.queryCompanyBasic(params,(res) => {
        res = JSON.parse(res);
        if(res.code==400){
            state.companyMan='';
            state.conpanyTotal = 0;
        }else{
          for(var i=0,_len=res.datas.length;i<_len;i++){
            if(res.datas[i].region==null){
                res.datas[i].region = '';
              }
              if(res.datas[i].city==null){
                res.datas[i].city = '';
              }
            var place = res.datas[i].country +res.datas[i].province + res.datas[i].city + res.datas[i].region + res.datas[i].address;
            res.datas[i].address = place;
          var unixTimestamp = new Date( res.datas[i].create_time*1000 ) ;
          var commonTime = unixTimestamp.toLocaleString();
          res.datas[i].create_time = commonTime.slice(0,9);
          }
          for(var i=0,_len=res.datas.length;i<_len;i++){
          var unixTimestamp = new Date( res.datas[i].audit_time*1000 ) ;
          var commonTime = unixTimestamp.toLocaleString();
          res.datas[i].audit_time = commonTime.slice(0,9);
          }
          state.companyMan = res.datas;
          state.companyStart = res.start;
          state.conpanyTotal = res.totalCount;

        }
           

         
        resolve(res)
      });
    });
  },
  //公司认证审核
  [aTypes.JUDGECOMPANY_URL]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.judgeCompany(params,(res) => {
          res = JSON.parse(res);
          if(res.code==400){
            
          }else{
         state.companyCer = res.datas;
         
         }
       resolve(res)
      });
    });
  },
  //实名认证
  [aTypes.GETREALNAME_URL]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getRealNameUsers(params,(res) => {
          res = JSON.parse(res)
          if(res.code==400){
            state.realName = "";
            state.certiadTotal = 0;
          }else{
            
            state.realName = res.datas
            state.certiadStart = res.start;
            state.certiadTotal = res.totalCount;
          }
        resolve(res)
      });
    });
  },
  //实名认证审核
  [aTypes.JUDGEREALNAME_URL]({commit, state}, params){

    return new Promise((resolve, reject) => {
      Services.judgeRealName(params,(res) => {
        res = JSON.parse(res)
        resolve(res)
      });
    });
  },
   //头像认证
  [aTypes.GETAVATARUSER]({commit, state}, params){

    return new Promise((resolve, reject) => {
      Services.getAvatarUsers(params,(res) => {
       
          res = JSON.parse(res)
          if(res.code==400){
            state.headAvent = "";
            state.postAventTotal = 0;
          }else{
            state.headAvent = res.datas
            state.postAventStart = res.start
            state.postAventTotal = res.totalCount
           
            for(var i=0,_len=res.datas.length;i<_len;i++){
              var unixTimestamp = new Date( res.datas[i].upload_time*1000 ) ;
              var commonTime = unixTimestamp.toLocaleString();
              res.datas[i].upload_time = commonTime.slice(0,9);
              }
          }
        resolve(res)
      });
    });
  },
  //头像认证审核
  [aTypes.JUDGEAVATAR]({commit, state}, params){

    return new Promise((resolve, reject) => {
      Services.judgeAvatar(params,(res) => {
        
          res = JSON.parse(res)

          if(res.code==400){
            
          }else{
            state.realName = res.datas
            
      }
        
        resolve(res)
      });
    });
  },
  //海报认证
  [aTypes.GETCOVERUSER]({commit, state}, params){

    return new Promise((resolve, reject) => {
      Services.getCoverUsers(params,(res) => {
            res = JSON.parse(res)
        if(res.code==400){
            state.postAvent = "";
            state.personTotal = 0;
          }else{
        state.postAvent = res.datas
        state.personStart = res.start
        state.personTotal = res.totalCount
        for(var i=0,_len=res.datas.length;i<_len;i++){
              var unixTimestamp = new Date( res.datas[i].upload_time*1000 ) ;
              var commonTime = unixTimestamp.toLocaleString();
              res.datas[i].upload_time = commonTime.slice(0,9);
              }
       }
        
        resolve(res)
      });
    });
  },
  //海报认证审核
  [aTypes.JUDGECOVER]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.judgeCover(params,(res) => {
      
            res = JSON.parse(res)
            if(res.code==400){
            
          }else{
           state.postAventVia = res.datas
        }
        
        resolve(res)
      });
    });
  },
  //举报列表
  [aTypes.GETREPORTLIST1]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getReportList1(params,(res) => {
       
        res = JSON.parse(res)
         if(res.code==400){
            state.reportList = "";
            state.reportTotal  = 0;
          }else{
            for(var i=0,_len=res.datas.length;i<_len;i++){
              var unixTimestamp = new Date( res.datas[i].createTime*1000 ) ;
              var commonTime = unixTimestamp.toLocaleString();
              res.datas[i].createTime = commonTime.slice(0,9);
            }
             for(var i=0,_len=res.datas.length;i<_len;i++){
              var unixTimestamp = new Date( res.datas[i].modifyTime*1000 ) ;
              var commonTime = unixTimestamp.toLocaleString();
              res.datas[i].modifyTime = commonTime.slice(0,9);
            }
            for(var j=0,_jlen=res.datas.length;j<_jlen;j++){
              var dataN = res.datas[j].content;
              dataN = JSON.parse(dataN);
              var c='';
              for(var k=0,_klen=dataN.length;k<_klen;k++){
                 c +=  dataN[k].type+'，';
              }
              c = c.substring(0,c.length-1)
              res.datas[j].content =  c;
              // res.datas[j].content = dataN.type;
              
            }
            state.reportList = res.datas;
            state.reportStart = res.start;
            state.reportPagesize = res.pageSize;
            state.reportTotal  = res.totalCount;
        }
        
        resolve(res)
      });
    });
  },
  [aTypes.GETREPORTLIST2]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getReportList2(params,(res) => {
        res = JSON.parse(res)
        if(res.code==400){
            
        }else{
        state.dealtList = res.datas
        state.reportStart = res.start;
        state.reportPagesize = res.pageSize;
        state.reportTotal  = res.totalCount;
        for(var j=0,_jlen=res.datas.length;j<_jlen;j++){
              var stu = res.datas[j].status;
              if(stu=='receive'){
                stu='禁用'
              }
              if(stu=='ignore'){
                stu='拒绝'
              }
              res.datas[j].status = stu;
            }
            for(var j=0,_jlen=res.datas.length;j<_jlen;j++){
              var dataN = res.datas[j].content;
              dataN = JSON.parse(dataN);
              var c='';
              for(var k=0,_klen=dataN.length;k<_klen;k++){
                 c +=  dataN[k].type+'，';
              }
              c = c.substring(0,c.length-1)
              res.datas[j].content =  c;
            }
        }
        
        resolve(res)
      });
    });
  },
  //举报处理
  [aTypes.JUDGEREPORT]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.judgeReport(params,(res) => {
        resolve(res)
      });
    });
  },
  //举报删除
  [aTypes.DELETEREPORT]({commit, state}, params){

    return new Promise((resolve, reject) => {
      Services.deleteReport(params,(res) => {
        resolve(res)
      });
    });
  },
  //退款处理待审核
  [aTypes.GETREFUNDORDERSSHENHE]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getRefundOrders1(params,(res) => {
            res = JSON.parse(res)
        if(res.code==400){
            
          }else{
        state.refunPagesize = res.pageSize
        state.refunStart = res.start
        state.refunTotal = res.totalCount
        state.checkPend = res.datas
        }
        
        resolve(res)
      });
    });
  },
  //退款处理待打款
  [aTypes.GETREFUNDORDERSDAIDAKUAN]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getRefundOrders2(params,(res) => {
        
            res = JSON.parse(res)
            if(res.code==400){
            
          }else{
           state.playWith = res.datas;
       }
        
        resolve(res)
      });
    });
  },
  //退款处理已打款
  [aTypes.GETREFUNDORDERSYIDAKUAN]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.getRefundOrders3(params,(res) => {
    
            res = JSON.parse(res)
            if(res.code==400){
            
          }else{
        state.haveMoney = res.datas
          }
        
        resolve(res)
      });
    });
  },
  //退款处理
  [aTypes.JUDGEREFUNDORDER]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.judgeRefundOrder(params,(res) => {

        resolve({
          data: res
        })
      });
    });
  },
  //提现-----------------------------------------------------
  [aTypes.DRAWWITH_URL]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.deleteRefundOrder(params,(res) => {

        resolve({
          data: res
        })
      });
    });
  },
  //退款处理
  [aTypes.DELETEREFUNDORDER]({commit, state}, params){
    return new Promise((resolve, reject) => {
      Services.deleteRefundOrder(params,(res) => {

        resolve({
          data: res
        })
      });
    });
  },
}
const mutations = {
   [mTypes.SOME_MUTATION] (state) {
      // mutate state
    }

}
export default {
	state,
	getters,
	actions,
  mutations
  
}
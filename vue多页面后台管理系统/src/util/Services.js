import xAjax from './xAjax';
const  LOGIN_URL = '/login';
const GETINDUSTRY_URL = '/mall/getIndustryList';//获取行业
const GET_PARENT_CATEGORY = '/mall/getParentCategoryList';//获取父类目
const GET_SUB_CATEGORY = '/mall/getSubCategoryList';//获取子类目
const GETCHILDERCATEGORY_URL = '/mall/getChilderItemList';
const EDITCATEGORY_URL = '/mall/changeCategory';//编辑
const DELETECATEGORY_URL = '/mall/deleteItem';
const GETSHOP_URL = '/mall/getShop';//店铺管理
const QUERYCATEGORY = '/mall/addCategory';//行业增加
const GETSHOPDETAILS_URL = '/mall/getShopDetails';//店铺管理查询详情
const CLOSESHOP_URL = '/mall/shop/operate';//店铺关闭
const STARTSHOP_URL = '/mall/shop/operate';//店铺开启
const DELETESHOP_URL = '/mall/shop/operate';//店铺删除
const GETCOMPANYBASIC_URL = '/mall/getCompany';//公司认证
const JUDGECOMPANY_URL = '/mall/judgeCompany';//公司认证通过
const GETAUTHENTICATION_URL = '/sns/getAuthenticationList';
const JUDGEREALNAME_URL = '/sns/judgeRealName';//实名认证通过驳回
const GETPLATFORORMHOMEFITMENT = '/mall/getPlatformHomeFitment';
const CHANGEPLANTFORMHOMEFITMENT = '/mall/updatePlatformHomeFitment';
const PUBLISHPLANT = '/mall/publishPlatformHomeFitment';
const GETOPTION_URL = '/mall/getParentCategoryForOption';
const GETGOODSSORT = '/mall/getGoodsSort';
const GETGOODSSORTS = '/mall/getGoodsSort';
const UPDATEGOODS  = '/mall/changeGoodsSort';
const GETSNSPOSTER_URL = '/mall/getSnsPoster';//获取商友圈广告
const UPDATESNSPOSTER_URL = '/mall/updateSnsPoster';//更新商友圈广告图
const GETPAYEDSHOP = '/mall/getPayedShop';//入驻申请
const GETREALNAME_URL = '/sns/getRealNameUsers';//实名认证
const GETAVATARUSER= '/sns/getAvatarUsers';//头像认证
const JUDGEAVATAR = '/sns/judgeAvatar';//头像认证通过
const GETCOVERUSER =' /sns/getCoverUsers';
const JUDGECOVER = '/sns/judgeCover';
const GETREPORTLIST1 ='/sns/getReportList/init';//举报列表
const GETREPORTLIST2 ='/sns/getReportList/receive+ignore';//举报列表
const JUDGEREPORT ='/sns/judgeReport';//举报列表的处理
const DELETEREPORT = '/sns/deleteReport';//举报列表的删除
const  BUSINESSMANAGER = 'mall/getSuccessCompany';//商家管理
const GETUSERAMOUNT ='/sns/getUserAmount';//用户统计
const GETSHOPAMOUNT ='/mall/getShopAmount';//店铺统计
const GETCOMPANYAMOUNT ='/mall/getCompanyAmount';//入驻申请
const GETAUDITUSERAMOUT ='/sns/getAuditUserAmount';//实名认证
const GETREPORTAMOUNT ='/sns/getReportAmount'; //举报统计
const QUERY_QINIU_UPLOADTOKEN = '/mall/getToken';//上传图片
const GETREFUNDORDERSSHENHE ='/mall/getRefundOrders/REFUND_WAIT';//退款处理及待审核
const GETREFUNDORDERSDAIDAKUAN ='/mall/getRefundOrders/REFUND_FAIL';//退款处理待打款
const GETREFUNDORDERSYIDAKUAN ='/mall/getRefundOrders/REFUND_SUCCESS';//退款处理已打款
const JUDGEREFUNDORDER ='/mall/judgeRefundOrder';//维权编辑
const DELETEREFUNDORDER ='/mall/deleteRefundOrder';//维权删除
// const UPLOADER_BUSINESS_LICENCE ='/api/qncloud/uploadtoken';
const GETIMAGEPATH = '/mall/getImagePath';
const DRAWWITH_URL = '';//提现---------------------
export default {
	//用户登录
	userLogin(params, cb){
		console.log("to",params)
		xAjax(LOGIN_URL, "post", params, cb);
	},
	/**
	 * 商城管理
	 */
	/**
	 * 类目管理
	 */
	//图片上传
	getToken(params, cb){
		xAjax(QUERY_QINIU_UPLOADTOKEN, "post", params, cb);
	},
	//上传七牛
	// uploadQiniu(params, cb){
	// 	xAjax(UPLOADER_BUSINESS_LICENCE, "get", params, cb);
	// },
	getImagePath(params, cb){
		xAjax(GETIMAGEPATH, "get", params, cb);
	},
	
	 //index首页  用户统计
	 getUserAmount(params, cb){
		xAjax(GETUSERAMOUNT, "get", params, cb);
	},
	//index首页  店铺统计
	 getShopAmount(params, cb){
		xAjax(GETSHOPAMOUNT, "get", params, cb);
	},
	//index首页  入驻申请
	 getPayedShop(params, cb){
		xAjax(GETPAYEDSHOP, "get", params, cb);
	},
	//index首页  负责人认证
	 getCompanyAmount(params, cb){
		xAjax(GETCOMPANYAMOUNT, "get", params, cb);
	},
	//index首页  实名认证
	 getAuditUserAmount(params, cb){
		xAjax(GETAUDITUSERAMOUT, "get", params, cb);
	},
	//index首页  举报统计
	 getReportAmount(params, cb){
		xAjax(GETREPORTAMOUNT, "get", params, cb);
	},
	//查询行业
	queryIndustry(params, cb){
		xAjax(GETINDUSTRY_URL, "get", params, cb);
	},
	//查询父类目
	queryParentItem(params, cb){
		xAjax(GET_PARENT_CATEGORY, "get", params, cb);
	},
	//查询子类目
	querySubItem(params, cb){
		xAjax(GET_SUB_CATEGORY, "get", params, cb);
	},
	queryCategory(params, cb){//行业增加
		xAjax(QUERYCATEGORY, "post", params, cb);
	},
	
	//编辑类目
	editCategory(params, cb){
		xAjax(EDITCATEGORY_URL, "post", params, cb);
	},
	/**
	 * 店铺管理
	 */
	//查询店铺
	getShop(params, cb){
		xAjax(GETSHOP_URL, "post", params, cb);
	},
	//删除店铺
	operateShop(params, cb){
		xAjax(DELETESHOP_URL, "post", params, cb);
	},
	//开启店铺
	operateShop(params, cb){
		xAjax(STARTSHOP_URL, "post", params, cb);
	},
	//关闭店铺
	operateShop(params, cb){
		xAjax(CLOSESHOP_URL, "post", params, cb);
	},
	//商家管理-----------------------------------------
	getSuccessCompany(params, cb){
		xAjax(BUSINESSMANAGER, "get", params, cb);
	},
	/**
	 * 公司管理
	 */
	//查询公司获取基本信息
	queryCompanyBasic(params, cb){
		xAjax(GETCOMPANYBASIC_URL, "get", params, cb);
	},
	//查询公司详细信息
	// queryCompanyDetails(params, cb){
	// 	xAjax(GETCOMPANYDETAILS_URL, "post", params, cb);
	// },
	/**
	 * 认证管理
	 */
	 //公司认证通过
	judgeCompany(params, cb){
		xAjax(JUDGECOMPANY_URL, "post", params, cb);
	},
	//查询实名认证
	queryAuthentication(params, cb){
		xAjax(GETAUTHENTICATION_URL, "post", params, cb);
	},
	//实名认证
	getRealNameUsers(params, cb){
		xAjax(GETREALNAME_URL, "get", params, cb);
	},
	//实名认证通过驳回
	judgeRealName(params, cb){
		xAjax(JUDGEREALNAME_URL, "post", params, cb);
	},
	//头像认证
	getAvatarUsers(params, cb){
		xAjax(GETAVATARUSER, "get", params, cb);
	},
	//头像认证通过
	judgeAvatar(params, cb){
		xAjax(JUDGEAVATAR, "post", params, cb);
	},
	//海报认证
	getCoverUsers(params, cb){
		xAjax(GETCOVERUSER, "get", params, cb);
	},
	//海报认证通过
	judgeCover(params, cb){
		xAjax(JUDGECOVER, "post", params, cb);
	},
	/**
	 * 举报管理
	 */
	queryReport(params, cb){
		xAjax(null, "post", params, cb);
	},
	//发布
	publishPlatform(params, cb){
		xAjax(PUBLISHPLANT, "post", params, cb);
	},
	 /**
	  * 商城广告的管理
	  */
	 //商城首页banner
	 getPlatformHomeFitment(params, cb){
	 	xAjax(GETPLATFORORMHOMEFITMENT, "get", params, cb);
	 },
	 // -----------------------下拉菜单
	 getParentItemForOption(params, cb){

	 	xAjax(GETOPTION_URL, "get", params, cb);
	 },
	 //------商品品类
	  getGoodsSort(params, cb){
	 	xAjax(GETGOODSSORT, "get", params, cb);
	 },
	  getGoodsSorts(params, cb){
	 	xAjax(GETGOODSSORTS, "get", params, cb);
	 },
	 //----------商品品类提交
	  updateGoodsSort(params, cb){
	 	xAjax(UPDATEGOODS, "post", params, cb);
	 },
	 changePlatformHomeFitment(params, cb){
	 	xAjax(CHANGEPLANTFORMHOMEFITMENT, "post", params, cb);
	 },
	 //更新现有的banner
	 updateShopIndexBannerList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 //查看现有的中部商品推荐列表
	 queryGoodsRecommendList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 //更新现有的中部商品推荐列表
	 updateGoodsRecommendList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 //logo列表查询
	 queryLogoRecommendList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 updateLogoRecommendList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 //获取商友圈广告
	 querySNSPoster(params,cb){
	 	xAjax(GETSNSPOSTER_URL,"get",params,cb);
	 },
	 //更新商友圈广告图
	 updateSNSPoster(params,cb){
	 	xAjax(UPDATESNSPOSTER_URL,"post",params,cb);
	 },
	 /**
	  * 维权管理
	  */
	 //举报列表
	 getReportList1(params, cb){
	 	xAjax(GETREPORTLIST1, "get", params, cb);
	 },
	 getReportList2(params, cb){
	 	xAjax(GETREPORTLIST2, "get", params, cb);
	 },
	 //举报列表的处理
	 judgeReport(params, cb){
	 	xAjax(JUDGEREPORT, "post", params, cb);
	 },

	 //举报列表的删除
	 //
	 deleteReport(params, cb){
	 	xAjax(DELETEREPORT, "post", params, cb);
	 },
	 //查询新建的维权列表
	 queryLegalPowerList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 //查询平台判决
	 queryPlateformDecisionList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 //查询待定列表
	 queryUndeminedList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 //查询发起维权列表
	 queryLegalPowerOriginalList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 //查询列表
	 queryCancelLegalPowerList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 /**
	  * 资金管理
	  */
	 //查询体现申请列表
	 queryWithdrawNeedReviewList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 //查询已审核的申请
	 queryWithDrawCheckedList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 //查询待打款的列表
	 queryNeedToPayList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 //查询已打款的列表
	 queryPaySuccessList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 //查询申请体现已驳回的列表
	 queryPayFailList(params, cb){
	 	xAjax(null, "post", params, cb);
	 },
	 //退款处理及待审核
	 getRefundOrders1(params, cb){
	 	xAjax(GETREFUNDORDERSSHENHE, "get", params, cb);
	 },
	 //退款处理待打款
	 getRefundOrders2(params, cb){
	 	xAjax(GETREFUNDORDERSDAIDAKUAN, "get", params, cb);
	 },
	 //退款处理及已打款
	 getRefundOrders3(params, cb){
	 	xAjax(GETREFUNDORDERSYIDAKUAN, "get", params, cb);
	 },
	 //维权编辑
	 judgeRefundOrder(params, cb){
	 	xAjax(JUDGEREFUNDORDER, "post", params, cb);
	 },
	 //维权删除
	 deleteRefundOrder(params, cb){
	 	xAjax(DELETEREFUNDORDER, "post", params, cb);
	 },
	 //提现------------------------
	 deleteRefundOrder(params, cb){
	 	xAjax(DRAWWITH_URL, "post", params, cb);
	 },


	 


}

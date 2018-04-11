import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '../components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
   
    {
      path: '/',
      name: 'home',
      component: (resolve) => {
      	require(['../userpage/home.vue'],resolve);
      },
      children:[
      	{
      		path:'/',
      		redirect:'/index'
      	},
   		{
   			path:'/index',
   			component: (resolve) => {
   				require(['../userpage/index.vue'], resolve);
   			}
   		},
   		//公告管理
	    {
	      path: 'notice',
	      name: 'Notice',
	      component: (resolve) => {
	      	require(['../views/shop-manage/notice.vue'],resolve);
	      }
	    },
	    //类目管理
	    {
	      path: 'category',
	      name: 'Category',
	      component: (resolve) => {
	      	require(['../views/shop-manage/category.vue'],resolve);
	      }
	    },
	    //行业管理
	    {
	      path: 'industry',
	      name: 'Industry',
	      component: (resolve) => {
	      	require(['../views/shop-manage/industry.vue'],resolve);
	      }
	    },
	    //供应商管理
	    {
	      path: 'supplier',
	      name: 'Supplier',
	      component: (resolve) => {
	      	require(['../views/shop-manage/supplier.vue'],resolve);
	      }
	    },
	    //店铺管理
	    {
	      path: 'store',
	      name: 'Store',
	      component: (resolve) => {
	      	require(['../views/shop-manage/store.vue'],resolve);
	      }
	    },
        //商品属性
        {
          path: 'shopAttr',
          name: 'ShopAttr',
          component: (resolve) => {
            require(['../views/shop-manage/product-attr.vue'],resolve);
          }
        },
	    //举报
	    {
	    	path: 'report',
	    	name: 'Report',
	    	component: (resolve) => {
	    		require(['../views/shop-manage/report.vue'],resolve);
	    	}
	    },
        {
            path: 'refundOrder',
            name: 'refundOrder',
            component: (resolve) => {
                require(['../views/shop-manage/refundOrder.vue'],resolve);
            }
        },
	    //负责人认证
	    {
	    	path: 'settledApplication',
	    	name: 'settledApplication',
	    	component: (resolve) => {
	    		require(['../views/identification-manage/settled-application.vue'], resolve);
	    	}
	    },
        //入驻申请
        {
            path: 'applicationIn',
            name: 'applicationIn',
            component: (resolve) => {
                require(['../views/identification-manage/applicationIn.vue'], resolve);
            }
        },
	    //雇员认证
	    // {
	    // 	path: 'employeeCertication',
	    // 	name: 'employeeCertication',
	    // 	component: (resolve) => {
	    // 		require(['../views/identification-manage/employee-certication.vue'], resolve);	
	    // 	}
	    // },
	    //实名认证
	    {
	    	path: 'certification',
	    	name: 'certification',
	    	component: (resolve) => {
	    		require(['../views/identification-manage/certification.vue'], resolve);
	    	}
	    },
	    //个人头像认证
	    {
	    	path: 'personal-avatar-auth',
	    	name: 'personal-avatar-auth',
	    	component: (resolve) => {
	    		require(['../views/identification-manage/personal-avatar-auth.vue'], resolve);
	    	}
	    },
	    //个人海报认证
	     {
            path: 'personal-poster-certification',
            name: 'personal-poster-certification',
            component: (resolve) => {
                require(['../views/identification-manage/personal-poster-certification.vue'], resolve);
            }
        },
	    //负责人认证
	    // {
	    // 	path: 'personCharge',
	    // 	name: 'personCharge',
	    // 	component: (resolve) => {
	    // 		require(['../views/identification-manage/person-in-charge-certication.vue'], resolve);
	    // 	}
	    // },
	    //商城首页广告
	    {
	    	path: 'shopIndex',
	    	name: 'shopIndex',
	    	component: (resolve) => {
	    		require(['../views/ads-manage/shop-index.vue'], resolve)
	    	}
	    },
        //商品品类
        {
            path: 'sortIndex',
            name: 'sortIndex',
            component: (resolve) => {
                require(['../views/ads-manage/sortIndex.vue'], resolve)
            }
        },
        //商品品类
         {
            path: 'business_circle',
            name: 'business_circle',
            component: (resolve) => {
                require(['../views/ads-manage/business_circle.vue'], resolve)
            }
        },
	    //维权
	    {
	    	path: 'legalPower',
	    	name: 'legalPower',
	    	component: (resolve) => {
	    		require(['../views/legal-power/legal-power.vue'], resolve);
	    	}
	    },
	    //资金管理
	    {
	    	path: 'withdraw',
	    	name: 'withdraw',
	    	component: (resolve) => {
	    		require(['../views/fund-manage/withdraw.vue'], resolve);
	    	}
	    },
	    //需求管理
	    // {
	    // 	path: 'matchList',
	    // 	name: 'matchList',
	    // 	component: (resolve) => {
	    // 		require(['../views/demand-manage/match-list.vue'], resolve);
	    // 	}
	    // }

	    ]
    },
    {
    	path: '/login',
    	name: 'login',
    	component: (resolve) => {
    		require(['../userpage/login.vue'], resolve);
    	}
    },
    {
    	path: '/register',
    	name: 'register',
    	component: (resolve) => {
    		require(['../userpage/register.vue'], resolve);
    	}
    }
  ]
})

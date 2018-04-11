// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '../theme/index.css'
import WHeader from './components/w-header.vue'
import WSubnav from './components/w-subnav.vue'
import WImageUpload from './components/w-image-upload'
import store from './vuex/store'
import {session} from './util/Storage'
import VeeValidate from 'vee-validate'//验证
import qiniu from "qiniu-js"
import { Validator } from './util/ExtendValidator'
import cnDictionary from './util/ValidationSettingCn'
import jQuery from  './util/jquery.min'

Vue.config.productionTip = false


// 配置表单校验插件
const config = {
    errorBagName: 'errors', // change if property conflicts.
    fieldsBagName: 'fields',
    delay: 0,
    locale: 'zh_CN',
    dictionary: cnDictionary,
    strict: true,
    enableAutoClasses: true,
    classNames: {
        touched: 'touched', // the control has been blurred
        untouched: 'untouched', // the control hasn't been blurred
        valid: 'valid', // model is valid
        invalid: 'invalid', // model is invalid
        pristine: 'pristine', // control has not been interacted with
        dirty: 'dirty', // control has been interacted with
    }
};
Vue.use(VeeValidate, config);
Vue.directive('toggle-focus',{
    inserted:function (el) {
        el.addEventListener('focus',function(event){
            el.classList.add("onfocus");
        }); 
        el.addEventListener('blur',function(){
             el.classList.remove("onfocus");
        }); 
    }
});
Vue.directive('input-clear',{
     bind:function (el) {
        el.addEventListener('click',function(event){
        }); 
    }
});

Vue.use(ElementUI)
Vue.component(WHeader.name, WHeader)
Vue.component(WSubnav.name, WSubnav)
Vue.component(WImageUpload.name, WImageUpload)
/*router.beforeEach(({meta, path},from,next) => {
	const {auth = true} = meta      // meta代表的是to中的meta对象，path代表的是to中的path对象

	
　　var isLogin = store.state.user.isLogin    // true用户已登录， false用户未登录　
	  //store.dispatch('SAVE_ROUTER',path);
　
　　if (auth  &&  !isLogin  &&  path !== '/login') {   // auth 代表需要通过用户身份验证，默认为true，代表需要被验证， false为不用检验
　　　　
  		//store.dispatch('SAVE_ROUTER',path);
  		let isUser = session.isKey("user");
      console.log("is",isUser);
  		if(isUser){
  			store.state.user.isLogin = true;
  			return next();
  		}
  		return next({ path: '/login' })   //  跳转到login页面
　　}
　　next()   // 进行下一个钩子函数
})*/
router.afterEach(function(route) {

	//console.log(route);

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

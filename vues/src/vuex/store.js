import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/user';
import Routerdata from './modules/routerdata';
Vue.use(Vuex);
 const store = new Vuex.Store({
	modules:{
		user: User,
		routerdata: Routerdata,
	}
})
 export default store;
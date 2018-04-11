import * as aTypes from '../action-types';
import * as mTypes from '../mutation-types';
import Services from './../../util/Services';
const state = {
	isLogin: false,

}
const getters = {
	IsLogin: state => {
		return state.isLogin;
	}
}

const actions = {
/*	[aTypes.USER_LOGIN]({commit, state}, params){
		
		return new Promise((resolve, reject) => {
			 Services.userLogin(params,function(res){
					 	resolve({
						data: res
					})
			 	});
			
		});
	},
	[aTypes.USER_EXIT]({commit, state}, params){
		state.isLogin = false;
		
	}*/
}
export default {
	state,
	getters,
	actions,
}
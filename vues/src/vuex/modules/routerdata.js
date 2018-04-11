import * as aTypes from '../action-types';
import * as mTypes from '../mutation-types';
import Services from './../../util/Services';
const state = {
	saveRouterValue: "/index",

}
const getters = {
	SaveRouter: state => {
		return state.saveRouterValue;
	}
}

const actions = {
	[aTypes.SAVE_ROUTER]({commit, state},params){
		state.saveRouterValue = params;
		
	}
}
export default {
	state,
	getters,
	actions,
}
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		fromPage: '',
		passwordOrigin: ''
	},
	mulations: {
		setFromPage(state, page){
			state.fromPage = page
		},
		setPasswordOrigin(state, origin){
			state.passwordOrigin = origin
		}
	}
})
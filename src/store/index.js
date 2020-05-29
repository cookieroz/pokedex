/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios/index'
import moment from 'moment-timezone'

Vue.use(Vuex)

const state = {
	alerts: [],
	currentMerchant: {},
}

export const actions = {
	ADD_REMOVE_ALERT: function ({ state, commit }, { alert, removeMessage }) {
		let alerts = state.alerts,
			alertExists = null,
			updatedAlerts = alerts
		alerts.forEach( function(item) { if (item.message === alert.message) { return alertExists = true } })
		if (removeMessage) {
			if (alertExists) { updatedAlerts = alerts.filter(function (alertItem) { return removeMessage !== alertItem.message }) }
		} else {
			if (!alertExists) {
				updatedAlerts.push(alert)
			} else {
				updatedAlerts.forEach( function(item) { if (item.message === alert.message) { item.extraInfo = alert.extraInfo } })
			}
		}
		return commit('SET_ALERTS', { alerts: updatedAlerts })
	},

	LOAD_CURRENT_MERCHANT: function ({ commit, dispatch }) {
		const url = '/api/v3/current_merchant',
			errorAlert = {
				extraClasses: 'error-alert',
				message: 'issue loading merchant'
			}
		axios.get(url)
			.then((response) => {
				dispatch('ADD_REMOVE_ALERT', { alert: errorAlert, removeMessage: true })
				commit('SET_CURRENT_MERCHANT', { currentMerchant: response.data })
			})
			.catch((error) => {
				dispatch('ADD_REMOVE_ALERT', { alert: errorAlert, removeMessage: false })
			})
	},
}

export const mutations =  {
	RESET_ALERTS: function (state) {
		state.alerts = []
	},

	SET_ALERTS: function (state, { alerts }) {
		if (alerts.length !== state.alerts.length) { state.alerts = alerts }
	},

	SET_CURRENT_MERCHANT: function (state, { currentMerchant }) {
		state.currentMerchant = currentMerchant
	},
}

export const getters = {
	currentMerchantTime: function (state) {
		if (state.currentMerchant.merchant_time_zone) {
			return moment.tz(moment(), state.currentMerchant.merchant_time_zone).format('hh:mma')
		}
	},

	showBrands: function (state) {
		return state.currentMerchant.show_brands
	},

	showReports: function (state) {
		return state.currentMerchant.show_reports
	},
}

export const store = new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})
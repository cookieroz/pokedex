import Vuex from 'vuex'
import { createLocalVue, mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import { __createMocks as createStoreMocks } from '@/store/__mocks__/'
import VueRouter from 'vue-router'
import Vue from "vue"
import ElementUI from "element-ui"

jest.mock('@/store')

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
Vue.use(ElementUI)
const router = new VueRouter()

describe('Home.vue', () => {
	let storeMocks,
		wrapper

	beforeEach(() => {
		storeMocks = createStoreMocks()
		wrapper = mount(Home, {
			store: storeMocks.store,
			localVue,
			router
		})
	})

	afterEach(function () {
		jest.clearAllMocks()
	})

	it('renders home view', () => {
		expect(wrapper.exists()).toBeTruthy()
	})

	it('should call loadPokemonTypes', () => {
		expect(storeMocks.actions.loadPokemonTypes).toHaveBeenCalled()
	})
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//
//   },
//   mutations: {
//
//   },
//   actions: {
//
//   }
// })
const state = {
  errors: {
    pokemonTypes: null,
  },
  favorites: [],
  loading: false,
  pokemonTypes: [],
  // selectedPokemonType: null,
  selectedPokemonType: {},
}

export const actions = {
  addFavoritePokemon: ({ commit }, pokemon) => {
    commit('addFavorite', { pokemon })
  },

  loadSelectedPokemonType: ({ commit }, url) => {
    commit('setLoading', true)
    axios.get(url)
      .then((response) => {
        const selectedPokemonType = response?.data || {}
        commit('setSelectedPokemonType', { selectedPokemonType })
        commit('setLoading', false)
      })
      .catch((error) => {
        commit('setLoading', false)
        throw new Error(`API ${error}`);
      })
  },

  loadPokemonTypes: ({ commit }) => {
    const url = 'https://pokeapi.co/api/v2/type'
    axios.get(url)
      .then((response) => {
        const pokemonTypes = response?.data?.results || []
        commit('setPokemonTypes', { pokemonTypes })
      })
      .catch((error) => {
        throw new Error(`API ${error}`);
      })
  },

  removeFavoritePokemon: ({ commit }, pokemon) => {
    commit('removeFavorite', { pokemon })
  },
}

export const mutations =  {
  addFavorite: function (state, { pokemon }) {
    const favorites = new Set(state.favorites.concat(pokemon))
    state.favorites = [...favorites]
  },

  removeFavorite: function (state, { pokemon }) {
    state.favorites = state.favorites.filter(({ id }) => id !== pokemon?.id)
  },

  setLoading: function (state, isLoading) {
    state.loading = isLoading
  },

  setSelectedPokemonType: function (state, { selectedPokemonType }) {
    state.selectedPokemonType = {...state.selectedPokemonType, ...selectedPokemonType}
  },

  setPokemonTypes: function (state, { pokemonTypes }) {
    state.pokemonTypes = pokemonTypes
  },
}

export const getters = {
  selectedPokemon: function (state) {
    return state.selectedPokemonType?.pokemon || []
  },

  selectedPokemonTypeName: function (state) {
    return state.selectedPokemonType?.name || ''
  }
}

export const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
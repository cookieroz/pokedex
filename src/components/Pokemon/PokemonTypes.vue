<template>
  <div class="pokemon-types">
    <el-input v-model="filterTerm"
              class="pokemon-types__filter"
              placeholder="Filter types"
              clearable></el-input>

    <ul v-if="displayedPokemonTypes" class="pokemon-types__list">
      <li v-for="pokeType in displayedPokemonTypes"
          :class="['pokemon-types__list-item', {['is-selected']: selectedPokemonTypeName === pokeType.name}]"
          :key="pokeType.url"
          @click="selectPokemonType(pokeType.url)">
        {{pokeType.name}}
      </li>
    </ul>
  </div>
</template>

<script>
	import { mapGetters, mapState } from 'vuex'

	export default {
		name: 'PokemonTypes',

		data() {
			return {
				filterTerm: ''
			}
		},

		methods: {
      includesPokemonTypeName(name) {
				return name.toLowerCase().includes(this.filterTerm.toLowerCase())
      },

			selectPokemonType(url) {
				url && this.$store.dispatch('loadSelectedPokemonType', url)
			},
		},

		computed: {
			...mapGetters([
				'selectedPokemonTypeName'
			]),

			...mapState([
				'pokemonTypes'
			]),

			displayedPokemonTypes: function () {
				return this.filteredTypes || this.pokemonTypes
			},

			filteredTypes: function () {
				return this.filterTerm ? this.pokemonTypes.filter(({ name }) => this.includesPokemonTypeName(name)) : null
			},

      loading: function () {
	      return this.pokemonTypes.length < 1
      },
		},
	}
</script>

<style lang="sass" scoped>
.pokemon-types
  background-color: rgba(240,128,128, 0.5)
  grid-area: types
  overflow-y: hidden
  padding: 0 0 3em 0
  position: relative

  &__filter
    padding: 0.5em
    text-transform: capitalize
    width: auto

  &__list
    height: 100%
    list-style: none
    margin: 0
    overflow-y: auto
    padding: 0

  &__list-item
    cursor: pointer
    padding: 0.5em
    text-transform: capitalize

    &.is-selected,
    &:hover
      background-color: #ffffff

    &:last-child
      padding-bottom: 1em

</style>
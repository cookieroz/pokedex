<template>
  <div class="pokemon-list">
    <h3 class="pokemon-list__type-name">{{selectedPokemonTypeName}}</h3>
    <el-container v-if="selectedPokemon.length"
            class="pokemon-list__cards"
            v-loading="loading"
            element-loading-text="Loading..."
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)">
      <pokemon-card v-for="pokemon in selectedPokemon"
                    :key="pokemon.pokemon.name"
                    :pokemonFromList="pokemon.pokemon"></pokemon-card>
    </el-container>
    <small v-else class="pokemon-list__none">No pokemon type selected</small>
  </div>
</template>

<script>
	import { mapGetters, mapState } from 'vuex'
	import PokemonCard from './PokemonCard'

	export default {
		name: 'PokemonList',

		components: {
			PokemonCard
		},

		computed: {
			...mapGetters([
				'selectedPokemon',
				'selectedPokemonTypeName'
			]),

			...mapState([
				'loading',
				'selectedPokemonType'
			]),
		},
	}
</script>

<style lang="sass" scoped>
.pokemon-list
  grid-area: pokemon
  overflow-y: hidden
  padding: 0 0.5em 1em 0.5em

  &__type-name
    background: white
    margin: 0
    padding: 0.5em 0
    text-transform: capitalize

  &__cards
    display: grid
    grid-gap: 0.5em
    grid-template-columns: repeat(2, 1fr)
    grid-auto-rows: 1fr
    height: 100%
    overflow-y: auto
    padding-bottom: 3em

  &__none
    display: block
    font-style: italic
    text-align: center
</style>
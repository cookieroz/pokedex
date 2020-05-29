<template>
  <div class="pokedex">
    <header class="pokedex__header">
      <h2 class="pokedex__header--title">Pokedex</h2>
    </header>
    <favorites-list></favorites-list>
    <pokemon-types></pokemon-types>
    <pokemon-list></pokemon-list>
  </div>
</template>

<script>
  import FavoritesList from '../components/Favorites/FavoritesList'
	import PokemonList from '../components/Pokemon/PokemonList'
	import PokemonTypes from '../components/Pokemon/PokemonTypes'

	export default {
		name: 'PokedexHome',

		components: {
			FavoritesList,
			PokemonList,
			PokemonTypes
		},

		created() {
			this.$store.dispatch('loadPokemonTypes')
		},
	}
</script>

<style lang="sass" scoped>
.pokedex
  display: grid
  grid-template-columns: 22% 48% 30%
  height: 100vh
  overflow-y: hidden
  grid-template-areas: 'header header favorites' 'types pokemon favorites'

  &__header
    background-color: lightgray
    grid-area: header
    padding: 0.5em

  &__header--title
    margin: 0
</style>

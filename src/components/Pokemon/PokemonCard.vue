<template>
  <el-col class="pokemon-card">
    <el-card shadow="never">
      <i :class="['pokemon-card__favorite', favoritesIconClass]" @click="toggleFavorite"></i>
      <h3 class="pokemon-card__name">{{pokemon.name}}</h3>
      <el-button class="pokemon-card__id" size="mini">#{{pokemon.id}}</el-button>
    </el-card>

    <favorites-dialog v-if="dialogVisible"
                      :dialogVisible="dialogVisible"
                      :pokemon="pokemon"
                      @closeFavoritesDialog="closeFavoritesDialog"></favorites-dialog>
  </el-col>
</template>

<script>
  import FavoritesDialog from '../Favorites/FavoritesDialog'
	import { mapState } from 'vuex'

	export default {
		props: {
			pokemonFromList: Object
		},

		name: 'PokemonCard',

		components: {
			FavoritesDialog
		},

		data() {
			return {
				dialogVisible: false,
			}
		},

		methods: {
			addToFavorites() {
				this.$store.dispatch('addFavoritePokemon', this.pokemon)
      },

			closeFavoritesDialog() {
				this.dialogVisible = false
      },

			removeFromFavorites() {
				this.$store.dispatch('removeFavoritePokemon', this.pokemon)
			},

			toggleFavorite() {
        if (!this.isFavorite) {
        	this.dialogVisible = true
        }
			},
		},

		computed: {
			...mapState([
				'favorites'
			]),

      favoritesIconClass: function () {
				const onOff = this.isFavorite ? 'on' : 'off'
	      return `el-icon-star-${onOff}`
      },

			isFavorite: function () {
				return this.favorites.some(({id}) => id === this.pokemon?.id)
			},

      pokemon: function () {
	      const regexExtractIdFromUrl = /^.*\/(.*)\/$/,
		      url = this.pokemonFromList?.url,
		      id = url ? url.match(regexExtractIdFromUrl)[1] : '',
		      name = this.pokemonFromList?.name
	      return { id, name }
      },
		},
	}
</script>

<style lang="sass" scoped>
.pokemon-card
  padding-bottom: 0.5em

  .el-card__body
    padding: 10px

  .el-icon-star-on
    pointer-events: none

  &__favorite
    cursor: pointer
    float: right

    &.el-icon-star-on,
    &:hover
      color: lightcoral

  &__name
    clear: both
    margin: 0 0 0.5rem 0
    text-transform: capitalize

  &__id
    padding: 5px
    pointer-events: none
</style>
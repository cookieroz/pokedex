<template>
  <div class="favorites-list">
    <h3 class="favorites-list__title">My favorites</h3>
    <template v-if="favorites.length">
      <favorite-card v-for="favorite in favorites"
                     :key="favorite.id"
                     :favorite="favorite"></favorite-card>
    </template>
    <small v-else class="favorites-list__no-favorites">No favorites selected</small>
  </div>
</template>

<script>
	import FavoriteCard from './FavoritesCard'
	import { mapState } from 'vuex'

	export default {
		name: 'FavoritesList',

		components: {
			FavoriteCard
		},

		computed: {
			...mapState([
				'favorites'
			]),
		},
	}
</script>

<style lang="sass" scoped>
.favorites-list
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  grid-area: favorites
  height: 100vh
  overflow-y: auto
  padding: 0 0.5em 3em 0.5em
  position: relative

  &__title
    background-color: white
    margin: 0
    padding: 1em 0
    position: sticky
    top: 0

  &__no-favorites
    display: block
    font-style: italic
    text-align: center
</style>
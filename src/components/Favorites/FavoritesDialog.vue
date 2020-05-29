<template>
  <el-dialog :show-close="false"
             title="Add to Favorites"
             :visible.sync="dialogVisible">
    <label for="memo">Add a memo if you wish:</label>
    <el-input v-model="memo" id="memo" clearable></el-input>

    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('closeFavoritesDialog')">Cancel</el-button>
      <el-button class="favorites-dialog__add" type="primary" @click="addToFavorites">Add</el-button>
    </span>
  </el-dialog>
</template>

<script>
	export default {
		props: {
			dialogVisible: Boolean,
			pokemon: Object
		},

		name: 'FavoritesDialog',

		data() {
			return {
				memo: null,
			}
		},

		methods: {
			addToFavorites() {
				const pokemon = {...this.pokemon, memo: this.memo}
				this.$store.dispatch('addFavoritePokemon', pokemon)
				this.$emit('closeFavoritesDialog')
			},
		},
	}
</script>
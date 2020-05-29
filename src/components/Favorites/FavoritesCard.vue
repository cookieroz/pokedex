<template>
  <el-card v-if="favorite" class="favorites-card" shadow="never">
    <div class="favorites-card__main">
      <div class="favorites-card__name">{{favorite.name}}</div>
      <el-popconfirm class="favorites-card__warning"
                     cancelButtonText="No"
                     confirmButtonText="Yes"
                     confirmButtonType="text"
                     icon=""
                     title="Are you sure you want to delete this?"
                     @onCancel="hideDeleteWarning"
                     @onConfirm="removeFromFavorites">
        <button class="favorites-card__button" slot="reference">
          <i class="favorites-card__icon el-icon-close"></i>
        </button>
      </el-popconfirm>
    </div>

    <div v-if="favorite.memo" class="favorites-card__memo">
      <small class="favorites-card__memo-header">Memo: </small>
      <small class="favorites-card__memo-text">{{favorite.memo}}</small>
    </div>
  </el-card>
</template>

<script>
	export default {
		props: {
			favorite: Object,
		},

		name: 'FavoriteCard',

		data() {
			return {
				showWarning: false,
			}
		},

		methods: {
			removeFromFavorites() {
        this.$store.dispatch('removeFavoritePokemon', this.favorite)
				this.hideDeleteWarning()
      },

			hideDeleteWarning() {
				this.showWarning = false
			},
		},
	}
</script>

<style lang="sass" scoped>
.el_card__body
  padding: 0.5em

.favorites-card
  background-color: #EBEEF5
  border-radius: 0
  margin-bottom: 10px

  &__main
    align-items: center
    display: flex
    justify-content: space-between

  &__name
    font-weight: 600
    text-transform: capitalize

  &__button
    background: none
    border: none
    cursor: pointer
    font-size: larger

    &:hover
      color: lightcoral

  &__memo
    margin: 0.5em 0 0 0

  &__memo-header,
  &__memo-text
    display: block

  &__memo-header
    color: dimgray

.el-popconfirm__action
  display: flex

  .el-button--text
    &:first-child
      order: 2
      margin-right: 0

    &:last-child
      order: 1
      margin-right: 10px
</style>
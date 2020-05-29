<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700&display=swap')

body
  font-family: 'Source Sans Pro', sans-serif
  margin: 0

.el-popover,
.pokedex
  .el-input__inner,
  .el-button
    border-radius: 0

  .el-button--text
    color: lightcoral

    &:hover
      color: rgba(240,128,128, 0.5)

  .el-button--primary
    background-color: lightcoral
    border-color: lightcoral

    &:hover
      background-color: rgba(240,128,128, 0.5)
      border-color: transparent

  .el-button--default
    &:hover
      color: lightcoral
      border-color: lightcoral
      background-color: transparent

  .el-input__inner
    &:focus
      border-color: lightcoral

</style>

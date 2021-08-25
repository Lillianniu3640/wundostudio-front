<template lang="pug">
b-container#adminmessages
  b-row
    b-col(cols="12")
      h4.text-center 訊息管理
    b-col(cols="12")
      b-img(src='../assets/images/line.png' style='width:100%')
</template>

<style lang="stylus" scoped>
#adminmessages
  position relative
.row
  color #333
  position absolute
  top 0
  left 0
  transform translate(0%,50%)
h4
  display flex
  padding-left 2rem
</style>

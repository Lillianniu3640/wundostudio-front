<template lang="pug">
b-container#adminhome
  b-row
    b-col(cols="12")
      h4.text-center 請選擇管理項目
    b-col(cols="12")
      b-img(src='../assets/images/line.png' style='width:100%')
  b-row
    b-col(cols="12")
      b-img(src='../assets/images/undraw_Add_tasks_re_s5yj-2.svg' style='width:80%; transform: translateX(20%)')
</template>

<style lang="stylus" scoped>
#adminhome
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

<template lang="pug">
b-container#adminmessages
  b-row
    b-col(cols="12")
      h4.text-center 訊息管理
    b-col(cols="12")
      b-img(src='../assets/images/line.png' style='width:100%')
    b-col.mt-5.ml-4(cols="12")
      b-table(:fields="fields" ref="messageTable")
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: '姓名'
        },
        {
          key: 'email',
          label: '信箱'
        },
        {
          key: 'message',
          label: '訊息'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
#adminmessages
  position relative
.row
  color #333
  position absolute
  top 0
  left 0
  transform translate(0%,30%)
h4
  display flex
  padding-left 2rem
</style>

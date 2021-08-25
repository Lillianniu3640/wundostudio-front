<template lang="pug">
  b-container#Asidebar
    b-row
      b-col(cols="2")
        b-button(v-b-toggle.sidebar-variant) Start to setup &nbsp;
          font-awesome-icon(:icon='["fas", "stream"]')
        b-sidebar#sidebar-variant(bg-variant='dark' text-variant='light' width='280px' shadow :no-close-on-route-change="true")
          .px-3.py-2.sidebar-container
            b-nav-item(to='/admin')
              b-img(src='../assets/images/adminlogo.png' fluid style='border-radius: 50%; width:55%;')
            b-nav-item.itemstyle(to='/admin/works') WORK
            b-nav-item.itemstyle2(to='/admin/messages') MESSAGE
      b-col(cols="10")
        router-view
</template>

<style lang="stylus" scoped>
/deep/.bg-dark
    background-color: #333!important
#Asidebar
  height 100vh
  position relative
.row
  height 25%
.btn-secondary
    background-color #D8B281
    border-color #D8B281
    position absolute
    transform translate(5%, 60%)
    z-index 1
.nav-link
  display flex
  justify-content center
  color white
.itemstyle
  margin-top 2rem
  border-bottom 1px dotted white
.itemstyle a:focus
  color #D8B281
.itemstyle2 a:focus
  color #D8B281
li
  list-style-type none
</style>

<template lang="pug">
#app
  b-navbar(v-if="$route.meta.showMenu" toggleable='md' type='light' variant='faded' fixed='top')
    b-container
      b-navbar-brand.text-hide(to='/' style="width:20%") LOGO
        b-img(src="./assets/images/weblogo2.png" style="width:55%")
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.text-right
          b-nav-item.about(to='/about') ABOUT
          b-nav-item.work(to='/works') WORK
        b-navbar-nav.text-right
          b-nav-item.services(to='/services') SERVICES
          b-nav-item.contact(to='/contact') CONTACT
          //- b-nav-item(to='/register') REGISTER
          //- b-nav-item(to='/login') LOGIN
  router-view
</template>

<script>
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap');

body
  background #F7F0E7
.navbar
  background #F7F0E7
.navbar-brand
  width 80%
.navbar-light .navbar-nav .nav-link
  color #D5C8B8
  font-size 1.1rem
  font-weight 400
  font-family:  'Ubuntu', sans-serif;
.navbar-light .navbar-nav .nav-link:hover
  color #D8B281
.navbar-collapse
  justify-content center
@media (min-width: 768px)
  .container
    justify-content center
  .navbar-brand
    width 42%
    margin-right 0
    position absolute
    left 40%
    transform translateX(0%)
    display flex
    justify-content center
  img
    align-self center
  .work
    margin-right 9rem
  .about
    margin-right 1rem
  .services
    margin-left 9rem
  .contact
    margin-left 1rem
@media (min-width: 992px)
  .container
    justify-content center
  .navbar-brand
    width 20%
    margin-right 0
    position absolute
    left 40%
    transform translateX(0%)
    display flex
    justify-content center
  img
    align-self center
  .work
    margin-right 8rem
  .services
    margin-left 8rem
</style>

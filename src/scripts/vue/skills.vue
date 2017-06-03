<style lang="stylus">
div.aboutMe
  margin-left 45px
  margin-top 60px
  text-align left
  h3
    margin-top 20px
    font-family 'proxima_nova_altbold'
    font-size 2em
    span
      font-size 2rem
      color:#a3a3a3
  p
    font-family 'Proxima Nova'
</style>
<template lang="pug">
div.aboutMe
  a(href='javascript:void(0)') #[img(src='images/menu_icon.png')]
  h2 Skills and Personal Attributes
</template>

<script>
export default {
  name: 'workxp',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

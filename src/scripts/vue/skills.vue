<style lang="stylus">
div.skillClass
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
ul#skillList li
  list-style-type none
  float left
  background-color #f0f0f0
  width auto
  display block
  border-radius 5px
  font-size 1.4em
  padding 5px
  margin-right 10px
  margin-bottom 10px
  font-family 'proxima_nova_altbold'
</style>
<template lang="pug">
div.skillClass
  a(href='javascript:void(0)') #[img(src='images/menu_icon.png')]
  h2 Skills and Personal Attributes
  ul#skillList
    li HTML5
    li CSS
    li Javascript
    li JAVA
    li Electronics
    li Arduino
    li Pure data
    li Photoshop
    li Adobe Illustrator
</template>

<script>
export default {
  name: 'skills',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

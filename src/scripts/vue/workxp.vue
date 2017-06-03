<style lang="stylus">
div.workxp
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
  p, li
    font-family 'Proxima Nova'
    font-size 1.2em
ul.responsibilities li
  list-style-type none
  background url('images/bullet.png') no-repeat 0px 13px
  padding-top 10px
  padding-left:20px
</style>
<template lang="pug">
div.workxp
  a(href='javascript:void(0)') #[img(src='images/menu_icon.png')]
  h2 Work Experience
  h3 W3 Digital Agency: Web Developer and Project Coordinator
    span  Mar 2012 - Present
  p Main responsabilities included:
  ul.responsibilities
    li Coordination, control and monitoring of web sites.
    li Requirements analysis, estimation of time and scope. Definition of delivery. Risk assessment.
    li Managing expectations and interaction with clients and different areas of the company.
    li Analysis and development of proposals.
    li Frontend Development:Javascript, Boostrap, Foundation, JQuery, HTML5, CSS, SVN, GIT.
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

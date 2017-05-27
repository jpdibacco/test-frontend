<style lang="stylus">
div.aboutMe
  margin-left 45px
  margin-top 60px
  text-align left
  h4
    margin-top 20px
    font-family 'proxima_nova_altbold'
    color #a3a3a3
    font-size 2em
#Languajes .flags
  float left
  margin-top 20px
  margin-right 20px
.flags
  position relative
  height 200px
  width 200px
  img
    width 54px
    height 36px
    position relative
    top 80px
    left 76px
  .progresscircle
    position absolute
    width 200px
    height 200px
    top 0
    left 0
#Places
  clear both
  display inline-block
  margin-top 40px
</style>
<template lang="pug">
div.aboutMe
  a(href='javascript:void(0)') #[img(src='images/menu_icon.png')]
  h2 About Me
  p The processes of designing, developing, testing and supporting are one BIG "conversation" between the leaders, developers, testers and all people involved in the project, or simply between the TEAM. In order to make a project successful I must be in the creative part of the TEAM. To be one who makes the "conversation" fascinating as a result. All the processes are important, so we should create them as better as possible.
  p I think that the successes of all my projects are because I am really dedicated to the projects I am working on. I love my job and it is really a thrill for me. I am always eager for obtaining new valuable skills and improving my knowledge.
  h4 Languajes I speak
  div#Languajes
    div#spanish.flags
      img(src="images/spain_flag.png" alt="spanish")
      div#spabar.progresscircle
    div#english.flags
      img(src="images/uk_flag.png" alt="english")
      div#engbar.progresscircle
    div#portu.flags
      img(src="images/brasil_flag.png" alt="portuguese")
      div#ptbar.progresscircle
  div#Places
    h4 Places I've Been
    div#map
      img(src="images/map.png" alt="map" width="670" height="400")
</template>

<script>
var ProgressBar = require('progressbar.js')
window.onload = function onLoad(){
  var circlespa = new ProgressBar.Circle('#spabar',{
    color:'#a7a7a7',
    duration: 5000,
    easing:'easeInOut',
    strokeWidth:10,
    trailWidth:8
  });
  circlespa.path.style.strokeLinecap = 'round';
  circlespa.animate(1);
  var circleng = new ProgressBar.Circle('#engbar',{
    color:'#a7a7a7',
    duration: 5000,
    easing:'easeInOut',
    strokeWidth:10,
    trailWidth:8
  });
  circleng.path.style.strokeLinecap = 'round';
  circleng.animate(1);
  var circlept = new ProgressBar.Circle('#ptbar',{
    color:'#a7a7a7',
    duration: 5000,
    easing:'easeInOut',
    strokeWidth:10,
    trailWidth:8
  });
  circlept.path.style.strokeLinecap = 'round';
  circlept.animate(0.7);
}

export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

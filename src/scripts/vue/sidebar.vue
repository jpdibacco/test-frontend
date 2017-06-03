<style lang="stylus">
aside.mainProfile
  background-color:#FFF
  width:391px
  float:left
  height:100%
div#profile
  padding-top:20px
  background-color:#eeefef
p.center
  margin-top:30px
  text-align:center
p.center img
  border-radius:100px
  position:relative
  left:10px
img#flagprofile
  position:relative
  left:-53px
  top:69px
  width:50px
h1,h2
  font-family:'OpenSans-Bold'
h1
  font-size:1.6em
  text-transform: uppercase
h2#jobid
  color:#979898
  font-size:1.3em
  text-transform: uppercase
section.yearsXp
    width:100%
    margin-top:50px
section.yearsXp div
  border-top: 1px solid #CCC
  border-bottom: 1px solid #CCC
  width:130px
  height:130px
  padding:20px
section.yearsXp div:nth-child(2)
    border-left:1px solid #CCC
    border-right:1px solid #CCC
section.yearsXp div p
  font-family: 'proxima_nova_altbold'
  font-size:2em
  margin-bottom:0px
section.yearsXp div span
  font-family: 'Proxima Nova'
  font-size:0.7em
nav
  width:100%
nav ul
  padding:0
nav ul li
  list-style-type:none
  width:100%
  text-align:left
  font-weight:bold
  font-family: 'proxima_nova_altbold'
  font-size:1.45em
  height:70px
  padding-left:35px
  padding-top:20px
  border-bottom:1px solid #CCC
  background-color:#FFF
  opacity:0.5
nav ul li.active
  background-color:#eeefef
  opacity:1
nav ul li a
  height:50px
  text-decoration:none
  color:#000000
nav ul li a:hover,nav ul li a:focus
  text-decoration:none
nav ul li a img
  padding-right:10px
div#contactme
  text-align:left
  width:350px
  background-color:#FFF
  margin:0 auto
  padding:10px
div#contactme p strong
  font-family: 'proxima_nova_altbold'
  margin:0 auto
ul#contactlinks
  margin:0
  padding:0
ul#contactlinks li
  list-style-type:none;
  padding-bottom:10px;
ul#contactlinks li a
  height:40px
  padding-top:10px
  color:#9fa0a0
  font-family: 'proxima_nova_altbold'
ul#contactlinks li a:hover,ul#contactlinks li a:hover
  text-decoration:none
ul#contactlinks li a img
  margin-right:10px
</style>
<template lang="pug">
aside.mainProfile
	div#profile
		p.center
			img(src="images/jpdibacco.jpg" layout_size="2x")
			img#flagprofile(src="images/argentinaflag.png")
		h1.data-bind {{texts}}
		h2#jobid web developer
		p #[img(src="images/locpin.png" alt="Buenos Aires, Argentina")] Buenos Aires, Argentina
		section.yearsXp
			div
				p 35 #[br]
				span Y/O
			div
				p 10+ #[br]
				span Y/EXPERIENCE
			div
				p 70+ #[br]
				span PROJECTS DELIVERED
		nav
			ul#homelinks
				li.active
					router-link(to="/" v-on:click="makeActive()") #[img(src="images/about_icon.png" alt="About Me")] About Me
				li(:class="activeClass")
					router-link(to="education" v-on:click='makeActive()') #[img(src="images/education_icon.png" alt="Education")] Education
				li(:class="activeClass")
					router-link(to='workxp' v-on:click='makeActive()') #[img(src="images/workxp_icon.png" alt="Work Experience")] Work Experience
				li(:class="activeClass")
					router-link(to='skills' v-on:click='makeActive()') #[img(src="images/skills_icon.png" alt="Skills")] Skills
	div#contactme
		p
			strong.text-center Interested in working with me?
		p Awesome! I'm available for full-time or freelance opportunities. #[br]Get in touch:
		footer
			ul#contactlinks
				li
					a(href='mailto:jpdibacco@gmail.com')  #[img(src="images/email_icon.png" alt="email")] jpdibacco@gmail.com
				li
					a(href='http://jpdibacco.com.ar' target='_blank')  #[img(src="images/home_icon.png" alt="email")] jpdibacco.com.ar
				li
					a(href='http://www.linkedin.com/in/jpdibacco' target='_blank')  #[img(src="images/linkedinicon.png" alt="email")] www.linkedin.com/in/jpdibacco
</template>

<script>
module.exports = {
  data: function() {
    return {
      texts: 'Juan Patricio Di Bacco'
    }
  }
}
</script>

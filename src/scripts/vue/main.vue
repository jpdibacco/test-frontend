<style lang="stylus">
main.main-view
  background-color: #FFF
  width:840px
  display:block
  float:right
</style>
<template lang="pug">
main.main-view
  about
</template>

<script>
import about from './about.vue'
module.exports = {
  data: function(){
    return {
      texts: 'some text testing'
    };
  },
  components:{about}
};
</script>

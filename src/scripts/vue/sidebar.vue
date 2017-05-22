<style lang="stylus">
aside.leftMenu
  background-color:#eeefef
</style>
<template lang="pug">
aside.leftMenu
  p.center
    img(src="/images/jpdibacco.jpg" layout_size="2x")
  .data-bind {{texts}}
</template>

<script>
module.exports = {
  data: function(){
    return {
      texts: 'sidebar'
    };
  }
};
</script>

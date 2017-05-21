<style lang="stylus">
aside.leftMenu
  background-color:#eeefef
</style>
<template lang="jade">
aside.leftMenu
  p.center
    img(src="/images/jpdibacco.png" layout_size="2x")
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

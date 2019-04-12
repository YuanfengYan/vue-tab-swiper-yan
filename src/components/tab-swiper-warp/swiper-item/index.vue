<template >
  <div class="swiperItem" >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'swiperItem'
}
</script>

<style scoped>
.swiperItem{
  display: inline-block;
  text-align: center;
  font-size: 14px;
  width: 100%;
}
</style>


<template >
  <div class="swiperTab" >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'swiperTab'
}
</script>

<style scoped>
.swiperTab{
  display: inline-block;
  text-align: center;
  font-size: 14px;
}
</style>


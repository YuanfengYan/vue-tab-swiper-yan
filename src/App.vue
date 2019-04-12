<template>
  <div id="app">
   <tab-swiper-warp :loop="true" >
     <!-- <template slot="tab">
      <div class="top">
         <swiper-tab class="tab">
          <span>1</span>
       </swiper-tab>
       <swiper-tab class="tab">
         <span>2</span>
       </swiper-tab>
       <swiper-tab class="tab">
          <span>3</span>
       </swiper-tab>
      </div>
     </template> -->
     <template slot="content">
        <swiper-item>
          <div style="background-color:red; height:200px">1</div>
        </swiper-item>
        <swiper-item>
          <div style="background-color:blue;height:200px">2</div>
        </swiper-item>
        <swiper-item>
          <div style="background-color:green;height:200px">3</div>
        </swiper-item>
     </template>
    </tab-swiper-warp>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  }
}
</script>

<style>

#app{
  width: 100%;
}
body{
  margin: 0;
  padding: 10px;
}
.tab{
  width: 50px;
  height: 30px;
  line-height: 30px;
}
.tab.active{
  background-color: red
}
.top{
}
</style>

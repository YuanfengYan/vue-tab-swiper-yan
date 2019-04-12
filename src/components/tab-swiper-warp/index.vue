<template>
  <div class="tabSwiperWarpAll">
    <div class="tabwarp" ref="tabwarp">
      <slot name="tab"></slot>
    </div>
    <div
      class="tabSwiperWarp"
      ref="swiper"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
    >
      <div class="transwarp" :style="{left:loop?-pageWidth+'px':0}" ref="transwarp">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabSwiperWarp",
  props: {
    loop: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      originalPos: 0,
      pageWidth: 100,
      currentIndex :0,
    };
  },
  created() {},
  mounted() {
    this.pageWidth = this.$refs.swiper.offsetWidth;
    this.transwarpDom = this.$refs.transwarp;
    if (this.loop) {
      let firstNode = this.transwarpDom.firstChild.cloneNode(true);
      let lastNode = this.transwarpDom.lastChild.cloneNode(true);
      this.transwarpDom.appendChild(firstNode);
      this.transwarpDom.insertBefore(lastNode, this.transwarpDom.childNodes[0]);
    }
    this.domlen = this.transwarpDom.querySelectorAll(".swiperItem").length;
    this.activeTab();
    this.addActiveTab(0)
  },
  methods: {
    activeTab() {
      this.$refs.tabwarp
        .querySelectorAll(".swiperTab")
        .forEach((item, index) => {
          item.indexs = index;
        });
      this.$refs.tabwarp.addEventListener(
        "click",
        e => {
          let target = e.target;
          if (target.classList.contains("swiperTab")) {
            let distance = 0;
            this.addActiveTab(target.indexs)
            if (this.loop) {
              distance = target.indexs * this.pageWidth;
            } else {
              distance = (target.indexs - 1) * this.pageWidth;
            }
            this.transwarpDom.style.transform = `translate3d(${-distance}px,0px,0px)`;
            this.transwarpDom.style.transition = "transform .3s";
          }
          
          e.preventDefault();
          e.stopPropagation();
        },
        true
      );
    },
    touchstart(e) {
      this.originalPos = e.touches[0].pageX;
      const transform = this.transwarpDom.style.transform;
      this.originalLeft = Number(
        transform ? transform.split("(")[1].split("px")[0] : 0
      );
    },
    touchmove(e) {
      let moveDistance = e.touches[0].pageX - this.originalPos; // >0 右滑，<0 左滑
      this.slideTo(moveDistance, false);
    },
    touchend(e) {
      let moveDistance = e.changedTouches[0].pageX - this.originalPos; // >0 右滑，<0 左滑
      const transform = this.transwarpDom.style.transform;
      let currentLeft = Number(
        transform ? transform.split("(")[1].split("px")[0] : 0
      );
      if (
        Math.abs(moveDistance) > this.pageWidth / 3 &&
        (this.loop ||
          (moveDistance > 0 && currentLeft < 0) ||
          (moveDistance < 0 &&
            Math.abs(currentLeft) <
              (this.transwarpDom.querySelectorAll(".tabItem").length - 1) *
                this.pageWidth))
      ) {
        // 滑动距离大于阙值，且内容在边界内时,滑动一整页
        let distance = moveDistance > 0 ? this.pageWidth : -this.pageWidth;
        this.slideTo(distance, true);
      } else {
        this.slideTo(0, true); //回到远处
      }
    },
    /**
     * 滑动方法
     * @param {Number} distance 滑动距离
     * @param {Boolean} delay 轮播切换
     */
    slideTo(distance, delay = false) {
      let alldistance = this.originalLeft + distance;
      this.transwarpDom.style.transform = `translate3d(${alldistance}px,0px,0px)`;
      this.transwarpDom.style.transition = delay ? "transform .3s" : "initial";
      if (this.loop && delay) {
      
        if (Math.abs(alldistance) > (this.domlen - 3) * this.pageWidth) {
          setTimeout(() => {
            this.slideTo((this.domlen - 3) * this.pageWidth);
             this.currentIndex = 0
            this.addActiveTab(this.currentIndex)
          }, 300);
        } else if (alldistance > 0) {
          setTimeout(() => {
            this.slideTo(-(this.domlen - 3) * this.pageWidth);
             this.currentIndex = this.domlen - 3
             this.addActiveTab(this.currentIndex)
          }, 300);
        }else{
          this.currentIndex = alldistance > 0 ?   (this.domlen - 3):-alldistance/this.pageWidth
           this.addActiveTab(this.currentIndex)
        }
      }else if(delay){
        this.currentIndex = -alldistance/this.pageWidth
        this.addActiveTab(this.currentIndex)
      }
    },
    addActiveTab(tabindex){
      if(this.$refs.tabwarp.querySelectorAll(".swiperTab").length>0){
        this.$refs.tabwarp.querySelectorAll(".swiperTab").forEach((item,index)=>{
          item.classList.remove('active')
        })
        this.$refs.tabwarp.querySelectorAll(".swiperTab")[tabindex].classList.add('active')
      }
    }
  }
};
</script>

<style scoped>
.tabSwiperWarp {
  width: 100%;
  overflow: hidden;
}
.transwarp {
  font-size: 0;
  transform: translate3d(0px, 0, 0);
  white-space: nowrap;
  display: inline-block;
  /* padding: 40px 0px; */
  box-sizing: border-box;
  width: 100%;
  position: relative;
}
.swiperTab {
  /* position: relative; */
  display: inline-block;
  text-align: center;
  font-size: 14px;
  padding: 0 10px;
}
.tabwarp {
  display: inline-block;
  text-align: left;
}
</style>


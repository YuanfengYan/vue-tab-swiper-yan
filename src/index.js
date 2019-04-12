import tabSwiperWarp from '../src/components/tab-swiper-warp/index.vue'
import swiperItem from '../src/components/tab-swiper-warp/swiper-item/index.vue'
import swiperTab  from '../src/components/tab-swiper-warp/swiper-tab/index.vue'
const install =function(Vue,options){
  Vue.component(tabSwiperWarp.name,tabSwiperWarp)
  Vue.component(swiperItem.name,swiperItem)
  Vue.component(swiperTab.name,swiperTab)
}
export default install

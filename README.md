## vue-tab-swiper-yan
轻量的触摸滑动组件
## installation
```
npm i vue-tab-swiper-yan --save //安装
```

```
//注册组件
import vueSwiper from 'vue-tab-swiper-yan'; 
Vue.use(vueSwiper)
```
##  Usage
```html 
 <tab-swiper-warp :loop="true" >
     <swiper-item>
       <div style="background-color:red">1</div>
     </swiper-item>
     <swiper-item>
       <div style="background-color:blue">2</div>
     </swiper-item>
     <swiper-item>
       <div style="background-color:green">3</div>
     </swiper-item>
   </tab-swiper-warp>
```
##  Props
 
| Prop        | Data Type   |  Default  | Description |
| --------   | -----:  | :----:  | :----:  |
| loop      | Boolean   |   false     | 是否可以无限滑动 |




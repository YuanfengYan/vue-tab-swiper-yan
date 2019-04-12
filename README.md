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
   <!--  -->
     <template slot="tab"> 
      <div>
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
     </template>
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
```
## example
![Image text](https://github.com/YuanfengYan/vue-tab-swiper-yan/blob/master/src/assets/swiper.gif)
##  Props
 
| Prop        | Data Type   |  Default  | Description |
| --------   | -----:  | :----:  | :----:  |
| loop      | Boolean   |   false     | 是否可以无限滑动 |

存在两个slot插槽 tab 和 content 





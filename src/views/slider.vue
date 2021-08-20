<template>
    <section class="slider-container">
        <div class="information-container"></div>
        <div v-for="(item,index) in list" :style="{backgroundColor:currentIndex === index ? '#00BFFF':''}" @click="clickMenu(index,item)" :key="index" class="slider-item-container">{{item.name}}</div>
    </section>
</template>

  <script lang="ts">
  import { defineComponent, reactive,ref} from "vue";
  import { useRouter} from "vue-router";
      export interface sliderItemProps{
        url:string,
        name:string
      }
      export default defineComponent({
          name:'viewContainer',
          components:{},
          setup(){
              const list = reactive([{name:"首页",url:'home'},{name:"组件",url:'myComponents'},{name:"留言",url:'message'},{name:"博客",url:'blog'}])
              let currentIndex = ref(0)
              currentIndex.value = Number(localStorage.getItem('currentIndex'))
              const route = useRouter();
              function routerTo(url:string){
                route.push({path:url})
              }

              function clickMenu(index:number,item:sliderItemProps) {
                currentIndex.value = index;
                localStorage.setItem('currentIndex',String(index))
                routerTo(item.url)
              }
              return {list,currentIndex,routerTo,clickMenu}
          }
      })
  </script>

  <style lang="scss" scoped>
    @import "../assets/css/handle";
      .slider-container{
        width:15%;
        height:100%;
        box-sizing: border-box;
        padding: 10px 0;
        @include background_color("background_color1")
      }

      .slider-item-container{
        width: 100%;
        line-height: 40px;
        color: #ffffff;
        text-align: center;
        cursor: pointer;
        &:hover{
            background-color: $blue-1;
        }
      }
      .information-container{
        height: 200px;
        width: 180px;
        margin: 0 auto;
        box-shadow: inset 0 0 0 1px #ca626280;
        background-image: url('../assets/img01.jpg');
        background-size: 180px 200px;
      }
  </style>

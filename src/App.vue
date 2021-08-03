<template>
  <slider></slider>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import slider from './views/slider.vue'
export default defineComponent({
  components:{
    slider
  }
})
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  display: flex;
}
body{
  margin : 0;
}
</style>

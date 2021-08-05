<template>
    <slider></slider>
    <router-view />
</template>
  <script lang="ts">
  import { defineComponent } from 'vue'
    import slider from './slider.vue'
  export default defineComponent({
    components:{
        slider
    },

  })
  </script>
  
  <style>

  </style>
  
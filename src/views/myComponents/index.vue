<template>
    <ViewContainer>
        <div>
            <section style="display:flex">
              <base-button label="success" type="success"></base-button>
              <base-button label="danger" type="danger"></base-button>
              <base-button label="warning" type="warning"></base-button>
              <base-button label="primary" type="primary"></base-button>
              <base-button label="beat" type="success" isbeat></base-button>
            </section>

        </div>
    </ViewContainer>
</template>
  
  <script lang="ts">
  import { defineComponent,reactive } from "vue";
import ViewContainer from "@/baseComponents/viewContainer/index.vue";
import BaseButton from "@/baseComponents/baseButton/index.vue";
  export default defineComponent({
    name: "myComponents",
    components: {
        ViewContainer,
        BaseButton
    },
  });
  </script>
  
  <style lang="scss">
 
  </style>
  
  
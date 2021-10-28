<template>
  <ViewContainer :list="containerData">
    <div style="padding: 10px">
      <section style="display: flex">
        <base-button label="success" type="success"></base-button>
        <base-button label="danger" type="danger"></base-button>
        <base-button label="warning" type="warning"></base-button>
        <base-button label="primary" type="primary"></base-button>
        <base-button label="beat" type="success" isbeat></base-button>
      </section>
      <section>
        <base-select
          label="搜索"
          :search-list="[
            { label: '汉堡', value: 15 },
            { label: '香肠', value: 2 },
          ]"
        ></base-select>
      </section>
    </div>
  </ViewContainer>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import ViewContainer, {
  containerProps,
} from "@/baseComponents/viewContainer/index.vue";
import BaseButton from "@/baseComponents/baseButton/index.vue";
import BaseSelect from "@/baseComponents/baseSelect/index.vue";
export default defineComponent({
  name: "myComponents",
  components: {
    ViewContainer,
    BaseButton,
    BaseSelect,
  },
  setup() {
    const containerData: containerProps = { title: "组件", showToolBar: true };
    return {
      containerData,
    };
  },
});
</script>

<style lang="scss"></style>

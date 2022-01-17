<template>
  <view-container>
    <template v-slot:tool>
      <base-button
        type="primary"
        label="返回"
        align="center"
        @click="router.back()"
      ></base-button>
    </template>
  </view-container>
</template>

<script setup lang="ts">
import { containerProps } from "@/baseComponents/viewContainer/index.vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const containerData: containerProps = {
  title: route.query.diskName as string,
  showToolBar: true,
};
</script>

<style></style>

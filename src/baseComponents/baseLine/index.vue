<template>
  <div class="base-line-container">
    <span class="label">{{ label }}</span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
  },
  // setup(){

  // }
};
</script>

<style lang="scss" scoped>
.base-line-container {
  height: 30px;
  padding: 0 5px;
  text-align: left;
  border-bottom: 1px dashed lightblue;

  box-sizing: border-box;
}
.label {
  font-size: 18px;
  line-height: 30px;
}
</style>

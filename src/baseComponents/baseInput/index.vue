<template>
  <div
    class="base-input-container"
    :style="{ margin: margin }"
    :class="{ ishover: ishover }"
  >
    <span class="label-container">{{ label }}</span>
    <input
      v-model="currentValue"
      @focus="ishover = true"
      @blur="
        ishover = false;
        $emit('blur');
      "
      :type="type"
      class="input-container"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRef, watch } from "vue";

export default defineComponent({
  name: "baseInput",
  components: {},
  props: {
    label: String,
    type: String,
    modelValue: String,
    margin: {
      type: String,
      default: "5px",
    },
  },
  setup(props, context) {
    let currentValue = ref("");
    let ishover = ref(false);
    let timeId = 0;
    watch(currentValue, (newValue, oldValue) => {
      clearTimeout(timeId);
      context.emit("update:modelValue", newValue);
    });

    return { currentValue, timeId, ishover };
  },
});
</script>

<style lang="scss" scoped>
.base-input-container {
  height: 40px;
  width: 396px;
  line-height: 40px;
  color: #121313;
  background-color: #ffffff;
  border-radius: 6px;
  box-sizing: border-box;
  display: flex;
  border: 1px solid gray;
}

.input-container {
  //   line-height: 40px;
  height: 38px;
  padding: 0;
  box-sizing: border-box;
  border-radius: 6px;
  border: none;
  outline: none;
  flex: 1;
}
.ishover {
  border: 1px solid $blue-1;
}
.label-container {
  padding: 0 10px;
}
</style>

<template>
  <div class="base-select-container" @click="$refs.input.focus()">
    <span class="label">{{ label }}</span>
    <input
      v-model="currentValue"
      ref="input"
      @focus="showOptions = true"
      @blur="showOptions = false"
    />
    <div>
      <ul class="base-select-ul" v-if="showOptions">
        <li
          class="base-select-li"
          :class="{ selected: selectedLabel === item.label }"
          v-for="item in searchList"
          :key="item.value"
          @mousedown.stop="
            currentValue = item.label;
            showOptions = false;
          "
        >
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, toRef, watch } from "vue";
export default defineComponent({
  name: "baseSelect",
  props: {
    label: String,
    type: String,
    modelValue: String,
    searchList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, context) {
    let currentValue = ref("");
    let showOptions = ref(false);
    watch(currentValue, (newValue, oldValue) => {
      context.emit("update:modelValue", newValue);
    });
    const selectedLabel = computed(() => {
      return currentValue.value;
    });
    return {
      currentValue,
      showOptions,
      selectedLabel,
    };
  },
});
</script>

<style lang="scss" scoped>
.base-select-container {
  height: 40px;
  width: 256px;
  line-height: 40px;
  border: 1px solid $base-select-border-color;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  position: relative;
  cursor: pointer;
  background-color: $base-select-bg;
  .label {
    padding: 0 5px;
  }

  input {
    border: none;
    height: 40px;
    padding: 0;
    height: 38px;
    outline: none;
    cursor: pointer;
    background-color: transparent;
  }
}

.base-select-ul {
  list-style: none;
  position: absolute;
  left: 0;
  top: 42px;
  margin: 0;
  width: 100%;
  padding: 0;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  background-color: $base-select-option-bg;
  li:not(:nth-last-child(-n + 1)) {
    border-bottom: 1px solid #dcdcdc;
  }
}

.base-select-li {
  cursor: pointer;
  display: flex;
  width: calc(100% - 40px);
  padding-left: 40px;
}
.selected {
  background-color: $base-select-option-select;
}
</style>

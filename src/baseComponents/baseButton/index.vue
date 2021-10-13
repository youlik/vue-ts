<template>
  <div
    class="base-button-container"
    :style="styleObj"
    :class="[className, isbeat ? 'beat' : '']"
    @click="$emit('click')"
  >
    {{ label }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRef } from "vue";

export default defineComponent({
  name: "baseButton",
  components: {},
  emits: ["click"],
  props: {
    label: String,
    type: String,
    isbeat: Boolean,
    align: {
      type: String,
      default: "center",
    },
  },
  setup(props, { emit }) {
    let className = toRef(props, "type");
    const styleObj = reactive({ "text-algin": props.type });
    return { className, styleObj };
  },
});
</script>

<style lang="scss" scoped>
.base-button-container {
  height: 40px;
  width: 96px;
  line-height: 40px;
  color: #ffffff;
  border-radius: 6px;
  cursor: pointer;
  margin: 5px;
}
.beat {
  &:hover {
    animation: gelation 0.5s 1;
  }
}
.primary {
  background-color: #1abc9c;
  &:focus {
    opacity: 0.8;
  }
}

.warning {
  background-color: #f1c40f;
}

.danger {
  background-color: #e74c3c;
}

.success {
  background-color: #2ecc71;
}
@keyframes gelation {
  from,
  to {
    transform: scale(1, 1);
  }

  25% {
    transform: scale(0.9, 1.1);
  }

  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>

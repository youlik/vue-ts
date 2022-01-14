<template>
  <div
    class="base-button-container"
    :style="styleObj"
    :class="[className, isbeat ? 'beat' : '']"
    @click="delay"
  >
    {{ label }}
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  defineComponent,
  reactive,
  ref,
  toRef,
  defineEmits,
  defineProps,
} from "vue";
const props = defineProps({
  label: String,
  type: String,
  isbeat: Boolean,
  align: {
    type: String,
    default: "center",
  },
  isDelay: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["click"]);
let className = toRef(props, "type");
function delay(time?: number) {
  if (props.isDelay) {
    console.log(1);
  } else {
    emit("click");
  }
}
const styleObj = reactive({ "text-algin": props.type });
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
  text-align: center;
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

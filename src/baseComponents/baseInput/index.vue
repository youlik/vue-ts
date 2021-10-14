<template>
  <div
    class="base-input-container"
    :style="{ margin: margin }"
    :class="{ ishover: ishover,error:error }"
  >
    <span class="label-container">{{ label }}</span>
    <input
      v-model="currentValue"
      @focus="ishover = true;"
      @blur="
        ishover = false;
        rules()
        $emit('blur');
      "
      :type="type"
      class="input-container"
    />
    <span style="color:red;position:absolute;right:10px" v-show="error">{{errText}}</span>
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
    reg:{
      type:RegExp,
      default:/\S/
    },
    margin: {
      type: String,
      default: "5px",
    },
  },
  setup(props, context) {
    let currentValue = ref("");
    let ishover = ref(false);
    let errText = ref('')
    let timeId = 0;
    watch(currentValue, (newValue, oldValue) => {
      clearTimeout(timeId);
      context.emit("update:modelValue", newValue);
    });
    let error = ref<boolean>(false)
    function rules() {
      error.value = !props.reg.test(currentValue.value)
      if(error.value){
        errText.value = '输入不合规！'
      }
    }
    return { currentValue, timeId, ishover,error,rules,errText };
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

.error{
  border:1px solid   red;
}
.label-container {
  padding: 0 10px;
  min-width: 60px;
  text-align: left;
}
</style>

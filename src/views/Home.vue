<template>
  <view-container :list="containerData">
    <template v-slot:tool>
      <base-button
        type="primary"
        label="换色"
        @click="showDialog = true"
      ></base-button>
    </template>
    <!-- <div style="padding: 30px" class="boxs"></div> -->

    <div class="mark-container" v-show="showDialog">
      <div class="mark-item-container" @click="replaceTheme">猛男粉</div>
    </div>
  </view-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import viewContainer, {
  containerProps,
} from "../baseComponents/viewContainer/index.vue";

let showDialog = ref(false);
let replaceTheme = function () {
  window.document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
  showDialog.value = false;
};

onMounted(() => {
  let nowTheme = localStorage.getItem("theme") || "dark";
  window.document.documentElement.setAttribute("data-theme", nowTheme);
});
const containerData: containerProps = { title: "首页", showToolBar: true };
</script>

<style lang="scss" scoped>
.back-img {
  width: 220px;
  height: 170px;
  border-radius: 10px;
}

.top-container {
  height: 163px;
  display: flex;
}

.tool-container {
  height: 100%;
  width: calc(100% - 224px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.card-container {
  width: 400px;
  height: 500px;
  border: 1px solid gray;
  box-sizing: border-box;
  border-radius: 5px;
}

.content-container {
  margin-top: 20px;
}

.tool-item-container {
  width: 60px;
  height: 60px;
}

.img-container {
  height: 163px;
  width: 218px;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid rgb(17, 36, 100);
    transition: all 0.5s;
    animation: clippath 4s infinite linear;
  }
  @keyframes clippath {
    0%,
    100% {
      clip-path: inset(0 0 95% 0);
    }
    25% {
      clip-path: inset(0 95% 0 0);
    }
    50% {
      clip-path: inset(95% 0 0 0);
    }
    75% {
      clip-path: inset(0 0 0 95%);
    }
  }
  &::after {
    animation-delay: -2s;
  }
}

.split-class {
  height: 2px;
  width: 100%;
  display: block;
  background-color: darkturquoise;
}

.mark-container {
  z-index: 2000;
  width: 150px;
  height: 100px;
  position: absolute;
  top: 60px;
  right: 10px;
  background-color: #dcdcdc;
  border-radius: 15px;
  display: flex;
}

.mark-item-container {
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  text-align: center;
  border: 1px solid lightblue;
  background-color: lightcyan;
  border-radius: 15px;
  cursor: pointer;
}
</style>

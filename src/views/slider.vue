<template>
  <section class="slider-container">
    <div class="information-container"></div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      active-text-color="#ffd04b"
      mode="horizontal"
      router
    >
      <div v-for="(item, index) in routeList" :key="index">
        <el-menu-item
          :index="item.path"
          v-if="!item.children && !item.meta.hidden"
          >{{ item.name }}</el-menu-item
        >
        <el-sub-menu :index="item.path" v-else>
          <template #title>{{ item.meta.title }}</template>
          <div v-for="(child, childIndex) in item.children" :key="childIndex">
            <el-menu-item
              :index="handlePath(item.path, child.path)"
              route
              v-if="child.meta && !child.meta.hidden"
              >{{ child.meta.title }}</el-menu-item
            >
          </div>
        </el-sub-menu>
      </div>
    </el-menu>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import routerObj from "../router/index";
export interface sliderItemProps {
  url: string;
  name: string;
}
export default defineComponent({
  name: "viewContainer",
  components: {},
  setup() {
    const list = reactive([
      { name: "首页", url: "home" },
      { name: "组件", url: "myComponents" },
      { name: "留言", url: "message" },
      { name: "博客", url: "blog" },
    ]);
    let activeIndex = ref("/");
    function handlePath(parent: string, path: string) {
      if (path === "home") {
        return "/";
      } else {
        return `${parent}/${path}`;
      }
    }
    const route = useRouter();
    let routeList = routerObj.options.routes;
    function routerTo(url: string) {
      route.push({ path: url });
    }
    onMounted(() => {
      if (window.location.href.split("/")[4] !== "home") {
        activeIndex.value = `/${window.location.href.split("/")[4]}/${
          window.location.href.split("/")[5]
        }`;
      } else {
        return "/";
      }
      console.log(window.location.href);
    });
    return { activeIndex, routeList, handlePath };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/css/handle";
.slider-container {
  width: 15%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
  @include background_color("background_color1");
}

.slider-item-container {
  width: 100%;
  line-height: 40px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: $blue-1;
  }
}
.information-container {
  height: 200px;
  width: 180px;
  margin: 0 auto;
  box-shadow: inset 0 0 0 1px #ca626280;
  background-image: url("../assets/img01.jpg");
  background-size: 180px 200px;
}
</style>

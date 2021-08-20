<template>
  <view-container :list="containerData">
    <div class="message-item-container">
      <img class="img-container">
      <div>
        <div class="title">张三</div>
        <div class="content"></div>
      </div>
    </div>
    <div class="edit-container">
        <div class="img-container"></div>
    </div>
  </view-container>
</template>

<script lang="ts">
import ViewContainer, { containerProps } from "../../baseComponents/viewContainer";

export default {
  name: "index",
  components: { ViewContainer },
  setup() {
    const containerData: containerProps = { title: "首页", showToolBar: true };
    return {
      containerData
    };
  }
};
</script>

<style lang="scss" scoped>
.message-item-container {
  height: 70px;
  border-bottom: 1px solid #e5e6eb;
  padding: 10px;
  display: flex;

  .img-container {
    height: 70px;
    width: 30px;
  }

  .content {
      height: 122px;
  }
}

.edit-container {
  height: 122px;
  .img-container{
    width: 48px;
    height: 100%;
  }
}
</style>

<template>
  <div class="body">
    <div class="menu">
      <multimenu v-for="(item,index) in list" :key="index" :model="item"></multimenu>
    </div>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import multimenu from "../components/multimenu.vue";
export default {
  name: "example",
  data() {
    return {
      list: [
        { title: "菜单一", children: [{ title: "菜单一.1", path: "/page1" }] },
        { title: "菜单二", children: [{ title: "菜单二.1", path: "/page2" }] }
      ]
    };
  },
  components: {
    multimenu
  }
};
</script>

<style>
.body {
  width: 100%;
  height: 800px;
  background: aqua;
  display: flex;
}
</style>
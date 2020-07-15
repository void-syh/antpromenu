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
        {
          title: "菜单一",
          level: 1,
          children: [{ title: "菜单一.1", path: "/page1", level: 1 }]
        },
        {
          title: "菜单二",
          level: 1,
          children: [{ title: "菜单二.1", path: "/page2", level: 1 }]
        },
        {
          title: "菜单三",
          level: 2,
          children: [{ title: "菜单三.1", path: "/page3", level: 2 }]
        }
      ]
    };
  },
  components: {
    multimenu
  },
  mounted() {
    sessionStorage.setItem("level", "1");
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
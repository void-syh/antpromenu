<template>
  <div>
    <router-link tag="div" v-if="model.path" :to="model.path" class="item">{{model.title}}</router-link>
    <div v-else class="item" @click="openList">{{model.title}}</div>
    <transition name="toggle">
      <multimenu v-for="(item,index) in model.children" :key="index" :model="item" v-show="open" class="children" :class="{openStyle:open}"></multimenu>
    </transition>
  </div>
</template>

<script>
export default {
  name: "multimenu",
  props: ["model"],
  data() {
    return {
      open: false
    };
  },
  methods: {
    openList() {
      this.open = !this.open;
    }
  }
};
</script>

<style>
.item {
  width: 140px;
  height: 40px;
  line-height: 40px;
  background: #000c17;
  text-decoration: none;
  color: white;
}

.children{
  max-height: 0px;
}

.openStyle{
  max-height:40px;
}

.toggle-enter-active {
  transition: all 0.3s ease-in;
}

.toggle-leave-active {
  transition: all 0.3s ease-out;
}

.toggle-enter,
.toggle-leave-to {
  max-height: 0;
}
</style>
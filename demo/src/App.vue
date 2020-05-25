<template>
  <div id="app">
    <Nav />
    <div id="body">
      <div id="selector">
        <select name="animations" id="animations-list" v-model="selected">
          <option
            v-for="(animation, index) in animations"
            :key="index"
            :value="animation.class"
          >
            {{ animation.name }}
          </option>
        </select>
        <button @click="animate" class="animation-toggle-button">toggle</button>
      </div>
      <div id="preview">
        <p class="class-name"><strong>Class name:</strong> {{ selected }}</p>
        <transition :name="selected" mode="out-in">
          <Content v-if="show" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Content from '@/components/Content';
import animations from '@/assets/animations.js';
export default {
  name: 'App',
  components: {
    Nav,
    Content,
  },
  data() {
    return {
      selected: 'fade',
      show: true,
      animations: [],
    };
  },
  mounted() {
    this.animations = animations;
  },
  methods: {
    animate() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#body {
  max-width: 700px;
  margin: auto;
  padding: 20px;
}
#animations-list {
  width: 200px;
  display: inline-block;
  margin-right: 30px;
  padding: 30px 20px;
}
.animation-toggle-button {
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  background-color: #44a1df;
  cursor: pointer;
}
#preview {
  margin-top: 50px;
}
.class-name {
  margin: 20px 0px;
}
</style>

<script setup>
import User from "./components/User.vue";
import Counter from "./components/Counter.vue";

import useCounterStore from "./stores/counter";
import useUserStore from "./stores/user";

const counterStore = useCounterStore();
const userStore = useUserStore();
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <div>
    <h1>Count is: {{ counterStore.count }}</h1>
    <h2>Double is: {{ counterStore.doubleCount }}</h2>
    <h1>{{ userStore.name }} is {{ userStore.age }} years old.</h1>
  </div>

  <section class="input-panel">
    <Counter />
    <User />
  </section>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.input-panel {
  display: grid;
  grid-gap: 1rem;
}
</style>

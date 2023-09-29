<script setup>
import useCounterStore from "../stores/counter";

const store = useCounterStore();
</script>

<template>
  <button type="button" @click="store.increment">Increment</button>
</template>

<style scoped>
</style>
<script setup>
import useUserStore from "../stores/user";

const store = useUserStore();

const onKeyup = (e) => {
  store.setName(e.target.value.trim());
};
</script>

<template>
  <div class="user-input">
    <input type="text" :value="store.name" @keyup="onKeyup" />
    <button @click="store.haveBirthday">Have Birthday</button>
  </div>
</template>

<style scoped>
.user-input {
  display: flex;
  align-items: stretch;
  gap: 1rem;
  width: 100%;
}

.user-input input {
  flex-grow: 1;
}
</style>

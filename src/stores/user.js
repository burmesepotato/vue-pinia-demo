/**
 * NOTES
 * ======
 * Setup Stores:
 * Similar to Vue's Composition API, we can pass in a function that defines reactive properties and mehtods
 * We can see -
 * "ref()" become "state" properties
 * "computed()" become "getters"
 * "function()" become "actions"
 *
 * Setup stores bring a lot more flexibility than Option Stores
 * as you can create watchers within a store and freely use any composable.
 * However, keep in mind that using composables will get more complex when using SSR.
 *
 * See official documentation here:
 * https://pinia.vuejs.org/core-concepts/#Option-Stores
 */

import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore("user", () => {
  const name = ref("Potato");
  const age = ref(11);

  function setName(val) {
    name.value = val;
  }
  function haveBirthday() {
    age.value++;
  }

  return {
    name,
    age,
    setName,
    haveBirthday,
  };
});

export default useUserStore;

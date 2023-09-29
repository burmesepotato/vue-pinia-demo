/**
 * NOTES
 * ======
 * Option Stores:
 * Similar to Vue's Option API, we can pass an Options Object with state, actions, geters.
 * We can think of -
 * "state" as "data"
 * "getters" as "computed properties"
 * "actions" as "methods"
 *
 * See official documentation here:
 * https://pinia.vuejs.org/core-concepts/#Option-Stores
 */

import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

export default useCounterStore;

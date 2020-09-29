<template>
  <button @click="addOne">Add 11</button>
  <button @click="addPayload">Add Payload</button>
  <button @click="addAction">Add Action (10)</button>
  <button @click="addAction2">Add Action2 (10)</button>
  <button @click="actionIncrement({ value: 10 })">
    Add actionIncrement (10)
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['actionIncrement']),
    addOne() {
      this.$store.state.counter += 11;
    },
    addPayload() {
      this.$store.commit('increase', { value: 3 });
    },
    // addPayload() {
    //   this.$store.commit({type: 'increase', value: 3});
    // },
    addAction() {
      this.$store.dispatch({
        type: 'actionIncrement',
        value: 10,
      });
    },
    // addAction2() {
    //   this.$store.dispatch('actionIncrement', { value: 10 });
    // },
  },
};
</script>

<style>
</style>
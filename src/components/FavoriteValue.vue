<template>
  <h1>Favorite Value Component</h1>
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter * 2;
    },
  },
};
</script>

<style>
</style>
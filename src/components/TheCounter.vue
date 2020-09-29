<template>
  <h3>{{ $store.state.counter }}</h3>
  <h3>{{ counter }}</h3>
  <h3>counterGetter</h3>
  <h3>{{ counterGetter }}</h3>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    addOne() {
      this.$store.state.counter++;
    },
  },
  computed: {
    ...mapGetters(['finalCounter']),
    counter() {
      return this.$store.state.counter * 2;
    },
    counterGetter() {
      return this.$store.getters.finalCounter;
    },
  },
};
</script>

<style>
</style>
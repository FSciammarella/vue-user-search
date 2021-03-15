<template>
  <h1>You clicked the button {{ count }} times</h1>
  <button @click="increaseCount">Click me</button>
</template>

<script>
export default {
  data() {
    return {
      count: parseInt(this.initialCount) ?? 0,
    };
  },
  props: {
    initialCount: Number,
  },
  methods: {
    increaseCount() {
      this.count += 1;
    },
  },
};
</script>

<style></style>

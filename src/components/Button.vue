<template>
  <button>
    <i
      class="fas"
      :class="role === 'prev' ? ['fa-backward'] : ['fa-forward']"
    />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['type', 'role'],
};
</script>

<style>
.fa-forward {
  transform: translateX(4%);
}
.fa-backward {
  transform: translateX(-4%);
}
</style>

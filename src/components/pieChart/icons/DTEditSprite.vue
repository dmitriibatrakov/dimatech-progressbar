<script setup lang="ts">
defineProps({
  name: {
    type: String,
  },
  size: {
    type: String,
    default: '2rem',
  },
  color: {
    type: String,
  }
})
</script>

<template>
  <svg v-if="name !== 'inProgress'"  class="icon">
    <use :href="`#${name}`" />
  </svg>
</template>

<style scoped>
.icon {
  width: v-bind(size);
  height: v-bind(size);
  color: v-bind(color);
}
</style>

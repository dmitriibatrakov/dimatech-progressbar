<script setup lang="ts">
import IconsPack from '@/assets/icons/IconsPack.vue';
</script>

<template>
  <div class="page-container">
    <IconsPack />
    <Transition>
      <RouterView />
    </Transition>
  </div>
</template>

<style lang="css">

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  .page-container {
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  h2 {
    border-bottom: #DBDFE9 2px solid;
    width: 100%;
    padding-bottom: 1.25rem;
  }

  h2, h3 {
      align-self: self-start;
      font-weight: 600;
      font-size: 2rem;
      color: #252F4A;
      padding-left: 0.5rem;
  }

  h3 {
    font-size: 1.5rem;
  }
</style>


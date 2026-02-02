<script setup lang="ts">
import ProgressBar from '../features/ProgressBar.vue';
import type { ProgressbarStateType } from '@/types/types';
interface States {
  progress: number;
  progressbarState: ProgressbarStateType;
}

const props = defineProps<{ states: States; roundCoeff: number }>();
console.log();
</script>

<template>
  <div class="bar-container">
    <div class="visual-section">
      <ProgressBar
        :progress="props.states.progress"
        :progressbarState="props.states.progressbarState"
        barType="dashboard"
        :roundCoeff
      />
    </div>
  </div>
</template>

<style scoped>
.separator {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
.visual-section {
  display: flex;
}
</style>

<script setup lang="ts">
import ProgressBar from '../features/ProgressBar.vue';
import type { ProgressbarStateType } from '@/types/types';
interface States {
  progress: number;
  progressbarState: ProgressbarStateType;
}

const props = defineProps<{ states: States; roundCoeff: number }>();
</script>

<template>
  <ProgressBar
    :progress="props.states.progress"
    :progressbarState="props.states.progressbarState"
    barType="dashboard"
    :roundCoeff
  />
</template>

<style scoped></style>

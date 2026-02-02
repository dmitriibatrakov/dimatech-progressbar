<script setup lang="ts">
import type { ProgressbarStateType, ProgressBarType } from '@/types/types';
import DTProgressSprite from '../progressBar/Icons/DTProgressSprite.vue';
import { useProgressBar } from './useProgressBar';

const {
  progress,
  progressbarState,
  barType = 'round',
  roundCoeff = 1,
} = defineProps<{
  progress: number;
  progressbarState: ProgressbarStateType;
  barType?: ProgressBarType;
  roundCoeff?: number;
}>();

const progressBar = useProgressBar(progress,
  progressbarState,
  barType,
  roundCoeff);

</script>

<template>
  <div class="progress-container">
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style="width: 150px; height: auto"
    >
      <circle
        cx="50"
        cy="50"
        :r="progressBar.radius.value"
        fill="none"
        stroke="#ebedf0"
        :stroke-width="progressBar.strokeWidth.value"
        :stroke-dasharray="`${progressBar.circumference.value} ${progressBar.circumference.value / progressBar.dashboardMultipler.value}`"
        :transform="`rotate(${progressBar.rotateAngle.value} 50 50)`"
        stroke-linecap="round"
      />
      <circle
        cx="50"
        cy="50"
        :r="progressBar.radius.value"
        fill="none"
        :stroke="progressBar.currentColor.value"
        :stroke-width="progressBar.strokeWidth.value"
        :stroke-dasharray="`${progressBar.circumference.value} ${progressBar.circumference.value / progressBar.dashboardMultipler.value}`"
        :stroke-dashoffset="progressBar.strokeDashoffset.value"
        stroke-linecap="round"
        :transform="`rotate(${progressBar.rotateAngle.value} 50 50)`"
      />
    </svg>
    <div v-if="progressbarState === 'inProgress'">
      <div v-if="progress < 100" class="progress-text">
        {{ Math.round(progress) }}%
      </div>
      <div v-else class="progress-icon">
        <DTProgressSprite name="success" :color="progressBar.currentColor.value" />
      </div>
    </div>
    <div class="progress-icon">
      <DTProgressSprite :name="progressbarState" :color="progressBar.currentColor.value" />
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  position: relative;
  width: 150px;
  height: 150px;
}

.progress-icon,
.progress-text {
  color: #999a9e;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  font-weight: 400;
}
</style>

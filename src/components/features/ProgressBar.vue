<script setup lang="ts">
import DMTechIcon from '@/assets/icons/DMTechIcon.vue';
import type { ProgressbarStateType, ProgressBarType } from '@/types/types';
import { computed, ref } from 'vue';

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

const strokeWidth = ref<number>(6);

const dashboardMultipler = computed(() => {
  return barType === 'round' ? 1 : roundCoeff;
});

const radius = computed(() => {
  return 50 - strokeWidth.value;
});

const circumference = computed(() => 2 * Math.PI * radius.value * dashboardMultipler.value);

const currentColor = computed(() => {
  const colorAngle = (1 - (1 - progress / 100)) * 120;
  if (progressbarState === 'success') {
    return `hsl(120, 90%, 45%)`;
  }
  if (progressbarState === 'warning') {
    return `hsl(50, 90%, 45%)`;
  }
  if (progressbarState === 'error') {
    return `hsl(0, 90%, 45%)`;
  }
  return `hsl(${colorAngle}, 90%, 45%)`;
});

const strokeDashoffset = computed(() => {
  return circumference.value - (progress / 100) * circumference.value;
});
const rotateAngle = computed(() => {
  if (barType === 'round') {
    return -90;
  }
  return 90 + (360 - 360 * roundCoeff) / 2;
});
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
        :r="radius"
        fill="none"
        stroke="#ebedf0"
        :stroke-width="`${strokeWidth}`"
        :stroke-dasharray="`${circumference} ${circumference / dashboardMultipler}`"
        :transform="`rotate(${rotateAngle} 50 50)`"
        stroke-linecap="round"
      />
      <circle
        cx="50"
        cy="50"
        :r="radius"
        fill="none"
        :stroke="currentColor"
        :stroke-width="strokeWidth"
        :stroke-dasharray="`${circumference} ${circumference / dashboardMultipler}`"
        :stroke-dashoffset="strokeDashoffset"
        stroke-linecap="round"
        :transform="`rotate(${rotateAngle} 50 50)`"
      />
    </svg>
    <div v-if="progressbarState === 'inProgress'">
      <div v-if="progress < 100" class="progress-text">
        {{ Math.round(progress) }}%
      </div>
      <div v-else class="progress-icon">
        <DMTechIcon name="success" :color="currentColor" />
      </div>
    </div>
    <div class="progress-icon">
      <DMTechIcon :name="progressbarState" :color="currentColor" />
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

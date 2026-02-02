import type { ProgressbarStateType, ProgressBarType } from '@/types/types';
import { computed, ref } from 'vue';

export function useProgressBar(
  progress: number,
  progressbarState: ProgressbarStateType,
  barType: ProgressBarType,
  roundCoeff: number
) {
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

  return { strokeWidth,  dashboardMultipler, radius, circumference, currentColor, strokeDashoffset, rotateAngle};
}

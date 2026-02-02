import type { ProgressbarStateType, ProgressBarType } from '@/types/types';
import { computed, ref, type Ref } from 'vue';

export function useProgressBar(
  progress: Ref<number>,
  progressbarState: Ref<ProgressbarStateType>,
  barType: Ref<ProgressBarType>,
  roundCoeff: Ref<number>
) {
  const strokeWidth = ref<number>(6);

  const dashboardMultipler = computed(() => {
    return barType.value === 'round' ? 1 : roundCoeff.value;
  });

  console.log(dashboardMultipler.value)

  const radius = computed(() => {
    return 50 - strokeWidth.value;
  });

  const circumference = computed(() => 2 * Math.PI * radius.value * dashboardMultipler.value);

  const currentColor = computed(() => {
  const colorAngle = (1 - (1 - progress.value / 100)) * 120;
    if (progressbarState.value === 'success') {
      return `hsl(120, 90%, 45%)`;
    }
    if (progressbarState.value === 'warning') {
      return `hsl(50, 90%, 45%)`;
    }
    if (progressbarState.value === 'error') {
      return `hsl(0, 90%, 45%)`;
    }
    return `hsl(${colorAngle}, 90%, 45%)`;
  });

  const strokeDashoffset = computed(() => {
    return circumference.value - (progress.value / 100) * circumference.value;
  });
  const rotateAngle = computed(() => {
    if (barType.value === 'round') {
      return -90;
    }
    return 90 + (360 - 360 * roundCoeff.value) / 2;
  });

  return { strokeWidth,  dashboardMultipler, radius, circumference, currentColor, strokeDashoffset, rotateAngle};
}

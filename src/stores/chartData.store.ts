import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { ChartDataType } from '@/types/types';

export const useChartDataStore = defineStore('chartData', () => {
  const chartData = ref<ChartDataType[]>([
    { id: 7, name: 'Сектор-1', data: 23, color: '#fbff01' },
    { id: 2, name: 'Сектор-2', data: 37, color: '#ee00ff' },
    { id: 3, name: 'Сектор-3', data: 15, color: '#03f590' },
  ]);

  const newData = ref<ChartDataType>({
    id: 0,
    name: 'Новый сектор',
    data: 0,
    color: '#04f324',
  });

  const maxIdNum = computed(() => {
    return Math.max(
      ...chartData.value.map((row) => {
        return row.id;
      })
    );
  });

  return { chartData, newData, maxIdNum}
});

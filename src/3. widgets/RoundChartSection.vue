<script lang="ts" setup>
import { Pie } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { computed, ref } from 'vue';
import { useChartDataStore } from '@/6. shared/stores/chartData.store';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const chartDataStore = useChartDataStore();

const chartData = computed(() => {
  return {
  labels: chartDataStore.chartData.map( row => row.name),
  datasets: [
    {
    data: chartDataStore.chartData.map(row => row.data),
  backgroundColor: chartDataStore.chartData.map(row => row.color) }
  ],
}})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        font: {
          size: 14,
        },
        color: '#3C3C3C',
        padding: 16
      },
      position: 'bottom',
      align: 'center'
    }
  }
} as const);
</script>

<template>
  <Pie id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script setup lang="ts">
import { router } from '@/app/router';
import ChartLegendSection from '@/components/pieChart/ChartLegendSection.vue';
import RoundChartSection from '@/components/pieChart/RoundChartSection.vue';
import DMTechBtn from '@/components/ui/btn/DMTechBtn.vue';
</script>

<template>
  <div class="component-align">
    <h2>Кргуовая диаграма</h2>
    <section class="chart-container">
      <ChartLegendSection />
      <div class="chart">
        <RoundChartSection />
      </div>
    </section>
    <DMTechBtn @click="router.push('/')">К прогрессбарам</DMTechBtn>
  </div>
</template>

<style lang="css" scoped>
.chart-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.chart {
  width: 400px;
}

@media (max-width: 700px) {
  .chart-container {
    display: flex;
    flex-direction: column-reverse;
  }
  .chart {
    width: 300px;
  }
}
</style>

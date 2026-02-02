<script setup lang="ts">
import { router } from '@/app/router';
import ChartLegendSection from '@/components/pieChart/ChartLegendSection.vue';
import EditIconsPack from '@/components/pieChart/icons/EditIconsPack.vue';
import RoundChartSection from '@/components/pieChart/RoundChartSection.vue';
import DMTechBtn from '@/components/ui/btn/DMTechBtn.vue';
</script>

<template>
  <EditIconsPack />
  <div class="main">
    <h2>Кргуовая диаграма</h2>
    <section class="main__chart-section">
      <ChartLegendSection />
      <div class="chart-section--chart">
        <RoundChartSection />
      </div>
    </section>
    <DMTechBtn @click="router.push('/')">К прогрессбарам</DMTechBtn>
  </div>
</template>

<style lang="css" scoped>
.main__chart-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.chart-section--chart {
  width: 400px;
}

@media (max-width: 700px) {
  .main__chart-section {
    display: flex;
    flex-direction: column-reverse;
  }
  .chart-section--chart {
    width: 300px;
  }
}
</style>

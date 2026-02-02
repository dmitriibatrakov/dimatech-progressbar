<script setup lang="ts">
import { router } from '@/app/router';
import DashboardBarSection from '@/components/progressBar/DashboardBarSection.vue';
import ProgressIconsPack from '@/components/progressBar/Icons/ProgressIconsPack.vue';
import RoundBarSection from '@/components/progressBar/RoundBarSection.vue';
import DMTechBtn from '@/components/ui/btn/DMTechBtn.vue';
import { ref } from 'vue';

const roundCoeff = ref<number>(0.7);

const dashboardParams = ref([
  {
    progress: 30,
    progressbarState: 'inProgress',
  },
  {
    progress: 100,
    progressbarState: 'inProgress',
  },
  {
    progress: 45,
    progressbarState: 'warning',
  },
  {
    progress: 70,
    progressbarState: 'error',
  },
] as const);
</script>

<template>
  <ProgressIconsPack />
  <div class="component-align">
    <h2>Компонент прогресс бара</h2>
    <RoundBarSection />
    <h3>Дашборд</h3>
    <section class="section-container">
      <div class="input-container">
        <input
          v-model="roundCoeff"
          type="range"
          id="roundCoeff"
          name="roundCoeff"
          min="0.6"
          max="0.9"
          step="0.02"
        />
        <label for="roundCoeff">Коэффициент круглости</label>
      </div>
      <div class="dashboard">
        <DashboardBarSection
          v-for="(item, index) in dashboardParams"
          :key="index"
          :states="item"
          :roundCoeff
        />
      </div>
    </section>
    <DMTechBtn @click="router.push('/roundchart')">К круговой диаграмме</DMTechBtn>
  </div>
</template>

<style lang="css">
.component-align {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
}

.section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

inputs-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-container {
  display: flex;
  gap: 2.5rem;
  margin-bottom: 1rem;
}

.input-container input,
.input-container select {
  width: 150px;
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 700px) {
  .dashboard {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 440px) {
  .dashboard {
    grid-template-columns: 1fr;
  }
}
</style>

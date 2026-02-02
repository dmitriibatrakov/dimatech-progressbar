<script setup lang="ts">
import DMTechBtn from '../ui/btn/DMTechBtn.vue';
import type { ChartDataType } from '@/types/types';
import { useChartDataStore } from '@/stores/chartData.store';
import { computed, ref } from 'vue';
import { SketchPicker } from 'vue-color';
import DTEditSprite from './icons/DTEditSprite.vue';

const isOpen = ref<boolean>(false);
const isNewItem = ref<boolean>(false);

const chartDataStore = useChartDataStore();

const headerModalText = computed(() => {
  return isNewItem.value ? 'Добавление сектора' : 'Изменение сектора';
});

const buttonModalText = computed(() => {
  return isNewItem.value ? 'Добавить сектор' : 'Измененить сектор';
});

function showModal(row: ChartDataType) {
  isOpen.value = true;
  if (row.id !== 0) {
    chartDataStore.newData = row;
  } else {
    isNewItem.value = true;
    chartDataStore.newData.id = chartDataStore.maxIdNum + 1;
  }
}

function closeModal() {
  chartDataStore.newData = { id: 0, name: 'Новый сектор', data: 0, color: '#fbff01' };
  isOpen.value = false;
  isNewItem.value = false;
}

function saveNewData() {
  if (isNewItem.value) {
    chartDataStore.chartData.push(chartDataStore.newData);
  } else {
    chartDataStore.chartData.forEach((row: ChartDataType) =>
      row.id !== chartDataStore.newData.id ? row : chartDataStore.newData
    );
  }
  closeModal();
}

function deleteSector(id: number) {
  chartDataStore.chartData = chartDataStore.chartData.filter((row: ChartDataType) => row.id !== id);
}
</script>

<template>
  <section class="chart-section__legend">
    <div v-for="row in chartDataStore.chartData" :key="row.id" class="legend__row">
      <div class="legend__row-data">
        <div>
          <span>{{ row.name }}</span>
        </div>
        <div>
          <span>{{ row.data }}</span>
        </div>
        <div><div class="legend__row-color" :style="{ backgroundColor: row.color }"></div></div>
      </div>
      <div class="legend__row-btns">
        <DTEditSprite name="edit" size="1.2rem" @click="showModal(row)" role="button" />
        <DTEditSprite name="delete" size="1.2rem" @click="deleteSector(row.id)" role="button" />
      </div>
    </div>
    <DMTechBtn @click="showModal(chartDataStore.newData)">Добавить сектор</DMTechBtn>
    <div v-if="isOpen" class="modal" @click="closeModal">
      <div class="modal__content" @click.stop>
        <h3>{{ headerModalText }}</h3>
        <div class="modal__content-input">
          <input
            type="text"
            id="sectorName"
            name="sectorName"
            v-model="chartDataStore.newData.name"
          />
          <label for="sectorName">Наименование</label>
        </div>
        <div class="modal__content-input">
          <input
            type="number"
            id="sectorData"
            name="sectorData"
            value="chartDataStore.newData.data"
            v-model="chartDataStore.newData.data"
          />
          <label for="sectorData">Значение</label>
        </div>
        <div class="modal__content-input color-picker">
          <SketchPicker
            v-model="chartDataStore.newData.color"
            disableAlpha
            disableFields
            style="width: 100%"
          />
        </div>
        <DMTechBtn @click="saveNewData">{{ buttonModalText }}</DMTechBtn>
      </div>
    </div>
  </section>
</template>

<style scoped>
.chart-section__legend {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.legend__row {
  display: flex;
  align-items: center;
  background-color: #dbdfe933;
  padding: 1rem;
  padding-left: 0;
  border-radius: 0.75rem;
  justify-content: space-between;
}

.legend__row-data {
  display: flex;
  align-items: center;
}

.legend__row-data div:not(:last-child) {
  border-right: #dbdfe9 2px solid;
  padding-inline: 1rem;
}

.legend__row-color {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-left: 1rem;
}

span:not(:first-child) {
  border-left: 2px solid #dbdfe9;
}

.legend__row-btns {
  display: flex;
  gap: 0.75rem;
  margin-left: 2rem;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal__content {
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 1rem 2rem;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.modal__content-input {
  position: relative;
}

.modal__content-input label {
  position: absolute;
  left: 1.25rem;
  top: 0.5rem;
  font-size: 0.75rem;
  color: #99a1b7;
}

.modal__content-input input {
  padding: 1.75rem 1.25rem 0.6rem;
  border: 1px solid #dbdfe9;
  border-radius: 1rem;
  width: 100%;
  cursor: pointer;
}

.color-picker {
  padding: 0 1.2rem 1rem 0;
}
</style>

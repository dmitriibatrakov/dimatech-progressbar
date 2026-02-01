<script setup lang="ts">
import ProgressBar from '@/4. features/ProgressBar.vue';
import type { ProgressbarStateType } from '@/6. shared/types';
import { ref } from 'vue';

const progress = ref<number>(45);
const progressbarState = ref<ProgressbarStateType>('inProgress');
</script>

<template>
  <h3>Круговой прогресс бар</h3>
  <section class="section-container">
    <div class="inputs-block">
      <div class="input-container">
        <input v-model="progress" type="range" id="progress" name="progress" min="0" max="100" />
        <label for="progress">Прогресс выполнения</label>
      </div>
      <div class="input-container">
        <select name="select" v-model="progressbarState">
          <option value="inProgress">in progress</option>
          <option value="success">success</option>
          <option value="warning">warning</option>
          <option value="error">error</option>
        </select>
        <label for="select">Передаваемое состояние</label>
      </div>
    </div>

    <ProgressBar :progress :progressbarState />
  </section>
</template>

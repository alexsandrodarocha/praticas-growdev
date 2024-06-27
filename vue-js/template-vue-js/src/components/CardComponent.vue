<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { doGet } from '@/services/api';
import { type NoteType } from '@/types';

const notes = ref<NoteType[]>([]);

const getData = async () => {
  const data = await doGet('/notes');

  if (data.length) {
    notes.value = data;
  }
};

onMounted(getData);
</script>

<template>
  <div class="card" v-for="item in notes" :key="item.id">
    <h2 class="title">Título: {{ item.title }}</h2>
    <p>Descrição: {{ item.description }}</p>
  </div>
</template>

<style scoped>
.card {
  padding-left: 2em;
  display: flex;
  flex-direction: column;
  width: 250px;
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow:
    15px 15px 30px #bebebe,
    -15px -15px 30px #ffffff;
}

.title {
  margin-bottom: 0;
}
</style>

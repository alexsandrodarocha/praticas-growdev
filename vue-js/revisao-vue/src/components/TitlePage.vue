<script setup lang="ts">
interface TitlePageProps {
  title: string
}
defineProps<TitlePageProps>()
</script>

<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<style scoped>
.container {
  margin: 1em;
  display: flex;
  justify-content: center;
}

.title {
  color: #212a42;
  font-weight: 800;
  margin: 1em;
  font-family: Poppins, sans-serif;
}
</style>

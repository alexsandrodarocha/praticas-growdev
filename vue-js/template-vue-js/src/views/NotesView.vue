<script setup lang="ts">
import MenuApp from '@/components/Menu.vue';
import FooterApp from '@/components/Footer.vue';
import CardComponent from '@/components/CardComponent.vue';
</script>

<template>
  <MenuApp />
  <main>
    <div class="container">
      <CardComponent />
    </div>
  </main>
  <FooterApp />
</template>

<style scoped>
.container {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  margin: 5vw 10vw;
  justify-content: center;
}

h1 {
  text-align: center;
  margin-top: 2em;
}
</style>

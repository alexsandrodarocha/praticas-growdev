<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterPage from '@/components/FooterPage.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink class="router-link" to="/">Home</RouterLink>
      <RouterLink class="router-link" to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
  <FooterPage />
</template>

<style scoped>
nav {
  background-color: #212a42;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.router-link {
  color: white;
  text-decoration: none;
  padding: 1em;
  font-size: 22px;
  font-family: Poppins, sans-serif;
}
</style>

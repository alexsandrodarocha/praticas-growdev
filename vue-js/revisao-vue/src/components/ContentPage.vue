<script setup lang="ts">
interface ContentPageProps {
  title: string
  description: string
  titleButton: string
  imgUrl: string
}
defineProps<ContentPageProps>()
</script>

<template>
  <div class="container">
    <div class="container-text">
      <h1 class="title">{{ title }}</h1>
      <p>{{ description }}</p>
      <button>{{ titleButton }}</button>
    </div>
    <div class="container-img">
      <img class="img" :src="imgUrl" alt="Time Growdev" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin: 10vh;
}

.container-text {
  width: 400px;
  height: 350px;
  margin-right: 1.5em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
}

.img {
  border-radius: 10px;
  border-color: none;
  width: 700px;
  height: 350px;
  object-fit: cover;
  object-position: bottom;
}

.title {
  color: #212a42;
  font-weight: 800;
  margin-bottom: 32px;
  margin-left: 0;
  font-family: Poppins, sans-serif;
}

p {
  margin: 0;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  color: #212a42;
  font-family: Poppins, sans-serif;
}

button {
  background-color: #ff8533;
  border-radius: 8px;
  border-style: none;
  padding: 8px 16px;
  font-weight: 700;
  height: 3rem;
  color: white;
  margin-top: 1.5em;
}
</style>

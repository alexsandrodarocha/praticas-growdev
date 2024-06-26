<script setup lang="ts">
import TitlePage from '@/components/TitlePage.vue'
import ContentPage from '@/components/ContentPage.vue'
</script>

<template>
  <TitlePage :title="'About'" />
  <ContentPage
    img-url="https://www.growdev.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmosaico_banner.3068a3ec.png&w=1920&q=75"
    title="SOBRE NÓS"
    description="A Growdev foi fundada em 2019 por profissionais que acumularam anos de experiência em empresas de diversos portes, atuando no desenvolvimento de software, formação e seleção de profissionais de TI. "
    title-button="ACESSE NOSSO DECK DE CULTURA"
  />
  <ContentPage
    img-url="https://www.growdev.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffoto_trabalhe_conosco.367a9372.png&w=640&q=75"
    title="TRABALHE CONOSCO"
    description="Faça parte do nosso time e venha mudar
a vida de profissionais e organizações!"
    title-button="FAZER PARTE DA GROWDEV"
  />
</template>

<style></style>

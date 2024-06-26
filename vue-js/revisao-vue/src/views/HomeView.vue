<script setup lang="ts">
import TitlePage from '@/components/TitlePage.vue'
import ContentPage from '@/components/ContentPage.vue'
</script>

<template>
  <TitlePage :title="'Home'" />
  <ContentPage
    img-url="https://www.growdev.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fequipe_reunida.5d965ca8.png&w=1080&q=75"
    title="QUEM SOMOS"
    description="Somos apaixonados por tecnologia e educação, estamos determinados em mudar a vida de pessoas e organizações conectando a formação de talentos em tecnologia com serviços e soluções para empresas."
    title-button="SAIBA MAIS SOBRE A GROWDEV"
  />
  <ContentPage
    img-url="https://cdn.eadplataforma.app/client/growdev/upload/crop/product/cover/8fe85b7c96e4a3cad67b7f11c3514c91_capafundo1920x420png.png-product-cover.png"
    title="CONEXÃO "
    description="Além de encaminhar os nossos alunos diretamente para empresas parceiras, nós também os contratamos e os alocamos em empresas através da células de talentos, onde os nossos alunos atuam como trainees acompanhados por uma pessoa mentora da Growdev."
    title-button="CÉLULA DE TALENTOS"
  />
</template>

<style scoped></style>

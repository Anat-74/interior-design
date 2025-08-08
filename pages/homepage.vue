<script setup lang="ts">
useSeoMeta({
   title: 'Home',
   ogTitle: 'Home',
   description: 'home page',
   ogDescription: 'home page'
})
</script>

<template>
      <div class="home-page">
   <h1>
      Home page
   </h1>
   </div>
</template>

<style lang="scss" scoped>
.home-page {
   height: 100dvh;
   display: flex;
   justify-content: center;

   h1 {
      margin-block-start: toRem(82);
   }
}
</style>
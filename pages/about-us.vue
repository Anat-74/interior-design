<script setup lang="ts">
useSeoMeta({
   title: 'About us',
   ogTitle: 'About us',
   description: 'page about us',
   ogDescription: 'page about us'
})
</script>

<template>
   <div class="about">
   <h1>
      page AboutUs
   </h1>
   </div>
</template>

<style lang="scss" scoped>
.about {
   height: 100dvh;
   display: flex;
   justify-content: center;

   h1 {
      margin-block-start: toRem(82);
   }
}
</style>
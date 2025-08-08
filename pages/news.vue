<script setup lang="ts">
useSeoMeta({
   title: 'News',
   ogTitle: 'News',
   description: 'news page',
   ogDescription: 'news page'
})
</script>

<template>
      <div class="news">
   <h1>
      News page
   </h1>
   </div>
</template>

<style lang="scss" scoped>
.news {
   height: 100dvh;
   display: flex;
   justify-content: center;

   h1 {
      margin-block-start: toRem(82);
   }
}
</style>
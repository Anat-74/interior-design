<script setup lang="ts">
useSeoMeta({
   title: 'Available Positions',
   ogTitle: 'Available Positions',
   description: 'Available Positions page',
   ogDescription: 'Available Positions page'
})
</script>

<template>
      <div class="available">
   <h1>
      Available Positions
   </h1>
   </div>
</template>

<style lang="scss" scoped>
.available {
   height: 100dvh;
   display: flex;
   justify-content: center;

   h1 {
      margin-block-start: toRem(82);
   }
}
</style>
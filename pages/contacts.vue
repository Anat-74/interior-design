<script setup lang="ts">
useSeoMeta({
   title: 'Contacts',
   ogTitle: 'Contacts',
   description: 'contacts page',
   ogDescription: 'contacts page'
})
</script>

<template>
      <div class="contacts">
   <h1>
      Contacts page
   </h1>
   </div>
</template>

<style lang="scss" scoped>
.contacts {
   height: 100dvh;
   display: flex;
   justify-content: center;

   h1 {
      margin-block-start: toRem(82);
   }
}
</style>
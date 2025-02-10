<script setup lang="ts">
const dialogElement = useTemplateRef<HTMLDialogElement>('dialog-header')
const openDialog = () => {
      dialogElement.value?.show()
   }

const closeDialog = () => {
   dialogElement.value?.close()
}
</script>

<template>
   <div>
   <UButton 
   @click="openDialog"
   name-class="hamburger"
   ref="open-dialog-button"
   aria-label="Open modal window" 
   >
     <span></span>
   </UButton>
   <dialog 
   class="dialog-header"
   ref="dialog-header"
   id="dialogHeader" 
   aria-label="Contacts" 
   >
     <div class="dialog-header__items">
         <UButton 
         class="dialog-header__btn-close"
         @click="closeDialog"
         name-class="hamburger"
         aria-label="Close modal window"
          />
       <Logo class="dialog-header__logo" />
       <BaseNavigation />
     </div>
   </dialog>
</div>
 </template>

<style lang="scss" scoped>
.dialog-header {
   display: block;
   position: fixed;
   z-index: 999;
   top: toRem(8);
   width: toRem(160);
   height: auto;
   border-radius: toRem(4);
   margin-inline-end: toRem(0);
   transform: translateX(100%);
   border: toRem(2) solid var(--light-opacity-color);
   background-color: transparent;
   backdrop-filter: blur(5px);
   transition: transform .2s linear;
   @include adaptiveValue("width", 160, 140);

  &[open] {
   transform: translateX(-8px);
   transition: transform .3s linear;
  }

  &__items {
   position: relative;
   padding-inline: toEm(12, 16);
   padding-block-start: toEm(16, 16);
   padding-block-end: toEm(18, 16);
  }

  &__btn-close {
   width: toRem(32);
   height: toRem(32);
   position: absolute;
   right: toRem(8);
   top: toRem(8);
  }

  &__logo {
   display: inline-block;
   margin-block-end: toEm(22, 16);
   color: var(--secondary-color);
   @include adaptiveValue("font-size", 12, 8);
  }

}
</style>
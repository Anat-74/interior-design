<script setup lang="ts">
const dialogElement = useTemplateRef<HTMLDialogElement>('dialog-benefits')
const openDialog = () => {
   dialogElement.value?.showModal()
   }

const closeDialog = () => {
   dialogElement.value?.close()
}

onMounted(() => {
   if (dialogElement.value) {
      useCloseDialogElement(dialogElement.value);
  }
})
</script>

<template>
   <div>
   <UButton
   @click="openDialog"
   name-class="dialog-benefits"
   label="Discuss a&nbsp;project"
   aria-label="Open modal window" 
   />
   <dialog 
   class="dialog-benefits"
   ref="dialog-benefits"
   id="dialogBenefits" 
   aria-label="discuss a project" 
   >
     <div class="dialog-benefits__items">
         <UButton 
         @click="closeDialog"
         name-class="close"
         aria-label="Close modal window"
          />
       <div class="dialog-benefits__content">
         Content
       </div>
     </div>
   </dialog>
</div>
 </template>

<style lang="scss" scoped>
.dialog-benefits {
  display: block;
  min-height: toRem(350);
  position: fixed;
  inset: 0;
  visibility: hidden;
  opacity: 0;
  scale: .5;
  border-radius: toRem(6);
  border: 1px solid var(--border-color);
  background-color: var(--secondary-color);
  @include adaptiveValue('width', 755, 285);

  &[open] {
   scale: 1;
   visibility: visible;
   opacity: 1;
   transition: opacity .3s linear, scale .3s;
  }
  &[open]::backdrop {
   background-color: var(--main-color);
   animation: fade 0s linear forwards;
  }

  &__items {
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: toRem(350);
   padding-block: toEm(25, 16);
   @include adaptiveValue('padding-inline', 22, 12);
  }

  &__content {
   font-size: toRem(40);
   color: var(--light-color);
  }
}

@keyframes fade {
   0% {
      opacity: 0;
   }
   100% {
      opacity: .9;
   }
}
</style>
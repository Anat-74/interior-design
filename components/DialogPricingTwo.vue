<script setup lang="ts">
const dialogElement = useTemplateRef<HTMLDialogElement>('dialog-pricing-two')
   const openDialog = () => {
   dialogElement.value?.showModal()
   }

const closeDialog = () => {
   dialogElement.value?.close()
}

onMounted(() => {
  if (dialogElement.value) {
   const cleanup = useCloseDialogElement(dialogElement.value);
  }
})
</script>

<template>
   <div>
   <UButton
   @click="openDialog"
   name-class="pricing-stroke"
   label="send request"
   aria-label="Open modal window" 
   />
   <dialog 
   class="dialog-pricing-two"
   ref="dialog-pricing-two"
   id="dialogPricingTwo" 
   aria-label="We offer you three categories of construction" 
   >
     <div class="dialog-pricing-two__items">
         <UButton 
         @click="closeDialog"
         name-class="close"
         aria-label="Close modal window"
          />
       <div class="dialog-pricing-two__content">
         We offer you the second category of construction
       </div>
     </div>
   </dialog>
</div>
 </template>

<style lang="scss" scoped>
.dialog-pricing-two {
  display: block;
  min-height: toRem(620);
  position: fixed;
  inset: 0;
  visibility: hidden;
  opacity: 0;
  border-radius: toRem(6);
  border: 1px solid var(--border-color);
  @include adaptiveValue('width', 755, 285);

  &[open] {
   visibility: visible;
   opacity: 1;
   transition: .2s linear;
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
   min-height: toRem(620);
   padding-block: toEm(25, 16);
   @include adaptiveValue('padding-inline', 22, 12);
  }

  &__content {
   font-size: toRem(22);
   background-color: var(--light-color);
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
<script setup lang="ts">
      const isAccordion1Open = ref<boolean>(true);
      const isAccordion2Open = ref<boolean>(true);

        const handleScroll = (): void => {
            if (window.scrollY > 0) {
                isAccordion2Open.value = false;
            }
        };

        const handleToggle = (accordionNumber: number): void => {
            if (accordionNumber === 1) {
                if (isAccordion1Open.value) {
                   isAccordion1Open.value = false;
                }else {
                    isAccordion2Open.value = false;
                    isAccordion1Open.value = true;
                }
            } else if (accordionNumber === 2) {
                if (isAccordion2Open.value) {
                    isAccordion2Open.value = false;
                } else {
                    isAccordion1Open.value = false;
                    isAccordion2Open.value = true;
                }
            }
        };

   onMounted(() => {
       window.addEventListener('scroll', handleScroll);
   });

   onUnmounted(() => {
       window.removeEventListener('scroll', handleScroll);
   });
</script>

<template>
   <div class="offer-section__container">
      <NuxtImg
            class="offer-section__image"
            src="images/offer-image.jpg"
            alt="Interior design of apartments"
            format="webp"
            width="705"
            height="440"
            loading="lazy"
            />

     <div class="offer-section__accordion-group">
      <h2 class="offer-section__title">We offer</h2>
      <div class="offer-section__accordion">
         <UButton
         @click="handleToggle(1)"
         :isAccordion1Open="isAccordion1Open" 
         name-class="accordion"
         aria-label="open-close accordion"
         />
         <h3 class="offer-section__subtitle subtitle">
            Interior design of apartments
         </h3>
         <p :class="['offer-section__content', {'offer-section__content_open': isAccordion1Open}]" 
         >
         Adipiscing nunc arcu enim elit mattis eu&nbsp;placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac&nbsp;facilisis.
         </p>
      </div>

     <div class="offer-section__accordion">
      <UButton
         @click="handleToggle(2)"
         :isAccordion2Open="isAccordion2Open"
         name-class="accordion"
         aria-label="open-close accordion"
         />

      <h3 class="offer-section__subtitle subtitle">
      Interior design of private houses
         </h3>
         <p  :class="['offer-section__content', {'offer-section__content_open': isAccordion2Open}]" 
         >
         Adipiscing nunc arcu enim elit mattis eu&nbsp;placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac&nbsp;facilisis.
      </p>
     </div>
   </div>
 </div>
</template>

<style lang="scss" scoped>
.offer-section {
   &__container {
   display: grid;
   grid-template-columns: 1fr minmax(toRem(340), toRem(370));
   column-gap:toRem(95);
   @include adaptiveValue("margin-block-end", 180, 60);

   @media (max-width:$tablet){
      grid-template-columns: 1fr;
      justify-items: center;
   }
}

&__image {
   @include adaptiveValue("margin-block-end", 40, 20);
}

&__accordion-group {
   @media (min-width:$tablet){
      max-height: toRem(480);
   }

   @media (max-width:$tablet){
      max-width: toRem(500);
   }
}

&__title {
   font-weight: 500;
   @include adaptiveValue("margin-block-end",60 , 20);

   @media (max-width:$tablet){
      text-align: center;
   }
}

&__accordion {
   position: relative;

   &:not(:last-child) {
      margin-block-end: toRem(24);
   }

   @media (max-width:$mobileSmall){
      padding-inline-start: toRem(8);
      margin-inline-end: toRem(47);
   }
}

&__subtitle {
   margin-block-end: toRem(12);
}

&__content {
   max-height: 0;
   overflow: hidden;
   color: var(--secondary-color);
   transition: max-height .4s;

   &_open {
      max-height: toRem(220);
   }

      @media (max-width:$tablet){
         max-width: toRem(370);
      }
   }
}
</style>
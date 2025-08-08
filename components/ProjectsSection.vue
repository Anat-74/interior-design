<script setup lang="ts">
interface SwiperInstance {
  slidePrev: () => void;
  slideNext: () => void;
}

const containerRef = useTemplateRef<null>('containerRef')
useSwiper(containerRef, {
   slidesPerView: 1,
   spaceBetween: 30,
   breakpoints: {
      639.98: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      1023.98: {
         slidesPerView: 3,
      },
   },
   injectStyles: [
    `.swiper {
         overflow: visible;
    }
      .swiper-pagination {
         translate: 0 32px;
      }
      :host {
         --swiper-theme-color: #FF5A30;
      }
    `
   ]
})

const swiperInstance = ref<SwiperInstance | null>(null)

onMounted(async () => {
  await nextTick()
  if (containerRef.value) {
    const swiperEl = containerRef.value as HTMLElement & { initialize: () => Promise<void>; swiper: any }
    await swiperEl.initialize()
    swiperInstance.value = swiperEl.swiper
    console.debug('Swiper initialized:', swiperInstance.value)
  }
})

const slides = [
   { path: '/view-project-one',    idx: 1, imageUrl: "images/kids-slider-image.jpg", title: 'Kids Bedroom With Decorations', descr: 'Apartments & flats' },
   { path: '/view-project-two',    idx: 2, imageUrl: "images/modern-slider-image.jpg", title: 'Modern Double Bedroom', descr: 'Apartments & flats' },
   { path: '/view-project-three', idx: 3, imageUrl: "images/scandinavian-slider-image.jpg", title: 'Scandinavian Style Interior', descr: 'Private houses' },
   { path: '/view-project-one',    idx: 4, imageUrl: "images/kids-slider-image.jpg", title: 'Kids Bedroom With Decorations', descr: 'Apartments & flats' },
   { path: '/view-project-two',    idx: 5, imageUrl: "images/modern-slider-image.jpg", title: 'Modern Double Bedroom', descr: 'Apartments & flats' },
   { path: '/view-project-three', idx :6, imageUrl: "images/scandinavian-slider-image.jpg", title: 'Scandinavian Style Interior', descr: 'Private houses' }
]

const activeSlideIdx = ref(null)

const setActiveSlide = (idx: any) => {
  if (activeSlideIdx.value === idx) {
    activeSlideIdx.value = null
  } else {
    activeSlideIdx.value = idx
  }
}
</script>

<template>
    <section class="page-inner-services__projects-section projects-section">
      <div class="projects-section__container">
        <div class="projects-section__row-top">
          <h2 class="projects-section__title">Related projects</h2>
          <UButton 
          @click="swiperInstance?.slidePrev()"
          name-class="arrow-slider" 
          icon="my-icon:Left" 
          aria-label="prew slider"
          />
          <UButton 
          @click="swiperInstance?.slideNext()"
          name-class="arrow-slider" 
          icon="my-icon:Right" 
          aria-label="next slider"
          />
        </div>
        <ClientOnly>
          <swiper-container 
          class="projects-section__swiper-wrapper"
          :pagination="true"
          :pagination-dynamic-bullets="true"
          :init="false"
          ref="containerRef"
          >
            <swiper-slide 
             v-for="slide in slides"
            :key="slide.idx"
            @click="setActiveSlide(slide.idx)"
            :class="['projects-section__swiper-slide', { 'projects-section__swiper-slide_active-slide': activeSlideIdx === slide.idx }]"
            >
            <NuxtImg
               class="projects-section__image"
               :src="slide.imageUrl"
               :alt="slide.title"
               format="webp"
               width="390"
               height="345"
               loading="lazy"
              />
              <div class="projects-section__slide-content slide-content">
                <h3 class="slide-content__title">{{slide.title}}</h3>
                <span class="slide-content__descr">{{slide.descr}}</span>
                <NuxtLink
                :to="slide.path"
                class="slide-content__link"
                >View Project
                </NuxtLink>
                  <Icon 
                  v-if="activeSlideIdx === null"
                  name="mynaui:click"
                  />
              </div>
            </swiper-slide>
          </swiper-container>
         </ClientOnly>
         <div class="projects-section__row-bottom">
          <h3 class="projects-section__subtitle subtitle">Explore all our works</h3>
          <UButton name-class="view-primary" label="View portfolio" />
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>
.projects-section {
  @include adaptiveValue("margin-block-end", 100, 40);

  &__container {
   overflow: hidden;
  }

  &__row-top {
    display: grid;
    grid-template-columns: 1fr repeat(2, auto);
    align-items: center;
    column-gap: toRem(8);
    @include adaptiveValue("margin-block-end", 60, 30);
  }

  &__swiper-wrapper {
   @include adaptiveValue("margin-block-end", 80, 35);
  }

  &__swiper-slide {
   @media (min-width:$tablet){
       max-height: toRem(442); 

       @include hover {
      .projects-section__slide-content {
        position: relative;
        z-index: 10;
        margin-block-start: toRem(-66);
      }

      .slide-content__descr {
        margin-block-end: toRem(24);
      }

      .slide-content__link {
         visibility: visible;
         opacity: 1;
         display: block;
         transition: opacity .9s, visibility .9s, background-color .5s;

         @starting-style {
           opacity: 0;
           visibility: hidden;
         }
      }
    }
   }

   @media (max-width:$tablet){
      display: grid;
      justify-items: center;
   }

   @media (max-width: toEm(639.98)){
      border-radius: toRem(6);
      box-shadow: 1px 24px 34px 11px rgba(30, 33, 44, 0.1), 1px 42px 10px -6px rgba(154, 156, 165, 0.011),0px 30px 2px -5px rgba(154, 156, 165, 0.04),8px 80px 2px -9px rgba(154, 156, 165, 0.011);
   }

   @media (max-width: $mobileSmall){
        box-shadow: none;
   }

    &_active-slide {
      .projects-section__slide-content {
        position: relative;
        z-index: 10;
        margin-block-start: toRem(-66);
      }

      .slide-content__descr {
        margin-block-end: toEm(24, 16);
      }

      .slide-content__link {
         display: block;
         visibility: visible;
         opacity: 1;
         transition: opacity .4s, visibility .4s;

         @starting-style {
           opacity: 0;
           visibility: hidden;
         }
      }
    }
  }

  &__image {
   width: 100%;
   height: 100%;
   @media (max-width: toEm(639.98)){
      width: 85%;
   }

   @media (max-width:$mobileSmall){
       width: 100%; 
   }
  }
  &__row-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    @include adaptiveValue("column-gap", 40, 16, 0, $containerWidth, 479.98);

    @media (max-width: $mobileSmall) {
      flex-direction: column;
      row-gap: toRem(16);
    }
  }
}
.slide-content {
  display: grid;
  justify-items: center;
  width: 100%;
  padding-block-start: toEm(16, 16);
  padding-block-end: toEm(24, 16);
  border-radius: 0 0 toRem(4) toRem(4);
  background-color: var(--light-color);
  box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03), 0px 12px 10px -6px rgba(154, 156, 165, 0.04),0px 30px 24px -10px rgba(154, 156, 165, 0.05),0px 80px 80px -20px rgba(154, 156, 165, 0.08);
  
  @media (min-width:$tablet){
      transition: margin-block-start .3s;
  }

  @media (max-width: toEm(639.98)){
      width: 85%;
   }

   @media (max-width:$mobileSmall){
       width: 100%; 
   }

  &__title {
    text-align: center;
    margin-block-end: toRem(2);
  }

  &__descr {
    display: block;
    text-align: center;
    color: var(--secondary-color);
  }

  &__link {
      opacity: 0;
      visibility: hidden;
      display: none;
      text-transform: uppercase;
      padding-inline: toRem(30);
      border: 1px solid var(--primary-color);
      border-radius: toRem(4);
      font-weight: 700;
      color: var(--primary-color);
      @include adaptiveValue("padding-block", 8, 5);

   @include hover {
      color: var(--light-color);
      background-color: var(--primary-color);
   }
  }

  svg {
   display: none;
   @media (max-width:$tablet){
   display: block;
   opacity: 1;
   visibility: visible;
   position: absolute;
   right: 0;
   bottom: 0;
   font-size: toEm(25, 16);
   color: var(--primary-color);
   opacity: .4;
   transition: opacity .9s, visibility .9s;

      @starting-style {
        opacity: 0;
        visibility: hidden;
      }
   }
  }
}
</style>
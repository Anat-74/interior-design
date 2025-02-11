<script setup lang="ts">
interface Props{
   nameClass?: string
   disabled?: boolean
   icon?: string
   label?: string
   close?:string
   isAccordion1Open?: boolean
   isAccordion2Open?:boolean
}
defineProps<Props>()

const emit = defineEmits(['click'])
const clickOnButton = () => {
   emit('click')
}
</script>

<template>
   <button 
      type="button"
      :disabled="disabled"
      @click="clickOnButton"
      :class="[
   'btn', `btn_${nameClass}`,
   {'btn_accordion-open': isAccordion1Open || isAccordion2Open}
   ]"
      >
   <span v-if="icon">
      <Icon :name="icon"
      />
   </span>
   <span v-else>{{ label }}</span>
   </button>
</template>

<style lang="scss" scoped>
body:has(dialog[open]) {
   .btn_hamburger {
      span {
         width: 0;
      }
      &::before,
      &::after {
         width: toRem(18);
         height: toRem(2);
         background-color: var(--not-active-color);
      }
      &::before {
         top: calc(50% - toRem(1));
         transform: rotate(-45deg);
      }
      &::after {
         bottom: calc(50% - toRem(1));
         transform: rotate(45deg);
      }
   }
 }
.btn {
   display: inline-flex;
   align-items: center;
   justify-content: center;
   font-weight: 700;
   padding-inline: toRem(24);
   border-radius: toRem(4);
   color: var(--light-color);
   background-color: transparent;
   border: none;
   transition: var(--transition-duration);
   @include adaptiveValue("height", 44, 36);

   @include hover {
      background-color: var(--orange-red-hover);
   }

   &:disabled {
    opacity: .4;
    cursor: default;
  }
    span {
      display: flex;
      justify-content: center;
    }

    &_hamburger {
   display: none;
   @media (max-width:$tablet){
      display: block;
      padding: 0;
      position: relative;
      z-index: 999;
      top: toRem(-2);
      width: toRem(32);
      height: toRem(29);

      @media (max-width:$mobile){
         height: toRem(26);
      }

         span,
      &::before,
      &::after{
         content: '';
			right: toRem(2);
			position: absolute;
			width: toRem(5);
			height: toRem(5);
         border-radius: 50%;
			background-color: var(--primary-color);
         transition: transform .5s .2s, height var(--transition-duration);
      }
      &::before {
			top: 0;
		}
		&::after {
			bottom: 0;
		}
		span {
         top: 50%;
         translate: 0 -50%;
		   }

         @include hover {
            background-color: transparent;
         span,
         &::before,
         &::after {
            transform: scale(1.3);
            transition: .2s;
         }
      }
      }
  }

    &_accordion {
   position: absolute;
   top: calc(toRem(0) - toRem(2));
   left: toRem(-60);
   width: toRem(58);
   height: toRem(45);
   padding: toRem(4);

   @media (max-width:$tablet){
         left: 100%;
      }

      &:active {
      background-color: transparent;
   }

   &::before,
   &::after {
      content: '';
      position: absolute;
      top: 50%;
      translate: -50% -50%;
      left: 50%;
      width: toRem(22);
      height: toRem(2);
      border-radius: toRem(4);
      background-color: var(--primary-color);
      transition: var(--transition-duration);
   }

      &::after {
      rotate: 0deg;
      }

      @include hover {
         background-color: transparent;
         &::before,
         &::after {
            scale: 1.2;
         }
   }

      &-open {
         &::after {
      rotate: 90deg;
         }
      }
    }

    &_dialog-benefits {
   white-space: nowrap;
   position: absolute;
   left: 50%;
   translate: -50% 0;
   bottom: toRem(-24);
   text-transform: uppercase;
   line-height: 3.25;
   padding-inline: toRem(121);
   background-color: var(--primary-color);
   @include adaptiveValue("height", 52, 40);
   @include adaptiveValue("padding-inline", 121, 40);
   }

    &_close {
      position: absolute;
      top: toRem(12);
      right: toRem(12);
      padding-inline: toRem(19);
      padding-block: toRem(12);

       &::before,
      &::after{
         content: '';
         position: absolute;
         left: 50%;
         translate: -50% 0;
			width: toRem(18);
			height: toRem(2);
         background-color: rgb(0 0 0 / .7);
      }
      &::before {
         top: calc(50% - toRem(1));
         transform: rotate(-45deg);
		}
		&::after {
         bottom: calc(50% - toRem(1));
         transform: rotate(45deg);
		}

    @media (any-hover: hover) {
      &:hover {
         transform: scale(1.2);
         }
      }
    &:focus-visible {
         border: 2px solid var(--lime-color);
         outline: 2px solid var(--orange-color);
      }
    &:active {
         background-color: var(--danger-color);
      }

      @include hover {
         background-color: transparent;
      }
  }

  &_arrow-slider{
   padding: toRem(8);
   translate: toRem(8) 0;
   color: var(--main-color);
   transition: var(--transition-duration);

   @include hover {
      background-color: transparent;
   }

   &:active {
      background-color: transparent;
   }
   svg {
      font-size: toRem(24);
   }

   @include hover {
      scale: 1.2;
      color: var(--primary-color);
   }
  }

  &_view-primary {
   position: relative;
   z-index: 10;
   padding-inline: toRem(48);
   text-transform: uppercase;
   background-color: var(--primary-color);
   @include adaptiveValue("padding-inline", 48, 32);
   @include adaptiveValue("height", 44, 36);
  }

  &_pricing-stroke {
   height: toRem(36);
   border: 1px solid var(--primary-color);
   font-weight: 700;
   line-height: 3;
   letter-spacing: .5px;
   font-size: toRem(12);
   color: var(--primary-color);
   @include adaptiveValue("margin-block-end", 16, 2);
   @include adaptiveValue("padding-inline", 24, 4, 0, $containerWidth, 640);
  
   @media (max-width: toEm(640)){
      line-height: 1.4;
      width: toRem(88);
   }
   @include hover {
      color: var(--light-color);
   }
}

&_form {
   justify-self: center;
   padding-inline: toRem(40);
   background-color: var(--primary-color);
}

&_form-footer {
   height: 100%;
   border: 1px solid rgba(255, 255, 255, 0.2);
   border-left: none;
   border-radius:  0 toRem(4) toRem(4) 0;
   font-size: toRem(14);
   background-color: var(--primary-color);
   @include adaptiveValue("padding-inline", 35, 22);
}

&_go-to-top {
   position: fixed;
   z-index: 999;
   width: toRem(40);
   height: toRem(40);
   padding: toRem(4);
   background-color: var(--primary-color);
   background-color: var(--primary-opacity-color);
   @include adaptiveValue("bottom", 80, 36);

   @media (max-width:$mobile){
      width: toRem(34);
      height: toRem(34);
   }

   svg {
      font-size: toRem(24);
   }
}
}
</style>
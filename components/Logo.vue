<template>
      <NuxtLink
         class="logo"
         to="/"
         aria-label="logo"
         >
         <Icon name="my-icon:logo-text" />
         <Icon name="my-icon:logo-simbol"
          />
      </NuxtLink>
</template>


<style lang="scss" scoped>
.logo {
   display: flex;
   align-items: center;
   column-gap: toRem(3);
   font-size: toRem(20);
   transition: color var(--transition-duration);
   @include adaptiveValue("font-size", 20, 12);

   svg:last-child {
      color: var(--primary-color);
   }

   @include hover {
      svg:last-child {
      color: var(--secondary-color);
   }
      color: var(--primary-color);
   }
}
</style>
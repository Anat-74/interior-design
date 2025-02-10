<template>
      <nav 
      class="nav"
      aria-label="primary navigation"
      >
         <ul class="nav__list">
            <li class="nav__item">
               <NuxtLink class="nav__link" to="/about-us"
               >About Us
               </NuxtLink>
            </li>
            <li class="nav__item">
               <NuxtLink class="nav__link" to="/services"
               >Services
               </NuxtLink>
            </li>
            <li class="nav__item">
               <NuxtLink class="nav__link" to="/work"
               >Work
               </NuxtLink>
            </li>
            <li class="nav__item">
               <NuxtLink class="nav__link" to="/news"
               >News
               </NuxtLink>
            </li>
            <li class="nav__item">
               <NuxtLink class="nav__link" to="/contacts"
               >Contacts
               </NuxtLink>
            </li>
         </ul>
         </nav>
</template>

<style lang="scss" scoped>
.nav {
&__list {
   display: flex;
   @include adaptiveValue("column-gap", 40, 10);

   @media (max-width:$tablet){
      flex-direction: column;
      align-items: center;
      @include adaptiveValue("row-gap", 16, 12);
   }
}

&__link {
   position: relative;
   z-index: 10;
   padding: toRem(7);
   margin: toRem(-7);
   font-weight: 700;
   transition: color var(--transition-duration);

   @include hover {
      color: var(--primary-color);
   }

   @media (max-width:$tablet){
      font-weight: 600;
      padding-block: toRem(1);
      border-radius: toRem(4);
      color: var(--primary-color);
      @include adaptiveValue("font-size", 22, 16);
   }
}
}
</style>
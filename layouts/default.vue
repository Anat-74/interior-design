
<template>
   <header class="header">
      <div class="header__container">
      <Logo class="header__logo hidden-mobile-small" />
      <BaseNavigation class="hidden-tablet"/>
         <div class="header__contacts contacts-header">
            <Icon name="my-icon:iPhone"/>
            <a 
            href="tel:4055550128" 
            class="contacts-header__items-link" 
            >
            <span class="contacts-header__call-link">Call us</span> 
            <span class="contacts-header__connection-link">(405)&nbsp;555&nbsp;01&nbsp;28</span></a>
            <Icon name="my-icon:Chat"/>
            <a 
            href="mailto:hello@createx.com" 
            class="contacts-header__items-link" 
            >
               <span class="contacts-header__call-link">Talk to us</span>
               <span class="contacts-header__connection-link">hello@createx.com</span>
            </a>
         </div>
         <DialogHeader class="header__dialog" />
	</div>
   </header>

   <main class="main">
      <slot />
   </main>

   <footer class="footer">
      <div class="footer__container">
      <div class="footer__top-left top-left">
         <Logo class="top-left__logo" />
         <ul class="top-left__list social">
            <li class="social__item">
               <a 
               href="#" 
               class="social__link"
               aria-label="Viber"
               >
                  <Icon name="my-icon:Whatsapp"/>
               </a>
            </li>
            <li class="social__item">
               <a 
               href="#" 
               class="social__link"
               aria-label="Messanger"
               >
                  <Icon name="my-icon:Messanger"/>
               </a>
            </li>
            <li class="social__item">
               <a 
               href="#" 
               class="social__link"
               aria-label="Facebook"
               >
                  <Icon name="my-icon:Facebook"/>
               </a>
            </li>
            <li class="social__item">
               <a 
               href="#" 
               class="social__link"
               aria-label="Twitter"
               >
                  <Icon name="my-icon:Twitter"/>
               </a>
            </li>
            <li class="social__item">
               <a 
               href="#" 
               class="social__link"
               aria-label="YouTube"
               >
                  <Icon name="my-icon:YouTube"/>
               </a>
            </li>
         </ul>
         <p class="top-left__descr">Createx Construction Bureau has been successfully operating in&nbsp;the USA construction market since 2000. We&nbsp;are proud to&nbsp;offer you quality construction and exemplary service. Our mission is&nbsp;to&nbsp;set the highest standards for construction sphere.</p>
      </div>
      <form action="#" class="footer__form top-right">
         <h2 class="top-right__title">Let’s stay in touch</h2>
         <div class="top-right__items">
            <label 
            class="visually-hidden"
            for="e-address">Email address
         </label>
         <input 
         class="top-right__input" 
         type="text" 
         id="e-address"
         placeholder="Your email address"
         >
        <UButton
        name-class="form-footer"
        label="subscribe"
        type="submit"
        />
      </div>
         <p class="top-right__subscribe">*Subscribe to&nbsp;our newsletter to&nbsp;receive communications and early updates from Createx Construction Bureau.</p>
      </form>
         <address class="footer__address address">
               <span class="address__title subtitle-footer">head office</span>
            <div class="address__item">
               <span>Address:</span>&nbsp;8502&nbsp;Preston Rd. Inglewood, New York
            </div>
            <div class="address__item">
               <span>Call:</span>
               <a href="tel:4055550128" class="address__link">&nbsp;(405)&nbsp;555&nbsp;01&nbsp;28</a>
            </div>
            <div class="address__item">
               <span>Email:</span>
               <a href="mailto:hello@createx.com" class="address__link">&nbsp;hello@createx.com</a>
            </div>
         </address>
         <nav 
         class="footer__nav nav-footer" 
         title="secondary navigation"
         aria-label="secondary navigation"
         >
            <div class="nav-footer__column">
               <h3 class="nav-footer__title subtitle-footer">who we are</h3>
            <ul class="nav-footer__list">
            <li class="nav-footer__item">
               <NuxtLink class="nav-footer__link" to="/about-us"
               >About Us
               </NuxtLink>
            </li>
            <li class="nav-footer__item">
               <NuxtLink class="nav-footer__link" to="/available-positions"
               >Available Positions
               </NuxtLink>
            </li>
            <li class="nav-footer__item">
               <NuxtLink class="nav-footer__link" to="/contacts"
               >Contacts
               </NuxtLink>
            </li>
      </ul> 
    </div> 
      <div class="nav-footer__column">
         <h3 class="nav-footer__title subtitle-footer">our experience</h3>
         <ul class="nav-footer__list">
            <li class="nav-footer__item">
               <NuxtLink class="nav-footer__link" to="/services"
               >Services
               </NuxtLink>
            </li>
            <li class="nav-footer__item">
               <NuxtLink class="nav-footer__link" to="/work"
               >Work
               </NuxtLink>
            </li>
            <li class="nav-footer__item">
               <NuxtLink class="nav-footer__link" to="/news"
               >News
               </NuxtLink>
            </li>
         </ul>
      </div>
      </nav>
      <div class="footer__copyright copyright">
         <span>&copy;&nbsp;All rights reserved. Made with</span> 
         <Icon name="my-icon:Heart"/>
         <span>by&nbsp;Createx Studio</span> 
      </div>
      <div class="footer__go-to-top go-to-top">
         <span>go to top</span>
      <ScrollToTop class="go-to-top__btn" />
      </div>
	</div>
   </footer>
   </template>

<style lang="scss" scoped>
.header {
   padding-block-start: toRem(20);
   background-color: var(--primary-bg);
   @include adaptiveValue("padding-block-end", 80, 30);

   @media (max-width:$mobileSmall){
       padding-block-start: toRem(12); 
   }

&__container {
   position: relative;
   height: toRem(52);
   display: grid;
   grid-template-columns: auto 1fr auto;
   align-items: center;

   @media (max-width:$tablet){
      grid-template-columns: auto 1fr auto;
      justify-items: center;
   }

   @media (max-width:$mobileSmall){
      grid-template-columns: 1fr auto; 
   }
}

&__logo {
   position: relative;
   z-index: 10;
   @include adaptiveValue("margin-inline-end", 60, 0);

   @media (max-width: toEm(520)){
      margin: toRem(2);
   }
}

&__dialog {
   padding-inline-start: toRem(16);
   @media (max-width:$mobileSmall){
      position: absolute;
      z-index: 100;
      right: toRem(12);
      top: toRem(12);
      padding-inline-start: 0;
   }
}
}

.contacts-header {
   display: flex;
   align-items: center;

   svg {
      color: var(--primary-color);
      @include adaptiveValue("font-size", 40, 22);
   }

   @media (max-width:$mobileSmall){
       justify-self: start; 
       overflow-x: auto;
   }

&__items-link {
   position: relative;
   z-index: 10;
   transition: font-weight .1s;
   @include adaptiveValue("margin-inline-start", 12, 4);

   &:not(:last-child) {
      @include adaptiveValue("margin-inline-end", 36, 16);
   }

   @include hover {
      font-weight: 600;
      svg {
         color: var(--light-color);
      }
   }

   @media (max-width: toEm(367)){
      width: toRem(92);
   }
}

&__call-link {
   display: block;
}
}

//============================================================================================================================================

.footer {
background-color: var(--secondary-bg);
color: rgba(255, 255, 255, 0.6);
@include adaptiveValue("padding-block-start",80 , 36);
@include adaptiveValue("padding-block-end",78 , 36);

   &__container {
      display: grid;
      grid-template: auto / repeat(5, 1fr);
      align-items: center;
      grid-template-areas: 
      "a a .. b b"
      "c c d d .."
      "e e ..  .. f"
      ;
      line-height: 1.5;
      color: var(--light-opacity-color);
      @include adaptiveValue("row-gap",50 , 20);
      //*max-width:$tablet ----------------------------------------------------------------------------------------------------------------------------------------------
      @media (max-width:$tablet){
         grid-template-areas: 
         "a a a a a "
         "b b b b b "
         "c c c c c"
         "d d d d d"
         "e e e f f"
         ;

         .top-left {
            &__list {
               margin-top: toRem(-8);
               @include adaptiveValue("column-gap", 150, 22);
            }
      }
         .nav-footer {
            margin-left: 0;

            &__item {
               white-space: nowrap;
            }
         }
      }

//*max-width:$mobileSmall ----------------------------------------------------------------------------------------------------------------------------------------------------
      @media (max-width:$mobileSmall){
         grid-template-areas: 
         "a a a a a "
         "b b b b b "
         "c c c c c"
         "d d d d d"
         "e e e e e"
         ".. f f f f"
         ;

         .nav-footer {
            display: grid;
            row-gap: toRem(25);
         }

         .copyright {
            padding-top: 0;
         }
      }
      //*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   }

   &__top-left {
      grid-area: a;
   }

   &__form {
      grid-area: b;
   }

    &__address {
      grid-area: c;
   }

    &__nav {
      grid-area: d;
   }

   &__copyright {
      grid-area: e;
   }

   &__go-to-top {
      grid-area: f;
   }
}

.top-left {
   align-self: start;

   &__logo {
   display: inline-flex;
   translate: 0 toRem(-3);
   font-size: toRem(20);
   @include adaptiveValue("margin-inline-end", 56, 40);
}

   &__descr {
      font-size: toRem(14);
      }
}

.social {
   display: inline-flex;
   column-gap: toRem(16);

   &:not(:last-child) {
      @include adaptiveValue("margin-block-end",24 , 15);
   }

   @media (max-width:$mobile){
      display: flex;
      justify-content: space-between;
      padding-block-start: toRem(26);
     }

     &__link {
      svg {
         color: var(--light-color);
         transition: scale var(--transition-duration);
         @include adaptiveValue("font-size", 24, 28);

         @include hover {
            transform: scale(1.2);
         }
      }
   }
}

.top-right{
position: relative;

   &__title {
      color: var(--light-color);
      @include adaptiveValue("font-size", 24, 20);

      &:not(:last-child) {
         @include adaptiveValue("margin-block-end",23 , 10);
      }
   }

   &__items {
      display: flex;
      height: toRem(44);

      &:not(:last-child) {
         margin-block-end: toRem(14);
      }
   }

   &__input {
      width: 100%;
      height: 100%;
      padding-inline-start: toRem(16);
      padding-inline-end: toRem(7);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-right: none;
      border-radius: toRem(4) 0 0 toRem(4);
      background-color: rgba(255, 255, 255, 0.12);
      transition: color var(--transition-duration);

      &::placeholder{
         transition: color .3s;
      }

      @include hover {
            &::placeholder {
               color: var(--light-color);
         }
      }
   }

   &__subscribe {
      font-size: toRem(12);
   }
}

.address {
      font-style: normal;

      @media (min-width:$tablet){
         padding-inline-end: toRem(60);
      }

   &__title {
      display: inline-block;
      font-weight: 700;
      @include adaptiveValue("margin-block-end", 13, 5);
      }

   &__item {
      line-height: 1.6;
      font-size: toRem(16);

   &:not(:last-child) {
      @include adaptiveValue("margin-block-end", 2, 6);
         }

         span {
            color: var(--light-color);
         }

         a {
            transition: color .3s;
            @include hover {
               color: var(--primary-color);
            }
         }
      }
   }

.nav-footer {
      display: flex;
      margin-inline-start: toRem(-18);
      @include adaptiveValue("column-gap",125 , 145);

      &__title {
      @include adaptiveValue("margin-block-end", 13, 5);
      }

      &__list {
         display: inline-block;
      }

      &__item {
         &:not(:last-child) {
            @include adaptiveValue("margin-block-end", 2, 6);
         }
      }

      &__link {
         line-height: 1.6;
         color: rgba(255, 255, 255, 0.6);
         transition: color .3s;
         font-size: toRem(16);

         @include hover {
            color: var(--primary-color);
         }
      }
   }

.copyright {
      align-self: end;
      display: inline-flex;
      align-items: center;
      column-gap: toRem(4);
      white-space: nowrap;
      padding-block-start: toRem(10);
      font-size: toRem(12);
      color: var(--light-color);

      @media (max-width:$mobileSmall){
         margin-block-end: toRem(42); 
      }

      svg {
         flex-wrap: nowrap;
         font-size: toRem(16);
         color: var(--primary-color);
      }
   }

.go-to-top {
      position: relative;
      height: 100%;
      padding-inline-end: toEm(40, 16);
      justify-self: end;


      span {
         position: absolute;
         bottom: 0;
         right: toRem(60);
         white-space: nowrap;
         text-transform: uppercase;
         color: var(--light-color);
         @include adaptiveValue("font-size", 14, 12);
      }

      &__btn {
      }
}
</style>
<template>
       <section class="page-inner-services__partners-section partners-section">
      <div class="partners-section__container">
        <h2 class="partners-section__title">
          Supported by 12+ partners
        </h2>
        <ul class="partners-section__list">
          <li>
            <a 
            href="#"
            class="partners-section__link"
            aria-label="logo-bitbucket"
            >
            <Icon name="famicons:logo-bitbucket" />
         </a>
          </li>
          <li>
            <a 
            href="#"
            class="partners-section__link"
            aria-label="shelly-logo"
            >
              <Icon name="cbi:shelly-logo" />
            </a>
          </li>
          <li>
            <a 
            href="#"
            class="partners-section__link"
            aria-label="xiaomi-logo"
            >
              <Icon name="cbi:xiaomi-logo" />
            </a>
          </li>
          <li>
            <a 
            href="#"
            class="partners-section__link"
            aria-label="logo-amplify"
            >
              <Icon name="famicons:logo-amplify" />
            </a>
          </li>
          <li>
            <a 
            href="#"
            class="partners-section__link"
            aria-label="logo-angular"
            >
              <Icon name="famicons:logo-angular" />
            </a>
          </li>
          <li>
            <a 
            href="#"
            class="partners-section__link"
            aria-label="cd-logo"
            >
              <Icon name="flat-color-icons:cd-logo" />
            </a>
          </li>
        </ul>
      </div>
    </section>
</template>

<style lang="scss" scoped>
.partners-section {
   background-color: var(--primary-bg);
   @include adaptiveValue("padding-block-end", 110, 40);

&__title {
   text-align: center;
   @include adaptiveValue("margin-block-end", 60, 20);
}

&__list {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
}

&__link {
   display: flex;
   align-items: center;

   svg {
      color: var(--not-active-color);
      transition: color var(--transition-duration);
      @include adaptiveValue("font-size", 60, 32);

      @include hover {
         color: var(--green-hover);
      }
   }
}
}
</style>
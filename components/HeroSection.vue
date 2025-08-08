<template>
    <section class="page-inner-services__hero-section hero-section">
      <div class="hero-section__container">
        <ul class="hero-section__bredcrumbs-list">
          <li class="hero-section__item">
            <NuxtLink to="/homepage"> Homepage </NuxtLink>
          </li>
          <li class="hero-section__item">
            <NuxtLink to="/services"> Services </NuxtLink>
          </li>
          <li class="hero-section__item">
            <NuxtLink> Interior Design </NuxtLink>
          </li>
        </ul>

        <h1 class="hero-section__title">Interior design</h1>
        <p class="hero-section__descr">
          Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet
          aenean vulputate elementum blandit amet.
        </p>
      </div>
    </section>
</template>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  background-color: var(--primary-bg);
  @include adaptiveValue("padding-block-end", 115, 35);
  @include adaptiveValue("margin-block-end", 120, 12);
  @include adaptiveValue("padding-block-start", 60, 2);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    top: toRem(-152);
    background-position: top right toRem(-30);
    background-repeat: no-repeat;
    background-image: image-set(
      url("/images/bg-image.avif") 1x,
      url("/images/bg-image.png") 1x
    );
  }

  &__bredcrumbs-list {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    column-gap: toRem(22);
    @include adaptiveValue("margin-block-end", 40, 20);
  }

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 1.5;
    font-size: toRem(14);
    color: var(--table-color);
    transition: color var(--transition-duration);

    &:not(:last-child) {
      &::after {
        content: "/";
        position: absolute;
        right: toRem(-14);
      }
    }

    &:last-child {
      color: var(--not-active-color);
    }

    @include hover {
      color: var(--primary-color);

      &:last-child {
        color: var(--not-active-color);
      }
    }
  }

  &__title {
    position: relative;
    z-index: 10;
    max-width: toRem(570);
    text-transform: uppercase;
    @include adaptiveValue("margin-block-end", 24, 12);
  }

  &__descr {
    position: relative;
    z-index: 10;
    max-width: toRem(600);
    line-height: 1.5;
    color: var(--secondary-color);
    @include adaptiveValue("font-size", 20, 18);
  }
}
</style>
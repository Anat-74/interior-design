<template>
    <section class="page-inner-services__how-we-do-section how-we-do-section">
      <div class="how-we-do-section__container">
        <h2 class="how-we-do-section__title main-title">
          That&rsquo;s how we&nbsp;do&nbsp;it
        </h2>
        <ul class="how-we-do-section__list">
          <li class="how-we-do-section__item">
            <Icon name="my-icon:line" />
            <h3 class="how-we-do-section__subtitle">Work Estimate</h3>
            <p class="how-we-do-section__descr">
              Culpa nostrud commodo ea&nbsp;consequat aliquip reprehenderit.
            </p>
          </li>
          <li class="how-we-do-section__item">
            <Icon name="my-icon:line" />
            <h3 class="how-we-do-section__subtitle">Contract</h3>
            <p class="how-we-do-section__descr">
              Laoreet ultrices curabitur luctus quisque consequat. Leo lorem
              velit imperdiet auctor et&nbsp;tempor.
            </p>
          </li>
          <li class="how-we-do-section__item">
            <Icon name="my-icon:line" />
            <h3 class="how-we-do-section__subtitle">Mobilization</h3>
            <p class="how-we-do-section__descr">
              Odio massa scelerisque purus arcu sed velit eleifend cursus leo.
            </p>
          </li>
          <li class="how-we-do-section__item">
            <h3 class="how-we-do-section__subtitle">
              Construction Work
            </h3>
            <p class="how-we-do-section__descr">
              Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore
              dolore et&nbsp;ad&nbsp;et&nbsp;veniam ad&nbsp;deserunt.
            </p>
          </li>
        </ul>
      </div>
    </section>
</template>

<style lang="scss" scoped>
.how-we-do-section {
  @include adaptiveValue("margin-block-end", 120, 60);

  &__title {
    &:not(:last-child) {
      @include adaptiveValue("margin-block-end", 60, 30);
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: toRem(10);
    counter-reset: section;

    @media (max-width: $mobile) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__item {
    position: relative;
    &:not(:last-child) {
      padding-inline-end: toRem(30);
    }

    &::before {
      padding: toRem(15);
      margin-inline-start: toRem(-15);
      border-radius: 50%;
      counter-increment: section;
      content: "0" counter(section);
      font-size: toRem(46);
      line-height: 1.3;
      font-weight: 700;
      color: var(--border-secondary-color);
      transition:
        background-color var(--transition-duration),
        color var(--transition-duration);
      @include adaptiveValue("font-size", 46, 32);
    }

    &::after {
      content: "";
      visibility: hidden;
      position: absolute;
      left: toRem(-32);
      top: toRem(-30);
      border-radius: 50%;
      background-color: rgba(255, 90, 48, 0.1);
      @include adaptiveValue("width", 116, 100);
      @include adaptiveValue("height", 116, 100);
    }

    @include hover {
      &::before {
        color: var(--primary-color);
        background-color: rgba(255, 90, 48, 0.3);
        border-radius: 50%;
        transition:
          background-color 0.4s,
          color 0.4s;
      }

      &::after {
        visibility: visible;
        transition: visibility 0.4s;
      }
    }

    svg {
      position: absolute;
      top: toRem(22);
      color: var(--border-secondary-color);
      @include adaptiveValue("width", 209, 150, 0, $containerWidth, 1023.98);

      @media (max-width: $tablet) {
        display: none;
      }
    }
  }

  &__subtitle {
    &:not(:last-child) {
      margin-block-end: toRem(8);
    }
    @include adaptiveValue("padding-top", 16, 8);
  }

  &__descr {
    color: var(--secondary-color);
  }
}
</style>
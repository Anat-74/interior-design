<template>
    <section class="page-inner-services__benefits-section benefits-section">
      <div class="benefits-section__container">
        <h2 class="benefits-section__title">Our benefits</h2>
        <p class="benefits-section__text">
          Our mission is&nbsp;to&nbsp;set the highest standards for construction
          sphere.
        </p>
        <div class="benefits-section__icons-box icons-box">
          <div class="icons-box__items">
            <Icon name="my-icon:ic-contract" />
            <h3 class="icons-box__subtitle">Fixed Terms &amp;&nbsp;Cost</h3>
            <p class="icons-box__text">
              Culpa nostrud commodo ea&nbsp;consequat aliquip reprehenderit.
              Veniam velit nostrud aliquip sunt.
            </p>
          </div>
          <div class="icons-box__items">
            <Icon name="my-icon:ic-helmet" />
            <h3 class="icons-box__subtitle">Qualified Workers</h3>
            <p class="icons-box__text">
              Anim reprehenderit sint voluptate exercitation adipisicing laborum
              adipisicing. Minim empor est&nbsp;ea.
            </p>
          </div>
          <div class="icons-box__items">
            <Icon name="my-icon:ic-camera" />
            <h3 class="icons-box__subtitle">Supervision &amp;&nbsp;Control</h3>
            <p class="icons-box__text">
              Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
              voluptate ullamco proident ea&nbsp;ad.
            </p>
          </div>
        </div>
        <DialogBenefits />
      </div>
    </section>
</template>

<style lang="scss" scoped>
.benefits-section {
  position: relative;
  background-color: var(--secondary-bg);
  @include adaptiveValue("padding-block-start", 80, 40);
  @include adaptiveValue("padding-block-end", 125, 70);
  @include adaptiveValue("margin-block-end", 180, 80);

  &__container {
    color: var(--light-color);
  }

  &__title {
    text-align: center;
    @include adaptiveValue("margin-block-end", 24, 14);
  }

  &__text {
    text-align: center;
    opacity: 0.6;
    @include adaptiveValue("margin-block-end", 60, 30);
  }
}
.icons-box {
  $values-gap: toRem(94);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: calc(($values-gap) * 2);
  row-gap: toRem(30);

  @media (max-width: $tablet) {
    grid-template-columns: 1fr;
  }

  &__items {
    position: relative;
    text-align: center;

    @media (min-width: $tablet) {
      &:not(:last-child) {
        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: calc(-1 * ($values-gap));
          width: toRem(1);
          height: 100%;
          background: linear-gradient(
            315deg,
            rgba(218, 219, 221, 0),
            rgba(218, 219, 221, 0.5),
            rgba(218, 219, 221, 0.5),
            rgba(218, 219, 221, 0)
          );
        }
      }
    }

    svg {
      font-size: toRem(48);
      color: var(--primary-color);
      margin-block-end: toRem(24);
    }
  }

  &__subtitle {
    margin-block-end: toRem(8);
  }

  &__text {
    opacity: 0.6;
  }
}
</style>
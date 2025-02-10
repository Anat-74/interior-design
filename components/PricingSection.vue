<template>
       <section class="page-inner-services__pricing-section pricing-section">
      <div class="pricing-section__container">
        <h2 class="pricing-section__title">Pricing</h2>
        <p class="pricing-section__descr">
          We&nbsp;offer you three categories of&nbsp;construction.
        </p>
        <div class="pricing-section__wrapper">
          <table class="pricing-section__table table">
            <caption class="visually-hidden">
                Tariffs table
              </caption>
            <thead class="table__header">
              <tr class="table__row">
                <th class="table__th">Items</th>
                <th class="table__th">
                  <div class="table__heading">basic</div>
                  <div class="table__per">$20 per m2</div>
                </th>
                <th class="table__th">
                  <div class="table__heading">standard</div>
                  <div class="table__per">$30 per m2</div>
                </th>
                <th class="table__th">
                  <div class="table__heading">business</div>
                  <div class="table__per">$40 per m2</div>
                </th>
              </tr>
            </thead>
            <tbody class="table__body">
              <tr class="table__row">
                <td class="table__col">Installation plan</td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
              </tr>
              <tr class="table__row">
                <td class="table__col">
                  Planning solutions (2-3&nbsp;options)
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
              </tr>
              <tr class="table__row">
                <td class="table__col">Lighting plan</td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
              </tr>
              <tr class="table__row">
                <td class="table__col">Flooring plan</td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
              </tr>
              <tr class="table__row">
                <td class="table__col">Heating floor laying scheme</td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
              </tr>
              <tr class="table__row">
                <td class="table__col">Air conditioner zones layout</td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
              </tr>
              <tr class="table__row">
                <td class="table__col">
                  3D&nbsp;visualization of&nbsp;all rooms
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
              </tr>
              <tr class="table__row">
                <td class="table__col">
                  Visualization of&nbsp;each room (3-4&nbsp;angles)
                </td>
                <td class="table__col"></td>
                <td class="table__col"></td>
                <td class="table__col">
                  <Icon name="my-icon:check" />
                </td>
              </tr>
              <tr class="table__row">
                <td class="table__col">Terms</td>
                <td class="table__col">
                  <span class="table__text">10 days</span>
                </td>
                <td class="table__col">
                  <span class="table__text">20 days</span>
                </td>
                <td class="table__col">
                  <span class="table__text">30 days</span>
                </td>
              </tr>
              <tr class="table__row">
                <td class="table__col"></td>
                <td class="table__col">
                  <DialogPricing />
                </td>
                <td class="table__col">
                  <DialogPricingTwo />
                </td>
                <td class="table__col">
                  <DialogPricingThree />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>
.pricing-section {
  position: relative;
  background-color: var(--primary-bg);
  @include adaptiveValue("padding-block-start", 80, 30);
  @include adaptiveValue("padding-block-end", 120, 30);

  &::before {
    content: "";
    position: absolute;
    top: toRem(-69);
    left: toRem(-8);
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: left;
    background-image: image-set(
      url("/images/bg-pricing-image.avif") 1x,
      url("/images/bg-pricing-image.png") 1x
    );
  }

  &__title {
    text-align: center;
    @include adaptiveValue("margin-block-end", 24, 12);
  }

  &__descr {
    text-align: center;
    color: var(--secondary-color);
    @include adaptiveValue("margin-bottom", 60, 15);
  }

  &__wrapper {
    overflow-x: auto;
  }
}
.table {
  position: relative;
  z-index: 10;
  width: 100%;
  border-radius: toRem(4);
  border-collapse: collapse;
  border: 1px solid var(--border-color);
  background-color: var(--light-color);
  box-shadow:
    0px 4px 4px -4px rgba(30, 33, 44, 0.03),
    0px 12px 10px -6px rgba(154, 156, 165, 0.04),
    0px 30px 24px -10px rgba(154, 156, 165, 0.05),
    0px 80px 80px -20px rgba(154, 156, 165, 0.08);

   @media (max-width:toEm(522)){
       width: toRem(498); 
   }
  &__th {
    @include adaptiveValue("padding-block-start", 30, 10);

    &:first-child {
      font-size: toEm(18, 16);
      line-height: 1.5;
      padding-inline-start: toRem(24);
      padding-block-end: toRem(24);
      text-align: left;
      vertical-align: bottom;
      @include adaptiveValue("padding-inline-start", 24, 9);
    }
  }

  &__heading {
    text-transform: uppercase;
    line-height: 1.5;
    font-weight: 700;
    margin-bottom: toRem(2);
    @include adaptiveValue("font-size", 24, 16);
  }

  &__per {
    line-height: 1.5;
    font-weight: 700;
    color: var(--secondary-color);
    @include adaptiveValue("margin-block-end", 24, 10);
    @include adaptiveValue("font-size", 18, 14);
  }

  &__body {
    .table__row {
      &:nth-child(odd) {
        background-color: var(--primary-bg);
      }
    }
  }

  &__col {
    line-height: 1.625;
    text-align: center;
    color: var(--table-color);
    @include adaptiveValue("padding-inline", 24, 5);
    @include adaptiveValue("padding-block", 16, 12);

    &:first-child {
      display: block;
      text-align: left;
      @include adaptiveValue("margin-inline-end", 66, 0, 0, $containerWidth,767.98);
    }

    svg {
      font-size: toRem(14);
      color: var(--primary-color);
    }
  }
}
</style>
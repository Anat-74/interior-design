<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import { object, string, boolean } from "yup";

interface FormValues {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  terms?: boolean;
}
interface SubmitOptions {
  resetForm: () => void;
}


const isSubmitting = ref(false)

const schema = object({
  name: string().required("Имя обязательно"),
  phone: string()
   .required("Телефон обязателен")
   .matches(/^[0-9]+$/, "Нужно ввести только цифры"), 
   email: string().email("Некорректный email"),
   message: string()
   .required("Сообщение обязательно")
   .min(10, "Не менее 10 символов"),
   terms: boolean().oneOf([true], "Для продолжения нужно принять условие")
   .required("Для продолжения нужно принять условие"),
})

const onSubmit = async (values: FormValues, { resetForm }: SubmitOptions): Promise<void> => {
  isSubmitting.value = true

  try {
    console.log("Форма отправлена:", values)
    alert("Форма отправлена!")

    resetForm()
  } catch (error) {
    console.error("Ошибка:", error)
    alert("Произошла ошибка при отправке формы.")
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="page-inner-services__form-section form-section">
    <div class="form-section__container">
      <h2 class="visually-hidden">Form</h2>
      <Form
         @submit="onSubmit"
         v-slot="{ submitCount, errors }"
         :validation-schema="schema"
         class="form-section__form"
      >
        <label 
        class="form-section__label" 
        for="name"
        >Name*
      </label>
        <Field
          :class="['form-section__input', {'form-section__input_error' : submitCount > 0 && errors.name }]"
          :validateOnInput="true"
          type="text"
          name="name"
          placeholder="Your name"
          id="name"
        />
        <ErrorMessage 
        class="form-section__error form-section__error_text"
        name="name" />
        <label 
        class="form-section__label" 
        for="phone"
        > Phone* 
      </label>
        <Field
          :class="['form-section__input', {'form-section__input_error' : submitCount > 0 && errors.phone}]"
          :validateOnInput="true"
          type="tel"
          name="phone"
          placeholder="Your phone number"
          id="phone"
        />
        <ErrorMessage 
        class="form-section__error form-section__error_phone"
        name="phone" />

        <label 
        class="form-section__label" 
        for="email"
        > Email 
      </label>
        <Field
          :class="['form-section__input', {'form-section__input_error' : submitCount > 0 && errors.email}]"
          :validateOnInput="true"
          type="email"
          name="email"
          placeholder="Your working email"
          id="email"
        />
        <ErrorMessage 
        class="form-section__error form-section__error_email"
        name="email" />

        <label 
        class="form-section__label" 
        for="message"
        > Message* 
      </label>
        <Field
         :class="['form-section__input_big', {'form-section__input_big-error' : submitCount > 0 && errors.message}]"
         :validateOnInput="true"
          class="form-section__input"
          as="textarea"
          name="message"
          placeholder="Your message"
          id="message"
        />
        <ErrorMessage 
        class="form-section__error form-section__error_textarea"
        name="message" />

        <label 
        class="form-section__checkbox-label"
        aria-label="terms"
        >
         <Field
         :validateOnInput="true"
         :value="true" 
         :unchecked-value="false" 
         class="form-section__checkbox"
         name="terms"
         type="checkbox"
         />
          <span 
          :class="['form-section__descr', {'form-section__descr_error' : submitCount > 0 && errors.terms }]">
            I&nbsp;agree to&nbsp;receive communications from Createx
            Construction Bureau.
          </span>
        </label>
        <ErrorMessage 
         class="form-section__error-checkbox"
         name="terms" />
        <UButton 
        name-class="form" 
        label="send request" 
        type="submit" 
        :disabled="isSubmitting"
        />
      </Form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.form-section {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: image-set(
    url("/images/bg-form-image.avif") 1x,
    url("/images/bg-form-image.png") 1x
  );
  background-color: var(--primary-bg);

  &__container {
   position: relative;
    display: grid;
    justify-content: end;
    @include adaptiveValue("padding-top", 80, 20);
    @include adaptiveValue("padding-bottom", 78, 20);
  }

  &__form {
    position: relative;
    max-width: toRem(495);
    display: grid;
    border-radius: toRem(4);
    border: 1px solid var(--border-color);
    background-color: var(--light-color);
    box-shadow:
      0px 4px 4px -4px rgba(30, 33, 44, 0.05),
      0px 12px 10px -6px rgba(30, 33, 44, 0.08),
      0px 26px 24px -10px rgba(30, 33, 44, 0.1),
      0px 60px 80px -20px rgba(30, 33, 44, 0.16);
    @include adaptiveValue("padding-inline", 40, 20);
    @include adaptiveValue("padding-block", 48, 24);
  }

  &__title {
    text-align: center;
    @include adaptiveValue("margin-block-end", 24, 14);
  }

  &__label {
    display: inline-block;
    font-size: toRem(14);
    line-height: 1.5;
    color: var(--table-color);
    @include adaptiveValue("margin-block-end", 8, 5);
  }

  &__input {
    padding-inline-start: toRem(16);
    padding-block: toRem(12);
    border-radius: toRem(4);
    border: 1px solid var(--border-secondary-color);
    background-color: var(--primary-bg);
    transition: background-color var(--transition-duration);
    @include adaptiveValue("margin-block-end", 20, 14);

    &_error-name {
      border: 2px solid var(--orange-red-hover);
    }

    &::placeholder {
      font-size: toRem(14);
      color: var(--not-active-color);
      transition: color var(--transition-duration);
    }

    @include hover {
      background-color: var(--light-color);
      &::placeholder {
        color: var(--main-color);
      }
    }

    &_big {
      min-height: toRem(66);
      @include adaptiveValue("margin-block-end", 20, 14);

      &-error {
         border: toRem(2) solid var(--danger-color);
      }
    }

    &:focus-visible {
   & + .form-section__error {
        z-index: 10;
        opacity: 1;
        transition: .3s;

        &_text {
         @include adaptiveValue("top", 38, 12);
            }
            &_phone {
               @include adaptiveValue("top", 130, 96);
            }
            &_email {
               @include adaptiveValue("top", 225, 180);
            }
            &_textarea {
               @include adaptiveValue("top", 316, 260);
            }
         }
      }

      &_error {
         border: toRem(2) solid var(--danger-color);
      }
  }

  &__error{
      width: 100%;
      text-align: center;
      display: block;
      position: absolute;
      top: toRem(-16);
      left: 50%;
      translate: -50% 0;
      opacity: 0;
      z-index: -1;
      font-size: toRem(16);
      color: var(--danger-color);
      transition: .3s;
  }

  &__checkbox-label {
    display: flex;
    @include adaptiveValue("margin-block-end", 24, 14);

    .form-section__checkbox:checked + .form-section__descr::before {
      background-color: var(--primary-color);
    }
    .form-section__checkbox:checked + .form-section__descr::after {
      opacity: 1;
    }
    .form-section__checkbox:focus-visible + .form-section__descr {
      outline: toRem(2) solid var(--orange-red-hover);
      outline-offset: toRem(4);
      border-radius: toRem(3);
    }
  }

  &__checkbox {
    align-self: start;
    opacity: 0;
    width: toRem(16);
    height: toRem(16);
  }

  &__descr {
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin-inline-start: toRem(12);
    line-height: 1.5;
    font-size: toRem(14);
    color: var(--table-color);

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: toRem(-32);
      top: 0;
      width: toRem(16);
      height: toRem(16);
    }

    &::before {
      border-radius: toRem(3);
      border: 1px solid var(--primary-color);
      transition: border var(--transition-duration);
    }

    &::after {
      opacity: 0;
      background: url("/my-icons/check.svg") 50% / toRem(10) toRem(8) no-repeat;
    }

    @include hover {
      &::before {
        border-width: toRem(2);
      }
    }

   &_error {
      outline: toRem(2) solid var(--danger-color);
      outline-offset: toRem(3);
      border-radius: toRem(4);
    }
  }

   &__error-checkbox {
      width: 80%;
      text-align: center;
      position: absolute;
      left: 50%;
      translate: -50% 0;
      padding-block: toRem(16);
      padding-inline: toRem(7);
      border-radius: toRem(12);
      border: 1px solid var(--primary-color);
      font-size: toRem(16);
      color: var(--orange-red-hover);
      background-color: var(--light-color);
      @include adaptiveValue("bottom", -32, -44);

      @media (max-width: toEm(449)) {
      padding-block: toRem(4);
      }
  }

  .invalid {
   border: 1px solid red;
  }
}
</style>

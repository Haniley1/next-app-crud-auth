import type { RegisterOptions } from 'react-hook-form'

export const requiredValidator = (
  message = 'Это поле обязательно к заполнению'
) => {
  return {
    required: { value: true, message },
  } satisfies RegisterOptions
}

export const emailValidator = (
  message = 'Поле не соответствует формату эл. почты'
) => {
  return {
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message,
    },
  } satisfies RegisterOptions
}

export const passwordValidator = () => {
  return {
    minLength: {
      value: 6,
      message: 'Пароль должен содержать минимум 6 символов'
    }
  } satisfies RegisterOptions
}

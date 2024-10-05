import type { RegisterOptions, Validate } from 'react-hook-form'

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

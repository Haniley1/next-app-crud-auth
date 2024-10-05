import type { AriaAttributes } from "react"
import type { FieldError } from "react-hook-form"

export const ariaInvalid = (error?: FieldError): AriaAttributes => {
  return { 'aria-invalid': error ? 'true' : 'false' }
}
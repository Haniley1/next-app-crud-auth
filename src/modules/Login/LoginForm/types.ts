export interface LoginFormProps {
  disabled: boolean
  onSubmit: (values: LoginFormValues) => Promise<Error | void>
}

export interface LoginFormValues {
  email: string;
  password: string;
  acceptLicenceAgreement: boolean
}

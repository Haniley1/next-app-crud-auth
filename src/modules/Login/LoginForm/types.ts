export interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void
  error?: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
  acceptLicenceAgreement: boolean
}

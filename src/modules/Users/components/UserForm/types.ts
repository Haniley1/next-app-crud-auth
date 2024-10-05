import type { User } from 'api/models'
import type { Overwrite } from 'types'

export interface UserFormProps {
  onSubmit: (values: UserFormValues) => void
}

export type UserFormValues = Overwrite<
  User,
  {
    avatar: FileList
  }
>

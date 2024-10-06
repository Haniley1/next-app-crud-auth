import type { User } from "api/models";

export interface UserFiltersProps {
  onSubmit: (values: UserFiltersForm) => void;
  defaultValues?: UserFiltersForm;
}

export type UserFiltersForm = Partial<Pick<User, 'email' | 'first_name' | 'last_name'>>
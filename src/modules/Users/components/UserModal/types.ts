import type { UserFormProps } from "../UserForm/types";

export interface UserModalProps {
  show: boolean;
  onClose: VoidFunction;
  onSubmit: UserFormProps['onSubmit']
}

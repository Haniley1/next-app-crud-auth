import type { User } from "api/models";

export interface UsersListProps {
  users?: User[];
  allowDelete?: boolean;
  onDelete?: (id: User['id']) => void;
}
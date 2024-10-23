import type { User } from "api/models";

export interface UsersListProps {
  users?: User[];
  onDelete?: (id: User['id']) => void;
}
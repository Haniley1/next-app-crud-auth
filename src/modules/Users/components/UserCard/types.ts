import type { User } from "api/models";

export interface UserCardProps {
  user: User;
  onDelete?: (id: User['id']) => void
}
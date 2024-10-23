import type { User } from "api/models";

export interface UserCardProps {
  user: User;
  allowDelete: boolean;
  onDelete?: (id: User['id']) => void
}
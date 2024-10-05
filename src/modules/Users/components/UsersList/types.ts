import type { User } from "api/models";
import type { UserFiltersForm } from "../UserFilters/types";

export interface UsersListProps {
  users?: User[];
  filters?: UserFiltersForm;
  onDelete?: (id: User['id']) => void;
}
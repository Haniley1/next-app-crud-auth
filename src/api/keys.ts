import { API_PATHS } from "./paths";

export const KEYS = {
  users: {
    detail: (id: string | number) => [API_PATHS.users, id]
  }
}
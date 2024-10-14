export interface User {
  id: string | number
  email: string
  first_name: string
  last_name: string
  /** Ссылка на картинку */
  avatar: string | null
}

export interface UserLogin {
  email: string
  password: string
}

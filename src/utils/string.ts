import type { User } from 'api/models'

export function makeid(length = 8) {
  let result = ''
  let counter = 0

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }

  return result
}

export const fullname = (user: User) => `${user?.first_name} ${user?.last_name}`

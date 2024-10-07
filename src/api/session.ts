import type { SessionOptions } from "iron-session"

export interface SessionData {
  isLoggedIn: boolean
  id?: number
  token?: string
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
}

export const sessionOptions: SessionOptions = {
  password: process.env.NEXT_APP_IRON_SESSION_PASSWORD!,
  cookieName: 'authToken',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 дней
  },
}

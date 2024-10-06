export const ROUTES = {
  home: '/',
  users: '/users',
  profile: '/profile',
  login: '/login',
  userDetail: (slug: string | number) => `/users/${slug}`,
}

export const API_PATHS = {
  users: '/users',
  user: (id: string | number) => `/users/${id}`,
  signIn: '/login',
  session: '/api/session'
}

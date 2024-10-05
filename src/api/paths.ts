export const ROUTES = {
  home: '/',
  users: '/users',
  profile: '/profile',
  login: '/login',
  userDetail: (slug: string | number) => `/users/${slug}`,
}

export const API_PATHS = {
  users: '/users',
  auth: '/login'
}

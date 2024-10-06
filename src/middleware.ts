import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { ROUTES } from 'api/paths'
import { SessionData, sessionOptions } from 'api/session'
 
const protectedRoutes = [ROUTES.profile]
 
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)
  
  if (isProtectedRoute && !session.isLoggedIn) {
    const url = new URL(ROUTES.login, req.nextUrl)
    url.searchParams.set('redirect', req.nextUrl.pathname)

    return NextResponse.redirect(url)
  }

  if (path === ROUTES.login && session.isLoggedIn) {
    const url = new URL(ROUTES.home, req.nextUrl)
    return NextResponse.redirect(url)
  }
 
  return NextResponse.next()
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
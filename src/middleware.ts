import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { ROUTES } from 'api/paths'
 
const protectedRoutes = [ROUTES.profile]
 
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const sessionToken = cookies().get('session')?.value
 
  if (isProtectedRoute && !sessionToken) {
    const url = new URL(ROUTES.login, req.nextUrl)
    url.searchParams.set('redirect', req.nextUrl.pathname)

    return NextResponse.redirect(url)
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
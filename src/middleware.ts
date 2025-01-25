import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token');

  const isPublicPath = ['/login', '/register'].some((path) =>
    request.nextUrl.pathname.startsWith(path),
  );

  if (!token && !isPublicPath) {
    // Redirect to login page
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (token && isPublicPath) {
    // Redirect to private page if logged in
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|static|api|favicon.ico).*)'], // Refined matcher to exclude /api
};

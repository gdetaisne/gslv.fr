import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en'],
  defaultLocale: 'en',
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /fr/* to /en/*
  if (pathname.startsWith('/fr')) {
    const newPath = pathname.replace(/^\/fr/, '/en');
    return NextResponse.redirect(new URL(newPath || '/en', request.url), 301);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(en|fr)/:path*']
};

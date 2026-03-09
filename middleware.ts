import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import redirectMap from '@/generated/redirect-map.json';

type RedirectEntry = {
  destination: string;
  statusCode: 301 | 302;
};

const redirects = redirectMap as Record<string, RedirectEntry>;

export function middleware(request: NextRequest) {
  const pathname = normalizePath(request.nextUrl.pathname);
  const match = redirects[pathname];

  if (!match) {
    return NextResponse.next();
  }

  const target = new URL(match.destination, request.url);
  return NextResponse.redirect(target, match.statusCode);
}

function normalizePath(value: string): string {
  if (value.length > 1 && value.endsWith('/')) {
    return value.slice(0, -1);
  }
  return value;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};

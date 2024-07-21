// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
    const userId = req.cookies.get('userId');
    const userEmail = req.cookies.get('userEmail');

    if (!userId || !userEmail) {
        return NextResponse.redirect(new URL('/pages/login', req.url));

    }


    return NextResponse.next();
}

export const config = {
    matcher: ['/pages/homepage/:path*', '/pages/login/reset-password']
};

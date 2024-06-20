import { NextResponse } from 'next/server';

export async function POST() {
    console.log('Received POST request for logout');
    const response = NextResponse.json({ message: 'Logout successful' });

    // Clear the cookies by setting their expiration date to the past
    response.cookies.set('userId', '', { expires: new Date(0) });
    response.cookies.set('userEmail', '', { expires: new Date(0) });

    console.log('Cookies cleared');
    console.log('Sending 200 response');
    return response;
}

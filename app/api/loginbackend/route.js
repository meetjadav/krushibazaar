import { NextResponse } from 'next/server';
import mongoose from '@/utils/db';

const db = mongoose.connection.useDb('krushibazaar');
const usersCollection = db.collection('users');

export async function POST(request) {
    console.log('Received POST request for login');
    let data = await request.json();
    const { gmail, password } = data;

    if (!gmail || !password) {
        console.log('Credentials are missing');
        console.log('Sending 400 response');
        return NextResponse.json({ message: 'Credentials are missing' }, { status: 400 });
    }

    try {
        const user = await usersCollection.findOne({ email: gmail });

        if (user && user.password === password) {
            console.log('Login successful');
            console.log('Sending 200 response');

            const response = NextResponse.json({ message: 'Login successful' });

            // Set cookies with user info (e.g., user ID and email)
            response.cookies.set('userId', user._id.toString());
            response.cookies.set('userEmail', user.email);

            return response;
        } else {
            console.log('Invalid credentials');
            console.log('Sending 401 response');
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }
    } catch (err) {
        console.error('Error during login:', err);
        console.log('Sending 500 response');
        return NextResponse.json({ message: 'Error during login' }, { status: 500 });
    }
}

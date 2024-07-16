import { NextResponse } from 'next/server';
import mongoose from '@/utils/db';

export async function POST(request) {
    console.log('Received POST request');
    let data = await request.json();
    const { username, email, password, confirm_password } = data;

    if (password !== confirm_password) {
        console.log('Passwords do not match');
        console.log('Sending 400 response');
        return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
    }

    try {
        const newUser = {
            username,
            email,
            password,
        };

        const db = mongoose.connection.useDb('krushibazaar');
        const usersCollection = db.collection('users');

        const result = await usersCollection.insertOne(newUser);

        if (result.acknowledged) {
            console.log('User registered successfully');
            console.log('Sending 200 response');
            return NextResponse.json({ message: 'User registered successfully' });
        } else {
            console.error('Error registering user');
            console.log('Sending 500 response');
            return NextResponse.json({ error: 'Error registering user' }, { status: 500 });
        }
    } catch (err) {
        console.error('Error registering user:', err);
        console.log('Sending 500 response');
        return NextResponse.json({ error: 'Error registering user' }, { status: 500 });
    }
}

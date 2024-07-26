import { NextResponse } from 'next/server';
import mongoose from '@/utils/db';
import dotenv from 'dotenv';
import cookie from 'cookie';
dotenv.config();

export async function POST(request) {
    console.log('Received POST request');
    const { username, password, reEnterPassword } = await request.json();
    const cookies = cookie.parse(request.headers.get('cookie') || '');
    const email = cookies.userEmail;

    if (password !== reEnterPassword) {
        console.log('Passwords do not match');
        console.log(password);
        console.log(reEnterPassword);
        console.log('Sending 400 response');
        return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
    }

    try {
        const newUser = {
            username,
            email,
            password,
        };

        const dbName = process.env.DATABASE_NAME;
        const collectionName = process.env.COLLECTION_FOR_USERS;

        const db = mongoose.connection.useDb(dbName);
        const usersCollection = db.collection(collectionName);

        const result = await usersCollection.insertOne(newUser);

        if (result.acknowledged) {
            console.log('User registered successfully');
            console.log('Sending 200 response');
            response.cookies.set('userEmail', '', { expires: new Date(0) });
            return NextResponse.json({ message: 'successful' });
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

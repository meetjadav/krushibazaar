import { NextResponse } from 'next/server';
import mongoose from '@/utils/db';
import dotenv from 'dotenv';
import cookie from 'cookie';

dotenv.config();

const dbName = process.env.DATABASE_NAME;
const collectionName = process.env.COLLECTION_FOR_USERS;

const db = mongoose.connection.useDb(dbName);
const usersCollection = db.collection(collectionName);


export async function POST(request) {
    const cookies = cookie.parse(request.headers.get('cookie') || '');
    const userId = cookies.userId;

    console.log('Cookies:', cookies);
    console.log('UserId:', userId);

    console.log('Received POST request for password reset');
    let data = await request.json();
    const { password, reEnterPassword } = data;

    if (!password || !reEnterPassword) {
        console.log('Passwords are missing');
        console.log('Sending 400 response');
        return NextResponse.json({ message: 'Passwords are missing' }, { status: 400 });
    }

    if (password !== reEnterPassword) {
        console.log('Passwords do not match');
        console.log('Sending 400 response');
        return NextResponse.json({ message: 'Passwords do not match' }, { status: 400 });
    }

    try {
        if (!userId) {
            console.log('User ID is missing');
            console.log('Sending 400 response');
            return NextResponse.json({ message: 'User ID is missing' }, { status: 400 });
        }

        const result = await usersCollection.updateOne(
            { _id: new mongoose.Types.ObjectId(userId) },
            { $set: { password: password } }
        );

        if (result.modifiedCount === 1) {
            console.log('Password reset successful');
            console.log('Sending 200 response');
            const response = NextResponse.json({ message: "successful" }, { status: 200 });
            response.cookies.set('userId', '', { expires: new Date(0) });  // Clear the userId cookie
            return response;
        } else {
            console.log('User not found or password not updated');
            console.log('Sending 404 response');
            return NextResponse.json({ message: 'User not found or password not updated' }, { status: 404 });
        }
    } catch (err) {
        console.error('Error during password reset:', err);
        console.log('Sending 500 response');
        return NextResponse.json({ message: 'Error during password reset' }, { status: 500 });
    }
}

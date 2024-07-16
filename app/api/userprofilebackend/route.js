import { NextResponse } from 'next/server';
import mongoose from '@/utils/db';
import cookie from 'cookie';

const db = mongoose.connection.useDb('krushibazaar');
const usersCollection = db.collection('users');

export async function GET(request) {
    const cookies = cookie.parse(request.headers.get('cookie') || '');
    const userId = cookies.userId;

    if (!userId) {
        console.log('User ID is missing');
        return NextResponse.json({ message: 'User ID is missing' }, { status: 400 });
    }

    try {
        const user = await usersCollection.findOne({ _id: new mongoose.Types.ObjectId(userId) }, { projection: { id: 1, email: 1, username: 1 } });

        if (user) {
            console.log('User details fetched successfully');
            return NextResponse.json({ user });
        } else {
            console.log('User not found');
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
    } catch (err) {
        console.error('Error fetching user details:', err);
        return NextResponse.json({ message: 'Error fetching user details' }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import db from '@/utils/db';
import cookie from 'cookie';

export async function GET(request) {
    const cookies = cookie.parse(request.headers.get('cookie') || '');
    const userId = cookies.userId;

    if (!userId) {
        console.log('User ID is missing');
        return NextResponse.json({ message: 'User ID is missing' }, { status: 400 });
    }

    const query = 'SELECT id, email, username FROM users WHERE id = ?';

    try {
        const results = await new Promise((resolve, reject) => {
            db.query(query, [userId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        if (results.length > 0) {
            console.log('User details fetched successfully');
            return NextResponse.json({ user: results[0] });
        } else {
            console.log('User not found');
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
    } catch (err) {
        console.error('Error fetching user details:', err);
        return NextResponse.json({ message: 'Error fetching user details' }, { status: 500 });
    }
}

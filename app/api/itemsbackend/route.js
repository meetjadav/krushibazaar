import { NextResponse } from 'next/server';
import db from '@/utils/db';
import cookie from 'cookie';

export async function POST(request) {
    console.log('Received POST request for data insertion');
    let data = await request.json();
    const { id, quantity, name, price } = data;
    const cookies = cookie.parse(request.headers.get('cookie') || '');
    const userId = cookies.userId;

    if (!userId || !id || !quantity || !name || !price) {
        console.log('Required fields are missing');
        console.log('Sending 400 response');
        return NextResponse.json({ message: 'Required fields are missing' }, { status: 400 });
    }

    const query = `
        INSERT INTO market_data (user_id,item_name, quantity, price)
        VALUES (?, ?, ?, ?)
    `;
    const values = [userId, id, quantity, price];

    try {
        const results = await new Promise((resolve, reject) => {
            db.query(query, values, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        console.log('Data inserted successfully');
        console.log('Sending 200 response');
        return NextResponse.json({ message: 'Data inserted successfully' }, { status: 200 });
    } catch (err) {
        console.error('Error during data insertion:', err);
        console.log('Sending 500 response');
        return NextResponse.json({ message: 'Error during data insertion' }, { status: 500 });
    }
}

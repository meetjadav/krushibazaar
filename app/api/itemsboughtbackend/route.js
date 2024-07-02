import { NextResponse } from 'next/server';
import db from '@/utils/db';
import cookie from 'cookie';

export async function GET(request) {
    console.log('Received GET request for fetching purchased items');
    const cookies = cookie.parse(request.headers.get('cookie') || '');
    const userId = cookies.userId;

    if (!userId) {
        console.log('User ID is missing');
        console.log('Sending 400 response');
        return NextResponse.json({ message: 'User ID is missing' }, { status: 400 });
    }

    const query = `
        SELECT item_name, SUM(quantity) as total_quantity, SUM(quantity * price) / SUM(quantity) as price
        FROM market_data 
        WHERE user_id = ?
        GROUP BY item_name
    `;
    const values = [userId];

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

        console.log('Purchased items fetched successfully');
        console.log('Sending 200 response');
        return NextResponse.json({ purchasedItems: results }, { status: 200 });
    } catch (err) {
        console.error('Error during fetching purchased items:', err);
        console.log('Sending 500 response');
        return NextResponse.json({ message: 'Error during fetching purchased items' }, { status: 500 });
    }
}

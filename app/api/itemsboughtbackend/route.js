import { NextResponse } from 'next/server';
import mongoose from '@/utils/db';
import cookie from 'cookie';

const db = mongoose.connection.useDb('krushibazaar');
const marketDataCollection = db.collection('market_data');

export async function GET(request) {
    console.log('Received GET request for fetching purchased items');
    const cookies = cookie.parse(request.headers.get('cookie') || '');
    const userId = cookies.userId;

    if (!userId) {
        console.log('User ID is missing');
        console.log('Sending 400 response');
        return NextResponse.json({ message: 'User ID is missing' }, { status: 400 });
    }

    try {
        const results = await marketDataCollection.aggregate([
            {
                $match: { user_id: userId }
            },
            {
                $group: {
                    _id: "$item_name",
                    total_quantity: { $sum: "$quantity" },
                    price: { $avg: "$price" }
                }
            },
            {
                $project: {
                    item_name: "$_id",
                    total_quantity: 1,
                    price: 1,
                    _id: 0
                }
            }
        ]).toArray();

        console.log('Purchased items fetched successfully');
        console.log('Sending 200 response');
        return NextResponse.json({ purchasedItems: results }, { status: 200 });
    } catch (err) {
        console.error('Error during fetching purchased items:', err);
        console.log('Sending 500 response');
        return NextResponse.json({ message: 'Error during fetching purchased items' }, { status: 500 });
    }
}

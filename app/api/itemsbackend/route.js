import { NextResponse } from 'next/server';
import mongoose from '@/utils/db';
import cookie from 'cookie';

const db = mongoose.connection.useDb('krushibazaar');
const marketDataCollection = db.collection('market_data');

export async function POST(request) {
    console.log('Received POST request for data insertion');
    let data = await request.json();
    const { id, quantity, name, price } = data;
    const cookies = cookie.parse(request.headers.get('cookie') || '');
    const userId = cookies.userId;

    // Convert quantity to a number
    const quantityNumber = parseInt(quantity, 10);

    if (!userId || !id || isNaN(quantityNumber) || !name || !price) {
        console.log('Required fields are missing or quantity is not a number');
        console.log('Sending 400 response');
        return NextResponse.json({ message: 'Required fields are missing or quantity is not a number' }, { status: 400 });
    }

    const newMarketData = {
        user_id: userId,
        item_name: name,
        quantity: quantityNumber,
        price,
    };

    try {
        const result = await marketDataCollection.insertOne(newMarketData);

        console.log('Data inserted successfully');
        console.log('Sending 200 response');
        return NextResponse.json({ message: 'Data inserted successfully' }, { status: 200 });
    } catch (err) {
        console.error('Error during data insertion:', err);
        console.log('Sending 500 response');
        return NextResponse.json({ message: 'Error during data insertion' }, { status: 500 });
    }
}


import { NextResponse } from 'next/server';
import db from '@/utils/db';
export async function POST(request) {
    console.log('Received POST request')
    let data = await request.json();
    const { username, email, password, confirm_password } = data;
    if (password !== confirm_password) {
        console.log('Passwords do not match');
        console.log('Sending 400 response');
        return NextResponse.json({ error: 'Passwords do not match' });
    }
    const insertUserQuery = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    db.query(insertUserQuery, [username, email, password], (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            console.log('Sending 500 response');
            return NextResponse.json({ error: 'Error registering user' });
        }
        console.log('User registered successfully');
        console.log('Sending 200 response');
        return NextResponse.json({ message: 'User registered successfully' });
    });
    return NextResponse.json({ message: "complete" })
}

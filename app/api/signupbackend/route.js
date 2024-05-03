// pages/api/register.js
import { NextResponse } from 'next/server';
import mysql from 'mysql';

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'root123', // Replace with your MySQL password
    database: 'krushibazaar'
});
export async function POST(request) {
    console.log('Received POST request')
    let data = await request.json();
    const { username, email, password, confirm_password } = data;
    // Check if passwords match
    if (password !== confirm_password) {
        console.log('Passwords do not match');
        console.log('Sending 400 response');
        return NextResponse.json({ error: 'Passwords do not match' });
    }
    // Insert user into database
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

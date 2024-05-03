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
    console.log('Received POST request for login');
    let data = await request.json();
    const { gmail, password } = data;

    // Check if the credentials are provided
    if (!gmail || !password) {
        console.log('Credentials are missing');
        console.log('Sending 400 response');
        return NextResponse.json({ message: 'Credentials are missing' });
    }

    // Query to check if the user exists with provided credentials
    const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
    try {
        const results = await new Promise((resolve, reject) => {
            db.query(query, [gmail, password], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        if (results.length > 0) {
            console.log('Login successful');
            console.log('Sending 200 response');
            return NextResponse.json({ message: 'Login successful' });
        } else {
            console.log('Invalid credentials');
            console.log('Sending 401 response');
            return NextResponse.json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error('Error during login:', err);
        console.log('Sending 500 response');
        return NextResponse.json({ message: 'Error during login' });
    }
}

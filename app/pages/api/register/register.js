// pages/api/register.js

import mysql from 'mysql';

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'root123', // Replace with your MySQL password
    database: 'krushibazaar'
});

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, email, password, confirm_password } = req.body;
        // Check if passwords match
        if (password !== confirm_password) {
            res.status(400).json({ error: 'Passwords do not match' });
            return;
        }
        // Insert user into database
        const insertUserQuery = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
        db.query(insertUserQuery, [username, email, password], (err, result) => {
            if (err) {
                console.error('Error registering user:', err);
                res.status(500).json({ error: 'Error registering user' });
                return;
            }
            console.log('User registered successfully');
            res.status(200).json({ message: 'User registered successfully' });
        });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

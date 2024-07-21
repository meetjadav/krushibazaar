import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import dotenv from 'dotenv';
import mongoose from '@/utils/db';
import cookie from 'cookie';

dotenv.config();

const adminMail = process.env.EMAIL_USER;
const adminMailPass = process.env.EMAIL_PASS;
const dbName = process.env.DATABASE_NAME;
const collectionName = process.env.COLLECTION_FOR_USERS;

const db = mongoose.connection.useDb(dbName);
const usersCollection = db.collection(collectionName);

export async function POST(req) {
    try {
        // Parse request body to get the email address
        const { to } = await req.json();

        if (!to) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        // Check if the user exists in the database
        const user = await usersCollection.findOne({ email: to });
        if (!user) {
            console.log('User not found');
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const answer = `Dear User, you have attempted to login to the Krushibazaar website. Use OTP ${otp}. Do not share with anyone else.`;

        // Create a transporter for sending email
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: adminMail,
                pass: adminMailPass,
            },
        });

        let mailOptions = {
            from: {
                name: "Krushibazaar",
                address: adminMail
            },
            to: to,
            subject: "OTP request",
            text: answer,
        };

        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);

        const response = NextResponse.json({ message: "successful", otp: otp }, { status: 200 });
        response.cookies.set('userId', user._id.toString());
        response.cookies.set('userEmail', user.email);

        const cookies = cookie.parse(req.headers.get('cookie') || '');
        const userId = cookies.userId;
        console.log(cookies);
        console.log(userId);
        return response;
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
    }
}

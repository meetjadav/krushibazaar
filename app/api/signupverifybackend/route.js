import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import dotenv from 'dotenv';

dotenv.config();

const adminMail = process.env.EMAIL_USER;
const adminMailPass = process.env.EMAIL_PASS;

export async function POST(req) {
    try {
        const { to } = await req.json();

        if (!to) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const answer = `Dear User, this is verification email for registration. Use OTP ${otp}. Do not share with anyone else.`;

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
        response.cookies.set('userEmail', to);
        return response;
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
    }
}

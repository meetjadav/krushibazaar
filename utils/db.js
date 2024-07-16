import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const uri = process.env.MONGODB_URI || 'mongodb+srv://jadavmeet123456:7JTscKaJBb5dPjc7@cluster0.wuauzj4.mongodb.net/krushibazaar';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
})
    .then(() => {
        console.log('Connected to the MongoDB database with Mongoose');
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    });

export default mongoose;

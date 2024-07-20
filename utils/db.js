import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
console.log(process.env.MONGODB_URI);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
})
    .then(() => {
        console.log('Connected to the MongoDB database with Mongoose');
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    });

export default mongoose;

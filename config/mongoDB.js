import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env['MONGO_DB'];

const connectMongoDB = async () => {
    try {
        mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB is connected.')
    } catch (err) {
        console.log('MONGODB IS NOT CONNECTED!')
        console.error(err.message)
    }
}

export default connectMongoDB;
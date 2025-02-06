import mongoose from 'mongoose';

// db connection
export const connect2DB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection error:', error);
        process.exit(1);
    }
};

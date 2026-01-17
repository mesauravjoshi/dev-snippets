import mongoose from "mongoose";

const url = `mongodb://localhost:27017/url_shortner`;

async function connectDatabase() {
    try {
        await mongoose.connect(url, {
        })
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection error:', err);
        throw err; // Rethrow the error for handling in index.js        
    }
}

export default connectDatabase
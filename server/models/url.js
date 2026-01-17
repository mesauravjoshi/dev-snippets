import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    urlId: {
        type: String,
        require: true,
        unique: true
    },
    redirect: {
        type: String,
        require: true,
        unique: true
    },
    visitHistory: [{ timestamp: { type: Number } }],
})

export default mongoose.model('Url', urlSchema);

import express from 'express';
import userRoutes from './routes/url.js'
import connectDatabase from './db.js';
import cors from 'cors';

connectDatabase().catch(err => console.log(err));

const app = express();
app.use(express.json());
app.use(cors());

app.use('/url', userRoutes);

app.listen(8000, () => {
    console.log('server running at port 8000')
})

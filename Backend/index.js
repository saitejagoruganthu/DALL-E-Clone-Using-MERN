import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();

app.use(cors(
    {
      origin: 'https://dalle.saitejagoruganthu.com',
      methods: 'GET,PATCH,POST,PUT,DELETE',
      allowedHeaders: 'Content-Type'
    }
));
app.use(express.json({limit: '50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req,res)=>{
    res.send('Hello from DALL-E');
})

const startServer = async ()=>{

    try
    {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, ()=>{
            console.log('Server has started')
        })
    }
    catch(err)
    {
        console.log(err);
    }

}

startServer();

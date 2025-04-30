import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

//db connection function

import { connectDB } from './src/utils/db.js';


//routes import
//always add the .js extension when using es6 modules
import ClassifyRoutes from './src/routes/ClassifyRoutes.js';

const port = process.env.PORT || 5000;

const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connects to a mongodb database
connectDB()



app.use('/api/v1/',ClassifyRoutes );

app.get('/',(req,res)=>{
    res.status(200).json({msg:`server is well and runing on ${port}`})
})

app.listen(port, () => console.log('Server running on port 5000'));

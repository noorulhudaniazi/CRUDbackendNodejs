import {} from "dotenv/config.js";
import express from 'express';
import connectdatabase from './database/dbcnct.js';
import userroutes from './routes/userroutes.js';
import cors from 'cors';
const app = express();
const port = process.env.PORT;
const db_URl = process.env.database_URl ;


connectdatabase(db_URl);
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use('/uploads', express.static('./uploads'))

app.use('/user', userroutes)


app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
})
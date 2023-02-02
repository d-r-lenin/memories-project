import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/memories';


async function connect(){
    try{
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        mongoose.set('strictQuery', false);
        console.log('Database connected');
    }catch(err){
        console.log(err);
    }
}

export default connect;
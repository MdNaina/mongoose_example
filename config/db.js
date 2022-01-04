require('dotenv').config()
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('mongoose connection SUCCESS')
    }catch(error){
        console.error('mongoose connection FAIL')
        process.exit(1)
    }
}

module.exports = connectDB;

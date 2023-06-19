const mongoose =require('mongoose');

const connectdb =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_url)
        console.log("DATABASE connected");
        console.log(`${mongoose.connection.host}`)
    }catch(error)
    {
        console.log(`Mongodb server issue ${error}`)
    }
};

module.exports = connectdb;
const mongoose = require('mongoose');
const Local_url = "mongodb://127.0.0.1:27017/pnapi"

const connectdb = async () => {
    try {
        await mongoose.connect(Local_url);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log("error occured", error); 
    }
}
module.exports =connectdb
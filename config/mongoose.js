require('dotenv').config();
const mongoose=require('mongoose');

mongoose.connect(`mongodb://localhost:27017/${process.env.DATABASE}`);

const db=mongoose.connection

db.on('error',console.error.bind(console,'error in database'));

db.once('open',function(){
    console.log("Sucessful connect to data base");
});
require('dotenv').config();
const mongoose=require('mongoose');

mongoose.connect(`mongodb+srv://Amangarg:Amangarg102@cluster0.qfknkyf.mongodb.net/?retryWrites=true&w=majority`);

const db=mongoose.connection

db.on('error',console.error.bind(console,'error in database'));

db.once('open',function(){
    console.log("Sucessful connect to data base");
});
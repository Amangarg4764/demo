const port=process.env.PORT || 5000;
const express=require('express');
const path=require('path');

const app=express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));
app.use(express.static('./assests'));
app.use('/',require('./router'));


app.listen(port,function(err){
    if(err){
        console.log("Error in server loading");
    }
    console.log("Server is up and running at port no: ",port);
});
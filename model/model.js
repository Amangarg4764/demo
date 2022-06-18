const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    deadline:{
        type:String,
        required:true
    },
    coption:{
        type:String,
        required:true
    }
});

const TodoList=mongoose.model('todo',todoSchema);

module.exports=TodoList;
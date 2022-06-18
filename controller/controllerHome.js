const database=require('../config/mongoose');
const TodoList=require('../model/model');

module.exports.chome=function(req,res){
    TodoList.find({},function(err,data){
        if(err){
            console.log("Error in display data");
            return;
        }
        return res.render("home",{TodoList:data});
    });
    
};

module.exports.add=function(req,res){
    TodoList.create({
        description:req.body.description,
        coption:req.body.coption,
        deadline:req.body.deadline
    },function(err,newdata){
        if(err){
            console.log("Error in adding data");
            return;
        }
        console.log("new data",newdata);
        return res.redirect('back');
    });
};

module.exports.delete=function(req,res){
    console.log(req.query.arr);
    var a1=req.query.arr.split(",");
    a1.pop(a1.length-1);
    //console.log(a1);
    for(var i=0;i<a1.length;i++){
        TodoList.findByIdAndDelete(a1[i],function(err){
            if(err){
                console.log("Error in delete");
            }
        });
    }
    return res.redirect('back');
};
const Habit = require('../models/habits');
// homepage controller
module.exports.home = function(req,res){
    Habit.find({},function(err,habits){
        if(err){
            Console.log('Error in fetching the habits');
            return;
        }
        return res.render('home',{
            title:"LoopBit",
            habit_list:habits
        });
    })
    
}
// controller to create a habit
module.exports.createHabit = function(req,res){
    let days = {
        one:"none",
        two:"none",
        three:"none",
        four:"none",
        five:"none",
        six:"none",
        seven:"none",
    }
    Habit.create({
        habit : req.body.habit,
        end : req.body.end,
        description:req.body.description,
        frequency:req.body.frequency,
        date:Date(),
        time:req.body.time,
        days:days
        
    },function(err,newHabit){
        if(err){
            console.log('Error in creating habit',err);
            return;
        }
        
        console.log(newHabit);
        return res.redirect('back');
    });
}
// controller to delete a habit
module.exports.deleteHabit = function(req,res){
    let id = req.query.id;
    Habit.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in deleting Habit");
            return;
        }
        return res.redirect('back');

    });
}
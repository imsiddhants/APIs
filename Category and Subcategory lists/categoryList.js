const mongoose = require('mongoose')

const category = mongoose.Schema({
    Title:{ type:String, required:true, unique:true},
    Availability:{type:Boolean},
    subCategory : [{ 
        Title :"Dentists" ,
        Id : {ObjectId1}
    },
    {
        Title : "Yoga Instructures",
        Id : {ObjectId2}
    }, 
    {
        Title :"Beauty Consultants" ,
        Id : {ObjectId3}
    }]
    

});
module.exports = mongoose.model('Category',category)
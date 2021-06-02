const mongoose = require('mongoose')

const subCategory = mongoose.Schema({
    Title:{ type:String , required:true, unique:true},
    Categoryid:{Objectid},
    Available:{type:Boolean, required:true,}


});
module.exports = mongoose.model('SubCategory',subCategory)
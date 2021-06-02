const mongoose = require('mongoose')

const physiotherapists = mongoose.Schema({
    Name:{ type:String, required:true, unique:true},
    Address : { required:true, },
    Phone : { type:Number , required:true },
    Available : { type:Boolean },
    SubCategoryId : {ObjectId},
    AverageRating : { required:true },
    Reviews : [{ObjectId1},{ObjectId2},{ObjectId3}],
    Location:{ type:String , required:true},
    GeolocationCoordinates:{ type: [Number] , required:true}
    
    

});
module.exports = mongoose.model('Physiotherapists',physiotherapists)

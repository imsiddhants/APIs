const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
                  
            }
        }
    },
    phone:{
        type:Number,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password does not contain "password"')
            }
        }
    }      
})

//Defining a mongoose model
const User = mongoose.model('User',UserSchema)

module.exports = User
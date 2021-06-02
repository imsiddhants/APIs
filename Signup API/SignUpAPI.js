const express = require('express')
const User = require('/SignUpMongooseModel')

app.post('/User/Signup',async (req,res) =>{
    const user = new User(req.body)

    try{
        await user.save()        
        res.status(201).send(user)

    }catch(e){
        res.send(400).send(e)
    }

})

module.exports = app
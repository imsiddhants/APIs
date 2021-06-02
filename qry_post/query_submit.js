const express = require('express')
const User = require('/QueryModel')


app.post('/PostQuery',async (req,res) =>{
    const query = new Query({  
        ... req.body,
        owner: req.user._id})

    try{
        await query.save()        
        res.status(201).send(query)

    }catch(e){
        res.send(400).send(e)
    }

})

module.exports = app
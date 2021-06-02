const express = require('express')
const usersConnectionSchema = require("./usersConnectionAPI/usersConnectionSchema.js")

app.get('/connectedUsers', (req, res) => {
     UserSchema.find(req.params.body).then((ConnectedUsers) => {
        res.send(ConnectedUsers)   
         }).catch((e) => {
             res.status()
         })
   });

   module.exports = app

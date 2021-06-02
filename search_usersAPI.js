const express = require('express')

app.get('/username', (req, res) => {
     User.find(req.params.body).then((user) => {
        res.send(user)   
         }).catch((e) => {
             res.status()
         })
   });

   module.exports = app

// API for sending mail
// account is the logic file account.js 

const express = require('express')
const User = require('../models/user')
const {sendWelcomeEmail} = require('../emails/account')


app.post('/users/sendMail', async (req, res) => {
    const user = new User(req.body)

    try {
        sendEmail(user.email)
        res.status(201)
    } catch (e) {
        res.status(400).send(e)
    }
})


//Actual function account.js
var domain = 'sandbox8f693d60d7a74a438933**b1a391f824.mailgun.org';
var mailgun = require('mailgun-js')
({apiKey: process.env.API_KEY, domain: domain});
 
const sendEmail = (email , name) =>{
  var data = {
    from:'siddhantsingh0705@gmail.com',
    to:email,
    subject: 'Welcome',
    text: `Welcome ,${name} `
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
  

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
  
}

module.exports={
  sendEmail
}
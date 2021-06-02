const accountSid = 'AC0e3ce41443c9350f22a0a2c8c9634241';
const authToken = '2ea90cd41f8a29ae22159abdf7dae92c';
const client = require('twilio')(accountSid,authToken);

client.messages
    .create({
        body: `Your one time OTP  is `,
        from:'+13178546044',
        to:'+917838686922'
    })
    .then(message => console.log(message.sid));
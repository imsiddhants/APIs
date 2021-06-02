const accountSid = '';
const authToken = 'AuthToken';
const client = require('twilio')(accountSid,authToken);

client.messages
    .create({
        body: `Your one time OTP  is `,
        from:'+13178546044',
        to:'+917838686922'
    })
    .then(message => console.log(message.sid));

router.post('/otp', async (req, res) => {
    const otp = new Otp({
        ...req.body,      //... spread operator ES6 syntax
        owner: req.user._id
    })

    try {
        await otp.save()
        res.status(201)
    } catch (e) {
        res.status(400).send(e)
    }
})






// const otpGenerator = require("otp-generator");

// function createNewOTP(phone){
//     const otp      = otpGenerator.generate(6, {alphabets: false, upperCase: false, specialChars: false});
//     const tl      = 3 * 60 * 1000;
//     const expires  = Date.now() + tl; 
//     const data1     = `${phone}.${otp}.${expires}`; 

//     //sendSMS is hypothetical
//     sendSMS(phone,`Your OTP is ${otp}`);
//     return data1;
// }

// function verifyOTP(phone,otp){
//     let now = Date.now();
//     if(now>parseInt(expires)) return false;
//     let data2  = `${phone}.${otp}.${expires}`;
    
//     if(data2 === data1){
//         return true;
//     } 
//     return false;
// }







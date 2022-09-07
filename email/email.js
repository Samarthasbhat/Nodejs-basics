var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'pranav@gmail.com',
        pass: '^w@93%GMFx2E'
    }
});




var mailOptions = {
    from: 'coder32@gmail.com',
    to: 'youremail@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions,function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent:' + info.response);
    }
});
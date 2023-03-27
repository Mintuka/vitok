import nodemailer from 'nodemailer'

export const sendEmail = (reciever: string,  resetLink: string) => {
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'henokkassa601@gmail.com',
          pass: 'vnrllkzzewuhmfio'
        }
      });
      
      var mailOptions = {
        from: 'henokkassa601@gmail.com',
        to: reciever,
        subject: 'Reset Password',
        text: resetLink
      };
      
      var isSent = false
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error); //throw error
        } else {
          console.log('Email sent: ' + info.response);
          isSent = true
        }
      });
      return isSent
}
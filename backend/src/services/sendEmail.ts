import nodemailer from 'nodemailer'

export const sendEmail = (reciever: string,  resetLink: string) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'henokkassa601@gmail.com',
          pass: 'kassa601@!'
        }
      });
      
      var mailOptions = {
        from: 'youremail@gmail.com',
        to: reciever,
        subject: 'Reset Password',
        text: resetLink
      };
      
      var isSent = false
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          isSent = true
        }
      });

      return isSent
}
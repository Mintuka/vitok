import nodemailer from 'nodemailer'

export const sendEmail = (reciever: string,  resetLink: string) => {
    
    return new Promise((resolve, reject) => {

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
          link: resetLink
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error); //throw error
            resolve(false)
          } else {
            console.log('Email sent: ' + info.response);
            resolve(true)
          }
        });
    
    }
  )
}
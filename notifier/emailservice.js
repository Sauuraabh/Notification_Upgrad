const nodeMailer = require(`nodemailer`);

module.exports = nodeMailer.createTransport({
    service: `gmail`,
    auth: {
        user: `thormighty52@gmail.com`,
        pass: `ldnacmbcgmypleqh`
    }
});

// var mailOptions = {
//     from: `thormighty52@gmail.com`,
//     to: `saurabhprht@gmail.com`,
//     subject: `This is a test email`,
//     text: `This is a test body... email sent using nodemailer`
// }

// transporter.sendMail(mailOptions, (err, data) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(`Email sent seccesfully... ${data.response}`);
//     }
// })
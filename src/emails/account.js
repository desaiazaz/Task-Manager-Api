const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'adesai@mobiquityinc.com',
        subject: ' Thanks for joining',
        text: `Welcome to the app, ${name} , let me know.`
    })
}

const sendCanclelationEmail = (email ,name ) =>{

    sgMail.send({
        to: email,
        from: 'adesai@mobiquityinc.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name} , i hope to see you soon.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCanclelationEmail
}
// sgMail.send({

//     to:'azazdesai@gmail.com',
//     from: 'adesai@mobiquityinc.com',
//     subject: 'Test',
//     text : 'Hello Test'
// })





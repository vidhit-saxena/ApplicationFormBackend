// const nodemailer = require('nodemailer');


// const sendMail = async (req, res) => {
//     let testAccount = await nodemailer.createTestAccount();

//     //connect with the smtp
//     let transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false, // true for port 465, false for other ports
//         auth: {
//             user: "veronica.raynor66@ethereal.email",
//             pass: "y9GQeuTZ49TGNqArWJ",
//         },
//     });

//     let info = await transporter.sendMail({
//         from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//         to: "bar@example.com, baz@example.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body
//     });


//     console.log("Message sent: %s", info.messageId);
//     res.json(info);
// }

// module.exports = sendMail();

const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    //connect with the smtp
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
            user: "veronica.raynor66@ethereal.email",
            pass: "y9GQeuTZ49TGNqArWJ",
        },
    });

    let info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hi, user we are pleaseed to inform you that you reistration for the upcoming event has been done", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
}

module.exports = sendMail;

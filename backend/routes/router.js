import express from 'express'
import nodemailer from 'nodemailer'


const routes = express.Router();

routes.post('/login', (req,res) => {
    const { email } = req.body;
    const { name } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
            }
        });

        const mailOptions = {
            from : process.env.EMAIL,
            to : email,
            subject: "Sending Email to my Friend "+name+" 😁",
            html:`<h2>Congratulation you successfully get a mail from your dad <h1>Prabhanjan</h1></h2>`
        }

        transporter.sendMail(mailOptions,(error,info) => {
            if(error){
                console.log("Error SendMail",error.message)
            }else{
                console.log("email sent",info.response);
                res.status(200).json({info})
            }
        })

    } catch (error) {
        res.status(500).json("server error",error)
    }
})

export default routes;
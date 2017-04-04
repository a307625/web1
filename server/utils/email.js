import nodemailer from "nodemailer"
import config from "../config"
import {TokenStrategy} from "./token"

const transporter = nodemailer.createTransport({
  service: config.mail.host,
  auth: config.mail.auth
})

export function mailTransport( user, code ){
  const option = {
    from: `Web Server <${config.mail.Sender}>`,
    to: `${user}`,
    subject: `Hi, this is your authentication code`,
    text: 'Hi, this is your authentication code', 
    html:
    `<h1>Hi, this is your authentication code: ${code}</h1>`
  }

  transporter.sendMail(
    option,function(err,info){
      if(err){
        console.log('err')
        console.log(err)
      }else{
        console.log('info.response')
        console.log(info.response)
      }
    }
  )
}

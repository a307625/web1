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
    to: `${config.mail.Sender}`,
    subject: `Hi, this is ${user} authentication code`,
    text: `Hi, this is ${user} authentication code`,
    html:
    `<h1>Hi, this is ${user} authentication code: ${code}</h1>`
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

import env from '../env/env.js'

const config = {
  port: process.env.PORT || 3000,
  jwt: {
    jwtSecret: env.jwtSecret,
    jwtTokenExpiresIn: '5 days',
    emailTokenExpiresIn: '1 days'
  },
  apiversion: 'v1',
  hostUrl: 'http://localhost:3000',
  databaseURI: 'mongodb://127.0.0.1:27017/EBSweb',
  databaseOption: null,
  usrtID: null,
  mail: {
    Sender: 'a307625@hotmail.com',
    host: 'hotmail',
    port: 587,
    auth: {
      user: env.user,
      pass: env.pass
    },
    logger: true,
    debug: true
  }
}




export default config

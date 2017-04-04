import env from '../env/env.js'

const config = {
  port: process.env.PORT || 3000,
  jwt: {
    jwtSecret: env.jwt.jwtSecret,
    jwtTokenExpiresIn: env.jwt.jwtTokenExpiresIn,
    emailTokenExpiresIn: env.jwt.emailTokenExpiresIn
  },
  apiversion: 'v1',
  hostUrl: 'http://localhost:3000',
  databaseURI: 'mongodb://127.0.0.1:27017/EBSweb',
  databaseOption: null,
  usrtID: null,
  mail: {
    Sender: env.user,
    host: env.host,
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

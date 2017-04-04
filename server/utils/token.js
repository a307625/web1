import jwt from 'koa-jwt'
import Config from '../config'

export const Token = (email) => {
  return jwt.sign( { email } , Config.jwt.jwtSecret, {algorithm: 'HS512', expiresIn: Config.jwt.jwtTokenExpiresIn})
}

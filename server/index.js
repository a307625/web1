//mongod --dbpath ~/data/db/
// /c/Program\ Files/MongoDB/Server/3.2/bin/mongod --dbpath ~/data/db
import Koa from 'koa'
import convert from 'koa-convert'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import serve from 'koa-static'
import jwt from 'koa-jwt'

import './config/database'
import Config from './config'


import user from '../server/router/user'

const app = new Koa()

app.use(async(ctx, next) => {
  try {
      await next()
      const status = ctx.status || 404
      if (status === 404){
        ctx.throw(404)
      }
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = {
      status: 'error',
      errors: {
        message: err.message
      }
    }
    if (ctx.status >= 500){
      ctx.app.emit('internalError', err, ctx)
    }
  }
})

app.on('internalError', (err, ctx)=> {
  console.log(err)
  console.log('Maybe someone is hacking your server')
})

app.use(convert(bodyParser()))

app.use(serve(__dirname + '/../public',{
  index: 'index.html'
}))

app.use(convert(jwt({
  // secret: process.env.JWT_SECRET
   secret: Config.jwt.jwtSecret
}).unless({
  path: [
    // `/EBSweb/${Config.apiversion}/manager/signup`,
    // `/${Config.apiversion}/user`,
    '/favicon.ico',
    /^\/EBSweb\/v1\/manager/,
    // `/${Config.apiversion}/user/token`,
    // `/${Config.apiversion}/user/profile`,
    // `/${Config.apiversion}/user`,
  ]
})))



app.use(user.routes())
app.use(user.allowedMethods({
  throw: true
}))

app.listen(Config.port, () => {
  console.log(`listening on port ${Config.port}`)
})

// export default app
